const React = require('react');

const BeerCard = require('./components/BeerCard'); 

const Layout = require('./Layout');

function RandomBeer ( props ) {
    return (
        <Layout>
            < BeerCard beer={props.oneBeer} />
        </Layout>
    )
};

module.exports = RandomBeer;