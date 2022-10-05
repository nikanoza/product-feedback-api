import express from 'express'
import { getAllFeedbacks } from '../controllers/feedback-controller.js'

const feedbackRouter = express.Router()

feedbackRouter.get('/feedbacks', getAllFeedbacks)

export default feedbackRouter

