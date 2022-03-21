/*
 * Mojikumi UI preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var MojikumiUiPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the MojikumiUiPreference (a Document or Application).
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
     * If true, uses half-width spacing for all characters.
     * @type {boolean}
     */
    lineEndAllOneHalfEm: undefined,


    /**
     * If true, indents lines one space and uses line end uke one half space.
     * @type {boolean}
     */
    oneEmIndentLineEndUkeOneHalfEm: undefined,


    /**
     * If true, indents lines one full or half space and uses line end uke one half space.
     * @type {boolean}
     */
    oneOrOneHalfEmIndentLineEndUkeOneHalfEm: undefined,


    /**
     * If true, Uses full-witdh spacing for all characters except the last character in the line, which uses either full- or half-width spacing.
     * @type {boolean}
     */
    oneOrOneHalfEmIndentLineEndAllOneEm: undefined,


    /**
     * If true, indents lines one full space and uses full-width spacing for all characters.
     * @type {boolean}
     */
    oneEmIndentLineEndAllOneEm: undefined,


    /**
     * If true, indents lines one full space and uses no float for all characters.
     * @type {boolean}
     */
    oneEmIndentLineEndAllNoFloat: undefined,


    /**
     * If true, indents lines one full space and uses line end uke no float.
     * @type {boolean}
     */
    oneEmIndentLineEndUkeNoFloat: undefined,


    /**
     * If true, indents lines one half space or one full space and uses line end uke no float.
     * @type {boolean}
     */
    oneOrOneHalfEmIndentLineEndUkeNoFloat: undefined,


    /**
     * If true, indents lines one full space and uses half-width spacing for all characters.
     * @type {boolean}
     */
    oneEmIndentLineEndAllOneHalfEm: undefined,


    /**
     * If true, uses full-width spacing for all characters.
     * @type {boolean}
     */
    lineEndAllOneEm: undefined,


    /**
     * If true, uses line end uke no float.
     * @type {boolean}
     */
    lineEndUkeNoFloat: undefined,


    /**
     * If true, indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
     * @type {boolean}
     */
    oneOrOneHalfEmIndentLineEndPeriodOneEm: undefined,


    /**
     * If true, indents lines one space and uses full-width spacing for punctuation and for the last character in the line.
     * @type {boolean}
     */
    oneEmIndentLineEndPeriodOneEm: undefined,


    /**
     * If true, uses full-width spacing for punctuation and for the last character in the line.
     * @type {boolean}
     */
    lineEndPeriodOneEm: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the MojikumiUiPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return MojikumiUiPreference
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

