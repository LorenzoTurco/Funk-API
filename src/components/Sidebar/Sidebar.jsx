import './Sidebar.scss';
import Filter from './Filter/Filter';
import SearchBar from './SearchBar/SearchBar';


const Sidebar = ({setSearchValue, setAbv, setBrewDate, setPh}) => {

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
      <h2 className="nav__title">Punk API</h2>

        <div className="nav__filters-container">

          <SearchBar name="filterBySearch" text="Search" type="text" handleSearchBar={handleSearchBar}></SearchBar>
          
          <div className="nav__filters-checkboxes">
            <Filter name="ABV > 6%" text="ABV > 6%" type="checkbox" handleCheckbox={handleCheckbox}></Filter>
            <Filter class="aaa" name="Brewed < 2010" text="Brewed < 2010" type="checkbox" handleCheckbox={handleCheckbox}></Filter>
            <Filter name="pH < 4" text="pH < 4" type="checkbox" handleCheckbox={handleCheckbox}></Filter>
          </div>
        </div>
    
    </div>

  );
}

export default Sidebar;
