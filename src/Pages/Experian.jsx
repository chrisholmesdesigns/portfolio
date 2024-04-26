import Button from '../components/Button'
import ExperianText from '../assets/Experian/ExperianText.png'
import ExperianDash from '../assets/Experian/ExperianDash.png'
import ExperianDashTwo from '../assets/Experian/ExperianDashTwo.png'
import ExperianDashThree from '../assets/Experian/ExperianDashThree.png'
import PhonesTwo from '../assets/MoveSpring/PhonesTwo.png'
import Designer from '../assets/MoveSpring/Designer.png'
import { Link } from 'react-router-dom'
function Experian() {
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
              src={ExperianText}
              className="w-[160px] lg:mx-0  mx-auto lg:w-[250px] -translate-x-2"
              alt=""
            />
            <p className="text-[24px] text-[#425164] font-medium">
              Help catch fraudsters across the globe on a massive scale
            </p>
          </div>
          <img src={ExperianDash} alt="" className="relative   z-10" />
          <div className="absolute border-t-[4px] border-[#425164] bottom-0 left-0 h-[100px] lg:h-[200px] bg-[#F8F9FB]  w-full"></div>
        </div>
      </section>
      <section className="py-[80px] lg:py-[143px] border-b-[#425164] border-b-[4px] relative bg-[#F8F9FB] padding  ">
        <div className="max-w-[552px] space-y-[20px] text-[#425164]">
          <div className="">
            <p className="text-[32px] font-[700]">Role</p>
            <ul className="lg:list-disc lg:space-y-0 space-y-[5px] text-[24px] font-medium lg:pl-[40px]">
              <li>Lead designer on flagship product, CrossCore</li>
              <li>
                Collaborate cross-functionally with 6 scrum teams and provide
                designs to PMs and dev
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[32px] font-[700]">Platforms</p>
            <p className="text-[24px] max-w-[498px] font-medium ">
              Browser-based software
            </p>
          </div>
        </div>
        <div className="w-1/2  lg:block hidden absolute -bottom-[4px] border-t-[4px] border-l-[4px] border-[#425164] right-0 h-[143px] bg-white"></div>
      </section>
      <section className=" text-[#425164]  border-b-[4px] border-[#425164] flex  justify-center bg-white relative">
        <div className="p-[30px] lg:p-[73px] space-y-[20px]">
          <p className="text-[32px]  font-[700]">
            01 - Making a complex system, easy
          </p>
          <img
            src={ExperianDashTwo}
            alt=""
            className="pl-0 lg:p-[73px] lg:hidden mx-auto  w-full h-fit"
          />
          <ul className="lg:list-disc  max-w-[552px] text-[24px] font-medium lg:pl-[40px]">
            <li>
              <span className="font-[700]">Provided</span> key flow for
              actioning a case as fraud and enabling the user to have{' '}
              <span className="font-[700]">rapid responses</span>.
            </li>
            <li>
              Worked alongside Product Managers, Key Stakeholder, Researchers,
              and other Designers to ensure the product was state-of-the-art and
              <span className="font-[700]">massively functional</span>.
            </li>
            <li>
              Used design system to create a{' '}
              <span className="font-[700]">modern UI</span> that had to be
              <span className="font-[700]">extremely data dense</span> while
              still being <span className="font-[700]">consumable</span>.
            </li>
          </ul>{' '}
          <p className="lg:pl-[40px]  max-w-[552px] text-[16px] font-medium">
            Designing a fraud detection software that is both complex and
            data-heavy demanded a comprehensive approach that merged
            cutting-edge user research with meticulous data analysis. <br />
            <br /> It began with the collection of extensive datasets comprising
            transaction records, user behaviors, and historical fraud instances.
            These datasets serve as the foundation for developing intricate
            algorithms and machine learning models capable of detecting subtle
            patterns indicative of fraudulent activity. <br />
            <br /> The complexity arose from the need to sift through immense
            volumes of data while discerning nuanced correlations that might
            signal potential fraud. I strived to create a robust fraud detection
            solution that provided real-time protection against financial
            threats while minimizing false positives.
          </p>
        </div>
        <img
          src={ExperianDashTwo}
          alt=""
          className="pl-0 p-[73px] lg:block hidden w-1/2 h-fit"
        />
        <div className="absolute lg:block hidden w-1/2  h-[156px] translate-y-[4px] bg-[#F8F9FB] bottom-0 right-0 border-t-[4px] border-l-[4px] border-l-[#425164] border-t-[#425164]"></div>
      </section>
      <section className="flex lg:flex-row flex-col padding border-b-[4px] border-b-[#425164] relative space-y-[50px] lg:space-x-[73px] text-[#425164] py-[73px] bg-[#F8F9FB] justify-center">
        <div className=" space-y-[20px]">
          <p className="text-[32px]  font-[700]">
            02 - Having a seat at the table
          </p>
          <img
            src={ExperianDashThree}
            className="w-full lg:hidden  lg:max-w-[700px] pt-[20px] h-fit mx-auto"
            alt=""
          />
          <ul className="lg:list-disc  max-w-[600px] text-[24px] font-medium lg:pl-[40px]">
            <li>
              I ensured the flagship product{' '}
              <span className="font-[700]">adhered</span> to all brand
              standards, security concerns and system guidelines at all times.
            </li>
            <li>
              Dozens of features were displayed in organized,{' '}
              <span className="font-[700]">reusable patterns</span>
              that were modular and sleek.
            </li>
            <li>
              By <span className="font-[700]">creating and distributing</span>{' '}
              the <span className="font-[700]">Experian Design System</span>, my
              team and I placed design on the map in the organization.
            </li>
          </ul>{' '}
          <p className="lg:pl-[40px]  max-w-[600px] text-[16px] font-medium">
            Adhering to brand and design system guidelines while designing a
            fraud detection software was paramount for maintaining consistency,
            trust, and usability. <br />
            <br /> With a focus on establishing a cohesive user experience, I
            meticulously integrated the brand's visual identity and design
            principles into every aspect of the software's interface. <br />
            <br /> This entailed incorporating brand colors, typography, and
            iconography in a way that enhances clarity and intuitiveness while
            fostering a sense of familiarity for users. <br />
            <br /> By staying faithful to these guidelines, I not only reinforce
            the brand's identity but also instilled confidence in users by
            presenting a professional and unified interface that facilitated
            efficient fraud detection and mitigation.
          </p>
        </div>
        <img
          src={ExperianDashThree}
          className="w-full lg:block hidden lg:max-w-[50%] pt-[20px] h-fit mx-auto"
          alt=""
        />
        <div className="absolute lg:block hidden bottom-0 translate-y-[4px] border-t-[4px] w-1/2 border-l-[4px] border-[#425164] bg-white  right-0 h-[156px]"></div>
      </section>
      <div className="py-[50px] lg:py-[100px]">
        <div className="w-fit space-y-[24px] mx-auto text-center">
          <Button
            link={'/Catepillar'}
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
export default Experian
