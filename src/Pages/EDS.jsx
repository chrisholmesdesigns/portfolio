import Button from '../components/Button'

import EDSText from '../assets/EDS/EDSText.png'
import EDSOne from '../assets/EDS/EDS.png'
import EDSTwo from '../assets/EDS/EDSTwo.png'
import EDSThree from '../assets/EDS/EDSThree.png'
import PhonesTwo from '../assets/MoveSpring/PhonesTwo.png'
import Designer from '../assets/MoveSpring/Designer.png'
import { Link } from 'react-router-dom'
function EDS() {
  return (
    <div className="pt-[120px] lg:text-start text-center lg:pt-[200px] absolute top-0 w-full left-0 bg-white  min-h-screen">
      <section className="space-y-[50px] lg:space-y-[70px]">
        <div className="padding">
          <Button
            link={'/'}
            text="Take me Back to home base"
            width={'fit-content'}
            padding={'0'}
            textSize={' text-[16px] lg:text-[24px] '}
          ></Button>
        </div>
        <div className="space-y-[20px] lg:space-y-[86px] padding relative">
          <div className="space-y-[20px]">
            <img
              src={EDSText}
              className="w-[300px] lg:mx-0  mx-auto lg:w-[488px] -translate-x-2"
              alt=""
            />
            <p className="text-[24px] text-[#425164] font-medium">
              Create design system to be used across a 12+ teams for varying
              devices and use cases
            </p>
          </div>
          <img src={EDSOne} alt="" className="relative   z-10" />
          <div className="absolute border-t-[4px] border-[#425164] bottom-0 left-0 h-[100px] lg:h-[200px] bg-[#F8F9FB]  w-full"></div>
        </div>
      </section>
      <section className="py-[80px] lg:py-[143px] border-b-[#425164] border-b-[4px] relative bg-[#F8F9FB] padding  ">
        <div className="max-w-[552px] space-y-[20px] text-[#425164]">
          <div className="">
            <p className="text-[32px] font-[700]">Role</p>
            <ul className="lg:list-disc lg:space-y-0 space-y-[5px] text-[24px] font-medium lg:pl-[40px]">
              <li>
                Senior Product Designer alongside team of 3 designers, 1
                developer, 1 UX Researcher, and 1 UX Writer
              </li>
              <li>
                Collaborate globally with dozens of teams to ensure seamless
                implementation
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[32px] font-[700]">Platforms</p>
            <p className="text-[24px] max-w-[498px] font-medium ">
              Mobile and Web
            </p>
          </div>
        </div>
        <div className="w-1/2  lg:block hidden absolute -bottom-[4px] border-t-[4px] border-l-[4px] border-[#425164] right-0 h-[143px] bg-white"></div>
      </section>
      <section className=" text-[#425164]  border-b-[4px] border-[#425164] flex  justify-center bg-white relative">
        <div className="p-[30px] lg:p-[73px] space-y-[20px]">
          <p className="text-[32px]  font-[700]">
            01 - Modular Components & Patterns
          </p>
          <img
            src={EDSTwo}
            alt=""
            className="pl-0 lg:p-[73px] lg:hidden mx-auto  w-full h-fit"
          />
          <ul className="lg:list-disc  max-w-[552px] text-[24px] font-medium lg:pl-[40px]">
            <li>
              Designed the system with an emphasis on accessibility. This is a
              passion of mine and we had clients who required a certain level of
              accessibility
            </li>
            <li>
              Provided hundreds of components and patterns from buttons to
              complex forms in order to address every possible UI need.
            </li>
            <li>
              Created an entire code library using React for each component and
              also utilized Tailwind to account for variability per product.
            </li>
          </ul>{' '}
          <p className="lg:pl-[40px]  max-w-[552px] text-[16px] font-medium">
            Creating a design system from scratch that is both accessible and
            comprehensive is a meticulous endeavor that prioritizes inclusivity
            and usability. This involved implementing features such as color
            contrast ratios, keyboard navigation, and screen reader
            compatibility to guarantee that the interface is perceivable and
            operable for individuals with diverse needs. Simultaneously,
            designers focus on crafting a comprehensive set of components,
            patterns, and guidelines that cover every aspect of the user
            experience, from typography and layout to interactions and
            animations. The design system evolved to accommodate various use
            cases and scenarios, empowering designers and developers to create
            cohesive and user-friendly digital experiences across platforms and
            devices.
          </p>
        </div>
        <img
          src={EDSTwo}
          alt=""
          className="pl-0 p-[73px] lg:block hidden w-1/2 h-fit"
        />
        <div className="absolute lg:block hidden w-1/2  h-[156px] translate-y-[4px] bg-[#F8F9FB] bottom-0 right-0 border-t-[4px] border-l-[4px] border-l-[#425164] border-t-[#425164]"></div>
      </section>
      <section className="flex lg:flex-row flex-col padding border-b-[4px] border-b-[#425164] relative space-y-[50px] lg:space-x-[73px] text-[#425164] py-[73px] bg-[#F8F9FB] justify-center">
        <div className=" space-y-[20px]">
          <p className="text-[32px]  font-[700]">02 - Global Influence</p>
          <img
            src={EDSThree}
            className="w-full lg:hidden  lg:max-w-[700px] pt-[20px] h-fit mx-auto"
            alt=""
          />
          <ul className="lg:list-disc  max-w-[600px] text-[24px] font-medium lg:pl-[40px]">
            <li>
              Met and collaborated regularly with teams in Malaysia, India,
              Bulgaria, and the UK to ensure successful implementation globally.
            </li>
            <li>
              Appointed designers in each territory to encourage evangelism and
              advocacy for the system.
            </li>
            <li>
              Synced up with leadership for check ins to be sure all brand
              guidelines were adhered to.
            </li>
          </ul>{' '}
          <p className="lg:pl-[40px]  max-w-[600px] text-[16px] font-medium">
            Creating a design system that was utilized globally to standardize
            is a testament to the power of collaboration, consistency, and
            scalability. It begins with a holistic approach that involves
            gathering input from diverse teams across different regions,
            understanding their unique needs and challenges. Through iterative
            design and refinement, designers craft a comprehensive set of
            guidelines, components, and patterns that encapsulate the
            organization's brand identity while accommodating cultural nuances
            and regional preferences. Rigorous testing ensures that the design
            system is adaptable and resilient, capable of scaling seamlessly
            across various platforms, languages, and devices. As teams worldwide
            embrace the design system, they contribute to its evolution, sharing
            insights and best practices to enrich its functionality and
            usability.
          </p>
        </div>
        <img
          src={EDSThree}
          className="w-full lg:block hidden lg:max-w-[50%] pt-[20px] h-fit mx-auto"
          alt=""
        />
        <div className="absolute lg:block hidden bottom-0 translate-y-[4px] border-t-[4px] w-1/2 border-l-[4px] border-[#425164] bg-white  right-0 h-[156px]"></div>
      </section>
      <div className="py-[50px] lg:py-[100px]">
        <div className="w-fit space-y-[24px] mx-auto text-center">
          <Button
            link={'/movespring'}
            text="Let’s see the next project"
            bgColor="#F79256"
            width={'fit-content'}
            textSize={'24px'}
            padding={'0'}
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
export default EDS
