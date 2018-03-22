/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RequestContactImportNewList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RequestContactImportNewList'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.RequestContactImport = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.RequestContactImportNewList);
  }
}(this, function(ApiClient, RequestContactImportNewList) {
  'use strict';




  /**
   * The RequestContactImport model module.
   * @module model/RequestContactImport
   * @version 6.x.x
   */

  /**
   * Constructs a new <code>RequestContactImport</code>.
   * @alias module:model/RequestContactImport
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>RequestContactImport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestContactImport} obj Optional instance to populate.
   * @return {module:model/RequestContactImport} The populated <code>RequestContactImport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fileUrl')) {
        obj['fileUrl'] = ApiClient.convertToType(data['fileUrl'], 'String');
      }
      if (data.hasOwnProperty('fileBody')) {
        obj['fileBody'] = ApiClient.convertToType(data['fileBody'], 'String');
      }
      if (data.hasOwnProperty('listIds')) {
        obj['listIds'] = ApiClient.convertToType(data['listIds'], ['Number']);
      }
      if (data.hasOwnProperty('notifyUrl')) {
        obj['notifyUrl'] = ApiClient.convertToType(data['notifyUrl'], 'String');
      }
      if (data.hasOwnProperty('newList')) {
        obj['newList'] = RequestContactImportNewList.constructFromObject(data['newList']);
      }
    }
    return obj;
  }

  /**
   * Mandatory if fileBody not defined. URL of the file to be imported (no local file). Possible file types: .txt, .csv
   * @member {String} fileUrl
   */
  exports.prototype['fileUrl'] = undefined;
  /**
   * Mandatory if fileUrl is not defined. CSV content to be imported. Use semicolon to separate multiple attributes
   * @member {String} fileBody
   */
  exports.prototype['fileBody'] = undefined;
  /**
   * Manadatory if newList is not defined. Ids of the lists in which to add the contacts
   * @member {Array.<Number>} listIds
   */
  exports.prototype['listIds'] = undefined;
  /**
   * URL that will be called once the export process is finished
   * @member {String} notifyUrl
   */
  exports.prototype['notifyUrl'] = undefined;
  /**
   * @member {module:model/RequestContactImportNewList} newList
   */
  exports.prototype['newList'] = undefined;



  return exports;
}));


