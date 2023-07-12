import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-description-container">
      <div className="description-container">
        <h1 className="home-page-title">Clothes That Get You Noticed</h1>
        <p className="clothes-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and hard that
          way you are. So celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <button type="button" className="shopNow-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-page-img"
      />
    </div>
  </div>
)
export default Home
