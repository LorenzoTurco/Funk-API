import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import beers from './data/beers';
import CardList from './components/CardList/CardList';


const App = () =>{

  const drawBeerCards = beers.map ((beer) => {

    return(
    <CardList></CardList>

    )



  })


  
console.log(beers)


  return (
    <div className="App">


      <Sidebar/>
      
    </div>
  );
}

export default App;
