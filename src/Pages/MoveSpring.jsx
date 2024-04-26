import Button from '../components/Button'
import MoveSpringText from '../assets/Work/MoveSpringText.png'
import PhonesOne from '../assets/MoveSpring/PhonesOne.png'
import PhonesTwo from '../assets/MoveSpring/PhonesTwo.png'
import Designer from '../assets/MoveSpring/Designer.png'
import { Link } from 'react-router-dom'
function MoveSpring() {
  return (
    <div className="pt-[120px] lg:text-start text-center lg:pt-[200px] absolute top-0 w-full left-0 bg-white  min-h-screen">
      <section className="space-y-[50px] lg:space-y-[70px]">
        <div className="padding">
          <Button
            llink={'/'}
            text="Take me Back to home base"
            width={'fit-content'}
            padding={'0'}
            textSize={' text-[16px] lg:text-[24px] '}
          ></Button>
        </div>
        <div className="space-y-[20px] lg:space-y-[86px] padding relative">
          <div className="space-y-[20px]">
            <img
              src={MoveSpringText}
              className="w-[160px] lg:mx-0  mx-auto lg:w-[250px] -translate-x-2"
              alt=""
            />
            <p className="text-[24px] text-[#425164] font-medium">
              Get employees moving and help improve their wellbeing
            </p>
          </div>
          <img src={PhonesOne} alt="" className="relative   z-10" />
          <div className="absolute border-t-[4px] border-[#425164] bottom-0 left-0 h-[100px] lg:h-[200px] bg-[#F8F9FB]  w-full"></div>
        </div>
      </section>
      <section className="py-[80px] lg:py-[143px] border-b-[#425164] border-b-[4px] relative bg-[#F8F9FB] padding  ">
        <div className="max-w-[552px] space-y-[20px] text-[#425164]">
          <div className="">
            <p className="text-[32px] font-[700]">Role</p>
            <ul className="lg:list-disc lg:space-y-0 space-y-[5px] text-[24px] font-medium lg:pl-[40px]">
              <li>Lead design team and provide mentorship to junior designers.</li>
              <li>
                Create 12+ new features across platforms and maintain existing
                ones.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[32px] font-[700]">Platforms</p>
            <p className="text-[24px] max-w-[498px] font-medium ">
              Mobile IOS & Android | Web | Admin portal | Internal Management
              Tool
            </p>
          </div>
        </div>
        <div className="w-1/2  lg:block hidden absolute -bottom-[4px] border-t-[4px] border-l-[4px] border-[#425164] right-0 h-[143px] bg-white"></div>
      </section>
      <section className=" text-[#425164]  border-b-[4px] border-[#425164] flex  justify-center bg-white relative">
        <div className="p-[30px] lg:p-[73px] space-y-[20px]">
          <p className="text-[32px]  font-[700]">
            01 - Creating new opportunities
          </p>
          <img
            src={PhonesTwo}
            alt=""
            className="pl-0 lg:p-[73px] lg:hidden mx-auto  w-full h-fit"
          />
          <ul className="lg:list-disc  max-w-[552px] text-[24px] font-medium lg:pl-[40px]">
            <li>
              Created{' '}
              <span className="font-[700]">
                Monthly Step Goal, On-Demand Content, Discounts, Rewards
              </span>
              and <span className="font-[700]">Wellbeing Calendar</span> from
              scratch to address client needs and expectations.
            </li>
            <li>
              {' '}
              Continually improved and{' '}
              <span className="font-[700]">enhanced</span> these features with
              incremental releases.
            </li>
            <li>
              {' '}
              <span className="font-[700]">Mentored</span> Junior Designers to
              create new <span className="font-[700]">Benefits</span> feature
            </li>
          </ul>{' '}
          <p className="lg:pl-[40px]  max-w-[552px] text-[16px] font-medium">
            Designing new features for a wellbeing mobile app is a delicate
            dance between innovation and empathy. We began with brainstorming
            sessions where creativity flourishes, as developers and designers
            explore novel ways to address mental, emotional, and physical health
            concerns. <br /> <br /> Ideas were tested rigorously, ensuring they
            not only offer value but also resonate with users on a personal
            level. Whether it's integrating meditation exercises, habit tracking
            tools, or community support forums, each new feature was carefully
            crafted to empower users on their journey towards wellbeing. <br />{' '}
            <br />
            Ultimately, the goal was not just to introduce features, but to
            cultivate a supportive ecosystem that nurtures and uplifts users in
            their pursuit of a healthier, happier life.
          </p>
        </div>
        <img
          src={PhonesTwo}
          alt=""
          className="pl-0 p-[73px] lg:block hidden w-1/2 h-fit"
        />
        <div className="absolute lg:block hidden w-1/2  h-[156px] translate-y-[4px] bg-[#F8F9FB] bottom-0 right-0 border-t-[4px] border-l-[4px] border-l-[#425164] border-t-[#425164]"></div>
      </section>
      <section className="flex lg:flex-row flex-col padding border-b-[4px] border-b-[#425164] relative space-y-[50px] lg:space-x-[73px] text-[#425164] py-[73px] bg-[#F8F9FB] justify-center">
        <div className=" space-y-[20px]">
          <p className="text-[32px]  font-[700]">02 - Growing young talent</p>
          <img
            src={Designer}
            className="w-full lg:hidden  lg:max-w-[700px] pt-[20px] h-fit mx-auto"
            alt=""
          />
          <ul className="lg:list-disc  max-w-[600px] text-[24px] font-medium lg:pl-[40px]">
            <li>
              By <span className="font-[700]">managing</span> and{' '}
              <span className="font-[700]">leading</span> our team of designers,
              I was able nurture their confidence and their sense of autonomy.
            </li>
            <li>
              Several designers have gained new soft skills such as{' '}
              <span className="font-[700]">presenting</span> and leading design
              critiques.
            </li>
            <li>
              {' '}
              <span className="font-[700]">Mentored</span> Junior Designers to
              create new <span className="font-[700]">Benefits</span> feature
            </li>
          </ul>{' '}
          <p className="lg:pl-[40px]  max-w-[600px] text-[16px] font-medium">
            It starts with fostering an environment where creativity thrives,
            allowing mentees to explore their ideas freely while providing
            constructive feedback and direction. Through one-on-one sessions and
            group workshops,I’d share insights, best practices, and industry
            trends, empowering the mentees to think critically and innovatively
            about user needs and experiences.
            <br /> <br /> Mentoring extends beyond technical skills,
            encompassing soft skills like communication, problem-solving, and
            teamwork, essential for navigating the complexities of app
            development.
            <br /> <br />
            As I nurture the talents and passions of designers, they pave the
            way for a new generation to make meaningful contributions to the
            ever-evolving landscape of digital wellbeing solutions.
          </p>
        </div>
        <img
          src={Designer}
          className="w-full lg:block hidden lg:max-w-[50%] pt-[20px] h-fit mx-auto"
          alt=""
        />
        <div className="absolute lg:block hidden bottom-0 translate-y-[4px] border-t-[4px] w-1/2 border-l-[4px] border-[#425164] bg-white  right-0 h-[156px]"></div>
      </section>
      <div className="py-[50px] lg:py-[100px]">
        <div className="w-fit space-y-[24px] mx-auto text-center">
          <Button
            link={'/Experian'}
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
export default MoveSpring
