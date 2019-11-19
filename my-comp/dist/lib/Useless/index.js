import { createElement } from 'react';
import { fake } from 'faker';

function Useless() {
    return (createElement("div", null,
        createElement("h2", null, "Useless component"),
        createElement("p", null,
            "My name is:",
            createElement("span", null, fake('{{name.lastName}}')))));
}

export default Useless;
