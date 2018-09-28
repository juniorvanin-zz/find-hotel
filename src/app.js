import React from "react"
import ReactDOM from "react-dom"
import SearchResults from "searchResults/components/searchResults"
import "app.css"

class HelloMessage extends React.Component {
	render() {
		return (
			<div>
				<p>Welcome to simple react app</p>
				<SearchResults/>
			</div>
		)
	}
}

var mountNode = document.getElementById("app")
ReactDOM.render(<HelloMessage />, mountNode)
