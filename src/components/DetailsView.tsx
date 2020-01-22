import React from "react";
import FetchData, {FetchResponse} from "./FetchData";
import {GithubProfile, GithubUser} from "../types/github-response-model";
import {get} from 'lodash'
import {ReactComponent as CloseIcon} from '../assets/svg/close.svg'
import Profile from "./Profile";

type Props = {
	userData: GithubUser;
	closeFunc: Function;
}

const DetailsView: React.FC<Props> = ({closeFunc, userData}) => {

	const closeDetails = () => {
		closeFunc()
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
								<Profile profileData={profile}></Profile>
							)
						}
					}
				</FetchData>
			</div>
		</div>

	)

};

export default DetailsView
