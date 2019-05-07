# Expat API

> A server that will deliver users, user posts, user photos, and user comments can be found [here](https://expat-lambda.herokuapp.com).



## Formats

### Login credentials

```json
{
  "username": "username",
  "password": "password",
}
```

### Post

```json
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

### Photo

```json
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

### Comment (Reply)

```json
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

### Comment (Photo)

```json
{
  "id": 5,
  "created_at": "2019-05-06 23:30:11",
  "updated_at": "2019-05-06 23:30:11",
  "comment": "This was a nice picture from Paris!",
  "user_id": 4,
  "post_id": null,
  "photo_id": 1
}
```



## Running the Project

- Fork and clone this project.
- `cd` into your project folder.
- Run `npm install` or `yarn` to download the dependencies.
- Add `knex` and `sqlite3` npm modules.
- Configure `knex` to connect to `/database/expatJournal.sqlite3` using the `sqlite3` module.
- To start the API server, run `yarn start` || `npm start`.
- Use _Postman_ to test the API.
- Server runs on [http://localhost:7777](http://localhost:7777)



## Access Endpoints

### POST [/register](https://expat-lambda.herokuapp.com/api/register)
Register a user. This will return the username and password, as well as a token and welcome message.

### POST [/login](https://expat-lambda.herokuapp.com/api/login)
Login. This will return the username and password.



## User-related Endpoints

### GET [/user/:id](https://expat-lambda.herokuapp.com/api/user/:id)
Get user by id

### GET [/posts/:id](https://expat-lambda.herokuapp.com/api/user/posts/:id)
Return a list of all user posts by id

### GET [/photos/:id](https://expat-lambda.herokuapp.com/api/user/photos/:id)
Return a single photo by user id



## Post-related Endpoints

### GET [/user/posts/:id](https://expat-lambda.herokuapp.com/api/user/posts/:id)
Return a single post by post id.

### POST [/posts](https://expat-lambda.herokuapp.com/api/posts)
Create a new post with a title and description. The response from the server will be like the above example of a user post.

### PUT [/posts/:id](https://expat-lambda.herokuapp.com/api/posts/:id)
Edit a post with the specified post ID via the title and text in the request body. The response from the server will display the updated title and description along with the post information.

### DELETE [/posts/:id](https://expat-lambda.herokuapp.com/api/posts/:id)
Delete a post with the specified id.



## Photo-related Endpoints

### POST [/photos](https://expat-lambda.herokuapp.com/api/photos)
Create a new photo with a title, description, and photo URL. The response from the server will be like the above example of a user photo.

### PUT [/photos/:id](https://expat-lambda.herokuapp.com/api/photos/:id)
Edit a photo with the title, text, and photo URL in the request body with the specified photo id. The response from the server will display the updated title and description along with the photo information.

### DELETE [/photos/:id](https://expat-lambda.herokuapp.com/api/photos/:id)
Delete a photo with the specified id.



## Comment-related Endpoints

### GET [/comments/:id](https://expat-lambda.herokuapp.com/api/comments/:id)
Return a single comment by the comment id.

### POST [/comments](https://expat-lambda.herokuapp.com/api/comments)
Add a new comment to either a photo or post that exists.
