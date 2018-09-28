import React from "react"
import Hotel from "../hotel/components/hotel"
import "./../searchResults.css"

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
