import React from 'react'
import Art from './Art';

export const artworks = [
    {
      id: 1,
      title: "Responsive Web Design",
      category: "Art Works",
      price: 300,
      image: "/paint2.jpeg",
      description: [
        "Responsive web design is an approach to designing and coding websites that ensure optimal viewing and interaction experiences across various devices, from desktop computers to smartphones.",
        "It involves using flexible layouts, fluid grids, and media queries to adapt the design and content of a website based on the screen size and orientation of the device being used.",
        "By implementing responsive design principles, web developers can create websites that are user-friendly, accessible, and visually appealing on any device, enhancing the overall user experience.",
        "Key concepts in responsive web design include designing with a mobile-first approach, optimizing images and media for faster loading times, and testing the website on different devices and screen sizes to ensure compatibility."
      ],
      tags: ["responsive", "web design", "mobile-first", "fluid grids", "media queries"]
    },
    {
      id: 2,
      title: "CSS Animations",
      category: "Art Works",
      price: 250,
      image: "/paint3.jpeg",
      description: [
        "CSS animations allow web developers to create dynamic and visually engaging effects on web pages without relying on JavaScript or external libraries.",
        "By using keyframes and animation properties such as animation-duration, animation-timing-function, and animation-delay, developers can control the timing and behavior of animations.",
        "CSS animations are lightweight and efficient, resulting in smoother performance and faster loading times compared to JavaScript-based animations.",
        "Common use cases for CSS animations include animating hover effects, transitions between page elements, and creating interactive user interfaces that respond to user actions."
      ],
      tags: ["css", "animations", "keyframes", "transition", "interactive"]
    },
    {
      id: 3,
      title: "JavaScript Canvas Drawings",
      category: "Art Works",
      price: 400,
      image: "/paint4.jpeg",
      description: [
        "JavaScript canvas drawings allow developers to create interactive and visually stunning graphics directly within the browser.",
        "The HTML canvas element provides a drawing surface that can be manipulated using JavaScript to draw shapes, lines, text, and images.",
        "With the canvas API, developers can programmatically control every pixel on the canvas, enabling the creation of complex animations, games, data visualizations, and more.",
        "JavaScript libraries like p5.js and Three.js further simplify the process of creating canvas-based artwork by providing high-level abstractions and pre-built functions for common tasks."
      ],
      tags: ["javascript", "canvas", "graphics", "animations", "data visualization"]
    },
    {
      id: 4,
      title: "HTML Sculptures",
      category: "Art Works",
      price: 500,
      image: "/paint5.jpeg",
      description: [
        "HTML sculptures are creative artworks crafted entirely using HTML markup and CSS styling techniques.",
        "Web developers use HTML elements, such as divs, spans, and SVGs, to construct intricate sculptures that mimic real-life objects, abstract shapes, or artistic designs.",
        "By applying CSS properties like positioning, transforms, and gradients, developers can manipulate the appearance and layout of HTML elements to create visually stunning sculptures.",
        "HTML sculptures blur the lines between traditional sculpture and digital art, showcasing the creative possibilities of web technologies and pushing the boundaries of artistic expression in the digital realm."
      ],
      tags: ["html", "sculptures", "css", "artistic", "digital art"]
    },
    {
      id: 5,
      title: "JavaScript Interactive Installations",
      category: "Art Works",
      price: 600,
      image: "/paint6.jpeg",
      description: [
        "JavaScript interactive installations are immersive art experiences that utilize JavaScript programming to engage and interact with viewers in real-time.",
        "These installations often combine elements of visual art, sound, motion, and interactivity to create dynamic and memorable experiences.",
        "Using sensors, cameras, and input devices, developers can capture user input and trigger responsive behaviors within the installation, allowing for personalized and participatory experiences.",
        "JavaScript libraries like p5.js and Arduino.js provide tools and frameworks for building interactive installations, empowering artists and developers to create interactive art that blurs the boundaries between technology and creativity."
      ],
      tags: ["javascript", "interactive", "installations", "immersive", "participatory"]
    },
    {
      id: 6,
      title: "CSS Sculptural Typography",
      category: "Art Works",
      price: 450,
      image: "/paint7.jpeg",
      description: [
        "CSS sculptural typography is a creative typography technique that uses CSS styling to transform text into three-dimensional sculptural forms.",
        "By applying CSS properties like text-shadow, transform, and perspective, web designers can manipulate the appearance of text to create visually striking typographic sculptures.",
        "These sculptures can range from simple geometric shapes to elaborate, intricate designs that defy traditional notions of typography.",
        "CSS sculptural typography is often used in web design to create eye-catching headlines, logos, and other typographic elements that add depth and dimension to a webpage."
      ],
      tags: ["css", "typography", "sculptural", "3d", "visual"]
    },
    {
      id: 7,
      title: "JavaScript Generative Art",
      category: "Art Works",
      price: 550,
      image: "/paint8.jpeg",
      description: [
        "JavaScript generative art is a form of algorithmic art that uses code to generate complex and visually intriguing images, animations, and patterns.",
        "By writing algorithms that manipulate shapes, colors, and textures, artists and developers can create unique and unpredictable artworks that evolve over time.",
        "Generative art often explores concepts of randomness, chaos, and emergence, producing mesmerizing and thought-provoking visual experiences.",
        "Frameworks like Processing.js and p5.js provide tools and libraries for creating generative art, empowering artists to explore the intersection of art, mathematics, and technology."
      ],
      tags: ["javascript", "generative art", "algorithmic", "patterns", "visual"]
    },
    {
      id: 8,
      title: "HTML5 Video Installations",
      category: "Art Works",
      price: 700,
      image: "/paint9.jpeg",
      description: [
        "HTML5 video installations are multimedia art experiences that leverage HTML5 video technology to create immersive and cinematic environments.",
        "Artists and developers use HTML5 video elements, CSS styling, and JavaScript interactivity to craft interactive narratives, visual montages, and experimental films.",
        "These installations often incorporate sound design, motion graphics, and interactive elements to engage viewers on multiple sensory levels.",
        "HTML5 video installations challenge traditional notions of cinema and gallery art, offering new possibilities for storytelling and audience engagement in the digital age."
      ],
      tags: ["html5", "video", "installations", "multimedia", "cinematic"]
    },
    // More artworks can be added here
  ];
export default function page() {
  return (
    <div><Art artworks={artworks}/></div>
  )
}
