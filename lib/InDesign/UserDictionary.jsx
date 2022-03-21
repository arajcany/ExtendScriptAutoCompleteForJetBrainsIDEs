/*
 * A user dictionary.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var UserDictionary = {


    /**
     * The name of the UserDictionary.
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
     * The parent of the UserDictionary (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the UserDictionary within its containing object.
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
     * A list of words added to the user dictionary.
     * @type {string}
     */
    addedWords: undefined,


    /**
     * A list of words removed from the user dictionary.
     * @type {string}
     */
    removedWords: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Adds the specified words to the specified list in the dictionary.
     *
     * @param {string} [addedWords] The words to add.
     * @param {boolean} [removedList] If true, adds the words to the removed words list. If false or unspecified, adds the words to the added words list. (Optional) (default: false)
     * @return undefined
     */
    addWord: function (addedWords, removedList) {
        
    },


    /**
     * Removes the specified words from the specified list in the dictionary.
     *
     * @param {string} [removedWords] The words to remove.
     * @param {boolean} [removedList] If true, removes the words from the removed words list. If false or unspecified, removes the words from the added words list. (Optional) (default: false)
     * @return undefined
     */
    removeWord: function (removedWords, removedList) {
        
    },


    /**
     * Generates a string which, if executed, will return the UserDictionary.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return UserDictionary
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

