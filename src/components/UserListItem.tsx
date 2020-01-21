import React from "react";


type Props ={
	avatar_url:string
	login:string;
	selectUser:Function
}

const UserListItem: React.FC<Props> = ({login, avatar_url , selectUser}) => {

	const itemClick = () => {
		console.log (" UserListItem > login = " );
		selectUser(login)
	}

  return (
	  <div className="col-6 col-md-4 col-lg-3 pointer mt-4  " 	 onClick={itemClick} >
		  <div className="bg-white d-flex flex-column align-items-center p-3">
			  <div className=" " style={{width:100, height:"auto"}}>
				  <img className="rounded-circle img-fluid" src={avatar_url} alt=""/>
			  </div>

			  <p>{login}</p>
		  </div>
	  </div>
  );
};

export default UserListItem
