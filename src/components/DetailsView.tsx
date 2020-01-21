import React, {useState} from "react";
import {animated, useTransition} from 'react-spring'
import FetchData, {FetchResponse} from "./FetchData";
import enviroment from "../enviroment";
import {userItems} from "../types/github-response-model";
import {get} from 'lodash'
import {ReactComponent as CloseIcon} from '../assets/svg/close.svg'

type Props = {
	userId: string;
	closeFunc:Function;
}

const resObj = {
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
	name: "ddennis - Dennis Christoffersen",
	company: "ddennis.dk - fantastisk.dk",
	blog: "ddennis.dk",
	location: "Copenhagen",
	email: null,
	hireable: true,
	bio: null,
	public_repos: 34,
	public_gists: 30,
	followers: 6,
	following: 10,
	created_at: "2010-06-08T20:55:17Z",
	updated_at: "2020-01-20T15:31:17Z"
}


const DetailsView: React.FC<Props> = ({closeFunc, userId}) => {


	const closeDetails = () => {
		closeFunc()
	}

	return (

		<div className="position-absolute w-100 " style={{minHeight: "110vh", top: 0, left: 0, background: "white"}}>

			<div className="position-fixed pointer " style={{top:10, right:10, zIndex:501}} onClick={closeDetails}>
				<div className="rounded-circle text-center pt-3" style={{background:"#d0d0d0", width:60, height:60}}>
					<CloseIcon></CloseIcon>
				</div>
			</div>
							<div className="container-fluid h-100" style={{background: "white"}}>

								<div className="row mt-5 " style={{}}>
									<div className="col-6">
										<h1>s</h1>
									</div>
								</div>

								<div className="row h-100" >
									<div className="col">
										<h1>asdad</h1>
									</div>
								</div>

								{/*<FetchData endpoint={enviroment.USER_DETAILS} query={userId}>
									{
										(userInfo: FetchResponse) => {

											console.log (" DetailsView > userInfo = " , userInfo);


											return (


												<div className="row" style={{}}>

													<div className="col-12">

														<div className="row" style={{}}>
															<div className="col">
																<h1>{userId}</h1>
															</div>
														</div>



													</div>

													<div className="col-6">

													</div>
												</div>
											)
										}
									}
								</FetchData>*/}
							</div>

		</div>

	)

};

export default DetailsView

/*

{
	transitions.map( ({item, key, props}) =>

		item && <animated.div className="position-absolute w-100 " style={{height: "80vh", zIndex: 500, top: 0, left: 0, ...props}} key={key}>

			 <div className="container-fluid h-100" style={{background: "white"}}>
				 <div className="row" style={{}}>
					 <div className="col-6" style={{background: "red"}}>
						 <h1>asd</h1>
					 </div>

					 <div className="col-6">
						 <div className="pointer text-right p-5" onClick={closeDetails}>X</div>
					 </div>
				 </div>
				 <div className="row" style={{}}>

				 </div>
			 </div>
			 ️</animated.div>
	)
}*/
