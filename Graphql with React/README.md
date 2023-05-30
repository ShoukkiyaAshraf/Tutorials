### <b>Course</b> - https://www.udemy.com/course/graphql-with-react-course/

### <b>Instructor</b> - Stephen Grider



### <b>REST-ful Routing :</b>

Given a collection of records on a server, there should be a uniform URL and HTTP request method used to utilize that collection of records.
<pre>
/[name]     GET     Fetch all records
/[name]     POST    Create a record
/[name]/id  GET     Fetch a record
/[name]/id  PUT     Update a record
/[name]/id  DELETE  Delete a record
</pre>

Limitation - when dealing with highly relational data, the nesting can become deep and complex, leading to long and convoluted URLs. This can impact the readability, usability, and maintainability of the API.
- Deciding the API structure
- Too many nested URLs
- Overfetched data


<img src="https://www.mobilelive.ca/wp-content/uploads/2022/08/GraphQL_Image2.jpg"/>


### <b>GraphQL :</b>

Graph is a data structure which contains nodes and relations between nodes referred to as edges.

<img src="https://1.bp.blogspot.com/-mfM_xB8o0eM/XNzqlOUQgGI/AAAAAAAAOBY/YxrHVi_Q2_oEJuc04Qm6TJCFdlsTg0KGwCLcBGAs/w1200-h630-p-k-no-nu/GraphQL.png">

<br>

### Sample Implementation : 
<pre>
>>> npm init
>>> npm install --save express express-graphql graphql loadash
or (new version)
>>> npm install --save express graphql graphql-http lodash
</pre>
create server.js
<pre>
const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Listening');
});
</pre>
<pre>
>>> node server.js
</pre>
create schema
<pre>
mkdir schema
</pre>
create file schema.js
<pre>
const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    { id : '23' , firstName: 'Bill', age: 20},
    { id : '47' , firstName: 'Samantha', age: 21}
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type : GraphQLString } ,
        firstName: { type : GraphQLString },
        age: {type : GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args){
                return _.find(users, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
</pre>
update server.js - 
<pre>
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Listening');
});
</pre>
re-run
<pre>
node server.js
</pre>
Go to http://localhost:4000/graphql
input - 
<pre>
{
  user(id:"23"){
    id,
    firstName,
    age
  }
}
</pre>
will provide the result - 
<pre>
{
  "data": {
    "user": {
      "id": "23",
      "firstName": "Bill",
      "age": 20
    }
  }
}
</pre>


