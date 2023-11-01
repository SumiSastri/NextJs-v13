import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-center">
     <h2 className="text-3xl">Page not found...</h2>
     <p>Please check the URL you typed again or send us a message. You can use our contact page form.</p>
      <p><Link href="/contact">Contact us page</Link>.</p>
    </main>
  )
}
