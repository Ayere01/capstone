"use client"
import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Map from "./Map";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import Toggle from './Toggle';

export default function Contact() {
  return (
    <div className='flex'>
    <section>

    <h2>Contact us</h2>
      <div>
      Get in touch, we respond to all emails within 48 hours.
      </div>
    
      <div className='flex'>
        <MdOutlineMail/>
        <a href="mailto:ayeremonye@live.com">ayeremonye@live.com</a>
      </div>
      <div className='flex'>
        <MdOutlinePhone/>
        <a href="tel:+2349095628690">+2349095628690</a>
      </div>
      <div className='flex'>
        <GrLocation/>
        <address>15 Oke Str, Gbagada</address>
      </div>

      <Map />
      <p>Or find us on social media</p>
      <div className='flex gap-3'>
        <Link href="https://facebook.com/" target='blank'><FaFacebookF/></Link>
        <Link href="https://instagram.com/" target='blank'><FaInstagram/></Link>
        <Link href="https://twitter.com/" target='blank'><FaTwitter/></Link>
        <Link href="https://www.linkedin.com/" target='blank'><FaLinkedin/></Link>
        <Link href="https://www.youtube.com/" target='blank'><FaYoutube/></Link>
      </div>
    </section>
    <section className=' ml-28'>
      <form className='flex'>
        <div>
          <h2>First Name</h2>
          <input type="text" name="firstname" id="name" placeholder='enter your first name' className=' border border-gray-500 p-2 rounded-lg ' />
        </div>
        <div className=' ml-28'>
          <h2>Last Name</h2>
          <input type="text" name="lastname" id="name" placeholder='enter your last name' className='border border-gray-500 p-2 rounded-lg'/>
        </div>
      </form>
      <form className='flex'>
        <div>
          <h2 className=' mt-4'>Email</h2>
          <input type="email" name="email" id="email" placeholder='enter your email' className='border border-gray-500 p-2 rounded-lg'/>
        </div>
        <div className=' ml-28'>
          <h2 className='mt-4'>Phone Number</h2>
          <input type="tel" name="tel" id="tel" placeholder='enter your phone number'  className='border border-gray-500 p-2 rounded-lg'/>
        </div>
      </form>
      <form className='mt-4'>
        <fieldset>
          <ul>
            <li>
              <label for="co">choose a topic</label> <br />
                <select className=' border border-gray-500 p-1.5 rounded-xl'>
                  <optgroup label="select one">
                    <option value="bi">Billing issue</option>
                    <option value="rt">Returns</option>
                    <option value="pq">Press Question</option>
                    <option value="ot">Other</option>
                  </optgroup>
                </select>
            </li>
          </ul>
        </fieldset>
      </form>
      <form className=' mt-4'>
        <h2>Which best describes you?</h2>
        <input type="radio" name="description" id="customer" />
        <label For="customer">Customer</label>
        <input type="radio" name="description" id="customer" className=' ml-4'/>
        <label For="press">Press</label> <br />
        <input type="radio" name="description" id="distributor" />
        <label For="distributor">Distributor</label>
        <input type="radio" name="description" id="other" className=' ml-4'/>
        <label For="other">Other</label>
      </form>
      <form>
        <div>
          <h2>Message</h2>
          <input type="text" name="message" id="message" placeholder='type your message...' className=' border p-28' />
        </div>
      </form>
      <div className=' flex gap-3'>
      <Toggle />  I accept the terms
      </div>
      
      <input type="submit" className=' border p-2 bg-gray-500'/>
    </section>
    </div>
  )
}
