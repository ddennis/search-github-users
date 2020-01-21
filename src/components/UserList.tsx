import React from "react";
import FetchData, {FetchResponse} from "./FetchData";
import enviroment from "../enviroment";
import UserListItem from "./UserListItem";
//import get from "lodash";
import {githubResponse, userItems} from "../types/github-response-model";

import {get} from 'lodash'
import { animated } from "react-spring";

type Props = {
	query:string;
	selectUser:Function;

}

const UserList: React.FC<Props> = ({query, selectUser}) => {


	//const [items, set] = useState([...])

	return (

	  <FetchData endpoint={enviroment.SEARCH_USERS} query={query}>
		  {
			  (fetchState: FetchResponse) => {

				  const users:Array<userItems> = get(fetchState, "data.items", [])
				  const transitions = useTransition(users, item => item.key, {
					  from: { transform: 'translate3d(0,-40px,0)' },
					  enter: { transform: 'translate3d(0,0px,0)' },
					  leave: { transform: 'translate3d(0,-40px,0)' },
				  })

				  transitions.map(({ item, props, key }) =>{

				  	console.log (" UserList > item = " , item);

						  return (
							  <animated.div key={key} style={props}>
								  <UserListItem
									  selectUser={selectUser}
									  key={item.id}
									  avatar_url={item.avatar_url}
									  login={item.login}
								  ></UserListItem>
							  </animated.div>
						  )
					  }

				  )


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
			  }
		  }
	  </FetchData>
  );
};

export default UserList
