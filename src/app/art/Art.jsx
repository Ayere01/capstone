"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';


export default function Art({artworks}) {
const [sort, setSort] = useState("")

function searchProd(e){
  setSort(e.target.value)
}


const filteredList = artworks.filter(art =>art.title.toLowerCase().includes(sort.toLowerCase())|| art.category.toLowerCase().includes(sort.toLowerCase())
)
      const artCart = filteredList.map( cart => (
        <section key={cart.id} className=''>
            <Link href={`/art/${cart.title.split(' ').join('-')}`}>
              <div className='relative h-[50vh]'>
                <Image src={cart.image} alt={cart.title} className='hover:shadow-2xl'
                layout='fill'
                objectFit='cover' /></div>
                <h2>{cart.title}</h2>
                <h2>&#8358;{cart.price}</h2>
            </Link>
        </section>
      ) )
  return (
    <div className=''>
         <section className='flex items-center border-4 border-gray-500      rounded-full m-auto w-[300px] py-2 px-4'>
          <input type="text" name="text" id="text" placeholder='search for items' className='outline-none border-none pl-5 w-[100%] pr-9 bg-transparent' defaultValue={sort} onChange={searchProd}/>
          <FaSearch />
        </section>

        <div className="  col-span-4 lg:w-[100%] bg-gray-200">
          <section className=" flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 md:w-[48rem] lg:w-[55rem] md:grid-cols-3 md:p-10  lg:p-14 lg:mr-16  lg:pt-0 ">
              {filteredList == 0 ? (
                <h2 className=" ">No items Found</h2>
              ) : (
                artCart
              )}
            </div>
          </section>
        </div>
    </div>
  )
}
