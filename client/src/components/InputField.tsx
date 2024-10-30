import React from "react";
import { Input } from "./ui/input"
interface InputProps{
    value: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type:string
}
const InputField = ({value,placeholder,onChange,type}:InputProps) => {
  return (
    <Input
          value={value}
          placeholder={placeholder}
          className="bg-black/30 border-red-500/50 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500"
          onChange={onChange}
          type={type}
    />
  );
}

export default InputField