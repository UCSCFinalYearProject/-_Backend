const express = require('express');
const pt_route = express.Router();
const article_view_controller = require('../../controller/Pediatrician/article_view_controller');

pt_route.get("/view_all_articles",article_view_controller.VIEW_articles);
pt_route.get("/view_single_articles",article_view_controller.VIEW_single_articles);
pt_route.get("/view_article_comments",article_view_controller.VIEW_article_commits);
pt_route.get("/view_followers",article_view_controller.VIEW_followers);
pt_route.get("/trending_article",article_view_controller.Trending_article);
pt_route.get("/no_of_articles",article_view_controller.no_of_articles);
pt_route.get("/no_of_article_comments",article_view_controller.no_of_article_comments);
pt_route.get("/get_today_comments",article_view_controller.today_article_comments);


module.exports = pt_route;
