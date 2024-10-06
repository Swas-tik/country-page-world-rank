import '../App.css/'
import CountryCard from './main/CountryCard'
import MainHeader from './main/MainHeader'


function HeroMain({query,setCount}){
    return(
        <>
        <div className="heromain-sec">
            <MainHeader/>
            <CountryCard query={query} setCount={setCount}/>
        </div>
        </>
    )
}

export default HeroMain