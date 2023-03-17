import React, { HTMLInputTypeAttribute, LegacyRef } from 'react'

export interface MyTextFieldProps {
    placeholder?: string,
    onchange?: ((text: string) => void),
    ref?: LegacyRef<HTMLInputElement>,
    type?: HTMLInputTypeAttribute
    value?: string
}

const MyTextField = (props: MyTextFieldProps) => {
    return (
        <input
            title={props.placeholder}
            placeholder={props.placeholder}
            type={props.type}
            ref={props.ref}
            value={props.value}
            onChange={(e)=> props.onchange? props.onchange(e.target.value) : null}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
    )
}

export default MyTextField