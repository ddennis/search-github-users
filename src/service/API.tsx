/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 28-12-2019.
 */

import React from "react";
import enviroment from '../enviroment'

export const getUsers = (query:string) => {

	const url:string = enviroment.SEARCH_USERS + query;
	return fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then( (res) => {

			if (res.status !== 200){
				return Promise.reject(res);
			}

			return Promise.resolve(res.json())

		})
		.then(res => res)
		/*.catch((err) => {
			console.log (" API > err = " , err);
			return err
		})*/
};
