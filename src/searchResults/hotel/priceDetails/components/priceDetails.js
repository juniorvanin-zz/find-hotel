import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faLongArrowAltRight as ArrowRightIcon,
	faSortDown as ArrowDownIcon
} from "@fortawesome/free-solid-svg-icons"

import "searchResults/hotel/PriceDetails/PriceDetails.css"

const PriceDetails = (props) => (
	<div className="price-details">
		<del className="regular-price"> { props.regularPrice } </del>
		<span className="best-price"> { props.bestPrice.amount } </span>
		<span className="best-price-message">
			{ props.bestPrice.freeCancellation ? "Free cancellation" : "" }
		</span>
		<button className="go-to-offer-btn">
			<span>{ props.bestPrice.link }</span>
			<FontAwesomeIcon icon={ArrowRightIcon} color="white"/>
		</button>
		<ul className="other-prices">
			{
				props.otherPrices.map((price) => (
					<li key={ price.site }>
						<span className="site"> { price.site } </span>
						<span className="price"> { price.amount } </span>
					</li>
				))
			}
		</ul>
		<button className="show-details">
			<span> Show details </span>
			<FontAwesomeIcon icon={ArrowDownIcon} color="black" size="lg"/>
		</button>
	</div>
)

PriceDetails.propTypes = {
	regularPrice: PropTypes.string,
	bestPrice: PropTypes.object,
	otherPrices: PropTypes.array
}

export default PriceDetails
