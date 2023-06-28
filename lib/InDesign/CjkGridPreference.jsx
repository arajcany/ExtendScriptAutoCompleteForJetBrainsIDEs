/*
 * Character grid preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var CjkGridPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the CjkGridPreference (a Application or Document).
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
     * If true, displays the layout grids.
     * @type {boolean}
     */
    showAllLayoutGrids: undefined,


    /**
     * If true, displays the frame (story) grids.
     * @type {boolean}
     */
    showAllFrameGrids: undefined,


    /**
     * The view magnification (as a percentage) less than which grids do not appear. (Range: 5 to 4000)
     * @type {number}
     */
    minimumScale: undefined,


    /**
     * If true, objects snap to the layout grid.
     * @type {boolean}
     */
    snapToLayoutGrid: undefined,


    /**
     * The layout grid color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    layoutGridColorIndex: undefined,


    /**
     * Applies the grid color to every nth cell, where n is the value of this property.
     * @type {number}
     */
    colorEveryNthCell: undefined,


    /**
     * If true, applies the grid color from the the edge of the line. If false, applies the grid color from the corner of the frame.
     * @type {boolean}
     */
    singleLineColorMode: undefined,


    /**
     * If true, uses ICF mode for grid cells. If false, uses virtual body mode.
     * @type {boolean}
     */
    icfMode: undefined,


    /**
     * If true, cell shape is circular. If false, cell shape is rectangular.
     * @type {boolean}
     */
    useCircularCells: undefined,


    /**
     * If true, displays the character count for the frame.
     * @type {boolean}
     */
    showCharacterCount: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the CjkGridPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return CjkGridPreference
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

