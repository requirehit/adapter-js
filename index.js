var fs = require( 'fs' ),
    package = require( './package.json' );

exports.name = package.name;
exports.builder = require( './builder' );
exports.loader = function () {
    return fs.readFileSync( __dirname + '/loader.js' );
};
