import Comment from '../models/Comment.js';
import addCommentSchema from '../schemas/add-comment-schema.js'

export const addComment = async (req, res) => {
    const { body } = req;

    const validator = await addCommentSchema(body);
    const { value: data, error } = validator.validate(body);
    if (error) {
        return res.status(401).json(error.details);
    }    
    const { content, feedbackId, userId } = data;

    const lastComment = await Comment.find().sort({ _id: -1 }).limit(1);
    const id = lastComment.length > 0 ? lastComment[0].id + 1 : 1;
    const newComment = {
        content,
        feedbackId,
        userId,
        id,
    }

    await Comment.create({ ...newComment });

    return res.status(201).json({ ...newComment });
}