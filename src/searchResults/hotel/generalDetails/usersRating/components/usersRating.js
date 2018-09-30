import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSmile as SmileIcon } from "@fortawesome/free-regular-svg-icons"

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

UsersRating.propTypes = {
	rate: PropTypes.number
}

export default UsersRating
