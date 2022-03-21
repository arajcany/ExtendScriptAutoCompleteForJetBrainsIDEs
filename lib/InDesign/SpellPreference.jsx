/*
 * Spell-check preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var SpellPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the SpellPreference (a Application).
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
     * If true, underlines misspelled and repeated words, uncapitalized proper nouns, and uncapitalized first words in sentences. Note: Valid only when the corresponding properties are true. For information, see check misspelled words, check repeated words, check capitalized words, and check capitalized sentences.
     * @type {boolean}
     */
    dynamicSpellCheck: undefined,


    /**
     * The underline color for misspelled words, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check misspelled words are true. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    misspelledWordColor: undefined,


    /**
     * The underline color for repeated words, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check repeated words are true. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    repeatedWordColor: undefined,


    /**
     * The underline color for uncapitalized proper nouns, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check capitalized words are true. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    uncapitalizedWordColor: undefined,


    /**
     * The underline color for the first word in sentences that do not begin with a capital letter, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid when both dynamic spell check and check capitalized sentences are true. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    uncapitalizedSentenceColor: undefined,


    /**
     * If true, checks for misspelled words.
     * @type {boolean}
     */
    checkMisspelledWords: undefined,


    /**
     * If true, checks for repeated words.
     * @type {boolean}
     */
    checkRepeatedWords: undefined,


    /**
     * If true, checks for uncapitalized proper nouns.
     * @type {boolean}
     */
    checkCapitalizedWords: undefined,


    /**
     * If true, checks for uncapitalized first words in sentences.
     * @type {boolean}
     */
    checkCapitalizedSentences: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the SpellPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return SpellPreference
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

