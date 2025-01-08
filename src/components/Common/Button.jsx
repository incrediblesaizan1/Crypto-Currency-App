import React from 'react'

const Button = ({text, onclick, outline}) => {
  return (
    <div
     className={`py-3 text-center min-w-32 capitalize px-6 rounded-3xl font-semibold cursor-pointer ${outline? "bg-[var(--black)] outline outline-2 outline-[var(--blue)] text-[var(--white)] hover:bg-[var(--blue)] transition-all duration-300" : "bg-[var(--blue)] text-[var(--white)] hover:shadow-custom transition-shadow duration-300"} ` }
     onClick={()=>onclick()}
     >
      {text}
    </div>
  )
}

export default Button
