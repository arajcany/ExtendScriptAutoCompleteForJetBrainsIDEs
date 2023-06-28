/*
 * The preferences for a running header/footer (match paragraph style) variable.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var MatchParagraphStylePreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the MatchParagraphStylePreference (a TextVariable).
     * @type {TextVariable}
     * @readonly
     */
    parent: TextVariable,


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
     * The text that precedes the value of the variable. (Limit: 128 characters)
     * @type {string}
     */
    textBefore: undefined,


    /**
     * The text that follows the value of the variable. (Limit: 128 characters)
     * @type {string}
     */
    textAfter: undefined,


    /**
     * The paragraph style applied to the text. Can also accept: String.
     * @type {ParagraphStyle}
     */
    appliedParagraphStyle: ParagraphStyle,


    /**
     * The starting point and direction in which the search will be conducted.
     * @type {SearchStrategies}
     */
    searchStrategy: SearchStrategies,


    /**
     * The case of the matched text.
     * @type {ChangeCaseOptions}
     */
    changeCase: ChangeCaseOptions,


    /**
     * If true, deletes end punctuation from the matched text.
     * @type {boolean}
     */
    deleteEndPunctuation: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the MatchParagraphStylePreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return MatchParagraphStylePreference
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

