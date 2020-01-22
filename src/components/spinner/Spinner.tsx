import React, { useCallback , useState} from "react";
import { useSpring, animated } from 'react-spring';
import './spinner.scss'

type Props ={
	error:string | null;

}


const Spinner: React.FC<Props> = (props) => {

	const {error} = props;

	console.log (" Spinner > error = " , error);
	const [isActive, setActive] = useState(true);
	const statusTxt = !error ? "Getting energy data..." : error;


  return (
	  <div className="row" 	 >
		<div className="col-12 text-center" >

		  {!error ?

			  <div className="loader"></div>

			  :

			  <div style={{padding:20}}>
				  <h1>adasd</h1>
				  <p>An error happend:</p>
				  <p>{statusTxt}</p>

			  </div>
		  }
		</div>
	  </div>
  );
};

export default Spinner

