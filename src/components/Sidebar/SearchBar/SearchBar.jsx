import './SearchBar.scss';

const SearchBar = ({name, type, handleSearchBar}) => {

  return (
    <div className="searchbar">
      
          <input  class="searchbar__input"name = {name}type={type} autocomplete="off" placeholder="search..."onChange={handleSearchBar}/>

    </div>

  );
}

export default SearchBar;
