import React from 'react';
import Modal from '../modal/index'
import './beercell.css'






class BeerAvatar extends React.Component{
  constructor(props){
    super(props)

    this.state={
      showDetails: false,
     }

     this.handleModal = this.handleModal.bind(this)
  }

  

  handleModal(){
    this.setState({
      showDetails: !this.state.showDetails
    })

  }

  render(){
    const {beerId,beerName, beerImg,beerTagLine,beerAbv,
      beerDescription} = this.props

      const {showDetails} = this.state

      return(
        <div>
          
          <div className="beer-wrapper" >
              <span><h3>{beerName}</h3>  </span>
              <p> <h4>ABV: {beerAbv}</h4> </p> 
              <img src={beerImg} className="imgclass"/> 
              <a href="#"onClick={this.handleModal}>More Details... </a>
          </div>
           
          

          <Modal
            show={showDetails}
            closeCallBack ={this.handleModal}
            customClass="custom_modal_class"
          >
                  <header >{beerName}</header>

                  <div className="content">
                    <span>ABV:{beerAbv}</span>
                    <p className="tag">{beerTagLine}</p>
                    <p className="desc">{beerDescription}</p>
                  </div>
                  
                   <img src={beerImg} className="image" />
                  
                 
            </Modal>
            
         
              
           

         
          
        </div>
      )
    



  }  
}

/*
 const BeerAvatar = ({beerId,beerName, beerImg,beerTagLine,
  beerDescription})=>{


  return(
    <div>
      <img src={beerImg}/>
      <h2>{beerId}</h2>
      <h2>{beerName}</h2>
     
    </div>
  )

}*/

export default BeerAvatar;



