import React from "react"
import PropTypes from "prop-types"

import RatingStars from "./../ratingStars/components/ratingStars"
import Location from "./../location/components/location"
import Tags from "./../tags/components/tags"
import UsersRating from "./../usersRating/components/usersRating"

const GeneralDetails = (props) => (
	<div className="general-details">
		<h2>Quentin Amsterdam Hotel</h2>
		<RatingStars numberOfStars="3" />
		<Location message="120 m to city center - Jordan"/>
		<UsersRating rate="9.2"/>
		<Tags tags={props.tags}/>
	</div>
)

GeneralDetails.propTypes = {
	tags: PropTypes.array
}

export default GeneralDetails
