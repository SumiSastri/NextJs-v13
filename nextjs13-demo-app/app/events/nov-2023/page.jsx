import Link from 'next/link'

export default function November2023() {
    return (
      <main>    
            <h2>
   November 2023 Events
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>
            <div className="flex justify-center my-8">          
                <Link href="/events/oct-2023">
          <p>Back</p>
        </Link>
        </div>
      </main>
    )
  }
  