const instituteTypeModel = require('../../models/instituteTypeModel')
const boardModel = require('../../models/boardModel');
const mediumModel = require('../../models/mediumModel');
const classModel = require('../../models/classModel');
const subjectModel = require('../../models/subjectModel');
const base_url = 'http://localhost:3000/select'
module.exports = {

    instituteSelect: async function (req, resp) {
        try {
            const institutetype = await instituteTypeModel.find();
            // console.log("institutetype", institutetype);
            return resp.status(200).send({ status: true, result: institutetype, nexturl: `${base_url}/board?instituteType=[institute name in string]` })
        } catch (error) {
            return resp.status(500).json({ message: "server error", error })
        }

    },
    boardSelect: async function (req, resp) {
        try {
            const { instituteType } = req.query;

            if (!instituteType) {
                return resp.status(400).json({ message: "please select institute first" })

            }
            const boardSelect = await boardModel.aggregate([
                {
                    $match: {
                        allowed_institutetype: {
                            $in: [instituteType]
                        }
                    }
                }
            ])

            if (boardSelect.length > 0) {
                return resp.status(200).send({
                    status: true,
                    result: boardSelect,
                    nexturl: `${base_url}/medium?instituteType=${instituteType}&board=[board name name in string]`
                })
            }

        } catch (error) {
            return resp.status(500).json({ message: "server error", error })
        }
    },
    mediumSelect: async function (req, resp) {
        try {
            const { instituteType, board } = req.query

            if (!instituteType) {
                return resp.status(400).json({ message: "please select institute first" })
            } else if (!board) {
                return resp.status(400).json({ message: "please select board first" })
            }

            const mediumSelect = await mediumModel.aggregate([
                {
                    $lookup: {
                        from: 'classes',
                        localField: 'name',
                        foreignField: 'allow_medium',
                        as: "classes"
                    }
                },
            ])

            if (mediumSelect.length > 0) {
                return resp.status(200).send({
                    status: true,
                    result: mediumSelect,
                    nexturl: `${base_url}/medium?instituteType=${instituteType}&board=${board}&medium=[select medium and class]&classes=[select medium and class]`
                })
            }

        } catch (error) {
            console.log(error);

            return resp.status(500).json({ message: "server error", error })
        }
    },

    classSelect: async function (req, resp) {
        try {
            const { instituteType, board, medium, classes } = req.query;

            if (!instituteType) {
                return resp.status(400).json({ message: "please select institute first" })
            } else if (!board) {
                return resp.status(400).json({ message: "please select board first" })
            } else if (!medium) {
                return resp.status(400).json({ message: "please select medium first" })

            } else if (!classes) {
                return resp.status(400).json({ message: "please select class first" })

            }
            const classSelect = await classModel.aggregate([
                {
                    $match: {
                        name: classes
                    }
                }
            ])

            if (classSelect.length > 0) {
                return resp.status(200).send({
                    status: true,
                    result: classSelect,
                    nexturl: `${base_url}/subject?instituteType=${instituteType}&board=${board}&medium=${medium}&classes=${classes}&standard=[select standard from here]`
                })
            }

        } catch (error) {
            return resp.status(500).json({ message: "server error", error })
        }
    },

    SubjectSelect: async function (req, resp) {
        try {
            const { instituteType, board, medium, classes, standard } = req.query;

            if (!instituteType) {
                return resp.status(400).json({ message: "please select institute first" })
            } else if (!board) {
                return resp.status(400).json({ message: "please select board first" })
            } else if (!medium) {
                return resp.status(400).json({ message: "please select medium first" })

            } else if (!classes) {
                return resp.status(400).json({ message: "please select class first" })
            } else if (!standard) {
                return resp.status(400).json({ message: "please select standard first" })

            }
            const subjectSelect = await subjectModel.aggregate([
                {
                    $match: {
                        name: classes
                    }
                }
            ])

            if (subjectSelect.length > 0) {
                return resp.status(200).send({
                    status: true,
                    result: subjectSelect,
                    nexturl: `${base_url}/savedata?instituteType=${instituteType}&board=${board}&medium=${medium}&classes=${classes}&standard=${standard}&subject=[array of subjects]`
                })
            }

        } catch (error) {
            return resp.status(500).json({ message: "server error", error })
        }
    },
    savedata: async function (req, resp) {
        try {
            const { instituteType, board, medium, classes, standard, subjects } = req.query;
            if (!instituteType) {
                return resp.status(400).json({ message: "please select institute first" })
            } else if (!board) {
                return resp.status(400).json({ message: "please select board first" })
            } else if (!medium) {
                return resp.status(400).json({ message: "please select medium first" })
            } else if (!classes) {
                return resp.status(400).json({ message: "please select class first" })
            } else if (!standard) {
                return resp.status(400).json({ message: "please select standard first" })
            } else if (!subjects) {
                return resp.status(400).json({ message: "please select subjects first" })
            }


            return resp.status(200).send({
                status: true,
                message:"all thing done now add post method and save data in db",
                body: {
                    instituteType, board, medium, classes, standard, subjects
                },
                nexturl: `${base_url}/register use post method`
            })


        } catch (error) {
            return resp.status(500).json({ message: "server error", error })
        }
    }
}