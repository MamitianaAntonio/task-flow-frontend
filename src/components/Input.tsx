import type React from "react";

interface InputProps {
  type? : string,
  placeholder? : string,
  value? : string,
  onChange : (e : React.ChangeEvent<HTMLInputElement>) => void 
  className? : string
}

const Input : React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 rounded-md 
                  border border-gray-300 
                  bg-white/80 text-gray-800 
                  font-quicksand placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 
                  transition-all duration-200 ${className}`}
    />
  )
}

export default Input;