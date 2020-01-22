import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {ReactComponent as SearchIcon} from '../../assets/svg/search.svg'

import './search-box.scss'

interface ISearchBox {
	submit: Function;
}

const SearchBox: React.FC<ISearchBox> = ({submit}) => {

	const [inputTxt, setInputTxt] = useState( "" );

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputTxt( e.target.value )
	};

	const search = () => {
		if (inputTxt.length > 1) {
			submit( inputTxt )
		}
	};

	const enterPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key && e.key === "Enter") {
			search()
		}
	};


	return (

		<div className="search-box d-flex h-100 justify-content-center align-items-center" >

			<div className="d-flex justify-content-around w-100 p-3 p-md-4"
				 style={{
				 	background:"white",
					 borderRadius:40,
					 boxShadow: "0px 14px 133px 0px rgba(0, 0, 0, 0.20)"
				 }}>

				<div className="pl-2 pl-md-3 mr-2 mr-md-3 my-auto">
					<SearchIcon ></SearchIcon>
				</div>

				<input type="text" className=" w-100" placeholder="Search for a user..." style={{
					border: "none",
					outline: "none",
				}}
				   onChange={onChange} value={inputTxt} onKeyPress={enterPress}/>
			</div>

		</div>

	);
};

export default SearchBox
