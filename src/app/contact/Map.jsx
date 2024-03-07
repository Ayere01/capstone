import Link from 'next/link'
import React from 'react'

export default function Map() {
  return (
    <div className='cursor-pointer'> 

    <Link href={`https://maps.app.goo.gl/hHr8GhXE4iYtr3AAA`} title='get in touch'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8100221543946!2d3.3750539752189668!3d6.545656922904998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d669383b09b%3A0xd682b6420628688b!2sAnfield%20Apartments!5e0!3m2!1sen!2sus!4v1708618206959!5m2!1sen!2sus" width="600" height="450" style={{border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Link>
    </div>
  )
}
