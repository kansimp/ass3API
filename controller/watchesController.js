const _Brand = require('../models/Brands');
const _Watches = require('../models/Watches');

const getAll = async (req, res) => {
    try {
        const listWatches = await _Watches.find({}).populate({ path: 'brand', select: 'brandName' });
        if (listWatches) {
            return res.status(200).json({
                message: 'get list watches success',
                data: listWatches,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
const getWatchDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const watch = await _Watches.findOne({ _id: id }).populate({
            path: 'comments',
            populate: {
                path: 'author',
            },
        });
        if (watch) {
            return res.status(200).json({
                message: 'success',
                data: watch,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
const searchWatchByName = async (req, res) => {
    try {
        const { name } = req.body;
        const listWatches = await _Watches
            .find({ watchName: { $regex: name, $options: 'i' } })
            .populate({ path: 'brand', select: 'brandName' });

        if (listWatches) {
            return res.status(200).json({
                message: 'search watch successfully',
                data: listWatches,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
const filterWatchByBrandName = async (req, res) => {
    try {
        const { brandName } = req.query;
        const listWatch = await _Watches.find({}).populate({ path: 'brand', select: 'brandName' });

        if (listWatch) {
            const listWatches = listWatch.filter((watch) => watch.brand.brandName === brandName);
            return res.status(200).json({
                message: 'get list watches by brand name successfully',
                data: listWatches,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAll,
    getWatchDetail,
    searchWatchByName,
    filterWatchByBrandName,
};
