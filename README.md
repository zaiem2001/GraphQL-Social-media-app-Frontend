# This is the frontend for the graphQL social media app demo.

## Details :

This is just a basic app to learn graphQL, Relay, Fragments and Pagination in Relay. <br />
In this app one can login, logout with JWT Authentication.<br />

> Create a new Post<br />
> Like and dislike other users Posts.<br />
> Follow, unfollow other users.<br />

### UI is not that good, just focused on the Backend and Relay part.

## To run this app on your machine

$ `git clone <Repo name>` <br />
$ npm install <br />

## Note : react-relay is used in the frontend so everytime you make any changes to the schema or the frontend queries, you will have to compile it with react relay.

$ To get schema from the Backend run `npm run get-schema` <br />
$ To do both the actions i.e to refetch schema from the server and compile it on the FE run `npm run refresh-schema` <br />

## Note : in `package.json` file in the *get-schema* script you should add your backend `PORT` or `URL`.
