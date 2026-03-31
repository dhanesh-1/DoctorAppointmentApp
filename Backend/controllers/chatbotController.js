import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const SYSTEM_PROMPT = `You are "Prescripto Assistant", a helpful and friendly AI chatbot for the Prescripto doctor appointment booking platform.

YOUR ROLE:
- Help users with medical appointment booking, doctor information, health-related queries, and navigating the platform.
- Answer general health and wellness questions.
- Guide users on how to book, cancel, or manage appointments.
- Provide information about medical specialties and when to see which type of doctor.

STRICT RULES:
1. ONLY respond to queries related to: healthcare, medical topics, doctor appointments, the Prescripto platform, wellness, symptoms, medical specialties, and health advice.
2. If a user asks something completely unrelated (e.g., coding, politics, sports scores, recipes, entertainment, etc.), politely decline and redirect them. Say something like: "I'm Prescripto Assistant, and I'm here to help with health and appointment-related questions. Could you ask me something related to that?"
3. NEVER provide specific medical diagnoses. Always recommend consulting a doctor for serious concerns.
4. Keep responses concise, warm, and professional (2-4 sentences max unless more detail is needed).
5. If asked about booking, tell them they can browse doctors on the "All Doctors" page and book from a doctor's profile.
6. If asked about their appointments, direct them to the "My Appointments" section.

PLATFORM INFO:
- Platform name: Prescripto
- Users can browse doctors by specialty
- Available specialties: General Physician, Gynecologist, Dermatologist, Pediatrician, Neurologist, Gastroenterologist
- Users can book appointments by selecting a doctor, choosing a date and time slot
- Users can view and cancel appointments from "My Appointments"
- Users need to create an account or login to book appointments`

// Store conversation history per session (in-memory for simplicity)
const conversationHistory = new Map()

const chatWithBot = async (req, res) => {
  try {
    const { message, sessionId } = req.body

    if (!message || !message.trim()) {
      return res.json({ success: false, message: 'Please enter a message' })
    }

    // Get or create conversation history for this session
    if (!conversationHistory.has(sessionId)) {
      conversationHistory.set(sessionId, [])
    }

    const history = conversationHistory.get(sessionId)

    // Build the messages array with history
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      }
    })

    const chat = model.startChat({
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
    })

    const result = await chat.sendMessage(message)
    const response = result.response.text()

    // Save to history (keep last 20 messages to prevent memory issues)
    history.push({ role: 'user', text: message })
    history.push({ role: 'model', text: response })
    if (history.length > 20) {
      history.splice(0, 2) // Remove oldest pair
    }

    res.json({ success: true, reply: response })

  } catch (error) {
    console.log('Chatbot error:', error.message || error)

    // Handle specific error types
    const errorMsg = error.message || ''
    const errorStatus = error.status || 0
    if (errorStatus === 429 || errorMsg.includes('429') || errorMsg.includes('quota')) {
      return res.json({ success: false, message: '⚠️ The AI assistant is temporarily unavailable due to high usage. Please try again in a minute.' })
    }
    if (errorMsg.includes('API_KEY') || errorMsg.includes('API key')) {
      return res.json({ success: false, message: '⚠️ The AI assistant is not configured. Please contact support.' })
    }

    res.json({ success: false, message: 'Sorry, I encountered an error. Please try again.' })
  }
}

// Clear session history
const clearChat = async (req, res) => {
  try {
    const { sessionId } = req.body
    if (sessionId && conversationHistory.has(sessionId)) {
      conversationHistory.delete(sessionId)
    }
    res.json({ success: true, message: 'Chat history cleared' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export { chatWithBot, clearChat }
