import { linkedIn } from '../assets/icons'

function Footer() {
  return (
    <footer className="h-[145px] flex items-center justify-center bg-[#A3AAB3] border-t-[4px] border-t-[#425164]">
      <a href="https://www.linkedin.com/in/chrisholmesdesigns/" target="_blank" rel="noopener noreferrer">
        {linkedIn}
      </a>
    </footer>
  )
}

export default Footer
