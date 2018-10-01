import React from "react"
import PropTypes from "prop-types"

import "searchResultsPage/hotel/thumbnail/thumbnail.css"

const Thumbnail = (props) => {
	return(
		<div className="thumbnail">
			<div className="great-offer-flag">
				<div className="behind-image-arrow"></div>
				<span className="great-offer-text"> GREAT OFFER </span>
				<div className="arrow-right"></div>
			</div>
			<img src={ props.url }/>
		</div>
	)
}

Thumbnail.propTypes = {
	url: PropTypes.string
}

export default Thumbnail
