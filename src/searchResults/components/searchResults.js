import React from "react"
import Item from "../item/components/item"
import "./../searchResults.css"

class SearchResults extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Item />
				</li>
				<li>
					<Item />
				</li>
				<li>
					<Item />
				</li>
			</ul>
		)
	}
}

export default SearchResults
