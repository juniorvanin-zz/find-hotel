import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationArrow as LocationArrowIcon } from "@fortawesome/free-solid-svg-icons"

const BLUE = "#0098E8"

const Location = (props) => (
	<div className="location">
		<FontAwesomeIcon icon={LocationArrowIcon} color={BLUE}/>
		<span> { props.message } </span>
	</div>
)

Location.propTypes = {
	message: PropTypes.string
}

export default Location
