# This is the frontend for the graphQL social media app demo.

## Details :

This is just a basic app to learn graphQL, Relay, Fragments and Pagination in Relay.
In this app one can login, logout with JWT Authentication.

> Create a new Post
> Like and dislike other users Posts.
> Follow, unfollow other users.

### UI is not that good, just focused on the Backend and Relay part.

## To run this app on your machine

$ `git clone <Repo name>1`
$ npm install

## Note : react-relay is used in the frontend so everytime you make any changes to the schema or the frontend queries, you will have to compile it with react relay.

$ To get schema from the Backend run `npm run get-schema`
$ To do both the actions i.e to refetch schema from the server and compile it on the FE run `npm run refresh-schema`

## Note : in `package.json` file in the *get-schema* script you should add your backend `PORT` or `URL`.
