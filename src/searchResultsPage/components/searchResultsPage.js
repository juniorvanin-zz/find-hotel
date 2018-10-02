import React from "react"

import Hotel from "searchResultsPage/hotel/components/hotel"
import Filters from "searchResultsPage/filters/components/filters"

import "searchResultsPage/searchResultsPage.css"

const hotels = [
	{
		id: "24556",
		thumbnail: "https://r-ec.bstatic.com/images/hotel/max1280x900/951/95186890.jpg",
		generalDetails: {
			title: "Quentin Amsterdam Hotel",
			numberOfStars: 3,
			locationMessage: "120 m to city center - Jordan",
			usersRating: 7.8,
			tags: ["Good food", "Family friendly", "Great location", "Great staff"]
		},
		priceDetails: {
			regularPrice: "€ 115",
			bestPrice: {
				amount: "€ 104",
				freeCancellation: true,
				link:  "Booking.com"
			},
			otherPrices: [
				{
					site: "priceline.com",
					amount: "€115"
				},
				{
					site: "expedia.com",
					amount: "€132"
				},
				{
					site: "7ideas.com",
					amount: "€129"
				}
			]
		}
	},
	{
		id: "23324",
		thumbnail: "https://q-ec.bstatic.com/images/hotel/max1280x900/216/21656450.jpg",
		generalDetails: {
			title: "Hotel Torenzicht",
			numberOfStars: 5,
			locationMessage: "300 m to city center - Jordan",
			usersRating: 9.2,
			tags: ["Amazing SPA", "Good food", "Family friendly", "Very clean"]
		},
		priceDetails: {
			regularPrice: "€ 254",
			bestPrice: {
				amount: "€ 223",
				freeCancellation: true,
				link:  "Expedia.nl"
			},
			otherPrices: [
				{
					site: "booking.com",
					amount: "€240"
				},
				{
					site: "agoda.com",
					amount: "€256"
				},
				{
					site: "hoteis.com",
					amount: "€229"
				}
			]
		}
	},
	{
		id: "23426",
		thumbnail: "https://r-ec.bstatic.com/images/hotel/max1280x900/219/21918566.jpg",
		generalDetails: {
			title: "Doubletree by Hilton Hotel Amsterdam Central Station",
			numberOfStars: 4,
			locationMessage: "70 m to city center - Jordan",
			usersRating: 8.9,
			tags: ["Central Station", "Good food", "24 hours reception", "Great restaurant", "Canal view"]
		},
		priceDetails: {
			regularPrice: "€ 531",
			bestPrice: {
				amount: "€ 495",
				freeCancellation: true,
				link:  "Hotels.com"
			},
			otherPrices: [
				{
					site: "booking.com",
					amount: "€499"
				},
				{
					site: "expedia.com",
					amount: "€550"
				},
				{
					site: "7ideas.com",
					amount: "€511"
				}
			]
		}
	}
]

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

const filtersOptions ={
	priceRange: { min: 0, max: 1000 },
	ratingRange: { min: 0, max: 10 },
	distanceRange: { min: 0, max: 100 }
}

const SearchResultsPage = () => (
	<main>
		<Filters options={ filtersOptions } sortByInfo={ sortByInfo } />
		<ul className="search-results">
			{
				hotels.map((hotel) => (
					<Hotel
						key={ hotel.id }
						thumbnail={ hotel.thumbnail }
						generalDetails={ hotel.generalDetails }
						priceDetails={ hotel.priceDetails }
					/>
				))
			}
		</ul>
	</main>
)

export default SearchResultsPage
