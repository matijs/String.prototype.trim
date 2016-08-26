'use strict';
const assert = require( 'assert' );
const trim = require( '../trim.js' );

describe( '#trim', function() {
	it( 'should return "foo"', function() {
		assert.equal( 'foo', trim.call( 'foo' ) );
	});
	it( 'should return "foo"', function() {
		assert.equal( 'foo', trim.call( 'foo ' ) );
	});
	it( 'should return "foo"', function() {
		assert.equal( 'foo', trim.call( ' foo' ) );
	});
	it( 'should return "foo"', function() {
		assert.equal( 'foo', trim.call( 'foo  ' ) );
	});
	it( 'should return "foo"', function() {
		assert.equal( 'foo', trim.call( '  foo' ) );
	});
	it( 'should return "foo"', function() {
		assert.equal( 'foo', trim.call( '  foo  ' ) );
	});
	it( 'should return "foo"', function() {
		assert.equal( 'foo', trim.call( ' foo ' ) );
	});
	it( 'should return the empty string', function() {
		assert.equal( '', trim.call( '' ) );
	});
	it( 'should return the empty string', function() {
		assert.equal( '', trim.call( ' ' ) );
	});
	it( 'should return the empty string', function() {
		assert.equal( '', trim.call( '  ' ) );
	});
	it( 'should return "foo bar"', function() {
		assert.equal( 'foo bar', trim.call( 'foo bar' ));
	});
	it( 'should return "foo bar"', function() {
		assert.equal( 'foo bar', trim.call( 'foo bar ' ));
	});
	it( 'should return "foo bar"', function() {
		assert.equal( 'foo bar', trim.call( ' foo bar' ));
	});
	it( 'should return "foo bar"', function() {
		assert.equal( 'foo bar', trim.call( 'foo bar  ' ));
	});
	it( 'should return "foo bar"', function() {
		assert.equal( 'foo bar', trim.call( '  foo bar' ));
	});
	it( 'should return "foo bar"', function() {
		assert.equal( 'foo bar', trim.call( ' foo bar ' ));
	});
	it( 'should return "foo bar"', function() {
		assert.equal( 'foo bar', trim.call( '  foo bar  ' ));
	});
});
