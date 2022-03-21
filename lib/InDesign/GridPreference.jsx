/*
 * Grid preferences.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var GridPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the GridPreference (a Application or Document).
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
     * If true, displays the document grid.
     * @type {boolean}
     */
    documentGridShown: undefined,


    /**
     * If true, an object snaps to the nearest grid line when the object is created, moved, or resized.
     * @type {boolean}
     */
    documentGridSnapto: undefined,


    /**
     * The amount of space between major horizontal lines in the document grid.
     * @type {Measurement Unit (Number or String)=any}
     */
    horizontalGridlineDivision: undefined,


    /**
     * The amount of space between major vertical lines in the document grid.
     * @type {Measurement Unit (Number or String)=any}
     */
    verticalGridlineDivision: undefined,


    /**
     * The number of rows into which to subdivide the space between horizontal document grid lines.
     * @type {number}
     */
    horizontalGridSubdivision: undefined,


    /**
     * The number of columns into which to subdivide the space between vertical document grid lines.
     * @type {number}
     */
    verticalGridSubdivision: undefined,


    /**
     * The color of the document grid, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    gridColor: undefined,


    /**
     * If true, places grids behind all other objects on the spread.
     * @type {boolean}
     */
    gridsInBack: undefined,


    /**
     * If true, displays the baseline grid.
     * @type {boolean}
     */
    baselineGridShown: undefined,


    /**
     * The amount to offset the baseline grid from the zero point.
     * @type {Measurement Unit (Number or String)=any}
     */
    baselineStart: undefined,


    /**
     * The amount of space between baseline grid lines.
     * @type {Measurement Unit (Number or String)=any}
     */
    baselineDivision: undefined,


    /**
     * The magnification (as a percentage) less than which ruler guides do not appear. (Range: 5 to 4000)
     * @type {number}
     */
    baselineViewThreshold: undefined,


    /**
     * The color of the baseline grid, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    baselineColor: undefined,


    /**
     * The zero point for the baseline grid offset.
     * @type {BaselineGridRelativeOption}
     */
    baselineGridRelativeOption: BaselineGridRelativeOption,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the GridPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return GridPreference
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

