import React, { Component } from 'react'
import BeerList from './components/BeerList';
import './styles/BeerList.css'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data:[]
    }
  }

    componentDidMount() {
      fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(examples => {
            this.setState({ data: examples })
            console.log(examples)
        })
    }

    render() {
        return (
            <div>
              <ul>
                { 
                  this.state.data.map((beer, index) => {
                    return <BeerList key={index} beerId={beer.id} beerName={beer.name} beerTag={beer.tagline} beerImg={beer.image_url}/>
                  })
                }
              </ul>
            </div>
        )
    }
}

export default App;