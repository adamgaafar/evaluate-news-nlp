const axios = require('axios');
const meaningCloud = 'https://api.meaningcloud.com/sentiment-2.1'

const analyzeSentence = async (url, key) => {
    const analysis = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`)
        .then(response => {
        //console.log(response);
       const {code} = response.data.status;
       const {msg} = response.data.status;
       //check the status of response
        //100 aw 212
        if (code == 100) {
            //send error
            return handleError(code, "Please enter a valid URL");
        }else if (code == 212) {
            //send error
            return handleError(code, msg);
        }
        //success response
        return successfulResponse(response.data,code);
    })
    return analysis;
}

const handleError = (code, msg) => {
    //create object for the error
    return {
        code: code,
        error: msg
    };
}

const successfulResponse = (response,code) => {
    //destructure that object
   // console.log(response);
    const { score_tag, agreement, subjectivity, confidence, irony } = response;
    let analyzedObj = {
        scoreTag: score_tag,
        agreement: agreement,
        subjectivity: subjectivity,
        confidence: confidence,
        irony: irony
    }
    return {analyzedObj, code:code};
}

module.exports = { analyzeSentence };