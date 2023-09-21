import React from 'react'

function CustomInput({ name = "", placeholder = "", value = "", id = "", label = "", handleChange, handleblur, onblurshow, type = "text", isReadOnly = false }) {
    return (
        <div className='flex-grow w-full '>
            {label.length > 0 && <label htmlFor={id} className='capitalize text-base block font-semibold pb-0.5 text-[#666666]'>{label ?? ""}</label>}
            <input type={type} placeholder={placeholder.length > 0 ? placeholder : ""} 
            // onChange={(e) => handleChange(e)} 
            // onBlur={onblurshow ? (e) => handleblur(e) : undefined} 
            // value={value} 
            name={name} id={id} 
            className=  "block font-medium border rounded outline-none border-[#76777840] py-2 px-4 w-full flex-[1_0_0] self-stretch overflow-hidden text-base text-[#485563] whitespace-nowrap text-ellipsis font-lato  leading-5  placeholder:text-[#D9D9E0] " 
             readOnly={isReadOnly} autoComplete={type === "password" ? "off" : ""} />
        </div>
    )
}

export default CustomInput