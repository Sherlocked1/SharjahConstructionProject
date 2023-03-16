import React from 'react'

export type TextButtonProps = {
    children: string,
    onClick?: (() => void),
    className?:string
}
const TextButton = (props: TextButtonProps) => {
    return (
        <a
            onClick={props.onClick}
            className={`font-medium text-purple-600 hover:underline hover:cursor-pointer ${props.className}`}
        >
            {props.children}
        </a>
    )
}

export default TextButton