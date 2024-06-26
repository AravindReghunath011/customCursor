import React, { useEffect, useRef, useState } from 'react'
import {motion,useTransform,useScroll} from 'framer-motion'
import Lenis from 'lenis'

const Parallax = () => {
    const [height,setHeight] = useState(0)
    useEffect(()=>{
        const updateHeight = ()=>{
            setHeight(window.innerHeight)
        }
        setHeight(window.innerHeight)
        document.addEventListener('resize',updateHeight)
        updateHeight()
        return ()=>{
            document.removeEventListener('resize',updateHeight)
        }
    },[])

    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
      ]

      useEffect(()=>{
        const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
      },[])
      
      const container = useRef(null)
      const {scrollYProgress} = useScroll({
        target:container,
        offset:['start end','end start']
      })
      
      const y = useTransform(scrollYProgress, [0, 1], [0, height * 1])
      const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.5])

      console.log(height)
  return (
    <div className='parallax-main'>
        <div className="spacer"></div>
        <div ref={container} className='gallery'>
            <Column images={[images[0],images[1],images[2],]} y={y}/>
            <Column images={[images[3],images[4],images[5],]} y={y1} />
            <Column images={[images[6],images[7],images[8],]} y={y2} />
            <Column images={[images[9],images[10],images[11],]}  y={y3}/>
        </div>
        <div className="spacer"></div>
    </div>
  )
}

export default Parallax



const Column = ({images,y}) => {
  return (
    <motion.div style={{y}} className='column'>
        {
            images.map((img)=>{
                return (
                    <div className='img-container'>
                        <img src={img} alt=""  />
                    </div>
                )
            })
        }

    </motion.div>
  )
}

