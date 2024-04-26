import { useState } from 'react'
import Button from '../components/Button'
function Contact() {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [StarSign, setStarSign] = useState('')
  const [More, setMore] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:chrisholmesdesigns@gmail.com?subject=User Information&body=First Name: ${FirstName}%0D%0ALast Name: ${LastName}%0D%0AStar Sign: ${StarSign}%0D%0ATell Me More: ${More}`;
    window.location.href = mailtoLink;
    // Assuming the mailtoLink always redirects to the email client,
    // you can consider the submission successful immediately
    if (success) {
        // If the mail client opened, consider the submission successful
        setIsSubmitted(true);
    } else {
        // Handle error if the mail client did not open
        console.error('Failed to open mail client');
      console.log('The submit does not exist!')
        // You might want to display an error message to the user here
    }
  }

  return (
    <div>
      <div className="min-h-[500px] pt-[200px] pb-[350px] relative w-full bg-[#F7D456] ">
        <div className="h-[140px] lg:block hidden border-t-[4px]  absolute -bottom-[4px] bg-[#A3AAB3] border-[#425164] w-1/2 right-0 border-l-[4px] border-[]"></div>
        <div className="padding  space-y-[30px] lg:space-y-[50px] h-fit lg:h-[313px] mx-auto  ">
          <div className="flex lg:flex-row space-y-[30px] flex-col h-full lg:space-x-[53px]">
            <div className="flex m-[16px] justify-between lg:space-y-0 flex-col">
              <Button
                placeHolder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                Editable={true}
                width={'100%'}
              ></Button>
              <Button
                placeHolder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                Editable={true}
                width={'100%'}
              ></Button>{' '}
              <Button
                placeHolder="star sign"
                onChange={(e) => setStarSign(e.target.value)}
                Editable={true}
                width={'100%'}
              ></Button>
            </div>
            <div className="relative w-full h-full">
              <Button
                TextArea={true}
                onChange={(e) => setMore(e.target.value)}
                text="TELL ME MORE..."
                placeHolder="Tell me more..."
                rounded="25px"
                width={'100%'}
                height={'100%'}
                style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                ></Button>
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="w-auto pt-[24px]">
            <Button
              Editable={false}
              type="submit"
              width={'100%'}
              bgColor="#425164"
              text="SUBMIT"
              mainBgCol="#F79256"
              textCol="white"
            ></Button>
          </form>
          {isSubmitted && <p className="lg:text-[48px] text-[${textSm}px] absolute inset-12 items-center justify-center placeholder-current bg-transparent focus:outline-none text-center text-[#228B22] w-auto font-[800] uppercase`">Form submitted successfully!</p>}
        </div>
      </div>
    </div>
  )
}

export default Contact
