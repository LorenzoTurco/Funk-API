import './CardList.scss';
import Card from './../Card/Card';

const CardList = ({beerArr}) => {


    const drawBeerCards = beerArr.map ((beer) => {

        return(
            <>
        <Card 
        image = {beer.image_url}
         name={beer.name}
         tagline={beer.tagline} 
         firstBrewed={beer.first_brewed}
         abv = {beer.abv}
         ph = {beer.ph}
         description = {beer.description}
         ingredients = "water"
         ></Card>
    </>
        )
    
      })
    
    



  return (
<>
    <div className="card-list">
    {drawBeerCards}
</div>

</>
  );
}

export default CardList;
