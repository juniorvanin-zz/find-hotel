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
	const tags = ['Amazing SPA', 'Good food', 'Family friendly', 'Great location', 'Perfect WiFi']

	return (
		<div className="general-details">
			<h2>Quentin Amsterdam Hotel</h2>
			<RatingStars numberOfStars="3" />
			<Location message="120 m to city center - Jordan"/>
			<UsersRating rate="9.2"/>
			<Tags tags={tags}/>
		</div>
	)
}

const ORANGE = "#FF7C44"
const GRAY = "#e0dede"
const getStarColorByRate = (index, numberOfStars) => numberOfStars >= index ? ORANGE : GRAY
const RatingStars = (props) => {
	const stars = []

	for(let i = 1; i <= 5; i++) {
		stars.push(<FontAwesomeIcon icon={StarIcon} color={ getStarColorByRate(i, props.numberOfStars) }/>)
	}

	return (
		<div className="stars">
			{ stars }
		</div>
	)
}

const Tags = (props) => (
	<ul className="tags">
		{ props.tags.map((tag) => <li> { tag } </li>) }
	</ul>
)

const BLUE = "#0098E8"
const Location = (props) => (
	<div className="location">
		<FontAwesomeIcon icon={LocationArrowIcon} color={BLUE}/>
		<span> { props.message } </span>
	</div>
)

const GREEN = "#82BB7F"
const YELLOW = "#FBD797"
const getColorByRate = (rate) => rate >= 9 ? GREEN : YELLOW
const getMessageByRate = (rate) => `Amazing ${rate}`
const UsersRating = (props) => (
	<div className="rating">
		<FontAwesomeIcon icon={SmileIcon} color={getColorByRate(props.rate)}/>
		<span> { getMessageByRate(props.rate) } </span>
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
