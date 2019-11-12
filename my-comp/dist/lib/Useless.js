'use strict';

var React = require('react');
var faker = require('faker');

function Useless() {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Useless component"),
        React.createElement("p", null,
            "My name is:",
            React.createElement("span", null, faker.fake('{{name.lastName}}')))));
}

module.exports = Useless;
