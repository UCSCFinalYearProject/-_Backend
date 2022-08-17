const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
const {
    VIEW_articles,
    VIEW_single_articles,
    VIEW_articles_comments,
    VIEW_followers,
    Trending_article
} = require('../../query/Pediatrician/view_article');
const { PEDIATRICIAN_MODEL } = require('../../model/Pediatrician/view_article');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');

exports.VIEW_articles = (req, res, next) => {
 //   const x= req.getParameters(doctor_id)
    const y= req.query['doctor_id'];
    console.log(y)
    try {
        conn.query(VIEW_articles,y,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    article:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.VIEW_single_articles = (req, res, next) => {
    //   const x= req.getParameters(doctor_id)
    // const y= req.query['doctor_id'];
    // console.log(req.params.article_id)
    try {
        conn.query(VIEW_single_articles,[req.body.article_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    article:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.VIEW_article_commits = (req, res, next) => {
    //   const x= req.getParameters(doctor_id)
    // const y= req.query['doctor_id'];
    console.log(req.params.article_id)
    try {
        conn.query(VIEW_articles_comments,[req.body.article_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    article:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.VIEW_followers = (req, res, next) => {
    //   const x= req.getParameters(doctor_id)
    // const y= req.query['doctor_id'];
    // console.log(req.params.article_id)
    try {
        conn.query(VIEW_followers,[req.body.doctor_id],(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    followers:data
                })
            }

        })
    } catch ( err ) {

    }
}

exports.Trending_article = (req, res, next) => {
    //   const x= req.getParameters(doctor_id)
    // const y= req.query['doctor_id'];
    // console.log(req.params.article_id)
    try {
        conn.query(Trending_article,(err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    followers:data
                })
            }

        })
    } catch ( err ) {

    }
}