import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Popularproducts from './Components/Popularproducts'
import SuperQuality from './Components/SuperQuality'
import ServiceCard from './Components/ServiceCard'
import SpecialOffer from './Components/SpecialOffer'
import CustomerReviews from './Components/CustomerReviews'
import Subcribe from './Components/Subcribe'
import Footer from './Components/Footer'
function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero/>
      </section>
      <section className='padding'>
        <Popularproducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>

      <section className='padding-x py-10'>
        <ServiceCard />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>


      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>


      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subcribe />
      </section>

       <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>  
    </main> 
  )
}

export default App