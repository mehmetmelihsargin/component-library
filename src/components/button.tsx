import React from "react";

interface Props {
    disabled?: boolean,

    height?: string,
    width?: string,
    text?: string,
    textColor?: string,
    disabledTextColor?: string,
    clickedTextColor?: string,
    fontSize?: string,
    backgroundColor?: string,
    clickedBackgroundColor?: string,
    disabledBackgroundColor?: string,
    className?: string,
    icon?: string,
    iconPosition?: string,
    rounded?: string,
    
    onClicked?: () => void,

}


const Button = (props: Props) => {
    return (
        <button onClick={props.onClicked} className={`flex items-center justify-center rounded-[18px] ${props.disabled && 'pointer-events-none'}  ${props.height} ${props.width} ${props.disabled ? props.disabledTextColor : props.textColor} ${props.fontSize} ${props.disabled ? props.disabledBackgroundColor : props.backgroundColor} ${props.clickedBackgroundColor} ${props.clickedTextColor} ${props.className}`}>
            <span className="font-inter-title">{props.text}</span>
        </button>
    );
    <div></div>
}

export default Button;