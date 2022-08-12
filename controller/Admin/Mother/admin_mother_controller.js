const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {
    REGISTERED_Mothers,
    NumOfPosts,
    NumOfComments,
    BlockMother,
    UnblockMother,
    MotherPostsList,
    MotherPostDetails,
    MotherPostReplyCount,
    PostComments,
    Mother_Pending_Post_With_Count
} = require('../../../query/Admin/Mother/admin_mother');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');

exports.registered_mothers = (req, res, next) => {
    try {
        const { error } = MOTHER_MODEL.validate(res.body);
        if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(REGISTERED_Mothers,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    students:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.NOF_Posts = (req, res, next) => {
    try {

        conn.query(NumOfPosts,[req.body.uid], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    students:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.Mother_Posts_list = (req, res, next) => {
    try {

        conn.query(MotherPostsList,[req.body.uid], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    students:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.NOF_Comments = (req, res, next) => {
    try {
        conn.query(NumOfComments,[req.body.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    students:data
                })
            }

        })
    } catch ( err ) {

    }
}

// block mother
exports.Block_Mother = (req, res, next) => {
    try {
        conn.query(BlockMother,[req.body.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    message:"success"
                })
            }

        })
    } catch ( err ) {

    }
}
// unblock mother
exports.Unblock_Mother = (req, res, next) => {
    try {
        conn.query(UnblockMother,[req.body.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    message:"success"
                })
            }
        })
    } catch ( err ) {

    }
}
exports.Mother_Post_Details = (req, res, next) => {
    try {
        conn.query(MotherPostDetails,[req.body.pid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }
        })
    } catch ( err ) {

    }
}
exports.Mother_Post_Reply_Count = (req, res, next) => {
    try {
        conn.query(MotherPostReplyCount,[req.body.pid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }
        })
    } catch ( err ) {

    }
}
exports.Post_Comments_List = (req, res, next) => {
    try {
        conn.query(PostComments,[req.body.pid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }
        })
    } catch ( err ) {

    }
}
exports.Mother_Pending_Post_With_Count = (req, res, next) => {
    try {
        conn.query(Mother_Pending_Post_With_Count,  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }
        })
    } catch ( err ) {

    }
}
