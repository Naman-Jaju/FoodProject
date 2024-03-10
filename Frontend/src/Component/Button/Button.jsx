import React from"react"

function Button(props){
    return(
        <div className=" text-center px-6 py-1 border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition all rounded-full">
          {props.title}
        </div>
    )
}
export default Button;