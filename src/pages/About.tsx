import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Link } from 'react-router-dom'

import { ArrowLeft } from "lucide-react"

const handleMouseEnter = (e: React.MouseEvent) => {
  e.currentTarget.classList.add('is-hovering')
}
const handleMouseLeave = (e: React.MouseEvent) => {
  e.currentTarget.classList.remove('is-hovering')
}

const About = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center gap-8">
      <div>
        <h1 className="text-white">About Content</h1>
      </div>
      <div>
        <h1 className="text-white">Another About Content</h1>
      </div>
      </div>

      <div className="container mx-auto flex justify-center items-center mt-5">
        <Button className={buttonVariants({ variant: "secondary" })} size="default" asChild
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4"/> Back
          </Link>
        </Button>
     </div>

    </>
  )
}

export default About
