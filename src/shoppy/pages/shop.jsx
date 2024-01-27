import React from 'react'
import Panner from '../components/panner'
import {MenItems,WomenItems, OfferItems} from '../components/items'
import Offer from '../components/offer'
import Newsletter from '../components/newsletter'

const shop = () => {
  return (
    <div>
      <Panner/>
      <MenItems />
      <Offer/>
      <WomenItems />    
      <Newsletter/>
      <OfferItems/>
    </div>
  )
}

export default shop