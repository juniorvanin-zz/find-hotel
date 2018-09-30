import React from "react"
import PropTypes from "prop-types"

import GeneralDetails from "searchResults/hotel/generalDetails/components/generalDetails"
import PriceDetails from "searchResults/hotel/priceDetails/components/priceDetails"
import HotelThumbnail from "searchResults/hotel/hotelThumbnail/components/hotelThumbnail"

import "searchResults/hotel/hotel.css"

const Hotel = (props) => (
	<div className="item-wrapper">
		<HotelThumbnail />
		<GeneralDetails {...props.generalDetails}/>
		<PriceDetails />
	</div>
)

Hotel.propTypes = {
	generalDetails: PropTypes.object
}

export default Hotel
