import React from "react"
import PropTypes from "prop-types"

import RatingStars from "searchResultsPage/hotel/generalDetails/ratingStars/components/ratingStars"
import Location from "searchResultsPage/hotel/generalDetails/location/components/location"
import Tags from "searchResultsPage/hotel/generalDetails/tags/components/tags"
import UsersRating from "searchResultsPage/hotel/generalDetails/usersRating/components/usersRating"

import "searchResultsPage/hotel/generalDetails/generalDetails.css"

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
