import React, {useRef, useState} from 'react';
import {get} from 'lodash'
import SearchBox from './components/search-box/SearchBox';
import FetchData, {FetchResponse} from './components/FetchData';
import enviroment from "./enviroment";

import DetailsView from "./components/DetailsView";
import UserList from './components/UserList';
import { useSpring, animated } from 'react-spring';
import {GithubUser} from "./types/github-response-model";

const App: React.FC = () => {

	//
	// Load some profiles on mount
	//
	const [query, setQuery] = useState( "torvalds" );
	const [userData, setUserData] = useState<GithubUser | null>();
	const [props, set, stop] = useSpring(() => ({y:0, display: "none", opacity: 0, config: {friction: 40, tension: 600}}))

	//
	// When a user is selected we fade in the user-details
	//
	const selectUser = (user: GithubUser) => {
        set({ to: [{display: "block" }, {opacity: 1, y:0}]})
		setUserData(user)
	};

	//
	// to make sure we dont have multiple scrollbars - we wait for the animation to finish
	//
	const closeDetails = () => {
        set({ to: [{opacity: 0, y:30 }, { display: "none"}],
			onRest: (k) => {
            	if(k.display === "none" ){
					setUserData(null)
            	}
			}
        })
    };


	return (

	    <>
			<animated.div className="position-relative" style={{zIndex: 500, ...props}}>
			 	{userData && <DetailsView userData={userData} closeFunc={closeDetails}></DetailsView>}
			</animated.div>


			<div className="container-fluid vh-100 " style={{overflow: !userData ? "auto" : "hidden"}} >

				<div className="row mt-md-5 mt-0" style={{}}>

					<div className="col-12 col-md-8 col-lg-4 mx-auto mb-md-4 mt-3 mt-md-5" style={{}} >
						<SearchBox submit={setQuery}></SearchBox>
					</div>

					<div className="col-12 col-md-10 mx-auto mt-4 ">
						<FetchData endpoint={enviroment.SEARCH_USERS} query={query}>
							{
								(fetchState: FetchResponse) => {
									const users: Array<GithubUser> = get( fetchState, "data.items", [] );
									const totalCount: number = get( fetchState, "data.total_count", 0 );
									return <UserList selectUser={selectUser} totalCount={totalCount} users={users} query={query} > </UserList >
								}
							}
						</FetchData>
					</div>
				</div>
			</div>
        </>

	);
};

export default App;
