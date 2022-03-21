/*
 * Provides information about a class.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var Reflection = {


    /**
     * The class name.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * An array of method descriptions.
     * @type {ReflectionInfo}
     * @readonly
     */
    methods: ReflectionInfo,


    /**
     * An array of property descriptions.
     * @type {ReflectionInfo}
     * @readonly
     */
    properties: ReflectionInfo,


    /**
     * An array of class method descriptions.
     * @type {ReflectionInfo}
     * @readonly
     */
    staticMethods: ReflectionInfo,


    /**
     * An array of class property descriptions.
     * @type {ReflectionInfo}
     * @readonly
     */
    staticProperties: ReflectionInfo,


    /**
     * The long description text.
     * @type {string}
     * @readonly
     */
    description: undefined,


    /**
     * The short description text.
     * @type {string}
     * @readonly
     */
    help: undefined,


    /**
     * Sample code, if present.
     * @type {string}
     * @readonly
     */
    sampleCode: undefined,


    /**
     * A file containing sample code. May be null.
     * @type {File}
     * @readonly
     */
    sampleFile: File,



    /**
     * Finds an element description by name.
     *
     * @param {string} [name] The name of the element to find.
     * @return ReflectionInfo
     */
    find: function (name) {
        
    },


    /**
     * Returns this class information as XML in OMV format.
     *
     * @return XML
     */
    toXML: function () {
        
    },


};

