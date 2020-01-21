import React, {useRef, useState} from 'react';
import SearchBox from './components/SearchBox';
import FetchData, {FetchResponse} from './components/FetchData';
import UserListItem from "./components/UserListItem";
import enviroment from "./enviroment";

import DetailsView from "./components/DetailsView";
import UserList from './components/UserList';
import { useSpring, animated } from 'react-spring';

const App: React.FC = () => {

	const [query, setQuery] = useState( "ddennis" );
	const [userId, setUserId] = useState( "" );

	const selectUser = (login: string) => {

        set({
            to: [{display: "block" }, {opacity: 1, y:0}],
            //from: {opacity: 0, color: 'blue'}
        })

		setUserId(login)

	};


    const [props, set, stop] = useSpring(() => ({y:0, display: "none", opacity: 0, config: {friction: 40, tension: 600}}))

	const closeDetails = () => {
        set({
            to: [{opacity: 0, y:0 }, { display: "none"}],
			onRest: (k) => {
            	if(k.display === "none" ){
					setUserId("")
            	}
				console.log (" App > end = " , k);
			}
        })

    };


	return (

	    <>

         <animated.div className="position-relative" style={{zIndex: 500, ...props}}>
             <DetailsView userId={userId} closeFunc={closeDetails}></DetailsView>
         </animated.div>



		<div className="container-fluid vh-100 " style={{overflow:userId === "" ? "auto" : "hidden"}} >

			<div className="row h-100" style={{}}>

				<div className="col-12 h-30 ">
                    <div className="d-flex h-100 justify-content-center align-items-center">
                        <SearchBox submit={setQuery}></SearchBox>
                    </div>
				</div>


				<div className="col-12 col-md-8 mx-auto  ">
                    <UserList selectUser={selectUser} query={query} ></UserList>
				</div>
			</div>

		</div>
        </>

	);
};

export default App;
