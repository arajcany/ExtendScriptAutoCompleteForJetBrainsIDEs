/*
 * Margin preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var MarginPreference = {


    /**
     * If false, columns are evenly spaced. If true, columns can have custom widths.
     * @type {boolean}
     * @readonly
     */
    customColumns: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the MarginPreference (a Application, Document or Page).
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
     * The number of columns to place on the page.
     * @type {number}
     */
    columnCount: undefined,


    /**
     * The distance between columns.
     * @type {Measurement Unit (Number or String)=any}
     */
    columnGutter: undefined,


    /**
     * The top edge of the MarginPreference.
     * @type {Measurement Unit (Number or String)=any}
     */
    top: undefined,


    /**
     * The bottom edge of the MarginPreference.
     * @type {Measurement Unit (Number or String)=any}
     */
    bottom: undefined,


    /**
     * The left edge of the MarginPreference.
     * @type {Measurement Unit (Number or String)=any}
     */
    left: undefined,


    /**
     * The right edge of the MarginPreference.
     * @type {Measurement Unit (Number or String)=any}
     */
    right: undefined,


    /**
     * The direction of text in the column.
     * @type {HorizontalOrVertical}
     */
    columnDirection: HorizontalOrVertical,


    /**
     * The distance that each column guide is placed from the left margin, formatted as an array in the format [guide1, guide2, guide3].
     * @type {Measurement Unit (Number or String)=any}
     */
    columnsPositions: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the MarginPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return MarginPreference
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

