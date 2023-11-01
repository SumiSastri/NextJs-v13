"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateTicketForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [availability, setAvailability] = useState('low')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = { title, body, availability, user_email: 'abc@abc.com'}

    const res = await fetch('http://localhost:4000/tickets', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTicket)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/tickets')
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Show title</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>More information about the show</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setAvailability(e.target.value)}
          value={availability}
        >
          <option value="low">Low Availability</option>
          <option value="medium">Medium Availability</option>
          <option value="high">High Availability</option>
        </select>
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Ticket</span>}
    </button>
    </form>
  )
}