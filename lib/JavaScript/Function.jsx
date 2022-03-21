/*
 * Wraps a built-in or JavaScript function.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var Function = {


    /**
     * The function arguments, packed into an array.
     * @type {Object}
     */
    arguments: Object,


    /**
     * The number of formal arguments.
     * @type {number}
     * @readonly
     */
    length: undefined,


    /**
     * The number of formal arguments.
     * @type {number}
     * @readonly
     */
    arity: undefined,


    /**
     * The function name.
     * @type {string}
     * @readonly
     */
    name: undefined,



    /**
     * Apply a ;this ;object and an argument list to a function.
     *
     * @param {Object} [thisObj] 
     * @param {Array} [args] An array of arguments.
     * @return any
     */
    apply: function (thisObj, args) {
        
    },


    /**
     * Apply a ;this ;object and arguments to a function.
     *
     * @param {Object} [thisObj] 
     * @param {any} [argument]
     * @return any
     */
    call: function (thisObj, argument) {
        
    },


    /**
     * Creates a string representation of this object that can be fed back to ;eval() ;to re-create an object. Works only with JavaScript functions.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Returns the function definition as a string.
     *
     * @return string
     */
    toString: function () {
        
    },


};

