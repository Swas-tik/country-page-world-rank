import { useState } from "react";
import Heroheader from "./Heroheader";
import HeroMain from "./HeroMain";
import Herosidebar from "./Herosidebar";

const Hero = () => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0)
  
  return (
    <div className="hero">
      <Heroheader setQuery={setQuery} count={count} />
      <div className="body-sec">
        <Herosidebar setQuery={setQuery}/>
        <HeroMain query={query} setCount={setCount} />
      </div>
    </div>
  );
};

export default Hero;
