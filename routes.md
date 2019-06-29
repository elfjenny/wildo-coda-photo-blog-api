# Resources

## Article

### GET

- `/api/articles/:id` **Retrieve one article**
- `/api/articles` **Retrieve all articles**
- `/api/articles/:id/comments` **To retrieve comments belonging to a single article**

### POST

- `/api/articles` **To send an article to be created**

### PUT

- `/api/articles` **To update an article**

### DELETE

- `/api/articles/:id` **To delete an article**

## Comment

### GET

- `/api/comments/:id` **To retrieve  a single comment**
- `/api/comments` **To retrieve  all comments**

### POST
- `/api/comments` **To send a comment to be created**

### PUT
- `/api/comments` **To update a comment**

### DELETE
- `/api/comments/:id` **To delete a comment**

## User

### GET
- `/api/users/:id` **To retrieve  a single user**
- `/api/users/:id/articles` **To retrieve articles belonging to a single user**
- `/api/users` **To retrieve  all users**

### POST
- `/api/users` **To send a user to be created**

### PUT
- `/api/users` **To update a user**

### DELETE
- `/api/users/:id` **To delete a user**

## Category

### GET
- `/api/categories/:id` **To retrieve  a single category**
- `/api/categories` **To retrieve  all categories**
- `/api/categories/:id/articles` **To retrieve  all articles belonging to a single category**

### POST
- `/api/categories` **To send a category to be created**

### PUT
- `/api/categories` **To update a category**

### DELETE
- `/api/categories/:id` **To delete a category**

## Others

- `/api/login` -- POST -- **To authenticate a user**
- `/api/image[upload]` -- POST -- **To upload one or more files**