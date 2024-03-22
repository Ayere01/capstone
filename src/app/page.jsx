import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main>
      <h1>Life is an art, paint yours</h1>
      <section>
          <div>
          <video loop autoPlay className=' w-[1400px] h-[650px]'>
          <source src='/movie.mp4' type="video/mp4"/>
          </video>
          <span className=' flex gap-3'>
          <span className=' text-2xl text-gray-500'>Art</span>
          <Link href={"./art/"}>
          <span className=' text-2xl text-orange-300'>see all</span>
          </Link>
          </span>
          </div>
          <div className=' flex gap-44 shadow-2xl'>
          <Link href={"./art/"}>
          <Image src="/paint2.jpeg" alt='paint2' width='350' height='200' className=' border ml-5'/>
          </Link>
          <Link href={"./art/"}>
          <Image src="/paint11.jpeg" alt='paint3' width='350' height='200' className=' border'/>
          </Link>
          <Link href={"./art/"}>
          <Image src="/paint5.jpeg" alt='paint4' width='350' height='200' className=' border'/>
          </Link>
          </div>
          <div className=' flex justify-center'>
          <Link href={"./art/"}>
          <Image src="/paint18.jpeg" alt='paint5' width='900' height='200'/>
          </Link>
          </div>
          
          <span className=' text-2xl text-gray-500'>Arts Baby_Dev</span>
          <div className=' flex'>

          <div>

          <h2 className=' text-2xl'>
          VG Animations
          </h2>
          <span className=' flex'>

          <p className=' w-[400px]'>
          SVG animations utilize scalable vector graphics to create dynamic and interactive visual effects on web pages.",
        "SVG (Scalable Vector Graphics) is a markup language for describing two-dimensional graphics in XML format.",
        "By animating SVG elements using CSS or JavaScript, developers can achieve a wide range of effects, from simple transitions to complex morphing animations.",
        "SVG animations are lightweight, scalable, and customizable, making them ideal for creating responsive and visually appealing web experiences."
          </p>
          <Image src="/paint8.jpeg" alt='paint5' width='200' height='200'/>
          </span>
          
          </div>
          <div className=''>
            <h2 className=' text-2xl'>
            Python Install
            </h2>
            <span className=' flex'>
            <p className=' w-[400px]'>
            "HTML5 video installations are multimedia art experiences that leverage HTML5 video technology to create immersive and cinematic environments.",
        "Artists and developers use HTML5 video elements, CSS styling, and JavaScript interactivity to craft interactive narratives, visual montages, and experimental films.",
        "These installations often incorporate sound design, motion graphics, and interactive elements to engage viewers on multiple sensory levels.",
        "HTML5 video installations challenge traditional notions of cinema and gallery art, offering new possibilities for storytelling and audience engagement in the digital age."
            </p>
          <Image src="/paint17.jpeg" alt='paint6' width='200' height='200'/>
            </span>
          </div>
          </div>
          <div>
            <h2 className=' text-2xl'>
            WebGL Visualizations
            </h2>
            <span className=' flex'>
            <p className=' w-[400px]'>
            "WebGL (Web Graphics Library) enables high-performance 3D graphics rendering in web browsers.",
        "With WebGL, developers can create immersive visualizations, games, and simulations that harness the full power of the GPU.",
        "Using JavaScript and WebGL APIs, artists and developers can render complex scenes, apply shaders and effects, and create interactive experiences that push the boundaries of web graphics.",
        "WebGL visualizations offer a new dimension of creativity and interactivity, unlocking unprecedented possibilities for digital art and visual storytelling on the web."
            </p>
          <Image src="/paint7.jpeg" alt='paint7' width='200' height='200'/>
            </span>
          </div>
      </section>
    </main>
  )
}
