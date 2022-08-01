import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import data from "../../data/beers.js"

const beer = data[0]

const beerCard =(<Card image = {beer.image_url}
    name={beer.name}
    tagline={beer.tagline} 
    firstBrewed={beer.first_brewed}
    abv = {beer.abv}
    ph = {beer.ph}
    description = {beer.description}
    ingredients = {beer.ingredients}/>)

it("card should render info correctly", () =>{

    render(beerCard)

        const name = screen.queryByText("Buzz", {exact: true});
        const tagline = screen.queryByText(`"A Real Bitter Experience."`, {exact: true});
        const abv = screen.queryByText("4.5 ABV", {exact: true});
        const ph = screen.queryByText("4.4 pH", {exact: true});
        const brewDate = screen.queryByText("Since 09/2007", {exact: true});

        const cardInfo = [name, tagline, abv, ph, brewDate];
        cardInfo.forEach(property => {
            expect(property).toBeInTheDocument();
        })
})

it("should show the card description when the card is clicked", () =>{

    const renderedCard = render(beerCard)

    const card = renderedCard.container.querySelector('#card');
    userEvent.click(card); //user flips card
    const description = screen.queryByText(beer.description);
    expect(description).toBeInTheDocument();
})

it("should show the card info when the card is clicked twice", () =>{

    const renderedCard = render(beerCard)
    const card = renderedCard.container.querySelector('#card');

    userEvent.click(card); //user flips card
    userEvent.click(card); //user flips card

    const name = screen.queryByText("Buzz", {exact: true});
    const tagline = screen.queryByText(`"A Real Bitter Experience."`, {exact: true});
    const abv = screen.queryByText("4.5 ABV", {exact: true});
    const ph = screen.queryByText("4.4 pH", {exact: true});
    const brewDate = screen.queryByText("Since 09/2007", {exact: true});

    const cardInfo = [name, tagline, abv, ph, brewDate];
    cardInfo.forEach(property => {
        expect(property).toBeInTheDocument();
    })
})
