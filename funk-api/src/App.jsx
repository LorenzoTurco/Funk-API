import './App.scss';
import Sidebar from './components/Sidebar/Sidebar'
import beers from './data/beers';
import CardList from './components/CardList/CardList';


const App = () =>{
  
console.log(beers)


  return (
    <div className="App">



    <div class="container">

      <Sidebar/>

      <CardList beerArr = {beers}></CardList>

      </div>
    </div>
  );
}

export default App;
