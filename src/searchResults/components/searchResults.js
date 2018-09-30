import React from "react"

import Hotel from "searchResults/hotel/components/hotel"

import "searchResults/searchResults.css"

class SearchResults extends React.Component {
	render() {
		const tags = ["Amazing SPA", "Good food", "Family friendly", "Great location", "Perfect WiFi"]

		return (
			<ul>
				<li>
					<Hotel tags={tags}/>
				</li>
				<li>
					<Hotel tags={tags}/>
				</li>
				<li>
					<Hotel tags={tags}/>
				</li>
			</ul>
		)
	}
}

export default SearchResults
