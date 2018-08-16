'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://maxjeffwell:jeff123@ds121332.mlab.com:21332/restaurants-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;