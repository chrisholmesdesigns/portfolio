import ChrisPicture from '../assets/Work/PersonalPicture.png'
import Work from '../assets/Work/Work.png'
import FunFactText from '../assets/About/FunFactsText.png'
import EducatedDesing from '../assets/About/EducatedInDesign.png'
import EducatedDesignSvg from '../assets/About/EducatedDesignSvg.svg'
import { arrowDown } from '../assets/icons'
import Cat from '../assets/About/Cat.svg'
import Dog from '../assets/About/Dog.svg'
import Dog2 from '../assets/About/Dog2.svg'
import VolleyBall from '../assets/About/VolleyBall.svg'
import PetsText from '../assets/About/PetsText.png'
import VolleyBallText from '../assets/About/VoleyBallText.png'
function About() {
  return (
    <div className="">
      <div className=" relative lg:text-start text-center pb-[40px] lg:pb-[150px]">
        <div className="w-1/2 lg:block hidden bg-[#F79256] h-[180px] border-t-[4px] border-l-[4px] border-[#425164] absolute -bottom-[4px] right-0"></div>
        <div className="absolute inset-0 w-full ">
          <div className="w-full"></div>
        </div>
       <div className="padding lg:flex-row flex-col-reverse lg:space-y-0 space-y-[30px] lg:-space-x-[0px] relative flex justify-center ">
          <div>
            <div className="bg-white mt-[30px] lg:mt-[180px] overflow-hidden border-[4px] border-[#425164] h-fit z-10 p-[24px] lg:p-[32px] rounded-[18px] flex flex-wrap lg:flex-nowrap items-center">
            <div>
              <p className="text-center text-[28px] lg:text-[40px] text-[#425164]">
                <span className="font-bold stroke-[5px] stroke-current">
                 Senior Product Designer
                </span>{' '}
                putting the “fun” back in functional design
              </p>
              <p className="max-w-[501px] text-[#425164]">
              My ability to create functional design is honed through years of
              experience, a deep understanding of user needs, and a passion for
              innovation. I excel in translating complex concepts into intuitive and
              user-friendly interfaces that prioritize usability and accessibility.
              <br />
               <br /> My process begins with thorough research and analysis, allowing me
              to identify pain points and opportunities for improvement. Leveraging
              this insight, I collaborate closely with cross-functional teams to
              conceptualize and iterate on designs that not only meet user requirements
              but also align with business goals and technical constraints.
             </p>
            </div>
  <img src={ChrisPicture} alt="" className="pt-[50px] w-[150px] h-[150px]" />
</div>
            <div className="flex pt-[60px] items-center space-x-[30px]">
              <img
                src={FunFactText}
                className="w-[100px] mx-0 lg:w-[140px] "
                alt=""
              />
              {arrowDown}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F79256] lg:text-start text-center space-y-[89px] py-[100px] padding min-h-[400px] border-t-[4px] border-t-[#425164]">
        <div className="flex lg:space-y-0 space-y-[30px] lg:flex-row flex-col justify-between">
          <div className="max-w-[580px] space-y-[10px]">
            <img src={EducatedDesing} className="w-[420px]" alt="" />
            <p className="text-[22px] lg:text-[38px] font-medium text-white">
              Went to San Diego State University and got a degree in Graphic
              Design
            </p>
          </div>
          <div className="w-full lg:w-[642px] flex justify-center">
            <div className="bg-white bg-opacity-25 w-[271px] flex items-center justify-center h-[196px] rounded-[8px] border-[4px] border-white">
              <img src={EducatedDesignSvg} alt="" />
            </div>
          </div>
        </div>
        <div className="flex lg:space-y-0 space-y-[30px] lg:flex-row flex-col justify-between">
          <div className="max-w-[580px] space-y-[10px]">
            <img src={PetsText} className="w-[397px]" alt="" />
            <ul className="text-[22px] lg:text-[38px] lg:list-disc lg:pl-[42px] font-medium text-white">
              <li>French Bulldog, Rocco</li>
              <li>Labrador Retriever, Penny </li>
              <li>Torti Cat, Sopapilla</li>
            </ul>
          </div>
          <div className="lg:w-[642px] w-full space-x-[28px] flex justify-center">
            <div className="bg-white w-1/3 lg:w-[200px] bg-opacity-25 aspect-square flex items-center justify-center h-[196px] rounded-[8px] border-[4px] border-white">
              <img src={Dog} alt="" />
            </div>
            <div className="bg-white w-1/3 lg:w-[200px] bg-opacity-25 aspect-square flex items-center justify-center h-[196px] rounded-[8px] border-[4px] border-white">
              <img src={Dog2} alt="" />
            </div>
            <div className="bg-white w-1/3 lg:w-[200px] bg-opacity-25 aspect-square flex items-center justify-center h-[196px] rounded-[8px] border-[4px] border-white">
              <img src={Cat} alt="" />
            </div>
          </div>
        </div>{' '}
        <div className="flex lg:space-y-0 space-y-[30px] lg:flex-row flex-col justify-between">
          <div className="max-w-[580px] space-y-[10px]">
            <img src={VolleyBallText} className="w-[400px]" alt="" />
            <p className="text-[22px] lg:text-[38px] font-medium text-white">
              Plays in leagues and is not good but loves it nonetheless
            </p>
          </div>
          <div className="w-full lg:w-[642px] flex justify-center">
            <div className="bg-white bg-opacity-25 w-[271px] flex items-center justify-center h-[196px] rounded-[8px] border-[4px] border-white">
              <img src={VolleyBall} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
