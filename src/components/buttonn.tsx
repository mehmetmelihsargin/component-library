import React from 'react'
interface Props {
    backgroundColor?: string,
    width?: string,
    height?: string,
    rounded?: string,
    text?: string,
    textColor?: string,
    className?: string,
    icon?: string,
    placeholder?: string,
}
const Buttonn = (props: Props
) => {
  return (
    <button className={` ${props.className} ${props.width} ${props.height} ${props.backgroundColor} ${props.rounded} ${props.text} ${props.textColor} ${props.icon} ${props.placeholder}`}>
akjsd
    </button>
  )
}

export default Buttonn