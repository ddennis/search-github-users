import React from "react";
import UserListItem from "./UserListItem";
import { useTransition , animated, useSpring } from 'react-spring';
import {GithubUser} from "../types/github-response-model";


type Props = {
	query:string;
	selectUser:Function;
	users:Array<GithubUser>;
	totalCount:number;
}

const UserList: React.FC<Props> = ({users, query, selectUser, totalCount}) => {

	const transitions = useTransition( users, item => item.id, {
		from: {opacity: 0, transform: 'translate3d(0,100px,0)'},
		enter: {opacity: 1, transform: 'translate3d(0,0px,0)'},
		leave: {opacity: 0, transform: 'translate3d(0,40px,0)'},
		trail: 25
	} );

	const aniProps = useSpring({opacity: users.length === 0 ? 0 : 1, reset:true})

	return (

		<div className="row">

			<animated.div className="col-12 text-center" style={aniProps} >
				<h5>Found {totalCount} results for <b>{query}</b></h5>
			</animated.div>

			{
				transitions.map(({ item, props, key }) => {
					return (
						<animated.div className="col-6 col-md-4 col-lg-3 pointer mt-4 mb-4 " key={key} style={props}>
							<UserListItem key={item.id}	selectUserFunc={selectUser}	userData={item}	/>
						</animated.div>
					)

				})
			}



		</div>
	)




};

export default UserList


/*return (
					  <div className="row " style={{}}>
						  {
							  users.map( (item) => {
								  return <UserListItem
									  selectUser={selectUser}
									  key={item.id}
									  avatar_url={item.avatar_url}
									  login={item.login}
								  ></UserListItem>

							  } )
						  }
					  </div>
				  )*/
