const express = require('express'); // 1.
const graphqlHttp = require('express-graphql'); // 4. création du serveur express qui va executer graphql api
const schema = require('./schema/schema');
const cors = require('cors');

const app = express(); // 2.

app.use(cors())

app.use('/graphql', graphqlHttp({ // 5. fonction servant de noeud central/middleware qui va envoyer toutes les requetes graphql en un seul endroit
    schema,
    graphiql: true
    
}))


app.listen(4000, () => { // 3. une fois installé nodemon, va "ecouter les changements" in browser: http://localhost:4000/graphql 
    console.log('now listening for request on port 4000');
})