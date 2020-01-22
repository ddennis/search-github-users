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
Search github users by username and show the their details and repos.
I decided to use animation to create a smooth transition between the list of users and the user details
and keep best pratice by showing spinners everythime we do a fetch for data. 

#### Design considerations
- Avoid the github rate limit and only load the users repos on-demand. 
- I tried to avoid including to many libraies. Using react-router had been obvious an choice for the navigation.  
- I have tried to keep state to the minimal and as close to the component as possible. Using Redux or a useContext implementation would have been a alternative. But would in my opinion only cause bloat.
- I abstracted the fetch calls into a single component which could be reused across the application.
  This shows the benefits of using render-props to create reusable components.
  The FetchData component serves as a data loader, spinner and for displaying errors.

#### Learned in the process
- I got alot of 303 when exceding the github rate-limit 
  
#### Todo list - if i have had more time.
- I have tested the app manually, but there might still be bugs.
- write tests
- implemented pagination
- better animation 
- cleaner design 

#### Libaries used besides create-react-app:
CSS framework: ```Bootstrap 4```
Animation ```react-spring```


