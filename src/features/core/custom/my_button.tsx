export interface MyButtonProps {
  title:string,
  onClick?:(()=>void),
  type?:"button" | "submit" | "reset" | undefined,
  color?:string,
  titleColor?:string
  disabled?:boolean
}

const MyButton = (props:MyButtonProps) => {
  return (
    <button disabled={props.disabled ?? false} type={props.type ?? "button"} onClick={props.onClick} className="w-full px-4 py-2 text-white transition-colors duration-200 transform bg-purple-700 focus:border-neutral-700 rounded-md hover:opacity-75 focus:outline-none" style={{backgroundColor:props.color,color:props.titleColor}}>
      {props.title}
    </button>
  )
}

export default MyButton