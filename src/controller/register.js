const instituteModel = require("../models/instituteModel");

module.exports = {
    register: async function (req, resp) {
        try {
            const payload = req.body;
            const { instituteType, board, medium, classes, standard, subjects } = req.body

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
            } else if (subjects.length <= 0) {
                return resp.status(400).json({ message: "please select subjects first" })
            }
            const saveData = await instituteModel.create(payload);
            if (saveData) {
                return resp.status(200).send({
                    status: true,
                    result: saveData
                })
            }
        } catch (error) {
            return resp.status(500).json({ message: "server error", error })
        }

    }
}