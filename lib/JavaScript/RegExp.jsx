/*
 * Wraps a regular expression.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var RegExp = {


    /**
     * The matched subexpression #1.
     * @type {string}
     * @readonly
     */
    $1: undefined,


    /**
     * The matched subexpression #2.
     * @type {string}
     * @readonly
     */
    $2: undefined,


    /**
     * The matched subexpression #3.
     * @type {string}
     * @readonly
     */
    $3: undefined,


    /**
     * The matched subexpression #4.
     * @type {string}
     * @readonly
     */
    $4: undefined,


    /**
     * The matched subexpression #5.
     * @type {string}
     * @readonly
     */
    $5: undefined,


    /**
     * The matched subexpression #6.
     * @type {string}
     * @readonly
     */
    $6: undefined,


    /**
     * The matched subexpression #7.
     * @type {string}
     * @readonly
     */
    $7: undefined,


    /**
     * The matched subexpression #8.
     * @type {string}
     * @readonly
     */
    $8: undefined,


    /**
     * The matched subexpression #9.
     * @type {string}
     * @readonly
     */
    $9: undefined,


    /**
     * The last match.
     * @type {string}
     * @readonly
     */
    lastMatch: undefined,


    /**
     * The value of the last matched subexpression.
     * @type {string}
     * @readonly
     */
    lastParen: undefined,


    /**
     * The string before the match.
     * @type {string}
     * @readonly
     */
    leftContext: undefined,


    /**
     * The string after the match.
     * @type {string}
     * @readonly
     */
    rightContext: undefined,


    /**
     * Indicates whether the match is a global match.
     * @type {boolean}
     */
    global: undefined,


    /**
     * Indicates whether the match is not case sensitive.
     * @type {boolean}
     */
    ignoreCase: undefined,


    /**
     * Indicates whether the match matches multiple lines.
     * @type {boolean}
     */
    multiline: undefined,


    /**
     * The original input string.
     * @type {string}
     */
    input: undefined,



    /**
     * Converts this RegExp object to a string.
     *
     * @return string
     */
    toString: function () {
        
    },


    /**
     * Compiles a string to a regular expression. Returns true if the compilation was successful.
     *
     * @param {string} [pattern] The pattern to compile.
     * @return boolean
     */
    compile: function (pattern) {
        
    },


    /**
     * Execute a regular expression.
     *
     * @param {string} [text] The string to match.
     * @return Array
     */
    exec: function (text) {
        
    },


    /**
     * Execute a regular expression, and return true if there is a match.
     *
     * @param {string} [text] The string to match.
     * @return boolean
     */
    test: function (text) {
        
    },


};

