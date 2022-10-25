const express = require('express');
const pt_route = express.Router();
const article_view_controller = require('../../controller/Pediatrician/article_view_controller');

pt_route.get("/view_all_articles",article_view_controller.VIEW_all_articles);
pt_route.get("/view_single_articles",article_view_controller.VIEW_single_articles);
pt_route.get("/view_article_comments",article_view_controller.VIEW_article_commits);
pt_route.get("/view_followers",article_view_controller.VIEW_followers);
pt_route.get("/trending_article",article_view_controller.Trending_article);
pt_route.get("/no_of_articles",article_view_controller.no_of_articles);
pt_route.get("/no_of_article_comments",article_view_controller.no_of_article_comments);
pt_route.post("/block_article_comments",article_view_controller.block_article_comments);
pt_route.post("/unblock_article_comments",article_view_controller.unblock_article_comments);
pt_route.post("/imageupload",article_view_controller.imageupload);
pt_route.post("/addQulifications",article_view_controller.addQulifications);
pt_route.post("/editprofile",article_view_controller.editprofile);
pt_route.post("/Insert_Pediatrician_Articles",article_view_controller.Insert_Pediatrician_Articles);
pt_route.get("/get_today_comments",article_view_controller.today_article_comments);
pt_route.get("/get_article_categories",article_view_controller.article_categories);
pt_route.get("/req_chart_pt",article_view_controller.req_chart_pt);
// pt_route.get("/view_all_articles",article_view_controller.VIEW_all_articles);


module.exports = pt_route;
