import React,  { Fragment } from "react"
import ReactDOM from "react-dom"

import SearchResults from "searchResults/components/searchResults"
import Header from "header/components/header"
import Filters from "filters/components/filters"

import "index.css"

const FindHotelPage = () => {
	const sortByInfo = {
		numberOfHotels: 2380,
		numberOfGreatDeals: 56,
		sortByOptions: [
			{
				key: "best-suplier",
				value: "Best supplier & price"
			},
			{
				key: "best-location",
				value: "Best location"
			}
		]
	}
	return (
		<Fragment>
			<Header />
			<main>
				<Filters sortByInfo={sortByInfo} />
				<SearchResults />
			</main>
		</Fragment>
	)
}

ReactDOM.render(<FindHotelPage />, document.getElementById("root"))
