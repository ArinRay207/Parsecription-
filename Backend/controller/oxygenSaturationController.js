import osModel from '../model/oxygenSaturation.model'

export const addOSDataController = async (req, res) => {
    try {
        const { saturation } = req.body;
        
        if (!saturation) {
            return res.status(404).send({
                success: false,
                message: "Invalid value"
            });
        }

        const os = new osModel({
            user: req.user._id,
            val0: saturation,
        });

        os.save();

        res.status(201).send({
            success: true,
            message: 'Oxygen saturation added successfully',
            os: os
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

export const getOSDataController = async (req, res) => {
    try {
        const osData = await osModel.find({user: req.user._id});
        res.status(200).send({
            success: true,
            message: "Sucessfully got all notes",
            osData,
            total_count: osData.length
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