/*
 * XML import preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var XMLImportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the XMLImportPreference (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


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
     * If true, creates a link to the imported XML file. If false, embeds the file.
     * @type {boolean}
     */
    createLinkToXML: undefined,


    /**
     * If true, repeating text elements inherit the formatting applied to placeholder text. Note: Valid only when import style is merge.
     * @type {boolean}
     */
    repeatTextElements: undefined,


    /**
     * If true, ignores elements that do not match the existing structure. Note: Valid only when import style is merge.
     * @type {boolean}
     */
    ignoreUnmatchedIncoming: undefined,


    /**
     * If true, imports text into tables if tags match placeholder tables and their cells. Note: Valid only when import style is merge.
     * @type {boolean}
     */
    importTextIntoTables: undefined,


    /**
     * If true, leaves existing content in place if the matching XML content contains only whitespace characters such as a carriage return or a tab character. Note: Valid only when import style is merge.
     * @type {boolean}
     */
    ignoreWhitespace: undefined,


    /**
     * If true, deletes existing elements or placeholders in the document that do not have matches in the XML file. Note: Valid only when import style is merge.
     * @type {boolean}
     */
    removeUnmatchedExisting: undefined,


    /**
     * If true, imports into the selected XML element. If false, imports at the root element.
     * @type {boolean}
     */
    importToSelected: undefined,


    /**
     * The style of incorporating imported XML content into the document.
     * @type {XMLImportStyles}
     */
    importStyle: XMLImportStyles,


    /**
     * If true, transforms the XML using an XSLT file.
     * @type {boolean}
     */
    allowTransform: undefined,


    /**
     * The name of the XSLT file. Note: Valid when allow transform is true. Can return: File or XMLTransformFile enumerator.
     * @type {varies=any}
     */
    transformFilename: undefined,


    /**
     * Stylesheet parameters as a list of name/value pairs in the format [[name, value], [name, value], ...]. Can return: Ordered array containing name:String, value:String.
     * @type {varies=any}
     */
    transformParameters: undefined,


    /**
     * If true, imports CALS tables as InDesign tables.
     * @type {boolean}
     */
    importCALSTables: true,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the XMLImportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return XMLImportPreference
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

