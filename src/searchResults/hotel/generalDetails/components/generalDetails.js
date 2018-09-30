import React from "react"
import PropTypes from "prop-types"

import RatingStars from "searchResults/hotel/generalDetails/ratingStars/components/ratingStars"
import Location from "searchResults/hotel/generalDetails/location/components/location"
import Tags from "searchResults/hotel/generalDetails/tags/components/tags"
import UsersRating from "searchResults/hotel/generalDetails/usersRating/components/usersRating"

import "searchResults/hotel/generalDetails/generalDetails.css"

const GeneralDetails = (props) => (
	<div className="general-details">
		<h2>{ props.title }</h2>
		<RatingStars numberOfStars={ props.numberOfStars } />
		<Location message={ props.locationMessage }/>
		<UsersRating rate={ props.usersRating }/>
		<Tags tags={props.tags}/>
	</div>
)

GeneralDetails.propTypes = {
	title: PropTypes.string,
	numberOfStars: PropTypes.number,
	locationMessage: PropTypes.string,
	usersRating: PropTypes.number,
	tags: PropTypes.array
}

export default GeneralDetails
