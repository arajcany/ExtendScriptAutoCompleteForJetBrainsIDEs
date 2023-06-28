/*
 * Find glyph preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var FindGlyphPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FindGlyphPreference (a Application).
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
     * Value of Design Axes. Can return: Array of Reals or NothingEnum enumerator.
     * @type {varies=any}
     */
    designAxes: undefined,


    /**
     * The GID/CID of the glyph. Can return: Long Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    glyphID: undefined,


    /**
     * The Registry Ordered font group. Can return: Array of 2 Strings or NothingEnum enumerator.
     * @type {varies=any}
     */
    rosFontGroup: undefined,


    /**
     * The font applied to the FindGlyphPreference, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    appliedFont: undefined,


    /**
     * The name of the font style. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    fontStyle: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Set Nth design axis of a variable font.
     *
     * @param {number} [nthAxisIndex] Index of design axis.
     * @param {number} [nthAxisValue] Value of nth design axis.
     * @return undefined
     */
    setNthDesignAxis: function (nthAxisIndex, nthAxisValue) {
        
    },


    /**
     * If true, Nth design axis of variable font is hidden.
     *
     * @param {number} [nthAxisIndex] Index of design axis.
     * @return boolean
     */
    isNthDesignAxisHidden: function (nthAxisIndex) {
        
    },


    /**
     * Generates a string which, if executed, will return the FindGlyphPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FindGlyphPreference
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

