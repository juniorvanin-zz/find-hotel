import React,  { Fragment } from "react"
import ReactDOM from "react-dom"

import SearchResults from "searchResults/components/searchResults"
import Header from "header/components/header"

import "index.css"

const FindHotelPage = () => (
	<Fragment>
		<Header />
		<main>
			<SearchResults/>
		</main>
	</Fragment>
)

ReactDOM.render(<FindHotelPage />, document.getElementById("root"))
