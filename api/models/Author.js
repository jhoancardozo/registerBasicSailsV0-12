/**
 * Tomado como guia de
 * https://developer.ibm.com/articles/wa-sailsjs3/
 */
module.exports = {
  tableNane: 'authors',
  attributes: {
    fullName: {
      type: 'string',
      required: true
    },
    bio: {
      type: 'string'
    },
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    email: {
      type: 'email',
      required: true
    },
    entries: {
      collection: 'entry',
      via: 'author'
    }
  }
};
