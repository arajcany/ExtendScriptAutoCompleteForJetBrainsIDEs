/*
 * The base class of all JavaScript objects.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var Object = {


    /**
     * Points to the prototype object for this object.
     * @type {Object}
     * @readonly
     */
    prototype: Object,


    /**
     * Points to the constructor function that created this object.
     * @type {Function}
     * @readonly
     */
    constructor: Function,


    /**
     * Retrieves and returns the Reflection object associated with this method or a property.
     * @type {Reflection}
     * @readonly
     */
    reflect: Reflection,



    /**
     * Reports whether an object is still valid.
     *
     * @param {Object} [what] The object to check.
     * @return boolean
     */
    isValid: function (what) {
        
    },


    /**
     * Creates and returns a string representing this object.
     *
     * @return string
     */
    toString: function () {
        
    },


    /**
     * Creates and returns a string representing this object, localized for the current locale. See ;toString().
     *
     * @return string
     */
    toLocaleString: function () {
        
    },


    /**
     * Reports whether a given property is defined with an instance or within the prototype chain.
     *
     * @param {string} [name] The name of the property to check.
     * @return boolean
     */
    hasOwnProperty: function (name) {
        
    },


    /**
     * Reports whether a given property is enumerable.
     *
     * @param {string} [name] The name of the property to check.
     * @return boolean
     */
    propertyIsEnumerable: function (name) {
        
    },


    /**
     * Checks whether the given object is a prototype of this object.
     *
     * @param {Object} [what] The object to check.
     * @return boolean
     */
    isPrototypeOf: function (what) {
        
    },


    /**
     * Retrieves and returns the primitive value of this object.
     *
     * @return Object
     */
    valueOf: function () {
        
    },


    /**
     * Creates and returns a string representation of this object.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Removes the watch function of a property.
     *
     * @param {string} [name] The name of the property to unwatch.
     * @return undefined
     */
    unwatch: function (name) {
        
    },


    /**
     * Adds a watch function to a property, which is called when the value changes.
     *
     * @param {string} [name] The name of the property to watch.
     * @param {Function} [func] The function to be called when the value of this property changes.
     * @return undefined
     */
    watch: function (name, func) {
        
    },


};

