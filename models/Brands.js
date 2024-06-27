const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema(
    {
        brandName: {
            type: String,
        },
    },
    { timestamps: true },
);

const _Brand = mongoose.model('Brand', brandSchema);
module.exports = _Brand;
