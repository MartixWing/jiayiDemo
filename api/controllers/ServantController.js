/**
 * ServantController
 *
 * @description :: Server-side logic for managing Servants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /*
  *测试用的假数据
   */
  queryTest: function (req, res) {
    var options = {
      certificateID: req.param('certificateID', ''),
    }
    sails.log.info("输入的certificateID:"+options.certificateID);
    //生成的假数据
    var testJson = {
      "msg": "0000",
      "msgInfo": "成功的找到了你要信息",
      "date":
      {
        "userName": "用户姓名",
        "userGender": "性别",
        "birthday":"生日",
        "certificateID":"证书ID",
        "idCard":"身份证号码",
        "workTypeAndGrade":"职业及等级",
        "theoryScore":"理论考试成绩",
        "operateScore":"操作技能考试成绩",
        "assessment":"评定成绩",
        "authorityDate":"颁证日期",
        "authorityUnit":"颁证单位",
        "serialNumber":"发证流水码所属段号",
        "certificatedImgUrl":"https://box.worktile.com/view/e0aefa5e7bb44da0ad7dff36bfdb4165?pid=2a438636348d471387f355815c1ba13c&token=7a65c6061f0b4d7e909a7dd0276bf8e0&dt="
      }
    };
    return res.send(testJson);
  },

  /*
   *测试用的假数据
   */
  queryListTest: function (req, res) {
    var options = {
      queryInfo: req.param('queryInfo', ''),
    }
    sails.log.info("输入的queryInfo:"+options.queryInfo);
    //生成的假数据
    var testJson = {
      "msg": "0000",
      "msgInfo": "成功的找到了你要信息",
      "date": [
        {
          "userName": "用户姓名",
          "userGender": "性别",
          "certificateID":"证书ID",
          "idCard":"身份证号码",
          "count":"3"
        },
        {
          "userName": "用户姓名",
          "userGender": "性别",
          "certificateID":"证书ID",
          "idCard":"身份证号码",
          "count":"3"
        },
        {
          "userName": "用户姓名",
          "userGender": "性别",
          "certificateID":"证书ID",
          "idCard":"身份证号码",
          "count":"3"
        }
      ]
    };
    return res.send(testJson);
  },


  /**
   * 模糊查询服务员证书
   * @param   {req}   request
   * @param   {res}  response
   */
  getCertList: function (req, res) {
    var options = {
      queryInfo: req.param('queryInfo', ''),
    };
    //查询证书
    ServantCert.getCertList(options,function(err,result){
      if (err) return res.send(404,'对不起没有找到您要的信息');
      res.send(result);
    });
  },

  /**
   * 查询服务员详细信息
   * @param   {req}   request
   * @param   {res}  response
   */
  getCertInfo: function (req, res) {
    var options = {
      queryInfo: req.param('queryInfo', ''),
    };
    //查询证书
    ServantCert.getCertList(options,function(err,result){
      if (err) return res.send(404,'对不起没有找到您要的信息');
      res.send(result);
    });
  }
};

