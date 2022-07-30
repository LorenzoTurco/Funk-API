import './Sidebar.scss';
import Filter from './Filter/Filter';
import SearchBar from './SearchBar/SearchBar';


const Sidebar = ({beerCatalog, setSearchValue, setAbv, setBrewDate, setPh}) => {

  /*const beersWithAbvOverSix = beerCatalog.filter(beer => beer.abv > 6);
  const beersBrewedBefore2010 = beerCatalog.filter(beer => beer.first_brewed.slice(beer.first_brewed.length-4) < 2010);
  const beersWithPhUnderFour = beerCatalog.filter(beer => beer.ph < 4);*/

  const handleSearchBar = (event) =>{
    event.target.value.length > 0 ? setSearchValue(`beer_name=${event.target.value}`) : setSearchValue()
  }

  const handleCheckbox = (event) =>{

    switch (event.target.name){

      case "ABV > 6%":
        (event.target.checked) ? setAbv("abv_gt=6") : setAbv("")
        break;

      case "Brewed < 2010":
        (event.target.checked) ? setBrewDate("brewed_before=01-2010") : setBrewDate("")
        break;

      case "pH < 4":
        (event.target.checked) ? setPh("4") : setPh("")
        break;
    }
  }

  return (
    <div className="nav">
      <h2 className="nav__title">Funk API</h2>

        <div className="nav__filters-container">

          <SearchBar name="filterBySearch" text="Search" type="text" handleSearchBar={handleSearchBar}></SearchBar>
          
          <div className="nav__filters-checkboxes">
            <Filter name="ABV > 6%" text="ABV > 6%" type="checkbox" handleCheckbox={handleCheckbox}></Filter>
            <Filter name="Brewed < 2010" text="Brewed < 2010" type="checkbox" handleCheckbox={handleCheckbox}></Filter>
            <Filter name="pH < 4" text="pH < 4" type="checkbox" handleCheckbox={handleCheckbox}></Filter>
          </div>
          <button>next page</button>
        </div>
    
    </div>

  );
}

export default Sidebar;
