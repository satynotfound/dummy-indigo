const { handlecreateList, dogetLists ,doUpdateStatus} = require('./list.service');


const createList = async (req, res) => {
    try {
        const data = req.body;
        // console.log(req);
        const response = await handlecreateList(data);
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getLists = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await dogetLists(id);
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateStatus = async(req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        // console.log(data);
        const response = await doUpdateStatus(id,data);
        res.status(200).json({response});

    }
    catch (err) {
        res.status(500).json({message:err.message});
    }
}

module.exports = { createList, getLists ,updateStatus };