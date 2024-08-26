import '../App.css/'
import CountryCard from './main/CountryCard'
import MainHeader from './main/MainHeader'


function HeroMain({query}){
    return(
        <>
        <div className="heromain-sec">
            <MainHeader/>
            <CountryCard query={query}/>
        </div>
        </>
    )
}

export default HeroMain