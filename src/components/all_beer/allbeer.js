import React from 'react';
import BeerAvatar from '../beer_cell/beercell'
import './allbeer.css'



const Allbeers =({allBeers})=>{

  
  let beerLists = allBeers.map((beer,index)=>{
    return(
      <div key={index}>
        <BeerAvatar
          beerId ={beer.id}
          beerName ={beer.name}
          beerAbv = {beer.abv}
          beerImg = {beer.image_url}
          beerTagLine ={beer.tagline}
          beerDescription = {beer.description}
          
         />
           
      </div>
    )
   })

  return(
    <div className="beer-list">
      {beerLists}
    </div>
  )

}



export default Allbeers;
