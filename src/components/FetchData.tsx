import React, { useEffect, useState} from "react";
import {getData} from "../service/API";
import {githubResponse, userItems} from "../types/github-response-model";


export type FetchResponse = {
	isLoading:boolean;
	data:any;
	error:string;
}

type Props = {
	query?:string;
	params?:string;
	endpoint:string
	children?: any;
}




const ErrorView: React.FC<{message:string}> = ({message}) => {
  return (
  	<div className="h-100 p-5">
		<h1>FetchData</h1>
		<p>{message}</p>
	</div>

  );
};





const FetchData: React.FC<Props> = React.memo( ({query = "", endpoint, params = "",  children}) => {

	const [state, setState] = useState<FetchResponse>( {isLoading: true, data: undefined, error: ""} );

	useEffect(() => {

		setState( {...state, isLoading: true} );

			if (query === ""){
				return
			}

			getData(endpoint, query + params)
				.then((res ) => {
					console.log (" FetchData > loading = " );

					if(res.message ){
						setState({isLoading:false, data:undefined, error:res.message})
					}else{
						setState({isLoading:false, data:res, error:""})
					}

				}).catch((error) => {
					console.log (" FetchData > error = " , error);
					setState({isLoading:false, data:undefined, error:"We are sorry, but things did not go as expected"})
			})
		}, [query]
	);

	return state.error !== "" ? <ErrorView message={state.error}/> : children(state)

});

export default FetchData



