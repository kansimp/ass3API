const mongoose = require('mongoose');
const _Comment = require('./Comments');
const _Brand = require('./Brands');

const watchSchema = new mongoose.Schema(
    {
        watchName: { type: String, require: true },
        image: { type: String, require: true },
        price: { type: Number, require: true },
        Automatic: { type: Boolean, default: false },
        watchDescription: { type: String, require: true },
        comments: [_Comment.schema],
        brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', require: true },
    },
    { timestamps: true },
);

const _Watches = mongoose.model('Watches', watchSchema);
module.exports = _Watches;

// const watches = await _Watches.findOne({}).populate({
//     path: 'comments',
//     populate: {
//         path: 'author',
//     },
// });
