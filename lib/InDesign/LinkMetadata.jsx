/*
 * MetaData properties for the link source file.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var LinkMetadata = {


    /**
     * The author of the document.
     * @type {string}
     * @readonly
     */
    author: undefined,


    /**
     * The description of the LinkMetadata.
     * @type {string}
     * @readonly
     */
    description: undefined,


    /**
     * The job name.
     * @type {string}
     * @readonly
     */
    jobName: undefined,


    /**
     * The copyright status of the document.
     * @type {CopyrightStatus}
     * @readonly
     */
    copyrightStatus: CopyrightStatus,


    /**
     * The text to use as a copyright notice.
     * @type {string}
     * @readonly
     */
    copyrightNotice: undefined,


    /**
     * The URL of the file that contains the linked copyright statement.
     * @type {string}
     * @readonly
     */
    copyrightInfoURL: undefined,


    /**
     * The list of keywords associated with the document.
     * @type {string}
     * @readonly
     */
    keywords: undefined,


    /**
     * The location of the document on the asset management server.
     * @type {string}
     * @readonly
     */
    serverURL: undefined,


    /**
     * The most recent modification date of the document.
     * @type {Date}
     * @readonly
     */
    modificationDate: Date,


    /**
     * The creation date of the document.
     * @type {Date}
     * @readonly
     */
    creationDate: Date,


    /**
     * The title of the document.
     * @type {string}
     * @readonly
     */
    documentTitle: undefined,


    /**
     * The name of the application used to create the document.
     * @type {string}
     * @readonly
     */
    creator: undefined,


    /**
     * The format of the document.
     * @type {string}
     * @readonly
     */
    format: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the LinkMetadata (a Link).
     * @type {Link}
     * @readonly
     */
    parent: Link,


    /**
     * A collection of events.
     * @type {Events}
     * @readonly
     */
    events: Events,


    /**
     * A collection of event listeners.
     * @type {EventListeners}
     * @readonly
     */
    eventListeners: EventListeners,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Gets the XMP property value associated with the specified path.
     *
     * @param {string} [namespace] The namespace of the property.
     * @param {string} [path] The specified path.
     * @return string
     */
    getProperty: function (namespace, path) {
        
    },


    /**
     * Counts the number of items in the container.
     *
     * @param {string} [namespace] The namespace of the container.
     * @param {string} [path] The path to the container.
     * @return number
     */
    countContainer: function (namespace, path) {
        
    },


    /**
     * Generates a string which, if executed, will return the LinkMetadata.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return LinkMetadata
     */
    getElements: function () {
        
    },


    /**
     * Retrieves the object specifier.
     *
     * @return string
     */
    toSpecifier: function () {
        
    },


    /**
     * Adds an event listener.
     *
     * @param {string} [eventType] The event type.
     * @param {varies=any} [handler] The event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return EventListener
     */
    addEventListener: function (eventType, handler, captures) {
        
    },


    /**
     * Removes the event listener.
     *
     * @param {string} [eventType] The registered event type.
     * @param {varies=any} [handler] The registered event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return boolean
     */
    removeEventListener: function (eventType, handler, captures) {
        
    },


};

