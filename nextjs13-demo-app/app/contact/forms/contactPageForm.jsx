"use client"

export default function ContactForm() {


 

  return (
    <form className="w-1/2">
      <label>
        <span>Your name</span>
        <input
          required 
          type="text"
        //   value={contactFormUser}
        />
      </label>
      <label>
        <span>Your message</span>
        <textarea
          required    
        //   value={contactMessage}
        />
      </label>
      <button 
        className="btn-primary" 
        // disabled={isLoading}
      >
Submit your request
    </button>
    </form>
  )
}