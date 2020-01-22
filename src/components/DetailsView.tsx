import React, {useState} from "react";
import FetchData, {FetchResponse} from "./FetchData";
import {GithubProfile, GithubUser} from "../types/github-response-model";
import {get} from 'lodash'
import {ReactComponent as CloseIcon} from '../assets/svg/close.svg'
import RepoList from "./RepoList";

type Props = {
	userData: GithubUser;
	closeFunc: Function;
}

const DetailsView: React.FC<Props> = ({closeFunc, userData}) => {

	const [showRepo, setShowRepo] = useState( false );

	const closeDetails = () => {
		closeFunc()
	};

	const loadRepos = () => {
		setShowRepo( true )
	};

	return (

		<div className="position-absolute h-100 w-100 " style={{minHeight: "101vh", top: 0, left: 0, background: "white"}}>

			<div className="position-fixed pointer " style={{top: 10, right: 10, zIndex: 501}} onClick={closeDetails}>
				<div className="rounded-circle text-center pt-3 bg-primary" style={{width: 58, height: 58}}>
					<CloseIcon></CloseIcon>
				</div>
			</div>

			<div className="container-fluid h-100">

				<FetchData endpoint={userData.url} query={" "}>
					{
						(profileResponse: FetchResponse) => {

							const profile: GithubProfile = get( profileResponse, "data", [] );

							return (

								<div className="row " style={{background: "white"}}>
									<div className="col-12 mt-5 ">
										<div className="mb-4 text-center">
											<h1 className="text-center">{profile.login}</h1>
											<p className="text-center mb-0">{profile.location}</p>
										</div>
									</div>

									<div className="col-12 mt-2 ">
										<div className="w-100 d-flex justify-content-center">
											<div className="" style={{width: 250, height: 250}}>
												<img className="rounded-circle img-fluid" src={profile.avatar_url} alt=""/>
											</div>
										</div>
									</div>


									<div className="col-12 mx-auto mt-3 ">
										<div className="mt-4 mb-3 w-100 d-flex justify-content-center ">
											<div className="ml-4">
												<h5 className="text-center mb-0 font-weight-bold">{profile.following}</h5>
												<p className="text-center">Following</p>
											</div>
											<div className="ml-4 mr-4">
												<h5 className="text-center mb-0 font-weight-bold ">{profile.followers}</h5>
												<p className="text-center">Followers</p>
											</div>
											<div className="mr-4">
												<h5 className="text-center mb-0 font-weight-bold">{profile.public_repos}</h5>
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

									<RepoList showRepo={showRepo} repos_url={profile.repos_url}></RepoList>

								</div>
							)
						}
					}
				</FetchData>
			</div>

		</div>

	)

};

export default DetailsView
