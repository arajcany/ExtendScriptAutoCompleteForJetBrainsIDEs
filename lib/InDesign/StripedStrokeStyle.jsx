/*
 * A striped stroke style.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var StripedStrokeStyle = {


    /**
     * The stroke style type.
     * @type {string}
     * @readonly
     */
    strokeStyleType: undefined,


    /**
     * The unique ID of the StripedStrokeStyle.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the StripedStrokeStyle (a Document or Application).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the StripedStrokeStyle within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * The width and position of stripes in a striped stroke pattern. Each stripe is specified by a start-end pair in the format [start1, end1, start2, end2]; each value indicates a percentage of the stroke weight. Each value must be greater than the previous value. (Range: 0 to 100).
     * @type {number}
     */
    stripeArray: undefined,


    /**
     * The name of the StripedStrokeStyle.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Duplicates the StripedStrokeStyle.
     *
     * @return StripedStrokeStyle
     */
    duplicate: function () {
        
    },


    /**
     * Deletes the stroke style.
     *
     * @param {varies=any} [replacingWith] The stroke style to apply in place of the deleted style. . Can accept: StrokeStyle or String. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
    },


    /**
     * Generates a string which, if executed, will return the StripedStrokeStyle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return StripedStrokeStyle
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

