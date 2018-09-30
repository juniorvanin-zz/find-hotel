import React from "react"
import PropTypes from "prop-types"

import GeneralDetails from "searchResults/hotel/generalDetails/components/generalDetails"
import PriceDetails from "searchResults/hotel/priceDetails/components/priceDetails"
import HotelThumbnail from "searchResults/hotel/hotelThumbnail/components/hotelThumbnail"

import "searchResults/hotel/hotel.css"

const Hotel = (props) => (
	<li className="item-wrapper">
		<HotelThumbnail />
		<GeneralDetails { ...props.generalDetails }/>
		<PriceDetails { ...props.priceDetails }/>
	</li>
)

Hotel.propTypes = {
	generalDetails: PropTypes.object,
	priceDetails: PropTypes.object
}

export default Hotel
