import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown as ArrowDownIcon } from "@fortawesome/free-solid-svg-icons"

const ShowDetailsButton = () => (
	<button className="show-details">
		<span> Show details </span>
		<FontAwesomeIcon icon={ArrowDownIcon} color="black" size="lg"/>
	</button>
)

export default ShowDetailsButton
