import Terminal from './Terminal'
import './Home.css'
import { Element } from "react-scroll";


function Home() {
    return (
      < Element name="home-page">
        <div className="home">
          <div className="terminal-container">
            < Terminal />
          </div>
        </div>
      </ Element>
    )
}

export default Home; 