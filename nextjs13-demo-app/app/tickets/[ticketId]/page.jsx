import { notFound } from "next/navigation"
export const dynamicParams = true // default val = true

// REFACTOR due to Next13 serving up cache
export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()
 
  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

async function getTicket(ticketId) {
  const response = await fetch(`http://localhost:4000/tickets/${ticketId}`, {
    next: {
      revalidate: 60 
    }
  })
  if (response.ok) { console.log(response, "SUCCESS") }
  // REFACTOR due to Next13 serving up cache - static params identifies the id from the db
  // dynamic params sets up a new page for each id and serves up the cache
  // calling notFound() serves up the 404 page custom created
  if (!response.ok) {
       notFound()
  }
  return response.json()
}

export default async function DisplayTicketDetails({ params }) {
  // Initial check of data flow to render method
  //  const id = params.id
  const displayTicket = await getTicket(params.ticketId)

  return (
    <main>
      <nav>
      <h2>Ticket Details</h2>
      </nav>
      <div className="card">   
        <small>Thank you for the purchasing a ticket for the show. Your ticket will be sent to {displayTicket.user_email}</small>
        <h2>Show Details</h2>
          <h3>{displayTicket.title}</h3><p>{displayTicket.body}</p>
      </div>
    </main>
  )
}