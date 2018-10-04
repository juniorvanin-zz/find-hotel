import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft as LeftArrowIcon } from "@fortawesome/free-solid-svg-icons"

import "searchResultsPage/filters/sliderMenu/sliderMenu.less"

const SliderMenu = (props) => (
	<div className={ props.visibility ? "slider-menu show" : "slider-menu hide" }>
		<header>
			<button className="close-button" onClick={ props.toggleSliderMenu }>
				<FontAwesomeIcon icon={ LeftArrowIcon } color="white" />
				<span> { props.title } </span>
			</button>
		</header>
		{ props.children }
	</div>
)

SliderMenu.propTypes = {
	title: PropTypes.string,
	visibility: PropTypes.bool,
	toggleSliderMenu: PropTypes.func,
	children: PropTypes.element
}

export default SliderMenu
