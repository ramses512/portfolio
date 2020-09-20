import * as React from "react";
import * as ReactDOM from 'react-dom';

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./styles/index.scss";

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<Footer />
	</React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
