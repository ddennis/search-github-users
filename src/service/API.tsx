
export const getData = (path:string, query:string) => {

	const url:string = path + query;
	return fetch(url, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then( (res) => {
			return res.json()
		})
		.then(res => res)
		.catch((err) => {
			console.log (" API > err = " , err);
			return err
		})
};
