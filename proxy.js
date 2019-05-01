const request = require('request');

const url = 'https://api.tfl.gov.uk/line/mode/tube/status?app_id=7bfe93c9&app_key=29cf3b84d4d9475e573aaf00238e7aa3';

console.log('getting ', url);
request.get(url)
            .on('data', (response) => {
                console.log('received');
                response = JSON.parse(response);
                console.log(response);
            });