const bcryptjs = require('bcryptjs');
const _Member = require('../models/Member');

const createUser = async (req, res) => {
    try {
        const { membername, password, name, YOB } = req.body;
        const salt = await bcryptjs.genSalt(10);
        const hashPass = await bcryptjs.hash(password, salt);
        const member = await _Member.find({ membername });
        if (member.length > 0) {
            return res.status(200).json({
                message: 'MemberName already exist',
                data: '',
            });
        }
        const user = await _Member.create({
            membername,
            password: hashPass,
            name,
            YOB,
        });
        if (user) {
            return res.status(200).json({
                message: 'register successfully',
                data: user,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await _Member.findOne({ membername: username });
        if (user) {
            const check = await bcryptjs.compare(password, user.password);
            if (check == true) {
                return res.status(200).json({
                    status: 'success',
                    message: 'login successfully !',
                    data: user,
                });
            }
        }
        return res.status(200).json({
            status: 'error',
            message: 'membername or password was wrong',
            data: '',
        });
    } catch (error) {
        console.log(error);
    }
};
const changeInfoUser = async (req, res) => {
    try {
        const { userid, name, YOB } = req.body;
        const user = await _Member.findByIdAndUpdate(userid, { name, YOB }, { new: true }).exec();
        if (user) {
            return res.status(200).json({
                message: 'update info success',
                data: user,
            });
        }
        return res.status(200).json({
            message: 'update info fail',
            data: '',
        });
    } catch (error) {
        console.log(error);
    }
};
const changePassUser = async (req, res) => {
    try {
        const { userid, oldPass, newPass } = req.body;
        const user = await _Member.findOne({ _id: userid });
        if (user) {
            const check = await bcryptjs.compare(oldPass, user.password);
            if (check == true) {
                const salt = await bcryptjs.genSalt(10);
                const hashPass = await bcryptjs.hash(newPass, salt);

                const userUpdate = await _Member
                    .findByIdAndUpdate(userid, { password: hashPass }, { new: true })
                    .exec();
                return res.status(200).json({
                    message: 'change password success',
                    data: userUpdate,
                });
            }
            return res.status(200).json({
                message: 'old password was wrong',
                data: userUpdate,
            });
        }

        return res.status(200).json({
            message: 'change password fail',
            data: '',
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createUser,
    loginUser,
    changeInfoUser,
    changePassUser,
};
