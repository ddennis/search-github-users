import React, { useEffect, useState} from "react";
import {getData} from "../service/API";
import Spinner from "./spinner/Spinner";

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


const FetchData: React.FC<Props> = React.memo( ({query = "", endpoint, params = "",  children}) => {

	const [state, setState] = useState<FetchResponse>( {isLoading: true, data: undefined, error: ""} );

	useEffect(() => {

		setState( {...state, isLoading: true, data:null } );

			// Don't fetch if no query
			if (query === "") return;

			getData(endpoint, query + params)
				.then((res ) => {

					if(res.message ){
						setState({isLoading:false, data:null, error:res.message})
					}else{
						setState({isLoading:false, data:res, error:""})
					}


				}).catch((error) => {
					setState({isLoading:false, data:null, error:"We are sorry, but things did not go as expected"})
			})

		}, [query]
	);


	return  state.data === null ? <Spinner error={state.error} ></Spinner> : children(state)



});

export default FetchData



