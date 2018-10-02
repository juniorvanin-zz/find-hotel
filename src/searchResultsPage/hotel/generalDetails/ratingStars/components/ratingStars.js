import React from "react"
import PropTypes from "prop-types"
import { times } from "ramda"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as StarIcon } from "@fortawesome/free-regular-svg-icons"

const ORANGE = "#FF7C44"
const GRAY = "#e0dede"

const getStarColorByRate = (index, numberOfStars) => numberOfStars > index ? ORANGE : GRAY

const RatingStars = (props) => (
	<div className="stars">
		{
			times((index) => <FontAwesomeIcon key={index}
				icon={StarIcon} color={ getStarColorByRate(index, props.numberOfStars) } />, 5)
		}
	</div>
)

RatingStars.propTypes = {
	numberOfStars: PropTypes.number
}

export default RatingStars
