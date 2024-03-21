import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main>
      <h1>Life is an art, paint yours</h1>
      <section>
        <div className='grid grid-cols-4 grid-rows-2 '>
          <div>
          <video loop autoPlay>
          <source src='/movie.mp4' type="video/mp4"/>
          </video>
          </div>
          <Image src="/paint2.jpeg" alt='paint2' width='200' height='200'/>
          <Image src="/paint3.jpeg" alt='paint3' width='200' height='200'/>
          <Image src="/paint4.jpeg" alt='paint4' width='200' height='200'/>
          <Image src="/paint5.jpeg" alt='paint5' width='200' height='200'/>
          <Image src="/paint6.jpeg" alt='paint6' width='200' height='200'/>
          <Image src="/paint7.jpeg" alt='paint7' width='200' height='200'/>
        </div>
      </section>
    </main>
    
  )
}
