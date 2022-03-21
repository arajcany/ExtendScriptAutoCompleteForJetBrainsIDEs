/*
 * The global methods and properties for ExtendScript.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var global = {


    /**
     * The NaN global property is a predefined variable with the value NaN (Not-a-Number), as specified by the IEEE-754 standard.
     * @type {number}
     */
    NaN: NaN,


    /**
     * The Infinity global property is a predefined variable with the value for infinity.
     * @type {number}
     */
    Infinity: +Infinity,


    /**
     * This global property is a predefined variable with the value for an undefined value.
     * @type {Undefined}
     */
    undefined: undefined,



    /**
     * Encodes a string after RFC2396.
     *
     * @param {string} [text] The text to encode.
     * @return string
     */
    encodeURI: function (text) {
        
    },


    /**
     * Encodes a string after RFC2396.
     *
     * @param {string} [text] The text to encode.
     * @return string
     */
    encodeURIComponent: function (text) {
        
    },


    /**
     * Decodes a string created with ;encodeURI().
     *
     * @param {string} [uri] The text to decode.
     * @return string
     */
    decodeURI: function (uri) {
        
    },


    /**
     * Decodes a string created with ;encodeURIComponent().
     *
     * @param {string} [uri] The text to decode.
     * @return string
     */
    decodeURIComponent: function (uri) {
        
    },


    /**
     * Creates a URL-encoded string from aString.
     *
     * @param {string} [aString] The string to be encoded.
     * @return string
     */
    escape: function (aString) {
        
    },


    /**
     * Evaluates its argument as a JavaScript script, and returns the result of evaluation.
     *
     * @param {string} [stringExpression] The string to evaluate.
     * @return any
     */
    eval: function (stringExpression) {
        
    },


    /**
     * Creates a source code representation of the supplied argument, and returns it as a string.
     *
     * @param {any} [what] The object to uneval.
     * @return string
     */
    uneval: function (what) {
        
    },


    /**
     * Evaluates an expression and reports whether the result is a finite number.
     *
     * @param {number} [expression] Any valid JavaScript expression.
     * @return boolean
     */
    isFinite: function (expression) {
        
    },


    /**
     * Evaluates an expression and reports whether the result is "Not-a-Number" (NaN).
     *
     * @param {number} [expression] Any valid JavaScript expression.
     * @return boolean
     */
    isNaN: function (expression) {
        
    },


    /**
     * Extracts an integer from a string.
     *
     * @param {string} [text] The string from which to extract an integer.
     * @param {number} [base] The base of the string to parse (from base 2 to base 36).
     * @return number
     */
    parseInt: function (text, base) {
        
    },


    /**
     * Extracts a floating-point number from a string.
     *
     * @param {string} [text] The string from which to extract a floating point number.
     * @return number
     */
    parseFloat: function (text) {
        
    },


    /**
     * Translates URL-encoded string into a regular string, and returns that string.
     *
     * @param {string} [stringExpression] The URL-encoded string to convert.
     * @return string
     */
    unescape: function (stringExpression) {
        
    },


    /**
     * Localizes a ZString-encoded string and merges additional arguments into the string.
     *
     * @param {string} [what] The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.
     * @param {any} [argument] Optional argument(s) to be merged into the string. There may be more than one argument.
     * @return string
     */
    localize: function (what, argument) {
        
    },


    /**
     * Returns true if the supplied string is a valid XML name.
     *
     * @param {string} [name] The XML name to test.
     * @return boolean
     */
    isXMLName: function (name) {
        
    },


    /**
     * Defines the default XML namespace.
     *
     * @param {Namespace} [namespace] The namespace to use.
     * @return undefined
     */
    setDefaultXMLNamespace: function (namespace) {
        
    },


    /**
     * Displays an alert box
     *
     * @param {string} [message] The text to display
     * @param {string} [title] The title of the alert; ignored on the Macintosh
     * @param {boolean} [errorIcon] Display an Error icon; ignored on the Macintosh (default: false)
     * @return undefined
     */
    alert: function (message, title, errorIcon) {
        
    },


    /**
     * Displays an alert box with Yes and No buttons; returns true for Yes
     *
     * @param {string} [message] The text to display
     * @param {boolean} [noAsDefault] Set to true to set the No button as the default button (default: false)
     * @param {string} [title] The title of the alert; ignored on the Macintosh
     * @return boolean
     */
    confirm: function (message, noAsDefault, title) {
        
    },


    /**
     * Displays a dialog allowing the user to enter text
     *
     * @param {string} [prompt] The text to display
     * @param {string} [defaultXYZ] The default text to preset the edit field with
     * @param {string} [title] The title of the dialog;
     * @return string
     */
    prompt: function (prompt, defaultXYZ, title) {
        
    },


};

