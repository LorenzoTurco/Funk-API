import './Card.scss';

const Card = () => {
  return (
    <div className="card">

        <img className="card__image"></img>

        <h5 className="card__name"></h5>
        <h5 className="card__tagline"></h5>

        <h6 className="card__abv"></h6>
        <h6 className="card__ph"></h6>
        <h6 className="card__firstbrewed"></h6>

        <p className="card__description"></p>

        <ul className="card__ingredients-container">

            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
  );
}

export default Card;
