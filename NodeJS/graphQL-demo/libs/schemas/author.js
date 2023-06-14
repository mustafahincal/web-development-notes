const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql')
const { books } = require('../../data');
const { BookType } = require('./book.js');

const AuthorType = new GraphQLObjectType({
      name: 'Author',
      description: 'This represents a author of a book',
      fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
          type: new GraphQLList(BookType),
          resolve: (author) => {
            return books.filter(book => book.authorId === author.id)
          }
        }
      })
    })

module.exports = {
      AuthorType
}