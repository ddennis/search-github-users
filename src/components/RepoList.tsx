import React from "react";
import FetchData, {FetchResponse} from "./FetchData";
import {GithubRepos} from "../types/github-response-model";
import {get} from 'lodash'

type Props ={
	showRepo:boolean;
	repos_url:string
}

const RepoList: React.FC<Props> = ({showRepo, repos_url}) => {

	return (

	  <div className="col-8 mx-auto mt-4" style={{overflowX:"hidden"}}>
		  {
			  showRepo && <FetchData endpoint={repos_url} query={" "}>
				  {
					  (repoResponse:FetchResponse) => {
						  const repos: Array<GithubRepos> = get( repoResponse, "data", [] )
						  return (
							  <div className="row" style={{}}>

								  {
									  repos.map( (item:GithubRepos) => {
										  return (
											  <div key={item.id} className="col-12">
												  <div>
													  <h4 className="text-center mb-2 font-weight-bold">{item.name}</h4>
													  <p className="text-center mb-0">{item.description}</p>
													  <p className="text-center"> {item.language}</p>
												  </div>
												  <hr/>
											  </div>
										  )
									  })
								  }

							  </div>
						  )

					  }
				  }
				  </FetchData>
		  }
	  </div>
  );
};

export default RepoList
