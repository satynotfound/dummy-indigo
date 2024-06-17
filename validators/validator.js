const listSchema = require("../src/Lists/list.validator");

function validateListSchema(req, res, next) {
    
    const { error } = listSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    next();
}

module.exports = validateListSchema;