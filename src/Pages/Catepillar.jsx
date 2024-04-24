import Button from '../components/Button'
import CatepillarText from '../assets/CatePillar/CatepillarText.png'
import CatepillarDashTwo from '../assets/CatePillar/DashTwo.png'
import CatepillarDash from '../assets/CatePillar/DashOne.png'
import CatepillarThree from '../assets/CatePillar/DashThree.png'
import PhonesTwo from '../assets/MoveSpring/PhonesTwo.png'
import Designer from '../assets/MoveSpring/Designer.png'
import { Link } from 'react-router-dom'
function Catepillar() {
  return (
    <div className="pt-[120px] lg:text-start text-center lg:pt-[200px] absolute top-0 w-full left-0 bg-white  min-h-screen">
      <section className="space-y-[50px] lg:space-y-[70px]">
        <div className="padding">
          <Button
            link={'/'}
            text="Take me Back to home base"
            width={'fit-content'}
            padding={'0 15px'}
            textSize={' text-[16px] lg:text-[24px] '}
            height={'56px'}
          ></Button>
        </div>
        <div className="space-y-[20px] lg:space-y-[86px] padding relative">
          <div className="space-y-[20px]">
            <img
              src={CatepillarText}
              className="w-[160px] lg:mx-0  mx-auto lg:w-[250px] -translate-x-2"
              alt=""
            />
            <p className="text-[24px] text-[#425164] font-medium">
              Help catch fraudsters across the globe on a massive scale
            </p>
          </div>
          <img src={CatepillarDash} alt="" className="relative   z-10" />
          <div className="absolute border-t-[4px] border-[#425164] bottom-0 left-0 h-[100px] lg:h-[200px] bg-[#F8F9FB]  w-full"></div>
        </div>
      </section>
      <section className="py-[80px] lg:py-[143px] border-b-[#425164] border-b-[4px] relative bg-[#F8F9FB] padding  ">
        <div className="max-w-[552px] space-y-[20px] text-[#425164]">
          <div className="">
            <p className="text-[32px] font-[700]">Role</p>
            <ul className="lg:list-disc lg:space-y-0 space-y-[5px] text-[24px] font-medium lg:pl-[40px]">
              <li>UI/Visual Product Designer</li>
              <li>
                Collaborate cross-functionally with stakeholders and multiple
                vendors to ensure accurate implementation
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[32px] font-[700]">Platforms</p>
            <p className="text-[24px] max-w-[498px] font-medium ">
              Mobile IOS & Android, Web, and Tablet
            </p>
          </div>
        </div>
        <div className="w-1/2   lg:block hidden absolute -bottom-[4px] border-t-[4px] border-l-[4px] border-[#425164] right-0 h-[143px] bg-white"></div>
      </section>
      <section className=" text-[#425164]   border-[#425164] flex  justify-center bg-white relative">
        <div className="p-[30px] lg:p-[73px] space-y-[20px]">
          <p className="text-[32px]  font-[700]">
            01 - Make monitoring billion dollar fleet systems an easy experience
          </p>
          <img
            src={CatepillarDashTwo}
            alt=""
            className="pl-0 lg:pr-0  lg:p-[73px] lg:hidden mx-auto  w-full h-fit"
          />
          <ul className="lg:list-disc  max-w-[552px] text-[24px] font-medium lg:pl-[40px]">
            <li>
              Created a way for fleet managers (users) to look at their gas
              turbine’s <span className="font-[700]">performance</span> and
              <span className="font-[700]">report</span> any issues easily
            </li>
            <li>
              Used standard design principals like hierarchy, relation, and
              categorization to make navigation a quick experience.
            </li>
          </ul>{' '}
          <p className="lg:pl-[40px]  max-w-[552px] text-[16px] font-medium">
            Designing a monitoring system for gas turbines is a meticulous
            endeavor that blends cutting-edge technology with engineering
            expertise to ensure optimal performance and reliability. The team
            and I created a comprehensive monitoring solution that collects
            real-time data from sensors embedded within the turbine system. The
            interface of the monitoring system is carefully crafted to provide
            operators with intuitive dashboards and visualizations, enabling
            them to monitor turbine health, diagnose issues, and make informed
            decisions to maximize uptime and productivity. Through continuous
            refinement and innovation, designers strive to create a monitoring
            system that not only ensures the smooth operation of gas turbines
            but also contributes to the longevity and sustainability of critical
            energy infrastructure.
          </p>
        </div>
        <img
          src={CatepillarDashTwo}
          alt=""
          className=" p-[73px] lg:block relative z-10 -translate-y-[150px]  hidden w-1/2 h-fit"
        />
        <div className="absolute border-[#425164] border-b-[4px] bottom-[100px] h-[200px] w-full  right-0 ">
          <div className="absolute border-[#425164] w-1/2 border-t-[4px] border-l-[4px] border-[] bg-[#F8F9FB]  right-0 top-[4.1px]   h-full"></div>
        </div>
        <div className="absolute h-[100px] bottom-0 w-full bg-[#F8F9FB]"></div>
      </section>
      <section className="flex lg:flex-row flex-col padding border-b-[4px] border-b-[#425164] relative space-y-[50px] lg:space-x-[73px] text-[#425164] py-[73px] bg-[#F8F9FB] justify-center">
        <div className=" space-y-[20px]">
          <p className="text-[32px]  font-[700]">
            02 - Understanding the product
          </p>
          <img
            src={CatepillarThree}
            className="w-full lg:hidden  lg:max-w-[700px] pt-[20px] h-fit mx-auto"
            alt=""
          />
          <ul className="lg:list-disc  max-w-[600px] text-[24px] font-medium lg:pl-[40px]">
            <li>
              Worked with several user researchers to{' '}
              <span className="font-[700]">conduct testing</span> and{' '}
              <span className="font-[700]">implement</span>
              feedback into designs
            </li>
            <li>
              Met with fleet managers to discuss pain points and learn what
              enhancements would{' '}
              <span className="font-[700]">increase functionality</span>.
            </li>
            <li>
              Met with mechanical engineering to{' '}
              <span className="font-bold">learn how turbines operate</span> and
              how the software{' '}
              <span className="font-bold">works in tandem</span> to provide data
              back to fleet managers.
            </li>
          </ul>{' '}
          <p className="lg:pl-[40px]  max-w-[600px] text-[16px] font-medium">
            Learning about gas turbines to create a monitoring system is a
            multifaceted journey that begins with a deep dive into the
            principles of turbine operation, mechanical engineering, and
            thermodynamics. It involves studying the intricate components of gas
            turbines, from the compressor and combustion chamber to the turbine
            itself, understanding how each part functions within the overall
            system. <br />
            <br /> Additionally, I dove into conversations with fleet managers
            to get a clearer picture on where current issues were occurring and
            how to speed up their workflow. By continuously learning and
            iterating, I strived to create a monitoring system that enhances
            efficiency, reliability, and safety in gas turbine applications.
          </p>
        </div>
        <img
          src={CatepillarThree}
          className="w-full lg:block hidden lg:max-w-[50%] pt-[20px] h-fit mx-auto"
          alt=""
        />
        <div className="absolute lg:block hidden bottom-0 translate-y-[4px] border-t-[4px] w-1/2 border-l-[4px] border-[#425164] bg-white  right-0 h-[156px]"></div>
      </section>
      <div className="py-[50px] lg:py-[100px]">
        <div className="w-fit space-y-[24px] mx-auto text-center">
          <Button
            link={'/EDS'}
            height={'50px'}
            text="Let’s see the next project"
            bgColor="#F79256"
            width={'fit-content'}
            textSize={'24px'}
            padding={'0 15px'}
          ></Button>
          <div>
            <Link
              to="/"
              className="text-[24px] text-[#7C8693] font-bold uppercase"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Catepillar
