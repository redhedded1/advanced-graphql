// resolve the query you made
module.exports = {
  Query: {
    onePerson() {
        return {
            name: 'Tom'
        }
    }
  },
  Mutation: {
    newPerson(_, args, ctx, info) {
        const name = args.input.name
        return {
          name
        }
    }
  }
}
