import React, {ReactChildren, ReactNode, useEffect, useState} from "react";
import {getUsers} from "../service/API";
import {githubResponse, userItems} from "../types/github-response-model";


export type stateProps = {
	isLoading:boolean;
	data:{items:Array<userItems>};
	error:string;
}

type Props ={
	query?:string;
	children?: any;
}



const FetchData: React.FC<Props> = (props) => {

	const query: string = props.query || "";
	const [state, setData] = useState<stateProps>( {isLoading: true, data: {items: []}, error: ""} );

	useEffect(() => {

		setData( {...state, isLoading: true} );

			if (query === ""){
				return
			}

			getUsers(query)
				.then((res:githubResponse ) => {
					setData({isLoading:false, data:res, error:""})

				}).catch((error) => {
					console.log (" FetchData > error = " , error);
					setData({isLoading:false, data:{items:[]}, error:"We are sorry, but things did not go as expected"})
			})
		}, [query]
	);

	return props.children(state)
	//return  state.data === null ? <Spinner></Spinner> : props!.children(state)
	//return  state.data === null ? <Spinner show={state.isLoading} error={state.error} ></Spinner> : props.children(state)
};

export default FetchData



