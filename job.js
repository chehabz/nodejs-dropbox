const dropboxV2Api = require('dropbox-v2-api');
const fs = require("fs");
//create session
const dropbox = dropboxV2Api.authenticate({
    token: 'Your Token Here'
});

dropbox({
    resource: 'files/upload',
    parameters: {
        path: '/backup.bak' + new Date().toISOString().slice(0,10)
    },
    readStream: fs.createReadStream('G:/backup-job.bak')
}, (err, result, response) => 

{
    console.log(result);
});
