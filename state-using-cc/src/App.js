import React from "react";

class App extends React.Component {
	state = {
		countValue: 0,
	};

	increaseCounter = () => {
		this.setState({ countValue: this.state.countValue + 1 });
	};

	decreaseCounter = () => {
		this.setState({ countValue: this.state.countValue - 1 });
	};

	render() {
		return (
			<div>
				<h1>Counter Demo</h1>
				<h3>Counter: {this.state.countValue}</h3>
				<button onClick={this.increaseCounter}>Increment Counter</button>
				<button onClick={this.decreaseCounter}>Decrement Counter</button>
			</div>
		);
	}
}

export default App;
