import prModel from '../model/pulseRate.model.js'

export const addPRDataController = async (req, res) => {
    try {
        const { pulseRate } = req.body;
        
        if (!pulseRate) {
            return res.status(404).send({
                success: false,
                message: "Invalid value"
            });
        }

        const pr = new prModel({
            user: req.user._id,
            val0: saturation,
        });

        pr.save();

        res.status(201).send({
            success: true,
            message: 'Pulse Rate added successfully',
            pr: pr
        });


    } catch(err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in login",
            err
        })
    }
}

export const getPRDataController = async (req, res) => {
    try {
        const prData = await prModel.find({user: req.user._id});
        res.status(200).send({
            success: true,
            message: "Sucessfully got all notes",
            prData,
            total_count: prData.length
        })
    } catch(error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting notes",
            error
        })
    }
}