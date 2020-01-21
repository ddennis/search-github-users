import React, {useRef, useState} from 'react';
import SearchBox from './components/search-box/SearchBox';
import FetchData, {FetchResponse} from './components/FetchData';
import UserListItem from "./components/UserListItem";
import enviroment from "./enviroment";
import {get} from 'lodash'
import DetailsView from "./components/DetailsView";
import UserList from './components/UserList';
import { useSpring, animated } from 'react-spring';
import {GithubUser} from "./types/github-response-model";

const App: React.FC = () => {

	const [query, setQuery] = useState( "torvalds" );
	const [userData, setUserData] = useState<GithubUser | null>(null
		/*{
			login: "ddennis",
		id: 300269,
		node_id: "MDQ6VXNlcjMwMDI2OQ==",
		avatar_url: "https://avatars1.githubusercontent.com/u/300269?v=4",
		gravatar_id: "",
		url: "https://api.github.com/users/ddennis",
		html_url: "https://github.com/ddennis",
		followers_url: "https://api.github.com/users/ddennis/followers",
		following_url: "https://api.github.com/users/ddennis/following{/other_user}",
		gists_url: "https://api.github.com/users/ddennis/gists{/gist_id}",
		starred_url: "https://api.github.com/users/ddennis/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/ddennis/subscriptions",
		organizations_url: "https://api.github.com/users/ddennis/orgs",
		repos_url: "https://api.github.com/users/ddennis/repos",
		events_url: "https://api.github.com/users/ddennis/events{/privacy}",
		received_events_url: "https://api.github.com/users/ddennis/received_events",
		type: "User",
		site_admin: false,
		score: 560.8415}*/ );
	//const [props, set, stop] = useSpring(() => ({y:0, display: "none", opacity: 0, config: {friction: 40, tension: 600}}))
	const [props, set, stop] = useSpring(() => ({y:30, display: "none", opacity: 1, config: {friction: 40, tension: 600}}))


	const selectUser = (user: GithubUser) => {
        set({ to: [{display: "block" }, {opacity: 1, y:0}]})
		setUserData(user)
	};


	const closeDetails = () => {
        set({
            to: [{opacity: 0, y:30 }, { display: "none"}],
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

				<div className="row h-100" style={{}}>



					<div className="container-fluid h-40" >
						<div className="row h-100" style={{}}>
							<div className="col-12 col-md-8 col-lg-4 mx-auto "  >
								<SearchBox submit={setQuery}></SearchBox>
							</div>
						</div>
					</div>

					{/*
						<div className="position-fixed w-50  " style={{top:0, left:"50%", transform:"translate3d(-50%,0,0)", zIndex:200 }}>
								<SearchBox submit={setQuery}></SearchBox>
						</div>

						<div className="col-12 h-40">
						</div>
					*/}

					<div className="col-12 col-md-10 mx-auto  ">
						<FetchData endpoint={enviroment.SEARCH_USERS} query={query}>
							{
								(fetchState: FetchResponse) => {

									const users: Array<GithubUser> = get( fetchState, "data.items", [] )
									const totalCount: number = get( fetchState, "data.total_count", 0 )
									console.log (" App > users = " , fetchState);

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
