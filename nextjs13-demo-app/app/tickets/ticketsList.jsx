import Link from 'next/link'

const ticketDataURL = "http://localhost:4000/tickets"

async function getTickets() {
  const response = await fetch(ticketDataURL, {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })
  if (response.ok) { console.log(response, "SUCCESS") }
  if (!response.ok) {
    throw Error(Error, "ERROR");
  }
  return response.json()
}

export default async function TicketsList() {
  // fetch data, assign data to the jsx to be rendered
  const tickets = await getTickets()
  const ticketsList =  tickets.map((ticket) => (
    <div key={ticket.id} className="card my-5">
      <h3>{ticket.title}</h3>
      <p>{ticket.body.slice(0, 200)}...</p>
      <div className={`pill ${ticket.availability}`}>
        {ticket.availability} availability
      </div>
      {/* this id comes from the key not from the fetch route by params id */}
      <Link href={`/tickets/${ticket.id}`}>See more</Link>
    </div>
  ))
  {tickets.length === 0 && (
    <p className="text-center">Sold out!</p>
  )}
  // let the return only render jsx
  return (
    <main>
        {/* <div>TEST DATA FROM JSON SERVER: {JSON.stringify(tickets, null, 8)}</div> */}
       <h2>
        Tickets List
          </h2>
          <div className="flex justify-center my-8">
        <Link href="/tickets/forms">
          <button className="btn-primary">Create Tickets</button>
        </Link>
      </div>
          <p>Terms & Conditions of Sale</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius.</p>
   <div>{ticketsList}</div>
    </main>
  )
}
