import './Filter.scss';

const Filter = ({name,text, type, handleCheckbox}) => {

  return (
    <div className="filter">
      
          <label>{text}</label>
          <input name = {name}type={type} onClick={handleCheckbox}/>

    </div>

  );
}

export default Filter;
