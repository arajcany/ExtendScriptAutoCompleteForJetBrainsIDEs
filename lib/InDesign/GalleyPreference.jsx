/*
 * Galley preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var GalleyPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the GalleyPreference (a Application or Document).
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
     * The background color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. . Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    backgroundColor: undefined,


    /**
     * If true, the cursor blinks.
     * @type {boolean}
     */
    blinkCursor: undefined,


    /**
     * The cursor type for galley and story views.
     * @type {CursorTypes}
     */
    cursorType: CursorTypes,


    /**
     * If true, galley text is anti-aliased.
     * @type {boolean}
     */
    smoothText: undefined,


    /**
     * The text color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
     * @type {varies=any}
     */
    textColor: undefined,


    /**
     * If true, displays the depth ruler.
     * @type {boolean}
     */
    showDepthRuler: undefined,


    /**
     * The type of text anti-aliasing to use in story and galley views.
     * @type {AntiAliasType}
     */
    antiAliasType: AntiAliasType,


    /**
     * If true, show paragraph style names.
     * @type {boolean}
     */
    showParagraphStyleNames: undefined,


    /**
     * Amount of spacing between lines.
     * @type {LineSpacingType}
     */
    lineSpacingValue: LineSpacingType,


    /**
     * Font family name to use for text display.
     * @type {string}
     */
    displayFont: undefined,


    /**
     * Size to use for text display.
     * @type {Measurement Unit (Number or String)=any}
     */
    displayFontSize: undefined,


    /**
     * Info column width.
     * @type {Measurement Unit (Number or String)=any}
     */
    infoColumnWidth: undefined,


    /**
     * If true, display the Info column.
     * @type {boolean}
     */
    showInfoColumn: undefined,


    /**
     * If true, show paragraph break marks.
     * @type {boolean}
     */
    showParagraphBreakMarks: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the GalleyPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return GalleyPreference
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

