const trim = require( './trim.js' );

if ( typeof String.prototype.trim !== 'function' ) {
	String.prototype.trim = trim;
}
