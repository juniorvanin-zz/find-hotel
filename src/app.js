import React from "react"
import ReactDOM from "react-dom"

class HelloMessage extends React.Component {
	render() {
		return <div>Welcome to simple react app</div>
	}
}

var mountNode = document.getElementById("app")
ReactDOM.render(<HelloMessage />, mountNode)
