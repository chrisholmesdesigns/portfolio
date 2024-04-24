import ChrisPicture from '../assets/Work/PersonalPicture.png'
import Work from '../assets/Work/Work.png'
import MoveSpring from '../assets/Work/MovesSpring.png'
import { cat, eyespring, MovieSpring } from '../assets/icons'
import EyeSpring from '../assets/Work/EyeSpring.png'
import MovesSpringText from '../assets/Work/MoveSpringText.png'
import Button from '../components/Button'
import catDash from '../assets/Work/cat.png'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import EDS from '../assets/Work/EDS.png'
import ExperianText from '../assets/Work/ExperianText.png'
import CatepillarText from '../assets/Work/CatepillarText.png'
import EDSText from '../assets/Work/EDSText.png'

function Home() {
  return (
    <div className="page lg:text-start text-center  ">
      <div className=" relative">
        <div className="absolute  inset-0 w-full ">
          <div className="bg-[#C9F2C7] border-b-[4px] border-[#425164] h-[593px] w-full  inset-0"></div>
          <div className="w-full bg-[#F79256]">
            <div className=" w-fit  lg:pt-[0] border  lg:w-full padding mx-auto  h-[400px]">
              {/* <img src={Work} alt="" className="w-[130px] pt-[40px] " /> */}
            </div>
          </div>
        </div>
        <div className="padding  lg:-space-x-[50px] relative flex lg:flex-row flex-col justify-center ">
          <div className="bg-white mt-[150px] lg:mt-[283px] overflow-hidden border-[4px] border-[#425164] h-fit z-10 p-[32px] w-full lg:w-[547px] rounded-[18px]">
            <p className="text-center lg:text-[40px] text-[#425164]">
              <span className="font-bold   stroke-[5px] stroke-current">
                {' '}
                Senior Product Designer
              </span>{' '}
              putting the “fun” back in functional design
            </p>
          </div>
          <img src={ChrisPicture} alt="" className="pt-[50px] lg:pt-[149px]" />
          {/* <img src={Work} alt="" className="w-[130px] opacity-0 pt-[40px] " /> */}
        </div>
      </div>
      <div className="bg-[#F79256]  border-b-[4px] border-[#425164]  padding lg:pt-[100px]  relative h-fit">
        <div className=" bg-white border-b-0 lg:block hidden h-[150px]  border-[#425164] absolute border-r-0 -bottom-1 right-0 w-1/2 border-[4px]"></div>
        <div className="flex lg:space-y-0 space-y-[30px] py-[100px] lg:py-0 lg:flex-row flex-col relative justify-between w-full mx-auto max-w-[1100px]">
          <div className="space-y-[20px]">
            <div className="space-y-[10px]">
              <div className="w-fit mx-auto lg:mx-0">{MovieSpring}</div>
              <div className="uppercase w-fit mx-auto lg:mx-0 stroke text-[32px] text-white">
                <img
                  className="w-[250px] h-fit  lg:mx-0 mx-auto -ml-[5px]"
                  src={MovesSpringText}
                  alt=""
                />
              </div>
              <p className="max-w-[489px] text-[38px] text-white font-medium">
                Get employees moving and help improve their wellbeing.
              </p>
            </div>
            <div className="w-fit lg:block hidden">
              <Button link={'/MoveSpring'}></Button>
            </div>
          </div>
          <img
            src={MoveSpring}
            alt=""
            className=" w-full lg:w-fit lg:h-[533px]"
          />
          <div className="w-fit mx-auto lg:hidden ">
            <Button link={'/MoveSpring'}></Button>
          </div>
        </div>
      </div>
      <div className="relative  padding">
        <div className="absolute -bottom-[4px]  right-0 w-1/2 lg:h-[200px] border-t-[4px] border-l-[4px] border-[#425164] bg-[#F7D456]"></div>
        <div className="flex space-y-[30px] lg:space-y-0 lg:flex-row flex-col py-[80px] lg:py-[130px] relative justify-between w-full mx-auto max-w-[1200px]">
          <div className="space-y-[20px]">
            <div className="space-y-[10px]">
              <div className="w-fit lg:mx-0 mx-auto">{eyespring}</div>
              <div className="uppercase stroke w-fit mx-auto lg:mx-0 text-[32px] text-[#425164]">
                <img
                  className="w-[200px] -ml-[5px]"
                  src={ExperianText}
                  alt=""
                />
              </div>
              <p className="max-w-[489px] text-[28px] lg:text-[38px] text-[#425164] font-medium">
                Help catch fraudsters on a massive scale.
              </p>
            </div>
            <div className="w-fit lg:block hidden">
              <Button link={'/Experian'}></Button>
            </div>
          </div>
          <img
            src={EyeSpring}
            alt=""
            className="w-full lg:w-fit h-fit lg:h-[364px]"
          />
          <div className="w-fit lg:hidden lg:mx-0 mx-auto">
            <Button link={'/Experian'}></Button>
          </div>
        </div>
      </div>
      <div className="relative padding">
        <div className="bg-[#F7D456] -z-10 h-full lg:h-[80%] border-t-[4px] border-b-[4px] border-[#425164] absolute inset-0 w-full"></div>
        <div className="bg-[#F7D456] lg:block hidden border-b-[4px] -translate-y-[4px]  border-r-[4px] border-[#425164] h-[160px] top-[80%] absolute inset-0 w-1/2"></div>

        <div className="flex lg:flex-row space-y-[30px] lg:space-y-0 flex-col lg:pb-0 py-[130px] lg:pt-[130px]  relative justify-between w-full mx-auto max-w-[1200px]">
          <div className="space-y-[20px] relative">
            <div className="space-y-[10px]">
              <div className="mx-auto lg:mx-0 w-fit">{cat}</div>
              <div className="uppercase lg:mx-0 mx-auto w-fit stroke text-[32px] text-[#425164]">
                <img
                  className="w-[250px]  -ml-[5px]"
                  src={CatepillarText}
                  alt=""
                />
              </div>
              <p className="max-w-[513px] text-[28px] lg:text-[38px] text-[#425164] font-medium">
                Help technicians manage mechanical turbines.
              </p>
            </div>
            <Button link={'/Catepillar'}></Button>
          </div>
          <img src={catDash} alt="" className="w-[418px]" />
        </div>
      </div>
      <div className="padding">
        <div className="flex space-y-[30px] lg:space-y-0 lg:flex-row flex-col  pt-[200px] pb-[130px]  relative justify-between w-full mx-auto max-w-[1200px]">
          <div className="space-y-[20px] relative">
            <div className="space-y-[10px]">
              {/* <div className="w-fit mx-auto lg:mx-0">{cat}</div> */}
              <div className="uppercase lg:mx-0 mx-auto w-fit stroke text-[32px] text-[#425164]">
                <img
                  className=" w-[300px] lg:w-[489px]  -ml-[5px]"
                  src={EDSText}
                  alt=""
                />
              </div>
              <p className="max-w-[489px] text-[28px] lg:text-[38px] text-[#425164] font-medium">
                Create design system to be used across a 12+ teams globally.
              </p>
            </div>
            <div className="lg:block hidden w-fit">
              <Button link={'/EDS'}></Button>
            </div>
          </div>
          <img src={EDS} alt="" className="h-[364px]" />
          <div className="lg:hidden mx-auto  w-fit">
            <Button link={'/EDS'}></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
