import '../App.css/'
import CountryCard from './main/CountryCard'
import MainHeader from './main/MainHeader'


function HeroMain(){
    return(
        <>
        <div className="heromain-sec">
            <MainHeader/>
            <CountryCard/>
        </div>
        </>
    )
}

export default HeroMain