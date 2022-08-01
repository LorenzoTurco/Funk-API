import './App.scss';
import Sidebar from './components/Sidebar/Sidebar'
import CardList from './components/CardList/CardList';
import { useEffect, useState } from 'react';


const App = () =>{
  
const [beerCatalog, setBeerCatalog] = useState([]);
const [abv, setAbv] = useState();
const [brewDate, setBrewDate] = useState();
const [ph, setPh] = useState("");
const [searchValue, setSearchValue] = useState();


const getBeers = async () =>{

  try{
    const response = await fetch(`https://api.punkapi.com/v2/beers?${abv}&${brewDate}&${searchValue}`)
    const data = await response.json();
    if(ph != ""){
      const filteredByPh = data.filter((beer) => beer.ph< ph)
      setBeerCatalog(filteredByPh);
    }else{
      setBeerCatalog(data);
    } 
}catch(e){console.log(e.message)}
}

useEffect(() =>{ //refetch beers everytime a filter state changes
  getBeers();
},[abv, brewDate, ph,searchValue])

  return (
    <div className="App">
      <div class="container">

        <Sidebar beerCatalog = {beerCatalog} setSearchValue={setSearchValue} setAbv ={setAbv}  setBrewDate ={setBrewDate}  setPh ={setPh}/>
        <CardList beerArr = {beerCatalog} ></CardList>

      </div>
    </div>
  );
}

export default App;
