import './App.scss';
import Sidebar from './components/Sidebar/Sidebar'
import beers from './data/beers';
import CardList from './components/CardList/CardList';
import { useState } from 'react';


const App = () =>{
  
const [beerCatalog, setBeerCatalog] = useState(beers);

const updateBeerCatalog = (newBeerCatalog) => setBeerCatalog(newBeerCatalog);

console.log(beerCatalog);
  

  return (
    <div className="App">



    <div class="container">

      <Sidebar beerCatalog = {beerCatalog} updateBeerCatalog = {updateBeerCatalog}/>

      <CardList beerArr = {beerCatalog}></CardList>

      </div>
    </div>
  );
}

export default App;
