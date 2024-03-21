import React from 'react'
import { artworks } from '../../page'
import Image from 'next/image'
import Link from 'next/link'

export default function Category({params}) {
    const artcard = artworks.filter(works => works.type.toLowerCasw().split(' ').join('-') == params.slug)
    const artGro = artcard.map((works,index) => (
        <section key={index} className=' hover:shadow-2xl'>
            <Link href={`/art/${works.title.split(' ').join('-')}`}>
            <Image src={`/paint${works.id}.jpeg`} alt={works.id} width={130} height={130}/>
            <h2 className=' flex text-2xl capitalize font-bold'>{works.id}</h2>
            <p className=' flex capitalize font-bold bg-blend-color bg-gray-500'>&#8358;{works.price}</p>
            </Link>
        </section>
    ))
  return (
    <div className=' grid grid-cols-4 bg-slate-200'>{artGro}</div>
  )
}
