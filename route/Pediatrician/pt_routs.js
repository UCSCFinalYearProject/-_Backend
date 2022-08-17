const express = require('express');
const pt_route = express.Router();
const article_view_controller = require('../../controller/Pediatrician/article_view_controller');

// Thisrouts for mother
pt_route.get("/view_all_articles",article_view_controller.VIEW_articles);
pt_route.get("/view_single_articles",article_view_controller.VIEW_single_articles);
pt_route.get("/view_article_comments",article_view_controller.VIEW_article_commits);

module.exports = pt_route;
