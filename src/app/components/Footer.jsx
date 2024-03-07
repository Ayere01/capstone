import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className= {` bg-gray-200 z-50 ${styles.footer}`}>

        <div className= "flex items-start py-20 px-20">

            <section>
                <h2 className=' text-xl pb-4'>Navigate</h2>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/new_in">New In</Link>
                    </li>
                    <li>
                        <Link href="/store_locator">Store Locator</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className=' text-xl pb-4'>Shop</h2>
                <ul>
                    <li>
                        <Link href="/">By Activity</Link>
                    </li>
                    <li>
                        <Link href="/women">Woman</Link>
                    </li>
                    <li>
                        <Link href="/men">Men</Link>
                    </li>
                    <li>
                        <Link href="/rucksacks">Rucksacks</Link>
                    </li>
                    <li>
                        <Link href="/footwear">Footwear</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className=' text-xl pb-4'>Account</h2>
                <ul>
                    <li>
                        <Link href="/">Log in</Link>
                    </li>
                    <li>
                        <Link href="/ncreate_account">Create Account</Link>
                    </li>
                    <li>
                        <Link href="/license&assets">License & Assets</Link>
                    </li>
                    <li>
                        <Link href="/styleguide">Styleguide</Link>
                    </li>
                    <li>
                        <Link href="/changelog">Changelog</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className=' text-xl pb-4'>Care</h2>
                <ul>
                    <li>
                        <Link href="/">Delivery</Link>
                    </li>
                    <li>
                        <Link href="/return">Returns</Link>
                    </li>
                    <li>
                        <Link href="/size_guide">Size Guide</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </section>
            <section className=' pl-8'>
                <h2 className=' text-xl pb-4'>Subscribe</h2>
                <p className=' pb-4'>
                Join our newsletter and get vouchers and exclusive deals straight to your inbox.
                </p> 
                <form id="email-form" name="email-form"><input type="email" placeholder="Enter your email" className=' p-3 pl-2 pr-2 mr-2 border border-gray-500 rounded-md'/><button className=' p-3  bg-gray-500 rounded-md'>SUBSCRIBE</button></form>
                <p className=' text-sm pt-4'>
                By subscribing you agree to with our <a href="#" className=' underline'>Privacy Policy</a> and provide consent to receive updates from our company.
                </p>
            </section>

        </div>
        <footer className='flex pt-7 justify-between'>

            <nav className='flex gap-10 '>
                <h3>© Baby_Dev. All rights reserved.</h3>
                <a href="#" className=' underline'>Privacy Policy</a>
                <a href="#" className=' underline'>Terms and Conditions</a>
                <a href="#" className=' underline'>Powered by Babydev</a>
            </nav>

            <nav className='flex gap-3'>
                <Link href="https://facebook.com/" target='blank'><FaFacebookF/></Link>
                <Link href="https://instagram.com/" target='blank'><FaInstagram/></Link>
                <Link href="https://twitter.com/" target='blank'><FaTwitter/></Link>
                <Link href="https://www.linkedin.com/" target='blank'><FaLinkedin/></Link>
                <Link href="https://www.youtube.com/" target='blank'><FaYoutube/></Link>
            </nav>

        </footer>
    </footer>
  )
}
