import * as React from "react";
export default class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
						{/* 	<a
								href="https://codepen.io/kodi24fever"
								target="_blank"
								rel="noopener noreferrer">
								<img className="img-fluid" src="../assets/img/codepen.png" alt=""/>
							</a> */}
							<a
								className="px-3"
								href="https://github.com/ramses512"
								target="_blank"
								rel="noopener noreferrer">
								<img src="../assets/img/github.png" alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/ramsesfernandez"
								target="_blank"
								rel="noopener noreferrer">
								<img src="../assets/img/linkedin.png" alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4 title">Ramsés Fernández &copy; 2020</h5>
				</div>
			</div>
		);
	}
}

