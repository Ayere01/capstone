import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";


export default function Search() {
    const [sort, setSort]= useState('')
    
    function searchTopic(e){
        setSort(e.target.value)
      }
  return (
    <div className='flex items-center border-4 border-gray-600 rounded-full m-auto w-[300px] py-2 px-4'>
      <input type="text" name="text" id="text" placeholder='search for topic or category' className='outline-none border-none pl-5 w-[100%] pr-9 bg-transparent' defaultValue={sort} onChange={searchTopic}/>
      <FaSearch />
    </div>
  )
}