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
    Mother_Pending_Post_With_Count,
    target_motherDetails, ShowHidePost, HidePost, delete_comments
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
exports.target_motherDetails = (req, res, next) => {
    try {

        conn.query(target_motherDetails,[req.query.uid], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    Data:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.Mother_Posts_list = (req, res, next) => {
    try {

        conn.query(MotherPostsList,[req.query.uid], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    Data:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.NOF_Comments = (req, res, next) => {
    // console.log("#################### req")
    // console.log(req.body.uid)
    // console.log(req.query.uid)
    try {
        conn.query(NumOfComments,[req.query.uid],  (err,data,feild)=>{

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
// Hide Post
exports.HidePost = (req, res, next) => {
    try {
        conn.query(HidePost,[req.query.pid],  (err,data,feild)=>{

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
// UnHide Post
exports.ShowHidePost = (req, res, next) => {
    try {
        conn.query(ShowHidePost,[req.query.pid],  (err,data,feild)=>{

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
// block mother
exports.Block_Mother = (req, res, next) => {
    try {
        // console.log("id"+req.body.uid)
        // console.log("mg"+req.body.mg)
        conn.query(BlockMother,[req.query.mg,req.query.uid],  (err,data,feild)=>{

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
        // console.log("uid ---- "+req.query.uid)
        conn.query(UnblockMother,[req.query.uid],  (err,data,feild)=>{

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
        conn.query(MotherPostDetails,[req.query.pid],  (err,data,feild)=>{

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
        conn.query(PostComments,[req.query.pid],  (err,data,feild)=>{

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
exports.delete_comments = (req, res, next) => {
    try {
        conn.query(delete_comments,[req.query.cid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    message:"Success"
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
