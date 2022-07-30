import './Filter.scss';

const Filter = ({name,text, type, handleCheckbox}) => {

  return (
    <div className="filter">
      
          <label class="filter__name">{text}</label>
          <input className="filter__checkbox-icon" name = {name}type={type} onClick={handleCheckbox}/>


    </div>

  );
}

export default Filter;
