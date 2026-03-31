import express from 'express'
import { chatWithBot, clearChat } from '../controllers/chatbotController.js'

const chatbotRouter = express.Router()

chatbotRouter.post('/message', chatWithBot)
chatbotRouter.post('/clear', clearChat)

export default chatbotRouter
