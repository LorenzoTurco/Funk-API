import './SearchBar.scss';

const SearchBar = ({name,text, type, handleSearchBar}) => {

  return (
    <div className="filter">
      
          <label>{text}</label>
          <input name = {name}type={type} onChange={handleSearchBar}/>

    </div>

  );
}

export default SearchBar;
