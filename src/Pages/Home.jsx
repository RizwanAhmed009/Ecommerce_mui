import React from 'react'
import Layout from '../Component/Layout/Layout'
import '../Style/HomeStyle.css'
import banner from '../Component/images/banner.jpeg'

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${banner})`}}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Best Foods in Town</p>
            <button>Order Now</button>
          </div>
        </div>
    </Layout>
  )
}

export default Home