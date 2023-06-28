/*
 * Grid printing and exporting preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var GridPrintingPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the GridPrintingPreference (a Application).
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
     * If true, displays layout grids in the printed or exported document.
     * @type {boolean}
     */
    layoutGridPrinting: undefined,


    /**
     * If true, displays frame (story) grids in the printed or exported document.
     * @type {boolean}
     */
    frameGridPrinting: undefined,


    /**
     * If true, displays text in the printed or exported document.
     * @type {boolean}
     */
    textPrinting: undefined,


    /**
     * If true, displays page items other than text, frame grids, and layout grids in the printed or exported document. For information on printing and exporting text and grids, see text printing, frame grid printing, and layout grid printing.
     * @type {boolean}
     */
    pageItemPrinting: undefined,


    /**
     * The stroke weight (in points) of the layout grid.
     * @type {number}
     */
    layoutGridStrokeWeight: undefined,


    /**
     * The stroke weight (in points) of the frame grid.
     * @type {number}
     */
    frameGridStrokeWeight: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the GridPrintingPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return GridPrintingPreference
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

