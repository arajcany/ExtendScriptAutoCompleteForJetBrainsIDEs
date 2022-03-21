/*
 * Text import preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TextImportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TextImportPreference (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


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
     * The computer language character set used to create the text file.
     * @type {TextImportCharacterSet}
     */
    characterSet: TextImportCharacterSet,


    /**
     * The platform used to create the imported text file.
     * @type {ImportPlatform}
     */
    platform: ImportPlatform,


    /**
     * The dictionary to use for the imported text.
     * @type {string}
     */
    dictionary: undefined,


    /**
     * If true, the import filter removes extra carriage returns at the ends of lines.
     * @type {boolean}
     */
    stripReturnsBetweenLines: undefined,


    /**
     * If true, the import filter removes extra carriage returns between paragraphs.
     * @type {boolean}
     */
    stripReturnsBetweenParagraphs: undefined,


    /**
     * If true, converts the specified number of spaces into a tab. For information on specifying the number of spaces, see spaces into tabs count.
     * @type {boolean}
     */
    convertSpacesIntoTabs: undefined,


    /**
     * The number of spaces to convert to a tab. Note: Valid when convert spaces into tabs is true.
     * @type {number}
     */
    spacesIntoTabsCount: undefined,


    /**
     * If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
     * @type {boolean}
     */
    useTypographersQuotes: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the TextImportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TextImportPreference
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

