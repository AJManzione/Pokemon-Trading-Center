# Pokemon Tracker!

## A place for Pokemon trainers to keep track your overall pokedex progress, earn badges and customize your account!



[Come vist the Site!](https://pokemon-app.herokuapp.com/)

![screenshot](./readmeAssets/wRnFZzoQtO.png)

  ## Table of Contents
  * [Technologies Used](#technologies-used)
  * [Code Snippets](#code-snippets)<br />
  * [Contributors](#contributors)<br />
​
  ## Overview of the application

​
  ## Technologies Used
  ### Front end
  - React.js
  - JavaScript
  - Web APIs
  - Fetch
  - CSS
  - Bootstrap Framework
  - Session Storage
  ### Back End
  - JWT
  - Node
  - NPM
  - Express
  - GraphQL
  - Apollo
  - Mongoose
  - User Authentication
  - Bcrypt
  - Nodemon
​
  ## Code Snippets
Here we have a function that does some work. In this case it takes in some parameters they can be named anything you darn well please- farley, bacon, chicken. 
```javascript
function determineBadge (userTotal, genTotal){
  if(userTotal/genTotal < .33){ 
    return pokeball
  }else if (userTotal/genTotal < .66){
    return greatball
  }else if (userTotal/genTotal <.9999){
    return ultraball
  }else if (userTotal/genTotal == 1){
    return masterball
  }}
  
```

```javascript
const Login = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({ variables: { ...formState } });
      localStorage.setItem('username', data.loginUser.user.username)
      Auth.login(data.loginUser.token);
    } catch (e) {
      console.log(e);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };
```
```javascript

```
    
    
  ## Contributors
If you have any questions about this project, feel free to reach out to one of us at:
* Matt Gatsby :
    * [Github](https://github.com/mattjgatsby)
    * [LinkedIn](https://www.linkedin.com/in/matthew-gatsby-1a1521250/)
* Anthony Manzione:
     * [Github](https://github.com/AJManzione)
     * [LinkedIn](https://www.linkedin.com/in/dev-anthony-manzione/)
* Michael Seaman :
    * [Github](https://github.com/mseaman26)
    * [LinkedIn](https://www.linkedin.com/in/michael-seaman-120a59250/)
* Senay Gebrat :
    * [Github](https://github.com/senaygebrat)
    * [LinkedIn](https://www.linkedin.com/in/senayg/)
​
    
