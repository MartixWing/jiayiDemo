/**
 * Servant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'localMysqlServer',
  tableName:'servantcertificate',
  attributes: {
    userName: {
      type:'string',
//      size: 50
    },

    userGender: {
      type:'string'
    },

    birthday: {
      type:'date'
    },

    certificateID: {
      type:'string'
    },

    idCard: {
      type:'string'
    },    userGender: {
      type:'string'
    },

    workTypeAndGrade: {
      type:'string'
    },

    theoryScore: {
      type:'string'
    },

    operateScore: {
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

    certificatedImgUrl: {
      type:'string'
    },

  },

  test : function () {
    Servant.find({ userName: 'foo' }).exec(function(err,msg){
    });
  },

  /**
   * 查询服务员证书
   * @param   {options}   查询参数
   * @param   {cb}  回调函数
   */
  findCert: function(options,cb){
    Servant.find(options).exec(function(err,result){
      sails.log.info(result);
      if (err) return cb(err);
      cb(null,result)
    })
  }
};


