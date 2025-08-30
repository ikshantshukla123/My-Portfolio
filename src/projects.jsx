import React from 'react'
import Card from './Card';
import restaurant from"./images/abhinandan.png"
import chess from"./images/LoclaLanes.png"
import snake from "./images/snake.jpg"
import wise_way from"./images/three.png"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: restaurant,
          altText: 'Resataurant website',
          title: 'Restaurant Website',
          description: 'A dynamic and responsive restaurant website showcasing menu, online reservations, customer reviews, and contact information.',
          explore:"https://abhinandan-chi.vercel.app/"
        },
        {
          imageUrl:chess,
          altText: 'Chess',
          title: 'LocalLanes',
          description: '"Web application which help you to get access to your nearest best spots."',
          explore:"https://local-lanes.vercel.app/"

        },
        {
          imageUrl: snake,
          altText: 'Canyons',
          title: 'Lottary App',
          description: "A web3 application which give transparency in Lottary evern on get choosen randomly",
          explore:"https://github.com/ikshantshukla123/My-Lottary-App"
        },
        {
            imageUrl: wise_way,
            altText: 'wise_way',
            title: 'ThreeJs portfolio',
            description: "a web application that uses ThreeJs to make beatuful UI.",
            explore:"https://github.com/ikshantshukla123/ThreeJs"
          }
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
