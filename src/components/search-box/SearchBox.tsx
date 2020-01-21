import React, {ChangeEvent, KeyboardEvent, useState} from "react";

interface ISearchBox {
	submit: Function;
}

const SearchBox: React.FC<ISearchBox> = ({submit}) => {

	const [inputTxt, setInputTxt] = useState( "" );

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputTxt( e.target.value )
	}

	const search = () => {
		if (inputTxt.length > 2) {
			submit( inputTxt )
		} else {
			console.log( " SearchBox > stop = " );
		}
	};

	const enterPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key && e.key === "Enter") {
			search()
		}
	};

	return (

		<div className="d-flex h-100 justify-content-center align-items-center" >

			<div className="w-100 rounded-pill p-4" style={{background:"red"}}>
				<input type="text" className=" w-100" style={{
					border: "none",
					borderRadius: 0,


				}}
				   onChange={onChange} value={inputTxt} onKeyPress={enterPress}/>
			</div>

		</div>

	);
};

export default SearchBox
