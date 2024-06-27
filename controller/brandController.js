const _Brand = require('../models/Brands');

const getAll = async (req, res) => {
    try {
        const brands = await _Brand.find({});
        if (brands) {
            return res.status(200).json({
                message: 'get list brands successfully',
                data: brands,
            });
        }
        return res.status(200).json({
            message: 'get list brands fail',
            data: brands,
        });
    } catch (error) {
        console.log(error);
    }
};
const addBrand = async (req, res) => {
    try {
        const { brandName } = req.body;
        const brand = await _Brand.create({ brandName });
        if (brand) {
            return res.status(200).json({
                message: 'add brand successfully',
                data: brand,
            });
        }
        return res.status(200).json({
            message: 'add brand fail',
            data: brands,
        });
    } catch (error) {
        console.log(error);
    }
};
const updateBrand = async (req, res) => {
    try {
        const { brandId, brandName } = req.body;
        const brand = await _Brand.findByIdAndUpdate(brandId, { brandName }, { new: true }).exec();
        if (brand) {
            return res.status(200).json({
                message: 'update brand successfully',
                data: brand,
            });
        }
        return res.status(200).json({
            message: 'update brand fail',
            data: brands,
        });
    } catch (error) {
        console.log(error);
    }
};
const deleteBrand = async (req, res) => {
    try {
        const { brandId } = req.query;
        const brand = await _Brand.findByIdAndDelete(brandId);
        if (brand) {
            return res.status(200).json({
                message: 'delete brand successfully',
                data: brand,
            });
        }
        return res.status(200).json({
            message: 'delete brand fail',
            data: '',
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAll,
    addBrand,
    updateBrand,
    deleteBrand,
};
