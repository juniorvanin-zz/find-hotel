import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as HeartIcon } from "@fortawesome/free-regular-svg-icons"
import { faHeart as FullHeartIcon } from "@fortawesome/free-solid-svg-icons"

import "searchResultsPage/hotel/thumbnail/thumbnail.less"

const Thumbnail = (props) => {
	return(
		<div className="thumbnail">
			<div className="great-offer-flag">
				<div className="behind-image-arrow"></div>
				<span className="great-offer-text"> GREAT OFFER </span>
				<div className="arrow-right"></div>
			</div>
			<img src={ props.url }/>
			<div className="favorite">
				<span className="fa-layers fa-fw">
					<FontAwesomeIcon icon={FullHeartIcon} className="half-opacity" color="black" size="2x"/>
					<FontAwesomeIcon icon={HeartIcon}  color="white" size="2x"/>
				</span>
			</div>
		</div>
	)
}

Thumbnail.propTypes = {
	url: PropTypes.string
}

export default Thumbnail
