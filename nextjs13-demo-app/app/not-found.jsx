import Image from 'next/image'
import Link from "next/link"
import { Suspense } from 'react'

import Mountains from './components/mountains.jpg'
import Loading from './loading'


export default function NotFound() {
  return (
    <main className="text-center">
     <h2 className="text-3xl">Page not found...</h2>
     <p>Please check the URL you typed again or send us a message. You can use our contact page form.</p>
      <p><Link href="/contact">Contact us page</Link>.</p>
      <Suspense fallback={<Loading />}>
      <Image
        src={Mountains}
        alt='A range of mountains'
        // height={250}
        // width={250}
        // quality={100}
        placeholder="blur"
        className="card" />
      </Suspense>
    </main>
  )
}