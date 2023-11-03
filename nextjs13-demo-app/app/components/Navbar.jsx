import Link from 'next/link'
import Image from 'next/image'
import Mountains from './assets/mountains.jpg'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Mountains}
        alt='A range of mountains'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Events Helpdesk</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}