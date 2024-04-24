import { useState } from 'react'
import Button from '../components/Button'
function Contact() {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [StarSign, setStarSign] = useState('')
  const [More, setMore] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:chrisholmesdesigns@gmail.com?subject=User Information&body=First Name: ${FirstName}%0D%0ALast Name: ${LastName}%0D%0AStar Sign: ${StarSign}%0D%0ATell Me More: ${More}`
    window.location.href = mailtoLink
  }
  return (
    <div>
      <div className="min-h-[500px] pt-[200px] pb-[350px] relative w-full bg-[#F7D456] ">
        <div className="h-[140px] lg:block hidden border-t-[4px]  absolute -bottom-[4px] bg-[#A3AAB3] border-[#425164] w-1/2 right-0 border-l-[4px] border-[]"></div>
        <div className=" lg:w-[800px] padding  space-y-[30px] lg:space-y-[50px] h-fit lg:h-[313px] mx-auto  ">
          <div className="flex lg:flex-row space-y-[30px] flex-col h-full lg:space-x-[53px]">
            <div className="flex justify-between space-y-[30px] lg:space-y-0 flex-col">
              <Button
                placeHolder="First Name"
                onChange={(e) => setFirstName(e)}
                Editable={true}
                width={'100%'}
              ></Button>
              <Button
                placeHolder="Last Name"
                onChange={(e) => setLastName(e)}
                Editable={true}
                width={'100%'}
              ></Button>{' '}
              <Button
                placeHolder="star sign"
                onChange={(e) => setStarSign(e)}
                Editable={true}
                width={'100%'}
              ></Button>
            </div>
            <div className="relative w-[250px] h-[250px]">
              <Button
                Editable={true}
                onChange={(e) => setMore(e)}
                text="TELL ME MORE..."
                placeHolder="Tell me more..."
                rounded="25px"
                style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
                ></Button>
          </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="w-full">
            <Button
              Editable={false}
              width={'100%'}
              bgColor="#425164"
              text="SUBMIT"
              mainBgCol="#F79256"
              textCol="white"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
