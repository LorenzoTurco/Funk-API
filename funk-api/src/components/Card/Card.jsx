import './Card.scss';

const Card = ({image,name,tagline,firstBrewed,abv,ph,description,ingredients}) => {
  return (
    <div className="card">

        <img className="card__image" src={image}></img>

        <h5 className="card__name">{name}</h5>
        <h5 className="card__tagline">{tagline}</h5>

        <h6 className="card__abv">{abv}</h6>
        <h6 className="card__ph">{ph}</h6>
        <h6 className="card__firstbrewed">{firstBrewed}</h6>

        <p className="card__description">{description}</p>

        <ul className="card__ingredients-container">
            Ingredients

            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
  );
}

export default Card;
