/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 28-12-2019.
 */


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

			if (res.status !== 200){
				//return Promise.reject(res);
			}

			return res.json()
			//return Promise.resolve(res.json())

		})
		.then(res => res)
		/*.catch((err) => {
			console.log (" API > err = " , err);
			return err
		})*/
};
