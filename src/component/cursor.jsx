import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const svg = useRef(null)
  const path = useRef(null)
  useEffect(()=>{
    let points = []
    let segments = 20
    let mouse = {
      x:0,
      y:0
    }
    let move = (event)=>{
      let x = event.clientX
      let y = event.clientY

      mouse.x = x
      mouse.y = y
      if(points.length == 0){
        for(let i=0;i<segments;i++){
          points.push({
            x:x,
            y:y
          })
        }
      }
      
    }
    let resize = ()=>{
      let width = window.innerWidth
      let height = window.innerHeight
      console.log(width,'wdth')
      svg.current.style.height = height + 'px'
      svg.current.style.width = width + 'px'
      
      svg.current.setAttribute('viewBox',`0 0 ${width} ${height}`)
    }
    resize()
    
    
    let anim = ()=>{
      let px = mouse.x
      let py = mouse.y
      points.forEach((p,index)=>{
        p.x = px
        p.y = py 
      let n = points[index + 1]
      if(n){
        px = px-(p.x - n.x) * 0.5
        py = py-(p.y - n.y) * 0.5
      }
      })

      path.current.setAttribute('d',`M ${points.map((p)=> `${p.x} ${p.y} `).join(' L ')}`)
      requestAnimationFrame(anim)
    }
    anim()
    document.addEventListener('mousemove',move)
    document.addEventListener('resize',resize)

    return ()=>{
      document.removeEventListener('mousemove',move)
    }
  },[])

  return (
    <>
    
    <div>
      <svg ref={svg} className='trail' >
        <path ref={path} />
      </svg>
    </div>
    </>
  )
}

export default Cursor