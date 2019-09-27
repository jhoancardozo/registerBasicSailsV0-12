/**
 * Tomado como guia de
 * https://developer.ibm.com/articles/wa-sailsjs3/
 */
module.exports = {
  tableNane: 'entries',
  attributes: {
    title: {
      type: 'string',
      required: true,
    },
    body: {
      type: 'string',
      required: true,
    },
    // comments: {
    //   collection: 'comment',
    //   via: 'owner'
    // },
    author: {
      model: 'author'
    }
  }

};
