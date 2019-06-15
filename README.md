# wildo-coda-photo-blog-api
This repository hosts the backend api for the wildo coda photo blog web application.

## Route definition analysis

Here's a list of routes to implement to provide a response to frontend requests.

- a route `/articles` for when you need to get a list of articles [GET]
- a route `/articles` for when you publish a new article [POST]
- a route `/articles/:id` for when you need to get a single article [GET]
- a route `/image` for when you publish a new image [POST]
- a route `/login` for when you need to authenticate [POST]
- a route `/comment` for when you publish a new comment [POST]

- GET
  - Pour lire un article en particulier ou afficher le nombre d'articles
  - Pour cibler un commentaire d'un article/post en particulier ou d'un utilisateur en particulier

- POST
  - Pour poster un nouvel article ou un nouveau commentaire

- PUT
  - Pour modifier un article ou un commentaire ou (dans le cas d'authentification, changements de mdp, email, etc.)

- DELETE
  - Pour supprimer un article ou un commentaire

