exports.REGISTERED_Mothers = " SELECT * FROM `parent`" ;
exports.NumOfPosts="SELECT COUNT(*) as count_post FROM post WHERE user_id=?";
exports.NumOfComments="SELECT COUNT(*) as count_comments FROM post_reply WHERE parent_id=?";
exports.BlockMother="UPDATE `parent` SET `STATUS` = '1' WHERE `parent`.`user_id` = ?"
exports.UnblockMother="UPDATE `parent` SET `STATUS` = '0' WHERE `parent`.`user_id` = ?"
exports.MotherPostsList="SELECT *, COUNT(pr.reply_id) as ReplyCount FROM `post` p LEFT JOIN `post_reply` pr on p.post_id=pr.post_id WHERE p.user_id = ? GROUP BY p.post_id "
exports.MotherPostDetails="SELECT *, COUNT(pr.reply_id) as ReplyCount FROM `post` p LEFT JOIN `post_reply` pr on p.post_id=pr.post_id WHERE p.post_id = ? GROUP BY p.post_id;"
exports.MotherPostReplyCount="SELECT COUNT(*) as count_reply FROM post_reply WHERE post_id=?"
exports.PostComments="SELECT p.email,p.user_id,pr.post_id,pr.reply_id,pr.reply_content , pr.date FROM `post_reply` pr LEFT JOIN `parent` p on p.user_id=pr.parent_id WHERE pr.post_id=?;"


