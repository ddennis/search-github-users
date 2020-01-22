## Search github users

![](./screenshots/layouts_1.jpg)
![](./screenshots/layouts_2.jpg)

Project was bootstraped using create-react-app with the typescript template.

#### Scripts availble
````
npm install 
npm start
````

#### Idea
Search github users by user name and show the user details and repos.
Navigating to the details page of a user should be quick not clear the state of the list of users.
I decided to use animation to create a smooth transition between the list of users and the user details
and keep best pratice by showing spinners everythime we do a fetch for data. 

#### Design considerations
- Avoid the github rate limit and only load the users repos on-demand. 
- I tried to avoid including to many libraies. Using react-router have been an alternative.  
- I have tried to keep state to the minimal and as close to the component as possible. Using Redux or a useContext would have been a alternative. But woudl in my opinion only cause bloat.
- I Abstracted the fetch calls into a single component which could be reused across the application.
  Showing the benefits of using render-props to create reusable components.
  The FetchData component serves as a data loader, spinner and for displaying errors.

#### Learned in the process
- I got alot of 303 when exceding the github rate-limit
 
  
#### Todo list - if i have had more time.
- I have of course tested the app manually, but there might still be bugs.
- write tests
- implemented pagination
- better animation 
- cleaner design 

#### Libaries used besides create-react-app:
CSS framework: ```Bootstrap 4```
Animation ```react-spring```


