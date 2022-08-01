import { render, screen } from "@testing-library/react";
import Card from "./Card";
import data from "../../data/beers.js"

it("card should render info correctly", () =>{

const beer = data[0]
    
    render(<Card image = {beer.image_url}
        name={beer.name}
        tagline={beer.tagline} 
        firstBrewed={beer.first_brewed}
        abv = {beer.abv}
        ph = {beer.ph}
        description = {beer.description}
        ingredients = {beer.ingredients}/>)

        const name = screen.queryByText("Buzz");
        const tagline = screen.queryByText(/A Real Bitter Experience/i);
        const abv = screen.queryByText("4.5", {exact: false});
        const ph = screen.queryByText("4.4", {exact: false});
        const brewDate = screen.queryByText("09/2007", {exact: false});
        //const description = screen.queryByText("A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.");


        const card = [name, tagline, abv, ph, brewDate];
        card.forEach(property => {
            expect(property).toBeInTheDocument();
        })

})


it("should show the card description when the card is clicked", () =>{


})
