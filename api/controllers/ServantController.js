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
      "msgNo": "0000",
      "msgInfo": "查询到了信息",
      "data": [
        {
          "userName": "测试3",
          "IDCard": "519231231231543532",
          "gender": "女",
          "birthday": "2016-10-26",
          "avatarUrl": "http://image.vsuch.com/vsuch/200911/10/96/8379669535949834792.jpg",
          "certInfo": [
            {
              "certificateID": "000000000002",
              "workTypeName": "育儿嫂",
              "rank": "高级",
              "assessment": "合格",
              "authorityDate": null,
              "authorityUnit": null,
              "serialNumber": null,
              "score1": "78",
              "score2": "43",
              "score3": null,
              "score4": null
            },
            {
              "certificateID": "000000000003",
              "workTypeName": "育儿嫂",
              "rank": "高级",
              "assessment": "合格",
              "authorityDate": null,
              "authorityUnit": null,
              "serialNumber": null,
              "score1": "67",
              "score2": "45",
              "score3": null,
              "score4": null
            }
          ]
        },
        {
          "userName": "测试2",
          "IDCard": "519231231231543532",
          "gender": "女",
          "birthday": "2016-10-26",
          "avatarUrl": "http://image.vsuch.com/vsuch/200911/10/96/8379669535949834792.jpg",
          "certInfo": [
            {
              "certificateID": "000000000002",
              "workTypeName": "育儿嫂",
              "rank": "高级",
              "assessment": "合格",
              "authorityDate": null,
              "authorityUnit": null,
              "serialNumber": null,
              "score1": "78",
              "score2": "43",
              "score3": null,
              "score4": null
            }
          ]
        }
      ]
    };
    return res.send(testJson);
  },

  /**
   * 查询服务员详细信息
   * @param   {req}   request
   * @param   {res}  response
   */
  getCertInfo: function (req, res) {
    var options = {
      queryInfo: req.param('queryInfo', '测试2'),
    };

    //var value = '12315534533212x';

    var Regx = /^[A-Za-z0-9]*$/;
    if (Regx.test(options.queryInfo)) {
      if(options.queryInfo.length==18 || options.queryInfo.length==15){
        //用户输入的是身份证，根据身份证查询
        sails.log.info('111');
        ServantCert.getCertByCard(options,function(err,result){
          if (err) return res.send(404,'对不起没有找到您要的信息');
          res.send(result);
        });
      }else{
        //用户输入的是证件编号
        ServantCert.getCertByID(options,function(err,result){
          if (err) return res.send(404,'对不起没有找到您要的信息');
          res.send(result);
        });
        sails.log.info('222');
      }

    }
    else {
      //用户输入的是名字
      ServantCert.getCertByName(options,function(err,result){
        if (err) return res.send(404,'对不起没有找到您要的信息');
        res.send(result);
      });
      sails.log.info('333');
    }

    //查询证书
    //ServantCert.getCertList(options,function(err,result){
    //  if (err) return res.send(404,'对不起没有找到您要的信息');
    //  res.send(result);
    //});

  }
};

