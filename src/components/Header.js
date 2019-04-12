import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {

		console.log(this.props);

		return (
			<div>
				<header>
					<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarCollapse">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<Link className="nav-link" to="/">首頁 <span className="sr-only">(current)</span></Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/about">購物車({this.props.list.length})</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/house">關於</Link>
								</li>
							</ul>

						</div>
					</nav>
				</header>
			</div>
		);
	}
}

export default Header;
