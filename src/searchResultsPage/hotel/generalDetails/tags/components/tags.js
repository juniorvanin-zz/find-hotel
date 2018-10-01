import React from "react"
import PropTypes from "prop-types"

const Tags = (props) => (
	<ul className="tags">
		{ props.tags.map((tag) => <li key={ tag }> { tag } </li>) }
	</ul>
)

Tags.propTypes = {
	tags: PropTypes.array
}

export default Tags
