/**
 * Servant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'localMysqlServer',
  tableName:'certinfo',
  attributes: {
    userName: {
      type:'string',
//      size: 50
    },

    IDCard: {
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

  /**
   * 查询服务员证书
   * @param   {options}   查询参数
   * @param   {cb}  回调函数
   */
  findCert: function(options,cb){
    Servant.find().exec(function(err,result){
      sails.log.debug(result);
      if (err) return cb(err);
      cb(null,result)
    })
  },

  /**
   * 根据身份证号查询服务员证书
   * @param   {options}   查询参数
   * @param   {cb}  回调函数
   */
  findCertByCard: function(options,cb){
    //此处应用find（）
    Servant.query('SELECT userID,userName,IDCard,gender,birthday,avatarUrl,certificateID,workTypeName,rank,assessment,authorityDate,authorityUnit,serialNumber,' +
      'score1,score2,score3,score4 from certinfo where IDCard = '+'"'+options.IDCard +'"', function(err, result) {
      sails.log.debug(result);
      if (err) return cb(err);
      cb(null,result)
    });
  },

  /**
   * 根据证书id号查询服务员证书
   * @param   {options}   查询参数
   * @param   {cb}  回调函数
   */
  findCertByID: function(options,cb){
    Servant.find(options).exec(function(err,result){
      sails.log.info(result);
      if (err) return cb(err);
      cb(null,result)
    })
  },

  /**
   * 根据姓名号查询服务员证书
   * @param   {options}   查询参数
   * @param   {cb}  回调函数
   */
  findCertByName: function(options,cb){
    Servant.query('SELECT  userID,userName,IDCard,gender,birthday,avatarUrl,certificateID,workTypeName,rank,assessment,authorityDate,authorityUnit,serialNumber,' +
      'score1,score2,score3,score4 from certinfo where UserName = '+'"'+options.userName +'"', function(err, result) {
      sails.log.info(result);
      if (err) return cb(err);

      cb(null,result)
    })
  },
};


