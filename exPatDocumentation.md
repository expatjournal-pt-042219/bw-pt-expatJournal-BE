## Expat API

- A server that will deliver users, user posts, and user photos can be found [here](https://expat-lambda.herokuapp.com):

- A user has this basic format:

```js
  {
      "username": "username",
      "password": "password",
  }
```

- A post has this basic format:

```js
  {
        "id": 6,
        "user_id": 28,
        "created_at": "2019-05-02T02:14:55.454Z",
        "updated_at": "2019-05-02T02:14:55.454Z",
        "likes": 0,
        "title": "This is the title",
        "description": "This is the description"
  }
```

- A photo has this basic format:

```js
  {
        "id": 7,
        "user_id": 20,
        "created_at": "2019-05-02T02:14:55.454Z",
        "updated_at": "2019-05-02T02:14:55.454Z",
        "likes": 0,
        "title": "This is the title",
        "description": "This is the description"
        "photo_url": "photo"
  }
```
## Registration and Login

- To register a user on the app, you need to make a `POST` request to this route, which will return the username and password.

### https://expat-lambda.herokuapp.com/api/register

- To login a user on the app, you need to make a `POST` request to this route, which will return the username and password.

### https://expat-lambda.herokuapp.com/api/login

## User related endpoints

- a `GET` request to get user by user id

### https://expat-lambda.herokuapp.com/api/user/:id

- a `GET` request to return a list of all user posts by user id

### https://expat-lambda.herokuapp.com/api/user/posts/:id

## User Posts related endpoints

a `GET` request to this route will return a single post by post id

### https://expat-lambda.herokuapp.com/api/user/posts/:id

a `POST` request to this route with the title and description will create a new post. The response from the server will be like the above example of a user post. 

### https://expat-lambda.herokuapp.com/api/posts

a `PUT` request to this route with the title and text in the req body will edit the post with the specified post id. The response from the server will display the updated title and description along with the post information.

### https://expat-lambda.herokuapp.com/api/posts/:id

a `DELETE` request to this route will delete the post with the specified id.

### https://expat-lambda.herokuapp.com/api/posts/:id
