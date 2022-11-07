const config = require('./config');
const PaytmChecksum = require('paytmchecksum');

exports.generateCheckSum = async(paytmParams) => {
    /**
    * Generate checksum by parameters we have
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    */
    var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, config.PaytmConfig.key).catch(error=>{console.log(error);return 0;});
    // paytmChecksum.then(function (checksum) {
    //     console.log("generateSignature Returns: " + checksum,checksum.length);
    //     return checksum;
    // }).catch(function (error) {
    //     console.log(error);
    //     return 0;
    // });
    let checksum = await paytmChecksum;
    // console.log(checksum,checksum.length);
    return checksum;

}
exports.verifyCheckSum = (params,paytmChecksum)=>{
    let isVerifySignature = PaytmChecksum.verifySignature(params, config.PaytmConfig.key, paytmChecksum);
    return isVerifySignature;
}