import React from "react"
import "../item.css"

class Item extends React.Component {
	render() {
		return (
			<div className="item-wrapper">
				<div className="thumbnail"></div>
				<div className="general-details">
					<h2>Quentin Amsterdam Hotel</h2>
					<span className="location"> 120 m to city center - Jordan </span>
					<span className="rating"> Amazing 9.2 </span>
					<ul className="tags">
						<li> Amazing SPA </li>
						<li> Good food </li>
						<li> Family friendly </li>
						<li> Great location </li>
						<li> Perfect WiFi </li>
					</ul>
				</div>
				<div className="price-details">
					<span> $ 104 </span>
				</div>
			</div>
		)
	}
}

export default Item
