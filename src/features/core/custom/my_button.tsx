import React, { ButtonHTMLAttributes } from 'react'

export type MyButtonProps = {
  title:string,
  onClick?:(()=>void),
  type?:"button" | "submit" | "reset" | undefined,
}

const MyButton = (props:MyButtonProps) => {
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
      {props.title}
    </button>
  )
}

export default MyButton