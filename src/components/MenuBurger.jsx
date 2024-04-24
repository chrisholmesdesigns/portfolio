import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const MenuBurger = ({ collapsed }) => {
  useEffect(() => {
    let menuBtn = document.querySelector('.menu-btn')

    if (collapsed !== '') menuBtn.classList?.toggle('active')
  }, [collapsed])
  useEffect(() => {
    let menuBtn = document.querySelector('.menu-btn')
    menuBtn.classList?.toggle('active')
  }, [])
  return (
    <header className="flex h-full relative z-50 items-center">
      <button className="menu-btn  cursor-pointer">
        <span
          style={{
            backgroundColor: collapsed ? 'white' : 'white',
            borderColor: 'transparent',
          }}
          className="bar  border-0"
        ></span>
        <span
          style={{
            backgroundColor: collapsed ? 'white' : 'white',
            borderColor: 'transparent',
          }}
          className="bar border-0 "
        ></span>{' '}
        <span
          style={{
            backgroundColor: collapsed ? 'white' : 'white',
            borderColor: 'transparent',
          }}
          className="bar border-0 "
        ></span>
      </button>
    </header>
  )
}

export default MenuBurger
