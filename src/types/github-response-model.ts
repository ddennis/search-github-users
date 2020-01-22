
export interface githubResponse {
	total_count: number;
	incomplete_results: boolean;
	items:Array<GithubUser>
}

export interface GithubRepos {
	id:number;
	name:string;
	description:string;
	language:string;
}


export interface GithubUser {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
	score: number
}

export interface GithubProfile {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url:string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type:  string;
	site_admin:  boolean;
	name:  string;
	company:  string;
	blog:  string;
	location: string;
	email:  string | null;
	hireable: boolean,
	bio:  string | null,
	public_repos: number,
	public_gists: number,
	followers: number,
	following: number,
	created_at:  string;
	updated_at:  string;
}


export const dummyProfileObj = {
	login: "ddennis",
	id: 300269,
	node_id: "MDQ6VXNlcjMwMDI2OQ==",
	avatar_url: "https://avatars1.githubusercontent.com/u/300269?v=4",
	gravatar_id: "",
	url: "https://api.github.com/users/ddennis",
	html_url: "https://github.com/ddennis",
	followers_url: "https://api.github.com/users/ddennis/followers",
	following_url: "https://api.github.com/users/ddennis/following{/other_user}",
	gists_url: "https://api.github.com/users/ddennis/gists{/gist_id}",
	starred_url: "https://api.github.com/users/ddennis/starred{/owner}{/repo}",
	subscriptions_url: "https://api.github.com/users/ddennis/subscriptions",
	organizations_url: "https://api.github.com/users/ddennis/orgs",
	repos_url: "https://api.github.com/users/ddennis/repos",
	events_url: "https://api.github.com/users/ddennis/events{/privacy}",
	received_events_url: "https://api.github.com/users/ddennis/received_events",
	type: "User",
	site_admin: false,
	name: "ddennis - Dennis Christoffersen",
	company: "ddennis.dk - fantastisk.dk",
	blog: "ddennis.dk",
	location: "Copenhagen",
	email: null,
	hireable: true,
	bio: null,
	public_repos: 34,
	public_gists: 30,
	followers: 6,
	following: 10,
	created_at: "2010-06-08T20:55:17Z",
	updated_at: "2020-01-20T15:31:17Z"
}

