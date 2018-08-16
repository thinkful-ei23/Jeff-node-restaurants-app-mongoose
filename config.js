'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://maxjeffwell:73Xs0YWE@ds121312.mlab.com:21312/restaurants-mongoose-db'
	// 'mongodb://localhost/restaurants-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;