/*
 * View preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ViewPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ViewPreference (a Application or Document).
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
     * The number of points per inch, typically 72. (Range: 60 to 80)
     * @type {number}
     */
    pointsPerInch: undefined,


    /**
     * The distance (in points) between major tick marks on the horizontal ruler. (Range: 4 to 256) Valid only when horizontal measurement units is custom.
     * @type {number}
     */
    horizontalCustomPoints: undefined,


    /**
     * The distance (in points) between major tick marks on the vertical ruler. (Range: 4 to 256) Valid only when vertical measurement units is custom.
     * @type {number}
     */
    verticalCustomPoints: undefined,


    /**
     * The measurement unit for stroke measurements.
     * @type {MeasurementUnits}
     */
    strokeMeasurementUnits: MeasurementUnits,


    /**
     * The range (in pixels) within which an object snaps to guides. (Range: 1 to 36) Note: Snapping occurs only when guides are shown.
     * @type {number}
     */
    guideSnaptoZone: undefined,


    /**
     * The distance to move a specified object when an arrow key is pressed. (Range depends on the measurement unit. For points: 0.001 to 100; picas: 0p0.001 to 8p4; mm: 0 to 35.278; cm: 0 to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
     * @type {Measurement Unit (Number or String)=any}
     */
    cursorKeyIncrement: undefined,


    /**
     * The measurement unit for the horizontal ruler and other horizontally-measured spaces such as grid columns, horizontal offsets, column gutters, or others.
     * @type {MeasurementUnits}
     */
    horizontalMeasurementUnits: MeasurementUnits,


    /**
     * The measurement unit for the vertical ruler and other vertically-measured spaces such as grid rows, vertical offsets, row heights, or others.
     * @type {MeasurementUnits}
     */
    verticalMeasurementUnits: MeasurementUnits,


    /**
     * The default zero point at the intersection of the vertical and horizontal rulers and the scope of the horizontal ruler.
     * @type {RulerOrigin}
     */
    rulerOrigin: RulerOrigin,


    /**
     * If true, displays the horizontal and vertical rulers.
     * @type {boolean}
     */
    showRulers: undefined,


    /**
     * If true, displays borders of unselected frames and the diagonal lines in empty unselected frames.
     * @type {boolean}
     */
    showFrameEdges: undefined,


    /**
     * The measurement units for typography.
     * @type {MeasurementUnits}
     */
    typographicMeasurementUnits: MeasurementUnits,


    /**
     * The measurement unit for text size measurements.
     * @type {MeasurementUnits}
     */
    textSizeMeasurementUnits: MeasurementUnits,


    /**
     * The measurement unit for the print dialog.
     * @type {MeasurementUnits}
     */
    printDialogMeasurementUnits: MeasurementUnits,


    /**
     * If true, notes are displayed.
     * @type {boolean}
     */
    showNotes: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the ViewPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ViewPreference
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

