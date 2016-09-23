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
    //获取参数,并且打印
    var options = {
      queryInfo: req.param('queryInfo', ''),
    }
    sails.log.info("输入的queryInfo:"+options.queryInfo);

    //生成的假数据

    var testJson = {
      "msg": '0000',
      "msgInfo": "成功的找到了你要的信息",
      "date": [
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
          "certificatedImgUrl":"http://i2.hdslb.com/video/7f/7f5bd1334c5223b7491bdf0280fdaf8a.jpg"
        },
        {
          "username": "用户姓名",
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
          "certificatedImgUrl":"证书上的照片url"
        }
      ]
    };
    return res.send(testJson);

  },

  query: function (req, res) {

  }
};

