import React from 'react'
import { useNavigate } from 'react-router-dom'
function Button({
  Subbmitable = true,
  Editable,
  TextArea,
  onChange,
  placeHolder = 'PlaceHolder',
  width,
  text = 'Learn more',
  bgColor = '#609AA6',
  mainBgCol,
  textCol,
  link,
  padding,
  textSize = '32',
  textSm = '24',
  height,
  rounded = '9999px',
}) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => link && navigate(link)}
      style={{ width: width, height: height }}
      className="relative"
    >
      <div
        style={{
          height: height,
          width: width,
          backgroundColor: mainBgCol,
          borderRadius: rounded,
        }}
        className="relative h-full z-10 bg-white rounded-full border-[4px] border-[#425164]"
      >
        {Editable ? (
         <input
           type="text"
            placeholder={placeHolder}
           className={`lg:text-[${textSize}px] text-[${textSm}px] pt-4 pb-4 flex items-center justify-center placeholder-current bg-transparent focus:outline-none text-center text-[#425164] w-full font-[800] uppercase`}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : 
         TextArea ? (
        <textarea
            placeholder={placeHolder}
           className={`lg:text-[${textSize}px] text-[${textSm}px] pt-4 pb-4 flex items-center justify-center placeholder-current bg-transparent focus:outline-none text-center text-[#425164] w-full font-[800] uppercase`}
            onChange={(e) => onChange(e.target.value)}
          />
          )
          : (
          <p
            style={{ color: textCol, justifyContent: 'center'}}
            className={`lg:text-[${textSize}px] text-[${textSm}px] pt-4 pb-4 text-[#425164] font-[800] uppercase`}
          >
            {text}
          </p>
        )}
      </div>
      <div
        style={{ backgroundColor: bgColor, borderRadius: rounded }}
        className="absolute top-[10px] rounded-full border-[4px] left-[10px] bg-[#609AA6] w-full h-full border-[#425164]"
      ></div>
    </button>
  )
}

export default Button
