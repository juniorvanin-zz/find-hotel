import React from "react"
import Hotel from "searchResults/hotel/components/hotel"
import "searchResults/searchResults.css"

class SearchResults extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Hotel />
				</li>
				<li>
					<Hotel />
				</li>
				<li>
					<Hotel />
				</li>
			</ul>
		)
	}
}

export default SearchResults
