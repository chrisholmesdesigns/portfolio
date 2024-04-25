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
    height: '100%', // Ensure the container takes the full height of the parent button
    width: width,
    backgroundColor: mainBgCol,
    padding: padding,
    borderRadius: rounded,
    display: 'flex', // Ensure the container is a flex container
    alignItems: 'center', // Center items vertically within the container
    justifyContent: 'center', // Center items horizontally within the container
  }}
  className="relative bg-white rounded-full border-[4px] border-[#425164]"
>
  <textarea
    placeholder={placeHolder}
    style={{
      color: textCol,
      resize: 'none',
      width: '100%', // Ensure the textarea takes the full width of its container
      height: '100%', // Ensure the textarea takes the full height of its container
      textAlign: 'center', // Center the text within the textarea
      paddingTop: '0', // Reset padding to ensure proper alignment
      paddingBottom: '0', // Reset padding to ensure proper alignment
    }}
    onChange={(e) => onChange(e.target.value)}
  />
</div>
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
