export interface CardProps {
    title:string;
    subtitle:string;
    backgroundColor:string;
    titleColor:string;
}

const Card = ({title,subtitle,backgroundColor,titleColor}:CardProps) => {
  return (
      <div className="flex flex-col justify-center items-center p-4 rounded-md shadow-md h-48" style={{backgroundColor,color:titleColor}}>
          <h1 className="text-2xl text-center font-extrabold flex-1">
              {title}
          </h1>
          <h3 className="text-xl text-center font-semibold">
              {subtitle}
          </h3>
      </div>
  )
}

export default Card