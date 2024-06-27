const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
    {
        membername: { type: String, require: true },
        password: { type: String, require: true },
        isAdmin: { type: Boolean, default: false },
        name: { type: String, require: true },
        YOB: { type: Number, require: true },
    },
    { timestamps: true },
);

const _Member = mongoose.model('Member', memberSchema);
module.exports = _Member;
