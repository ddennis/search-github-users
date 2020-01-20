import React, {ChangeEvent,KeyboardEvent, useState} from "react";

interface ISearchBox {
	submit:Function;
}


const SearchBox: React.FC<ISearchBox> = ({submit}) => {

	const [inputTxt, setInputTxt] = useState( "" );

	const onChange = (e:ChangeEvent<HTMLInputElement>) => {
		setInputTxt(e.target.value)
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

		<div className="row" style={{}}>
			<div className="col">

				<input type="text" onChange={onChange} value={inputTxt} onKeyPress={enterPress}/>
				<button onClick={search}>search</button>

			</div>
		</div>

	);
};

export default SearchBox
