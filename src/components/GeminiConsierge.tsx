import React, { useState, useRef, useEffect } from "react"

import { Send, Sparkles, X, ExternalLink } from "lucide-react"

import type { ChatMessage } from "@/types/services"

import { chatWithConcierge } from "../services/gemini"

const GeminiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Welcome to Marhaba Marbella. I am your personal luxury concierge. How may I orchestrate your stay today?"
    }
  ])
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMsg = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", text: userMsg }])
    setLoading(true)

    const result = await chatWithConcierge(messages, userMsg)
    setMessages((prev) => [
      ...prev,
      {
        role: "model",
        text: result.text,
        grounding: result.grounding
      }
    ])
    setLoading(false)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#B08D57] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group">
        <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-[400px] h-[600px] bg-white border border-[#E7E5E4] shadow-2xl rounded-lg z-[60] flex flex-col animate-fade-in overflow-hidden text-left">
      <div className="bg-[#2F2003] p-4 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#B08D57] flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg leading-tight">AI Concierge</h3>
            <p className="text-[10px] uppercase tracking-widest text-[#B08D57]">Powered by Gemini</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)}>
          <X className="w-5 h-5 text-white/60 hover:text-white" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-[#F9F8F6]">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
            <div
              className={`max-w-[85%] p-4 rounded-lg text-sm leading-relaxed ${
                m.role === "user" ? "bg-[#B08D57] text-white" : "bg-white border border-[#E7E5E4] text-[#2F2003]"
              }`}>
              {m.text}

              {/* Display grounding links if Google Search or Maps was used */}
              {m.grounding && m.grounding.length > 0 && (
                <div className="mt-4 pt-3 border-t border-brand-border/20 space-y-2">
                  <p className="text-[9px] uppercase tracking-widest font-bold opacity-60">Verified Sources:</p>
                  {m.grounding.map((chunk, idx) => {
                    const source = chunk.web || chunk.maps
                    if (!source) return null
                    return (
                      <a
                        key={idx}
                        href={source.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] text-primary-gold hover:underline">
                        <ExternalLink className="w-2.5 h-2.5" />
                        <span className="truncate">{source.title || source.uri}</span>
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-[#E7E5E4] p-4 rounded-lg">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#E7E5E4] bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your inquiry..."
            className="flex-1 bg-[#F9F8F6] border-none outline-none px-4 py-3 text-sm rounded-sm"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="p-3 bg-[#2F2003] text-white rounded-sm hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GeminiConcierge
