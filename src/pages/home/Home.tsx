import './Home.css'
import HomeImg from '../../assets/banner.png'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src={HomeImg}
          className="home__image"
          alt="Empowering women in tech"
        />
      </div>
    </div>
  )
}

export default Home
