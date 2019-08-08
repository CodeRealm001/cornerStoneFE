import React from 'react';
import Header from '../header';

import Allbeers from '../all_beer/allbeer'
import './App.css';
import {DEFAULT_API_URL} from '../../api_file';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      beers:[],
      errMessage:" "
    }
    this.handleGetHttpRequest = this.handleGetHttpRequest.bind(this)
    this.handleSortBy = this.handleSortBy.bind(this)
    this.handleValues = this.handleValues.bind(this)
  }
   
  componentDidMount(){
    this.handleGetHttpRequest(`${DEFAULT_API_URL}`)
  }


  handleGetHttpRequest(url){
    fetch(url)
     .then(response => response.json())
     .then(result =>{
       this.setState({
         beers: result
       })
     })
     .catch(err =>{
       this.setState({
         errorMessage: `${err} Or Check your connection`
       })
     })

  }

  handleValues(item){
    return function(a,b){
     if(a[item] < b[item]) return -1;
     if(a[item] > b[item]) return 1;
     return 0
    }

  }


  handleSortBy(value){
    let arrayList =[...this.state.beers]

    arrayList.sort(this.handleValues(value));
    this.setState({ beers: arrayList });
  }


  render(){
      const {beers, errMessage} = this.state
      let beerSize = beers.length;



      if(beerSize < 1){
        return(
          <div>
            <h3>{errMessage}</h3>
          </div>
        )
      } else{
        return(
          <div >
            <Header/>
            <div className="App" >
              
                <div className="sort">
                    Sort By: 
                    <a href="#" onClick={()=>this.handleSortBy('name')}>Name</a>
                    <a href="#"onClick={()=>this.handleSortBy('abv')}>Abv</a>

                    
                            
                </div>

             
            
              <Allbeers                 
                  allBeers ={beers}
                />

            </div>
                
            
          </div>
        )
      }
   
  }
}
export default App;
