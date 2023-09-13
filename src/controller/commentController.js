import Comment from "../model/Comment";
import News from "../model/News";
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/successResponse";

class CommentController {
  static async postComment(req, res) {
    const blogIdParams = req.params.id;
    req.body.user = req.user._id;
    console.log("umu user uteyr comment ni .....", req.user);
    const comment = await Comment.create(req.body);
    const news = await News.findByIdAndUpdate(
      { _id: blogIdParams },
      {
        $push: {
          comment: comment,
        },
      },
      { new: true }
    );
    if (!news) {
      return errorResponse(res, 401, `no blog found`);
    } else {
      return successResponse(res, 200, `comment successfuly created`, news);
    }
  }
  static async getAllComment(req, res) {
    const comments = await Comment.find();
    return successResponse(res, 200, `success ${comments.length}`, comments);
  }
  static async deleteOneComment(req, res) {
    const id = req.params.id;
    const deleteComment = await Comment.findByIdAndDelete({ _id: id });
    if (!deleteComment) {
      return errorResponse(res, 401, "comment not found");
    } else {
      return successResponse(res, 200, `comment successfuly deleted`);
    }
  }
}
export default CommentController;
