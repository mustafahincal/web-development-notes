const express = require('express')
const expressGraphQL = require('express-graphql')
const {
  GraphQLSchema
} = require('graphql')
const { RootQueryType, RootMutationType } = require('./libs/schemas')
const {books, authors} = require('./data')
const { notFound, errorHandler } = require('./middlewares/errorHandler')

const app = express()

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

app.use('/graphql', (req, res, next) => {
  console.log('Request: ', req)
  next()
})


app.use(notFound)
app.use(errorHandler)

app.listen(4000, () => console.log('Server Running'))