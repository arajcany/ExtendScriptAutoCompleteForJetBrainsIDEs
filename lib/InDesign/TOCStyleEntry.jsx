/*
 * A TOC entry definition.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var TOCStyleEntry = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TOCStyleEntry (a TOCStyle).
     * @type {TOCStyle}
     * @readonly
     */
    parent: TOCStyle,


    /**
     * The index of the TOCStyleEntry within its containing object.
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
     * The name of the TOCStyleEntry.
     * @type {string}
     */
    name: undefined,


    /**
     * The paragraph style applied to the TOC entry. Can return: ParagraphStyle or String.
     * @type {varies=any}
     */
    formatStyle: undefined,


    /**
     * The indent level of the entry in the TOC.
     * @type {number}
     */
    level: undefined,


    /**
     * The character style applied to the page number of the entry. Can return: CharacterStyle or String.
     * @type {varies=any}
     */
    pageNumberStyle: undefined,


    /**
     * The page number placement for the TOC entry style.
     * @type {PageNumberPosition}
     */
    pageNumberPosition: PageNumberPosition,


    /**
     * The string to insert between the entry text and the page numbers.
     * @type {string}
     */
    separator: undefined,


    /**
     * The character style applied to the string separating the TOC entry text and the page numbers. Can return: CharacterStyle or String.
     * @type {varies=any}
     */
    separatorStyle: undefined,


    /**
     * If true, sorts the entries alphabetically.
     * @type {boolean}
     */
    sortAlphabet: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the TOCStyleEntry.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the TOCStyleEntry.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TOCStyleEntry
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

