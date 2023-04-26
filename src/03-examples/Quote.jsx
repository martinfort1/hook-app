import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({ data }) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
  useLayoutEffect(() => {
    
    const {height, width} = pRef.current.getBoundingClientRect() ;
    setBoxSize({ height, width })

  }, [data])



  return (
    <>
        <blockquote 
        className='blockquote text-end'
        style={{ display: 'flex' }}
        >
            <p ref={ pRef }className='mb-1'>{ data[0].quote }</p>
            <footer className='blockquote-footer'> { data[0].author }</footer>
        </blockquote>

        <code>{ JSON.stringify(boxSize) }</code>

    </>

  )
}