/*
 * Find/change transliterate options.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var FindChangeTransliterateOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FindChangeTransliterateOption (a Application).
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
     * If true, search in the backward direction.
     * @type {boolean}
     */
    searchBackwards: undefined,


    /**
     * If true, finds only text that matches the specified kana type.
     * @type {boolean}
     */
    kanaSensitive: undefined,


    /**
     * If true, finds only text that matches the specified character width.
     * @type {boolean}
     */
    widthSensitive: undefined,


    /**
     * If true, includes locked stories in the find query.
     * @type {boolean}
     */
    includeLockedStoriesForFind: undefined,


    /**
     * If true, includes locked layers in the find query.
     * @type {boolean}
     */
    includeLockedLayersForFind: undefined,


    /**
     * If true, includes hidden layers in the find/change query.
     * @type {boolean}
     */
    includeHiddenLayers: undefined,


    /**
     * If true, includes master pages in the find/change query.
     * @type {boolean}
     */
    includeMasterPages: undefined,


    /**
     * If true, includes footnotes in the find/change query.
     * @type {boolean}
     */
    includeFootnotes: undefined,


    /**
     * If true, finds only the complete find text string. If false, also finds strings that contain the find text string.
     * @type {boolean}
     */
    wholeWord: undefined,


    /**
     * If true, finds strings whose use of case matches the find text string. If false, finds strings that match the find text string regardless of case.
     * @type {boolean}
     */
    caseSensitive: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FindChangeTransliterateOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FindChangeTransliterateOption
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

