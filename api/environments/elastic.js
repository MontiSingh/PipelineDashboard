'use strict';

const elasticsearch = require('elasticsearch');
const config = require('../config');

module.exports.search = (event, context, callback) => {
    let client = new elasticsearch.Client({
        host: 'https://vpc-dashboardhub-jxvidnahynn6mri4uk6hxvpcfe.eu-west-2.es.amazonaws.com',
        log: 'trace'
    });

    client.ping({
        requestTimeout: 30000,
    }, function (error) {
        if (error) {
            console.error('elasticsearch cluster is down!');
        } else {
            console.log('All is well');
        }
    });
};
