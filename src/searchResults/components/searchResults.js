import React from "react"

import Hotel from "searchResults/hotel/components/hotel"

import "searchResults/searchResults.css"

class SearchResults extends React.Component {
	render() {
		const hotels = [
			{
				id: "24556",
				title: "Quentin Amsterdam Hotel",
				numberOfStars: 3,
				locationMessage: "120 m to city center - Jordan",
				usersRating: 7.8,
				tags: ["Good food", "Family friendly", "Great location", "Great staff"]
			},
			{
				id: "23324",
				title: "Hotel Torenzicht",
				numberOfStars: 5,
				locationMessage: "300 m to city center - Jordan",
				usersRating: 9.2,
				tags: ["Amazing SPA", "Good food", "Family friendly", "Very clean"]
			},
			{
				id: "23426",
				title: "Doubletree by Hilton Hotel Amsterdam Central Station",
				numberOfStars: 4,
				locationMessage: "70 m to city center - Jordan",
				usersRating: 8.9,
				tags: ["Central Station", "Good food", "24 hours reception", "Great restaurant", "Canal view"]
			}
		]

		return (
			<ul>
				{
					hotels.map((hotel) => <Hotel key={ hotel.id } generalDetails={ hotel }/>)
				}
			</ul>
		)
	}
}

export default SearchResults
