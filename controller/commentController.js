const _Watches = require('../models/Watches');

const createComment = async (req, res) => {
    try {
        const { watchId, userId, rating, content } = req.body;
        const watch = await _Watches.findByIdAndUpdate(watchId, {
            $push: {
                comments: {
                    rating,
                    content,
                    author: userId,
                },
            },
        });

        if (watch) {
            return res.status(200).json({
                message: 'create comment success',
                data: '',
            });
        }
        return res.status(200).json({
            message: 'create comment fail',
            data: '',
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createComment,
};
