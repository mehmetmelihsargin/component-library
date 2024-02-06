import React from 'react'
export const toplama=(a: number, b: number) => {
    return a+b
}

const sonuc = toplama(9, 4);
console.log(sonuc)

interface OkanProps {
   backgroundColor?: string,
    name?: string,
    
}
const Okan = (props: OkanProps) => {
    
  return (
    <div>{sonuc}</div>
    // <div className={props.backgroundColor}>{props.name}</div>
    
  )
}

export default Okan