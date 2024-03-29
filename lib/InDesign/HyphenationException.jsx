/*
 * A hyphenation exceptions list.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var HyphenationException = {


    /**
     * The name of the HyphenationException.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the HyphenationException (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the HyphenationException within its containing object.
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
     * A list of words removed from the hyphenation exceptions list.
     * @type {string}
     */
    removedExceptions: undefined,


    /**
     * A list of words added to the hyphenation exceptions list.
     * @type {string}
     */
    addedExceptions: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Adds the specified words to the hyphenation exceptions list.
     *
     * @param {string} [addedExceptions] The list of words to add.
     * @param {boolean} [removedList] If true, adds the words to the removed exceptions list. If false or unspecified, adds the words to the added exceptions list. (Optional) (default: false)
     * @return undefined
     */
    addException: function (addedExceptions, removedList) {
        
    },


    /**
     * Removes the specified words from the hyphenation exceptions list.
     *
     * @param {string} [removedExceptions] The list of words to remove.
     * @param {boolean} [removedList] If true, removes the words from the removed exceptions list. If false or unspecified, adds the words to the added exceptions list. (Optional) (default: false)
     * @return undefined
     */
    removeException: function (removedExceptions, removedList) {
        
    },


    /**
     * Generates a string which, if executed, will return the HyphenationException.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return HyphenationException
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

