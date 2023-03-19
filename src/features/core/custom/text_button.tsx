export interface TextButtonProps {
    children: string,
    onClick?: (() => void),
    className?:string
}
const TextButton = (props: TextButtonProps) => {
    return (
        <span
            onClick={props.onClick}
            className={`font-medium text-purple-600 hover:underline hover:cursor-pointer ${props.className}`}
        >
            {props.children}
        </span>
    )
}

export default TextButton