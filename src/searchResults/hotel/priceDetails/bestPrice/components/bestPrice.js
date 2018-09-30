import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 	faLongArrowAltRight as ArrowRightIcon } from "@fortawesome/free-solid-svg-icons"

import "searchResults/hotel/priceDetails/bestPrice/bestPrice.css"

const BestPrice = (props) => (
	<Fragment>
		<span className="best-price"> { props.bestPrice.amount } </span>
		<span className="best-price-message">
			{ props.bestPrice.freeCancellation ? "Free cancellation" : "" }
		</span>
		<button className="go-to-offer-btn">
			<span>{ props.bestPrice.link }</span>
			<FontAwesomeIcon icon={ArrowRightIcon} color="white"/>
		</button>
	</Fragment>
)

BestPrice.propTypes = {
	bestPrice: PropTypes.object
}

export default BestPrice
