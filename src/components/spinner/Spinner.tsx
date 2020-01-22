import React from "react";

import './spinner.scss'

type Props = {
	error: string | null;
}

const Spinner: React.FC<Props> = (props) => {

	const {error} = props;
	const statusTxt = !error ? "Getting energy data..." : error;

	return (
		<div className="row">
			<div className="col-12  text-center">

				{!error ?

					<div className="loader"></div>

					:

					<div className="w-100 d-flex flex-column justify-content-center align-items-center " style={{padding: 20}}>
						<div className="w-50">
							<h1>An error happend:</h1>
							<p>{statusTxt}</p>
						</div>
					</div>
				}
			</div>
		</div>
	);
};

export default Spinner

