import './Sidebar.scss';

const Sidebar = ({beerCatalog, updateBeerCatalog}) => {

  console.log(beerCatalog)

  const beersWithAbvOverSix = beerCatalog.filter(beer => beer.abv > 6);

  
  const beersBrewedBefore2010 = beerCatalog.filter(beer => beer.first_brewed.slice(beer.first_brewed.length-4) < 2010);

  const beersWithPhUnderFour = beerCatalog.filter(beer => beer.ph < 4);



  return (
    <div className="nav">

    <h2 className="nav__title">Funk API</h2>

    <div className="nav__filters">

    <label>Search</label>
    <input type="text"/>

    <label>ABV {">"} 6% </label>
    <input type="checkbox" onClick= {() => updateBeerCatalog(beersWithAbvOverSix)}/>

  <label>Brewed {"<"} 2010</label>
    <input type="checkbox"onClick={() => updateBeerCatalog(beersBrewedBefore2010)}></input>

    <label>pH {"<"} 4</label>
    <input type="checkbox" onClick={() => updateBeerCatalog(beersWithPhUnderFour)} ></input>
    </div>
    
    </div>

  );
}

export default Sidebar;
