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
            <div class="siteWrapper">
              <h2>Sean and Ben's Real Good Brewery</h2>
              <h4>A for sure real tap list, not fake at all.</h4>
              <p>Call us at 555-555-5555</p>
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