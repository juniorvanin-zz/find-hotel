import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as StarIcon, faSmile as SmileIcon } from "@fortawesome/free-regular-svg-icons"
import { faLocationArrow as LocationArrowIcon } from "@fortawesome/free-solid-svg-icons"

import "searchResults/hotel/hotel.css"

const Hotel = () => (
	<div className="item-wrapper">
		<HotelImage />
		<GeneralDetails />
		<PriceDetails />
	</div>
)

const HotelImage = () => <div className="thumbnail"></div>

const GeneralDetails = () => {
	return (
		<div className="general-details">
			<h2>Quentin Amsterdam Hotel</h2>
			<RatingStars />
			<Location />
			<UsersRating />
			<Tags />
		</div>
	)
}

const RatingStars = () => (
	<div className="stars">
		<FontAwesomeIcon icon={StarIcon} color="#FF7C44"/>
		<FontAwesomeIcon icon={StarIcon} color="#FF7C44"/>
		<FontAwesomeIcon icon={StarIcon} color="#FF7C44"/>
		<FontAwesomeIcon icon={StarIcon} color="#e5e5e5"/>
		<FontAwesomeIcon icon={StarIcon} color="#e5e5e5"/>
	</div>
)

const Tags = () => (
	<ul className="tags">
		<li> Amazing SPA </li>
		<li> Good food </li>
		<li> Family friendly </li>
		<li> Great location </li>
		<li> Perfect WiFi </li>
	</ul>
)

const Location = () => (
	<div className="location">
		<FontAwesomeIcon icon={LocationArrowIcon} color="#0098E8"/>
		<span> 120 m to city center - Jordan </span>
	</div>
)

const UsersRating = () => (
	<div className="rating">
		<FontAwesomeIcon icon={SmileIcon} color="#82BB7F"/>
		<span> Amazing 9.2 </span>
	</div>
)

const PriceDetails = () => {
	return(
		<div className="price-details">
			<span> $ 104 </span>
		</div>
	)
}

export default Hotel
