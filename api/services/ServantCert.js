/**
 * Created by whl on 2016/9/26.
 */


var Servant= require("../models/Servant")

module.exports = {
  /**
   * 合并相同的服务员
   * @param   {result}  查询出的对象
   *
   */
  combineSameServent:function (result){
    var combinedInfo = [];
    sails.log.debug("result length++++++++++++++++++++"+result.length);
    for (var x in result ){
      var sameServert = [];
      var sameID = result[x].userID;
      sails.log.debug(sameID);
      for (var y = 0 ; y < result.length ; y++){
        sails.log.debug("y_________________"+y);
        if(result[y].userID == sameID){
          sameServert.push(result[y]);
          var removed = result.splice(y,1);
          y=y-1;
          sails.log.debug("y-1="+y);
          //sails.log.debug("removed111111111111");
          //sails.log.debug(removed);
          sails.log.debug(result);
        }
      }
      sails.log.debug("sameServert---------------");
      sails.log.debug(sameServert);
      var certInfo = [];
      for (var i=0;i<sameServert.length;i++){
        certInfo[i] = new Object();
        certInfo[i].certificateID =  sameServert[i].certificateID;
        certInfo[i].workTypeName =  sameServert[i].workTypeName;
        certInfo[i].rank =  sameServert[i].rank;
        certInfo[i].assessment =  sameServert[i].assessment;
        certInfo[i].authorityDate =  sameServert[i].authorityDate;
        certInfo[i].authorityUnit =  sameServert[i].authorityUnit;
        certInfo[i].serialNumber =  sameServert[i].serialNumber;
        certInfo[i].score1 =  sameServert[i].score1;
        certInfo[i].score2 =  sameServert[i].score2;
        certInfo[i].score3 =  sameServert[i].score3;
        certInfo[i].score4 =  sameServert[i].score4;
      }
      sails.log.debug(certInfo);
      var date = new Object();
      var date = sameServert[0];
      delete date.certificateID;
      delete date.workTypeName;
      delete date.rank;
      delete date.assessment;
      delete date.authorityDate;
      delete date.authorityUnit;
      delete date.serialNumber;
      delete date.score1;
      delete date.score2;
      delete date.score3;
      delete date.score4;
      date.certInfo = certInfo ;
      //sails.log.debug(date);
      combinedInfo.push(date);
    }
    sails.log.debug(combinedInfo);
    return combinedInfo;
  },

  /**
   * 根据条件找到证书信息
   * @param   {options}  查询参数
   * @param   {cb}  回调函数
   */
  getCert: function (options, cb) {
    Servant.findCert(options,function(err,result){
      sails.log.debug(result);
      if (err) return cb(err);
      //拼接返回参数
      var combineObj = ServantCert.combineSameServent(result);
      //callback
      cb(null,combineObj)
    })
  },

}
