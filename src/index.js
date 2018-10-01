import React,  { Fragment } from "react"
import ReactDOM from "react-dom"

import Header from "header/components/header"
import SearchResultsPage from "searchResultsPage/components/searchResultsPage"

import "index.css"

const FindHotelPage = () => (
	<Fragment>
		<Header />
		<SearchResultsPage />
	</Fragment>
)


ReactDOM.render(<FindHotelPage />, document.getElementById("root"))
