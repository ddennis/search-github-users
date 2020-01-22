import React, {useState} from "react";
import { useTransition , animated } from 'react-spring';
import {GithubProfile} from "../types/github-response-model";
import RepoList from "./RepoList";

type Props ={
	profileData:GithubProfile
}

const Profile: React.FC<Props> = ({profileData}) => {

	const transitions = useTransition( profileData, null, {
		from: {opacity: 0, transform: 'translate3d(0,20px,0)'},
		enter: {opacity: 1, transform: 'translate3d(0,0,0)'},
		leave: {opacity: 0, transform: 'translate3d(0,0,0)'},
	} );

	const [showRepo, setShowRepo] = useState( false );
	const loadRepos = () => {
		setShowRepo( true )
	};

	return <>

		{
			transitions.map(({ item, key, props }) =>
			profileData && <animated.div  className="row " style={{background: "white", ...props}} key={key} >


						<div className="col-12 mt-5 ">
							<div className="mb-4 text-center">
								<h1 className="text-center">{profileData.login}</h1>
								<p className="text-center mb-0">{profileData.location}</p>
							</div>
						</div>

						<div className="col-12 mt-2 ">
							<div className="w-100 d-flex justify-content-center">
								<div className="" style={{width: 250, height: 250}}>
									<img className="rounded-circle img-fluid" src={profileData.avatar_url} alt=""/>
								</div>
							</div>
						</div>

						<div className="col-12 mx-auto mt-3 ">
							<div className="mt-4 mb-3 w-100 d-flex justify-content-center ">
								<div className="ml-4">
									<h5 className="text-center mb-0 font-weight-bold">{profileData.following}</h5>
									<p className="text-center">Following</p>
								</div>
								<div className="ml-4 mr-4">
									<h5 className="text-center mb-0 font-weight-bold ">{profileData.followers}</h5>
									<p className="text-center">Followers</p>
								</div>
								<div className="mr-4">
									<h5 className="text-center mb-0 font-weight-bold">{profileData.public_repos}</h5>
									<p className="text-center">Repos</p>
								</div>
							</div>
						</div>

						{!showRepo &&
							  <div className="col-12 col-md-6  mx-auto ">
								  <div onClick={loadRepos}
										 className="pointer mx-auto rounded-pill p-2 w-80 text-center bg-primary"
										 style={{maxWidth: 400}}>
									  <h5 className="text-white pt-2">Load repositories list</h5>
								  </div>
							  </div>
						}

						<RepoList showRepo={showRepo} repos_url={profileData.repos_url}></RepoList>

				</animated.div>
			)
		}
	</>



};

export default Profile
