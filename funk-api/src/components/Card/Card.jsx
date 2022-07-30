import './Card.scss';
import {useState} from 'react';

const Card = ({image,name,tagline,firstBrewed,abv,ph,description,ingredients}) => {

  const [cardSelected, setCardSelected] = useState(false);


  return (
    
   <div onClick={() => {setCardSelected(!cardSelected)}}>

      {!cardSelected ?
      
      <div className="card">
        <h2 className="card__name">{name}</h2>  
        <img className="card__image" src={image}></img>
        <h5 className="card__tagline">"{tagline}"</h5>

        <div className="card__info">
          <h6 className="card__abv">{abv}  ABV</h6>
          <h6 className="card__ph">{ph} pH</h6>
          <h6 className="card__firstbrewed"> Since {firstBrewed}</h6>
        </div>
          <ul className="card__ingredients-container">Ingredients
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>

      </div>
      
      :
        
      <div className="card-opened">
      
        <p className="card-opened__description">{description}</p>

    </div>
          
        
          }
      </div>
  );
}

export default Card;
