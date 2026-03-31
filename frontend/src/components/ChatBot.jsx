import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const ChatBot = () => {
  const { backendUrl } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! 👋 I'm Prescripto Assistant. How can I help you with your health or appointment needs today?" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const [sessionId] = useState(() => 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9))

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMessage }])
    setIsLoading(true)

    try {
      const { data } = await axios.post(backendUrl + '/api/chatbot/message', {
        message: userMessage,
        sessionId
      })

      if (data.success) {
        setMessages(prev => [...prev, { role: 'bot', text: data.reply }])
      } else {
        setMessages(prev => [...prev, { role: 'bot', text: data.message || 'Sorry, something went wrong. Please try again.' }])
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I\'m having trouble connecting. Please try again later.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = async () => {
    try {
      await axios.post(backendUrl + '/api/chatbot/clear', { sessionId })
    } catch (e) { /* ignore */ }
    setMessages([
      { role: 'bot', text: "Hi! 👋 I'm Prescripto Assistant. How can I help you with your health or appointment needs today?" }
    ])
  }

  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        id="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #0D6C6A 0%, #14B8A6 100%)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(13, 108, 106, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'rotate(180deg) scale(0.9)' : 'scale(1)',
          zIndex: 1000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = isOpen ? 'rotate(180deg) scale(0.95)' : 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(13, 108, 106, 0.5)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isOpen ? 'rotate(180deg) scale(0.9)' : 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(13, 108, 106, 0.35)'
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
            <circle cx="8" cy="10" r="1" />
            <circle cx="12" cy="10" r="1" />
            <circle cx="16" cy="10" r="1" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        id="chatbot-window"
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '24px',
          width: '380px',
          maxWidth: 'calc(100vw - 48px)',
          height: '520px',
          maxHeight: 'calc(100vh - 140px)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(13, 108, 106, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 999,
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: '#ffffff',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0D6C6A 0%, #14B8A6 100%)',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
              </svg>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '15px', letterSpacing: '0.3px' }}>
                Prescripto Assistant
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  display: 'inline-block',
                }} />
                Online
              </div>
            </div>
          </div>
          <button
            onClick={clearChat}
            title="Clear chat"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          background: '#f0faf9',
          scrollbarWidth: 'thin',
          scrollbarColor: '#cbd5e1 transparent',
        }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                animation: 'chatFadeIn 0.3s ease-out',
              }}
            >
              <div style={{
                maxWidth: '80%',
                padding: '10px 14px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: msg.role === 'user'
                  ? 'linear-gradient(135deg, #0D6C6A 0%, #14B8A6 100%)'
                  : '#ffffff',
                color: msg.role === 'user' ? '#ffffff' : '#374151',
                fontSize: '13.5px',
                lineHeight: '1.5',
                boxShadow: msg.role === 'user'
                  ? '0 2px 8px rgba(13, 108, 106, 0.25)'
                  : '0 1px 4px rgba(0, 0, 0, 0.06)',
                wordBreak: 'break-word',
              }}>
                {formatText(msg.text)}
              </div>
            </div>
          ))}

          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                background: '#ffffff',
                padding: '12px 18px',
                borderRadius: '16px 16px 16px 4px',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}>
                <span style={{ ...dotStyle, animationDelay: '0s' }} />
                <span style={{ ...dotStyle, animationDelay: '0.15s' }} />
                <span style={{ ...dotStyle, animationDelay: '0.3s' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={sendMessage}
          style={{
            padding: '12px 16px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            background: '#ffffff',
            flexShrink: 0,
          }}
        >
          <input
            ref={inputRef}
            id="chatbot-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about health or appointments..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '12px',
              border: '1.5px solid #e5e7eb',
              outline: 'none',
              fontSize: '13.5px',
              fontFamily: 'Outfit, sans-serif',
              background: '#f9fafb',
              transition: 'border-color 0.2s, box-shadow 0.2s',
              color: '#374151',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#0D6C6A'
              e.target.style.boxShadow = '0 0 0 3px rgba(13, 108, 106, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb'
              e.target.style.boxShadow = 'none'
            }}
          />
          <button
            type="submit"
            id="chatbot-send"
            disabled={isLoading || !input.trim()}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: input.trim() && !isLoading
                ? 'linear-gradient(135deg, #0D6C6A 0%, #14B8A6 100%)'
                : '#e5e7eb',
              border: 'none',
              cursor: input.trim() && !isLoading ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={input.trim() && !isLoading ? 'white' : '#9ca3af'}>
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        #chatbot-window::-webkit-scrollbar { width: 4px; }
        #chatbot-window::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        #chatbot-window div::-webkit-scrollbar { width: 4px; }
        #chatbot-window div::-webkit-scrollbar-track { background: transparent; }
        #chatbot-window div::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
      `}</style>
    </>
  )
}

const dotStyle = {
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  background: '#5eead4',
  display: 'inline-block',
  animation: 'chatBounce 0.8s infinite',
}

export default ChatBot
