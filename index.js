
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

import React from "react"
import ReactDOM from "react-dom"
// import Header from './Header.js'
// import MainContent from './MainContent.js'
// import Footer from './Footer.js'
import App from './App.js'

function Page() {
    return (
        <React.Fragment>
            <App />
            {/* <Header /> */}
            {/* <MainContent /> */}
            {/* <Footer /> */}
        </React.Fragment >
    )
}


ReactDOM.render(<App />, document.getElementById("root"))