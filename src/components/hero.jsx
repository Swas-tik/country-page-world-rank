import { useState } from "react"
import Heroheader from "./Heroheader"
import HeroMain from "./Heromain"
import Herosidebar from "./Herosidebar"

const Hero = () => {
  const[query, setQuery] = useState('')
  return (
    <div className="hero">
      <Heroheader  setQuery={setQuery}/>
      <div className="body-sec">
        <Herosidebar />
        <HeroMain  query={query}/>
      </div>
    </div>
  )
}

export default Hero