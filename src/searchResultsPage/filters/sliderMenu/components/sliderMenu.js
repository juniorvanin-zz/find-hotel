import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft as LeftArrowIcon } from "@fortawesome/free-solid-svg-icons"

import "searchResultsPage/filters/sliderMenu/sliderMenu.less"

const SliderMenu = (props) => (
	<div className={ props.visibility ? "slider-filter show" : "slider-filter hide" }>
		<header>
			<button className="closeButton" onClick={ props.toggleSliderMenu }>
				<FontAwesomeIcon icon={ LeftArrowIcon } color="white" />
				<span> Filter </span>
			</button>
		</header>
		<div>
			<p> Guest rating </p>
			<p> Star rating </p>
		</div>
	</div>
)

SliderMenu.propTypes = {
	visibility: PropTypes.bool,
	toggleSliderMenu: PropTypes.func
}

export default SliderMenu
