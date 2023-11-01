import CreateTicketForm from "./createTicketForm"

export default async function CreateTicket() {
  return (
    <main>
      <h2 className="text-center">Add a new show ticket</h2>
      <CreateTicketForm />
    </main>
  )
}