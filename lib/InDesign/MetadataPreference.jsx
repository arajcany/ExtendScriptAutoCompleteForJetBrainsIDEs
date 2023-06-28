/*
 * Metadata preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var MetadataPreference = {


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
     * The parent of the MetadataPreference (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


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
     * The author of the document.
     * @type {string}
     */
    author: undefined,


    /**
     * The description of the MetadataPreference.
     * @type {string}
     */
    description: undefined,


    /**
     * The job name.
     * @type {string}
     */
    jobName: undefined,


    /**
     * The copyright status of the document.
     * @type {CopyrightStatus}
     */
    copyrightStatus: CopyrightStatus,


    /**
     * The text to use as a copyright notice.
     * @type {string}
     */
    copyrightNotice: undefined,


    /**
     * The URL of the file that contains the linked copyright statement.
     * @type {string}
     */
    copyrightInfoURL: undefined,


    /**
     * The list of keywords associated with the document.
     * @type {string}
     */
    keywords: undefined,


    /**
     * The title of the document.
     * @type {string}
     */
    documentTitle: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Saves the metadata in the document to an external file.
     *
     * @param {File} [to] The path to the external file.
     * @return undefined
     */
    save: function (to) {
        
    },


    /**
     * Replaces the current metadata in the document with metadata from the specified file.
     *
     * @param {File} [using] The full path to the file that contains the replacement metadata.
     * @param {boolean} [affectAll] If true, treats all properties as external. Note: Defaults to false. (Optional) (default: false)
     * @return undefined
     */
    replace: function (using, affectAll) {
        
    },


    /**
     * Uses metadata from the specified external file to define any undefined metadata properties in the document.
     *
     * @param {File} [from] The path to the external file that contains the metadata.
     * @param {boolean} [affectAll] If true, also replaces existing metadata with data from the external file. If false, does not replace existing metadata. Note: Defaults to false. (Optional) (default: false)
     * @return undefined
     */
    append: function (from, affectAll) {
        
    },


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
     * Sets the XMP property associated with the specified path.
     *
     * @param {string} [namespace] The namespace of the property.
     * @param {string} [path] The specified path(s).
     * @param {string} [value] The value to assign to the property. Note: To remove the property, pass an empty string.
     * @return undefined
     */
    setProperty: function (namespace, path, value) {
        
    },


    /**
     * Creates an empty container.
     *
     * @param {string} [namespace] The namespace of the container.
     * @param {string} [path] The path to the container.
     * @param {number} [index] The index of the item within the container. Specified values must be 1 or greater. To append the item to the end of the index and allow the next available value to be assigned, use 0. (Optional) (default: 0)
     * @param {ContainerType} [container] The container type. Note: Required when the new item is the first item added to the container. (Optional) (default: ContainerType.BAG)
     * @return undefined
     */
    createContainerItem: function (namespace, path, index, container) {
        
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
     * Generates a string which, if executed, will return the MetadataPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return MetadataPreference
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

