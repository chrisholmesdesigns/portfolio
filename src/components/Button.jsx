import React from 'react'
import { useNavigate } from 'react-router-dom'
function Button({
  Subbmitable = true,
  Editable,
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
          padding: padding,
          borderRadius: rounded,
        }}
        className="relative flex justify-center p-[10px] z-10 bg-white rounded-full border-[4px] border-[#425164]"
      >
        {Editable ? (
         <textarea
            placeholder={placeHolder}
            style={{
              color: textCol,
              resize: 'none',
            }}
           className={'flex h-[100%] lg:text-[${textSize}px] text-[${textSm}px] placeholder-current bg-transparent focus:outline-none text-[#425164] w-full font-[800] uppercase'}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <p
            style={{ color: textCol, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            className={`lg:text-[${textSize}px] text-[${textSm}px] text-[#425164] font-[800] uppercase`}
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
