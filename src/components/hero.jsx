import Heroheader from "./Heroheader"
import HeroMain from "./Heromain"
import Herosidebar from "./Herosidebar"

const Hero = () => {
  return (
    <div className="hero">
        <Heroheader/>
        <div className="body-sec">
          <Herosidebar/>
          <HeroMain/>
        </div>
    </div>
  )
}

export default Hero