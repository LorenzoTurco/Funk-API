import './Sidebar.scss';
import Filter from './Filter/Filter';

const Sidebar = ({beerCatalog, updateBeerCatalog}) => {

  const beersWithAbvOverSix = beerCatalog.filter(beer => beer.abv > 6);
  const beersBrewedBefore2010 = beerCatalog.filter(beer => beer.first_brewed.slice(beer.first_brewed.length-4) < 2010);
  const beersWithPhUnderFour = beerCatalog.filter(beer => beer.ph < 4);


  const handleCheckbox = (event) =>{

    console.log(event)
    console.log(event.target.checked)


    switch (event.target.name){

      case "filterBySearch":

      case "highAlcohol":

        if(event.target.checked) updateBeerCatalog(beersWithAbvOverSix);
        break;

      case "classicRange":

        if(event.target.checked) updateBeerCatalog(beersBrewedBefore2010);
        break;

      case "highAcidity":
        if(event.target.checked) updateBeerCatalog(beersWithPhUnderFour);
        break;
    }
  }

  return (
    <div className="nav">
      <h2 className="nav__title">Funk API</h2>

        <div className="nav__filters">

          <Filter name="filterBySearch" text="Search" type="text"></Filter>
          <Filter name="highAlcohol" text="ABV > 6%" type="checkbox" handleCheckbox={handleCheckbox}></Filter>
          <Filter name="classicRange" text="Brewed < 2010" type="checkbox" handleCheckbox={handleCheckbox}></Filter>
          <Filter name="highAcidity" text="pH < 4" type="checkbox" handleCheckbox={handleCheckbox}></Filter>

        </div>
    
    </div>

  );
}

export default Sidebar;
