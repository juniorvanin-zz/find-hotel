import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faLongArrowAltRight as ArrowRightIcon,
	faSortDown as ArrowDownIcon
} from "@fortawesome/free-solid-svg-icons"

import "searchResults/hotel/PriceDetails/PriceDetails.css"

const PriceDetails = () => (
	<div className="price-details">
		<del className="regular-price"> € 115 </del>
		<span className="best-price"> € 104 </span>
		<span className="best-price-message"> Free cancellation</span>
		<button className="go-to-offer-btn">
			<span>Booking.com</span>
			<FontAwesomeIcon icon={ArrowRightIcon} color="white"/>
		</button>
		<ul className="other-prices">
			<li>
				<span className="site">priceline.com</span>
				<span className="price"> €115 </span>
			</li>
			<li>
				<span className="site">expedia.com</span>
				<span className="price"> €132 </span>
			</li>
			<li>
				<span className="site">7ideas.com</span>
				<span className="price"> €129 </span>
			</li>
		</ul>
		<button className="show-details">
			<span> Show details </span>
			<FontAwesomeIcon icon={ArrowDownIcon} color="black" size="lg"/>
		</button>
	</div>
)

export default PriceDetails
