const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        rating: { type: Number, min: 1, max: 3, require: true },
        content: { type: String, require: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', require: true },
    },
    { timestamps: true },
);

const _Comment = mongoose.model('Comment', commentSchema);
module.exports = _Comment;
