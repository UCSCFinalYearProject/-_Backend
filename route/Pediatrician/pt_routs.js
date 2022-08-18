const express = require('express');
const pt_route = express.Router();
const article_view_controller = require('../../controller/Pediatrician/article_view_controller');

// Thisrouts for mother
pt_route.get("/view_all_articles",article_view_controller.VIEW_articles);
pt_route.get("/view_single_articles",article_view_controller.VIEW_single_articles);
pt_route.get("/view_article_comments",article_view_controller.VIEW_article_commits);
pt_route.get("/view_followers",article_view_controller.VIEW_followers);
pt_route.get("/trending_article",article_view_controller.Trending_article);
pt_route.get("/no_of_articles",article_view_controller.no_of_articles);


module.exports = pt_route;
