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


export default async function TicketList() {
  // fetch data, assign data to the jsx to be rendered
  const tickets = await getTickets()
  const ticketList =  tickets.map((ticket) => (
    <div key={ticket.id} className="card my-5">
      <h3>{ticket.title}</h3>
      <p>{ticket.body.slice(0, 200)}...</p>
      <div className={`pill ${ticket.availability}`}>
        {ticket.availability} availability
      </div>
    </div>
  ))
  {tickets.length === 0 && (
    <p className="text-center">Sold out!</p>
  )}
  // let the return only render jsx
  return (
    <main>
        <div>TEST DATA FROM JSON SERVER: {JSON.stringify(tickets, null, 8)}</div>
       <h2>
        Tickets List
          </h2>
          <p>Terms & Conditions of Sale</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius.</p>
   <div>{ticketList}</div>
    </main>
  )
}
