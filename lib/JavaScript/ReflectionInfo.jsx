/*
 * Provides information about a method, a property or a method parameters.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\javascript.xml
 * OMV Time: 
 * OMV Title: Core JavaScript Classes
 */
var ReflectionInfo = {


    /**
     * The class object that this element belongs to.
     * @type {Reflection}
     * @readonly
     */
    parent: Reflection,


    /**
     * The element name.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The element type.
     * @type {string}
     * @readonly
     */
    type: undefined,


    /**
     * The data type.
     * @type {string}
     * @readonly
     */
    dataType: undefined,


    /**
     * The description of method or function arguments.
     * @type {ReflectionInfo}
     * @readonly
     */
    arguments: ReflectionInfo,


    /**
     * The minimum value.
     * @type {number}
     * @readonly
     */
    min: undefined,


    /**
     * The maximum value.
     * @type {number}
     * @readonly
     */
    max: undefined,


    /**
     * The default value.
     * @type {any}
     * @readonly
     */
    defaultValue: undefined,


    /**
     * Contains true if the class describes a collection class.
     * @type {boolean}
     * @readonly
     */
    isCollection: undefined,


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




};

