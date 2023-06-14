const {
      GraphQLObjectType,
      GraphQLString,
      GraphQLList,
      GraphQLInt,
      GraphQLNonNull
    } = require('graphql')
const { books, authors } = require('../../data')
const { BookType } = require('./book.js')
const { AuthorType } = require('./author.js')

const RootQueryType = new GraphQLObjectType({
      name: 'Query',
      description: 'Root Query',
      fields: () => ({
        book: {
          type: BookType,
          description: 'A Single Book',
          args: {
            id: { type: GraphQLInt }
          },
          resolve: (parent, args) => books.find(book => book.id === args.id)
        },
        books: {
          type: new GraphQLList(BookType),
          description: 'List of All Books',
          resolve: () => books
        },
        authors: {
          type: new GraphQLList(AuthorType),
          description: 'List of All Authors',
          resolve: () => authors
        },
        author: {
          type: AuthorType,
          description: 'A Single Author',
          args: {
            id: { type: GraphQLInt }
          },
          resolve: (parent, args) => authors.find(author => author.id === args.id)
        }
      })
    })
    
    const RootMutationType = new GraphQLObjectType({
      name: 'Mutation',
      description: 'Root Mutation',
      fields: () => ({
        addBook: {
          type: BookType,
          description: 'Add a book',
          args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            authorId: { type: GraphQLNonNull(GraphQLInt) }
          },
          resolve: (parent, args) => {
            const book = { id: books.length + 1, name: args.name, authorId: args.authorId }
            books.push(book)
            return book
          }
        },
        addAuthor: {
          type: AuthorType,
          description: 'Add an author',
          args: {
            name: { type: GraphQLNonNull(GraphQLString) }
          },
          resolve: (parent, args) => {
            const author = { id: authors.length + 1, name: args.name }
            authors.push(author)
            return author
          }
        }
      })
    })

module.exports = {
      RootQueryType,
      RootMutationType
}