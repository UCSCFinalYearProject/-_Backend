exports.REGISTERED_Mothers = " SELECT pa.user_id,pa.DP,pa.first_name,pa.last_name,pa.email,pa.STATUS,pa.login_status,COUNT(po.post_id) as postCount FROM `parent` pa LEFT JOIN `post` po on pa.user_id= po.user_id GROUP by pa.user_id;" ;
exports.NumOfPosts="SELECT COUNT(*) as count_post FROM post WHERE user_id=?";
exports.target_motherDetails="SELECT p.first_name,p.DP,p.STATUS,p.Reg_Date,p.email,p.Block_reason FROM `parent` p WHERE p.user_id=?"
exports.NumOfComments="SELECT COUNT(*) as count_comments FROM post_reply WHERE parent_id=?";
exports.BlockMother="UPDATE parent SET Block_reason = ?,STATUS=1 WHERE `parent`.`user_id` = ?;"
exports.UnblockMother="UPDATE `parent` SET `STATUS` = '0' WHERE `parent`.`user_id` = ?"
exports.MotherPostsList="SELECT p.title,p.post_content,p.Date,p.status,p.no_of_likes,p.image as image,p.post_id as PostId,p.category, COUNT(pr.reply_id) as ReplyCount,pc.category, pc.img FROM `post` p LEFT JOIN `post_reply` pr on p.post_id=pr.post_id LEFT JOIN post_category pc ON p.category=pc.id WHERE p.user_id = ? GROUP BY p.post_id"
// exports.MotherPostDetails="SELECT *, COUNT(pr.reply_id) as ReplyCount FROM `post` p LEFT JOIN `post_reply` pr on p.post_id=pr.post_id WHERE p.post_id = ? GROUP BY p.post_id;"

exports.HidePost="UPDATE `post` SET `status` = '1' WHERE `post`.`post_id` = ?;"
exports.ShowHidePost="UPDATE `post` SET `status` = '0' WHERE `post`.`post_id` = ?;"
exports.acceptPost="UPDATE `post` SET `status` = '0' WHERE `post`.`post_id` = ?;"
exports.rejectPost="DELETE FROM post WHERE `post`.`post_id` = ?"




exports.MotherPostDetails="SELECT p.title,p.post_content,p.Date,p.status,p.no_of_likes,p.post_id as PostId,p.category, COUNT(pr.reply_id) as ReplyCount,pc.category, pc.img FROM `post` p LEFT JOIN `post_reply` pr on p.post_id=pr.post_id LEFT JOIN post_category pc ON p.category=pc.id WHERE p.post_id = ? GROUP BY p.post_id;"
exports.SinglePostDetails="SELECT *,pc.category as Category FROM `post` po LEFT JOIN post_category pc on po.category=pc.id WHERE po.post_id=?;"

exports.MotherPostReplyCount="SELECT COUNT(*) as count_reply FROM post_reply WHERE post_id=?"
exports.delete_comments="DELETE FROM post_reply WHERE `post_reply`.`reply_id` = ?"
exports.warning_for_comments="UPDATE `parent` SET `warning_messages` = ? WHERE `parent`.`user_id` = ?;"

exports.PostComments="SELECT p.email,p.user_id,pr.post_id,pr.reply_id,pr.reply_content , pr.date FROM `post_reply` pr LEFT JOIN `parent` p on p.user_id=pr.parent_id WHERE pr.post_id=?;"
// exports.Mother_Pending_Post_With_Count="SELECT *, COUNT(po.post_id) as post_count FROM pending_post pe LEFT JOIN `post` po on po.user_id = pe.user_id WHERE po.status=2 GROUP BY po.user_id;"
exports.Mother_Pending_Post_With_Count="SELECT pa.user_id as id,po.post_id as pid,pa.first_name as name, V.count as Posts,po.title as Title,po.Date as date FROM `post` po LEFT JOIN (SELECT pa.user_id,COUNT(po.post_id) as count FROM `parent` pa LEFT JOIN post po on po.user_id=pa.user_id GROUP BY pa.user_id) as V on V.user_id=po.user_id LEFT JOIN parent pa on po.user_id=pa.user_id WHERE po.status=2;"
exports.Check_single_mother_Posts_list="SELECT p1.post_id as id, p1.title as Title, p1.Date as date,p1.no_of_likes as likes,rpc.count as comments FROM post p1 LEFT JOIN (SELECT po.post_id,COUNT(pr.reply_id) as count FROM `post` po LEFT JOIN post_reply pr on po.post_id =pr.post_id GROUP BY po.post_id) as rpc on p1.post_id=rpc.post_id WHERE p1.user_id=?;"





