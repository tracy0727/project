import React, { Component } from 'react';

class Footer extends Component {
	render() {

		//console.log(this.props);

		return (
			<footer className="py-5 bg-dark">
			<div className="container">
				<p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
			</div>
		</footer>
		);
	}
}

export default Footer;
