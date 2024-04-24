import { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import MenuBurger from './MenuBurger'
import { Fade } from 'react-reveal'
function Navbar() {
  const [collapsed, setCollapsed] = useState(true)
  const [currentLink, setCurrentLink] = useState(0)
  const navigate = useNavigate(null)
  const links = [
    {
      name: 'Work',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ]
  useEffect(() => {
    navigate(links[currentLink].link)
  }, [currentLink])
  useEffect(() => {
    setCollapsed(!collapsed)
  }, [currentLink])
  return (
    <nav className=" flex items-center overflow-x-hidden z-50 justify-between pt-[36px] padding absolute top-0 left-0 w-full">
      <div className="cursor-pointer  flex items-center lg:pt-0 pt-[10px]">
        <Link to={'/'}>
          <img className="w-[180px] lg:w-[283px]" src={Logo} alt="" />
        </Link>
      </div>
      {/* links */}
      <div className="border-[4px]  hidden bg-white items-center px-[5px] h-[55px] space-x-[80px] border-[#425164] lg:flex rounded-full">
        {links.map((el, index) => (
          <button
            onClick={() => setCurrentLink(index)}
            style={{
              color: index === currentLink ? 'white' : '#425164',
              backgroundColor: index === currentLink ? '#F79256' : 'white',
              borderColor: index === currentLink ? '#425164' : 'white',
            }}
            className="h-[39px] border-[4px]   text-[20px] font-[700]  uppercase px-[20px] flex items-center rounded-full"
          >
            {el.name}
          </button>
        ))}
      </div>
      {/* Mobile */}
      <div className="lg:hidden w-fit" onClick={() => setCollapsed(!collapsed)}>
        <MenuBurger collapsed={collapsed}></MenuBurger>
      </div>
      {!collapsed && (
        <Fade>
          <div className="lg:hidden fixed flex items-center justify-center padding w-screen h-screen inset-0 z-40 bg-[#F79256] ">
            <div className="border-[4px] w-full lg:flex-row flex-col py-[10px]   bg-white items-center px-[5px] h-fit lg:h-[55px] lg:space-x-[80px] border-[#425164] lg:flex rounded-[25px]">
              {links.map((el, index) => (
                <button
                  onClick={() => setCurrentLink(index)}
                  style={{
                    color: index === currentLink ? 'white' : '#425164',
                    backgroundColor:
                      index === currentLink ? '#F79256' : 'white',
                    borderColor: index === currentLink ? '#425164' : 'white',
                  }}
                  className="h-[39px] border-[4px] text-center justify-center   w-full text-[20px] font-[700]  uppercase px-[20px] flex items-center rounded-full"
                >
                  {el.name}
                </button>
              ))}
            </div>
          </div>
        </Fade>
      )}
    </nav>
  )
}

export default Navbar
