import React from "react";
export function Card(props) {
	return (
		<div>
			<div className="card">
				{" "}
				<img
					className="card-img-top"
					src="http://via.placeholder.com/350x150"
					alt="Card image cap"
				/>{" "}
				<div className="card-body">
					{" "}
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						fill the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>{" "}
				</div>{" "}
			</div>
		</div>
	);
}
