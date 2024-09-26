/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react";
import ReactDOM from "react-dom"

console.log(React.version)

function Page() {
    return (
        <div>
            <h3>Why I am excited to learn React</h3>
            <ol>
                <li>I'm excited to see how the challenges I was encountering before are solved by React</li>
                <li>I have always been enthusiastic about learning a new language</li>
                <li>I have a hunger for knowledge</li>
                <li>I want to climb up another career ladder again</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))