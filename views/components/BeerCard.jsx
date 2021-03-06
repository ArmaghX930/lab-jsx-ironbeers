const React = require('react');

function BeerCard ( props ) {
    return (
        <div>
        <img src={props.oneBeer.image_url} width="200" alt="" />
        <div>
            <h3>{props.oneBeer.name}</h3>  
            <h5>{props.oneBeer.tagline}</h5>  
            <p>{props.oneBeer.description}</p>  
                
            <h4>Food Pairing</h4>  
            <ul>
            { props.oneBeer.food_pairing.map( (food, i) => {
                return ( <li key={i}> {food} </li> );
            })}
            </ul>

            <p><strong>Brewers Tips:</strong> {props.oneBeer.brewers_tips} </p>

        </div>
        </div>
    )
};

module.exports = BeerCard;

