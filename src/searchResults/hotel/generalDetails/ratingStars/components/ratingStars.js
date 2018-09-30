import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as StarIcon } from "@fortawesome/free-regular-svg-icons"

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

RatingStars.propTypes = {
	numberOfStars: PropTypes.number
}

export default RatingStars
