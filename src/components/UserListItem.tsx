import React from "react";
import {GithubUser} from "../types/github-response-model";

type Props = {
	selectUserFunc: Function;
	userData:GithubUser
}

const UserListItem: React.FC<Props> = ({selectUserFunc, userData}) => {

	const {avatar_url, login, score} = userData;

	const itemClick = () => {
		selectUserFunc( userData )
	}

	return (
		<div onClick={itemClick}>
			<div className="bg-white d-flex flex-column align-items-center p-1 w-100" style={{boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.08)", border:"2px solid rgba(0,0,0,.1)", borderRadius:4}}>

				<div className="text-center mt-3 mt-md-4 mb-2 mb-sm-3 w-80  ">
					<h5 className="text-truncate text-primary font-weight-bold">{login}</h5>
				</div>

				<div className=" " style={{width: 100, height: 100}}>
					<img className="rounded-circle img-fluid" src={avatar_url} alt=""/>
				</div>

				<div className="mt-3 mt-md-4 mb-0 w-100 text-center">

					<p className="mb-0">Github Score</p>
					<p className="font-weight-bold">{score}</p>
				</div>

			</div>
		</div>
	);
};

export default UserListItem
