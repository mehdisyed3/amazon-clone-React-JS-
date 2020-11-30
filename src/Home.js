import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
        className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=''  
        />
        <p>Hello</p>
        <div className="home__row">
        <Product id={1} title="MY book" rating={2} price={12.23} src="https://picsum.photos/id/237/200/300" />
        <Product id={1} title="MY book" rating={2} price={12.23} src="https://picsum.photos/id/237/200/300" />
        <Product id={1} title="MY book" rating={2} price={12.23} src="https://picsum.photos/id/237/200/300" />  

        </div>
        <div className="home__row">

        

        </div>
        <div className="home__row">



        </div>
      </div>
    </div>
  )
}

export default Home
