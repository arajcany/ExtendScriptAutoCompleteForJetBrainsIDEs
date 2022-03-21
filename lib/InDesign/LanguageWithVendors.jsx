/*
 * A language that allows the specification of a hyphenation rules source, a spell-checking source, and a thesaurus.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var LanguageWithVendors = {


    /**
     * The name of the LanguageWithVendors.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The untranslated name of the language.
     * @type {string}
     * @readonly
     */
    untranslatedName: undefined,


    /**
     * The full name of the Language object's ICU locale.
     * @type {string}
     * @readonly
     */
    icuLocaleName: undefined,


    /**
     * A list of spelling vendors.
     * @type {string}
     * @readonly
     */
    spellingVendorList: undefined,


    /**
     * A list of hyphenation vendors.
     * @type {string}
     * @readonly
     */
    hyphenationVendorList: undefined,


    /**
     * The unique ID of the LanguageWithVendors.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the LanguageWithVendors (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the LanguageWithVendors within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * The single quotes pair for the language.
     * @type {string}
     */
    singleQuotes: undefined,


    /**
     * The double quotes pair for the language.
     * @type {string}
     */
    doubleQuotes: undefined,


    /**
     * The hyphenation rules source.
     * @type {string}
     */
    hyphenationVendor: undefined,


    /**
     * The spell-checking source.
     * @type {string}
     */
    spellingVendor: undefined,


    /**
     * The thesaurus source.
     * @type {string}
     */
    thesaurusVendor: undefined,


    /**
     * The user dictionaries for the language.
     * @type {string}
     */
    dictionaryPaths: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Adds the specified user dictionary.
     *
     * @param {string} [filePath] The path to the dictionary file.
     * @return string
     */
    addDictionaryPath: function (filePath) {
        
    },


    /**
     * Removes the specified user dictionary.
     *
     * @param {string} [filePath] The path to the dictionary file.
     * @return string
     */
    removeDictionaryPath: function (filePath) {
        
    },


    /**
     * Sets the label to the value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @param {string} [value] The value.
     * @return undefined
     */
    insertLabel: function (key, value) {
        
    },


    /**
     * Gets the label value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @return string
     */
    extractLabel: function (key) {
        
    },


    /**
     * Generates a string which, if executed, will return the LanguageWithVendors.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return LanguageWithVendors
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

