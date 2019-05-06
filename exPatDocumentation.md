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
    "id": 1,
    "user_id": 4,
    "created_at": "2019-05-06 23:26:41",
    "updated_at": "2019-05-06 23:26:41",
    "likes": 0,
    "title": "my favorite pic",
    "description": "A photo from Paris, France",
    "photo_url": "www.expatPhoto.com/newPhoto"
  }
```

- A comment for a post or photo has this basic format: 

```js
{
        "id": 3,
        "created_at": "2019-05-06 01:19:49",
        "updated_at": "2019-05-06 01:19:49",
        "comment": "hello, nice pic",
        "user_id": 4,
        "post_id": 1,
        "photo_id": null
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

a `GET` request to this route will return a single photo by user id

### https://expat-lambda.herokuapp.com/api/user/photos/:id

## User Posts related endpoints

a `GET` request to this route will return a single post by post id

### https://expat-lambda.herokuapp.com/api/user/posts/:id

a `POST` request to this route with the title and description will create a new post. The response from the server will be like the above example of a user post. 

### https://expat-lambda.herokuapp.com/api/posts

a `PUT` request to this route with the title and text in the req body will edit the post with the specified post id. The response from the server will display the updated title and description along with the post information.

### https://expat-lambda.herokuapp.com/api/posts/:id

a `DELETE` request to this route will delete the post with the specified id.

### https://expat-lambda.herokuapp.com/api/posts/:id

## User Photos related endpoints



a `POST` request to this route with the title, description and photo url will create a new photo. The response from the server will be like the above example of a user photo. 

### https://expat-lambda.herokuapp.com/api/photos

a `PUT` request to this route with the title, text and photo url in the req body will edit the photo with the specified photo id. The response from the server will display the updated title and description along with the photo information.

### https://expat-lambda.herokuapp.com/api/photos/:id

a `DELETE` request to this route will delete the photo with the specified id.

### https://expat-lambda.herokuapp.com/api/photos/:id

## Comments related endpoints

a `GET` request to this route will return a single comment by the comment id

### https://expat-lambda.herokuapp.com/api/comments/:id

a `POST` request to this route will add a new comment to either a photo or post that exists. 

### https://expat-lambda.herokuapp.com/api/comments
