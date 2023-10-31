import React from 'react'
import { useRef } from 'react';

interface Props {
  error: string
}

export const ErrorComponent = ({error}:Props) => {


  const ref = useRef<HTMLSpanElement>(null)


  return (
    <span ref={ref} className='errorComponent animate__animated animate__fadeIn'>
       {error}
    </span>
  )
}
