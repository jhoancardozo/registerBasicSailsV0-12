/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/**
 * Tomado como guia de
 * https://developer.ibm.com/articles/wa-sailsjs3/
 */

module.exports = {
  /**
   * Working with Queries
   * https://0.12.sailsjs.com/documentation/reference/waterline-orm/queries
   * 
   * Alternative #1 : the .exec() method
   */
  // create: (req, res) => {
  //   sails.log.debug('.................................')
  //   Author.create({
  //     fullName: "Fred Flintstone",
  //     bio: "Lives in Bedrock, blogs in cyberspace",
  //     username: "fredf",
  //     email: "fred@flintstone.com"
  //   }).exec(function (err, author) {
  //     if (err) {
  //       return {
  //         'success': false,
  //         'mesagge': 'Error en crear Autor',
  //         'err': err
  //       };
  //     } else {
  //       Entry.create({
  //         title: "Hello",
  //         body: "Yabba dabba doo!",
  //         author: author.id
  //       }).exec(function (err, created) {
  //         if (err) {
  //           return {
  //             'success': false,
  //             'mesagge': 'Error en crear entrada 1',
  //             'err': err
  //           };
  //         } else {
  //           Entry.create({
  //             title: "Quit",
  //             body: "Mr Slate is a jerk",
  //             author: author
  //           }).exec(function (err, created) {
  //             if (err) {
  //               return { 
  //                 'success': false,
  //                 'mesagge': 'Error en crear entrada 2',
  //                 'err': err
  //               };
  //             } else {
  //               return res.send("Database seeded");
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // }
  /**
   * Alternative #2 : Bluebird promises.
   */
  create: (req, res) => {
    sails.log.debug('.................................')
    Author.create({
        fullName: "Fred Flintstone",
        bio: "Lives in Bedrock, blogs in cyberspace",
        username: "fredf11111111111",
        email: "fred@flintstone.com"
      })
      .then((author) => {
        Entry.create({
            title: "Hello",
            body: "Yabba dabba doo!",
            author: author.id
          })
          .then((author) => {
            Entry.create({
                title: "Quit",
                body: "Mr Slate is a jerk",
                author: author
              })
              .then((author) => {
                return res.send({
                  'success': true,
                  'mesagge': 'Registrado con exito',
                  'data': author
                })
              }).catch((err) => {
                return res.send({
                  'success': false,
                  'mesagge': 'Ha ocurrido un error en el registro del ENTRY 2',
                  'err': err
                })
              });
          }).catch((err) => {
            return res.send({
              'success': false,
              'mesagge': 'Ha ocurrido un error en el registro del ENTRY 1',
              'err': err
            })
          });
      }).catch((err) => {
        return res.send({
          'success': false,
          'mesagge': 'Ha ocurrido un error en el registro del autor',
          'err': err
        })
      });
  }

};
