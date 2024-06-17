const Joi = require('joi');  // Assuming you only need Joi from 'joi'


const statusEnumValues = ['Requested', 'Visited', 'Follow up Needed', 'Revisited', 'Converted', 'Completed & Archived', 'Lost & Archive'];
    const validateStatusEnum = (value, helpers) => {
        if (!statusEnumValues.includes(value)) {
            return helpers.error('any.invalid');
        }
        return value;
    };

    const listSchema = Joi.object({
        sr_no: Joi.number().required(),
        visitId: Joi.number().required(),
        depot: Joi.string().required(),
        region: Joi.string().required(),
        cluster: Joi.string().required(),
        staffName: Joi.string().required(),
        reqDate: Joi.date().required(),
        siteContact: Joi.string().required(),
        contactNumber: Joi.string().required().length(10),
        status: Joi.string().custom(validateStatusEnum).required(),
        samplingDone: Joi.string().required().error(new Error("sampling done must be Yes or No")),
        siteType: Joi.string().required(),
        email: Joi.string().required(),
    });


module.exports = listSchema;
