/**
 * Created by whl on 2016/9/26.
 */

var Servant= require("../models/Servant")

module.exports = {
  /**
   * 根据条件模糊查找证书信息，返回一个列表
   * @param   {options}  查询参数
   * @param   {cb}  回调函数
   */

  getCertList: function (options, cb) {
    var queryInfo = options.queryInfo;

    if (queryInfo == null) return cb('参数不正确');

    var queryObj ={or : [
                  { userName:queryInfo },
                  { certificateID:queryInfo },
                  { idCard:queryInfo }]};

    sails.log.debug(queryObj);

    Servant.findCert(queryObj,function(err,result){
      sails.log.debug(result);
      if (err) return cb(err);
      //拼接返回参数

      //callback
      cb(null,result)

    })

  },
  /**
   * 根据身份证查询服务员详细的证书信息
   * @param   {options}  查询参数
   * @param   {cb}  回调函数
   */
  getCertInfo: function (options, cb) {
    var queryInfo = options.queryInfo;

    if (queryInfo == null) return cb('参数不正确');

    var queryObj ={idCard:queryInfo };

    sails.log.debug(queryObj);

    Servant.findCert(queryObj,function(err,result){
      sails.log.debug(result);
      if (err) return cb(err);
      //拼接返回参数

      //callback
      cb(null,result)
    })

  }
}
