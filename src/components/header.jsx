import heroImg from '../assets/hero-image-wr.jpg'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <>
    <div className="hero-img-container">
      <img className='hero-img' src={heroImg} alt="header image" />
      <img className='logo-img' src={logo} alt="logo" />
    </div>
    </>
  )
}
export default Header