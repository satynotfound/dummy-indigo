const { response } = require("express");
const list = require("../../db/models/list")

const handlecreateList = async (data) => {
    const newList = await list.create(data);
    return {
        success: true,
        data: newList,
        message: "List created successfully"
    }
}

const dogetLists = async (visitId) => {
    const response = await list.findOne({
        where: { visitId: visitId },
        attributes: ['siteContact', 'contactNumber', 'email', 'region', 'cluster']
    });

    if (!list) {
        return {
            success: false,
            message: 'No record found with the provided visitId'
        };
    }

    return {
        success: true,
        data: response,
        message: "Data found successfully"
    }
}


const doUpdateStatus = async (id, data) => {
    const hasDateField = data.hasOwnProperty('date');

    const updatedStatus = hasDateField ? 'Follow up Needed' : 'Visited';

    const updatedRecord = await list.update(
      { status: updatedStatus }, // New status value based on condition
      { where: { _id: id } } // Condition to find the record by id
    );

    if (updatedRecord[0] === 0) {
      return {
        success: false,
        message: 'No record found with the provided id'
      };
    }

    return {
      success: true,
      message: `Status updated to "${updatedStatus}" successfully`
    };
}


module.exports = {
    handlecreateList,
    dogetLists,
    doUpdateStatus
};
