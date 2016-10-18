/**
 * Servant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'localMysqlServer',
  tableName:'certinfo',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    userName: {
      type:'string',
//      size: 50
    },

    IDCard: {
      type:'string',
//      size: 50
    },

    gender: {
      type:'string'
    },

    birthday: {
      type:'string'
    },

    certificateID: {
      type:'string'
    },


    workTypeName: {
      type:'string'
    },

    rank: {
      type:'string'
    },

    score1: {
      type:'string'
    },

    score2: {
      type:'string'
    },

    score3: {
      type:'string'
    },

    score4: {
      type:'string'
    },

    assessment: {
      type:'string'
    },

    authorityDate: {
      type:'string'
    },

    authorityUnit: {
      type:'string'
    },

    serialNumber: {
      type:'string'
    },

    avatarUrl: {
      type:'string'
    },
    userID: {
      type:'int'
    },

  },

  /**
   * 查询服务员证书
   * @param   {options}   查询参数
   * @param   {cb}  回调函数
   */
  findCert: function(options,cb){
    sails.log.debug(options);
    sails.log.debug('findCert');
    Servant.find(options).exec(function(err,result){
      sails.log.error(err);
      if (err) return cb(err);
      cb(null,result)
    })
  },

};


