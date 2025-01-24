### Route guide 
## Main route: http://localhost:3000/select

## Nested routes
-- Select Institute: ```GET``` **/institute** No Query param require

-- Select board: ```GET``` **/board** require queryparams: `instituteType`

-- Select medium & class: ```GET``` **/medium** require queryparams: `instituteType, board`

-- Select standard: ```GET``` **/class** require queryparams: `instituteType, board, medium, classes`

-- Select subjects: ```GET``` **/subject** No Query param require `instituteType, board, medium, classes, standard`


# Other Routes: http://localhost:3000/register
-- Save all data: ```post```
data require in Body
`instituteType`,
`board`,
`medium`,
`classes`,
`standard`,
`subjects`


### Database url

- ***mongodb+srv://harshsoni:harshsoni@stackdottask.92r4j.mongodb.net/?retryWrites=true&w=majority&appName=stackdottask***