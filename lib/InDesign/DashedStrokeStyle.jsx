/*
 * A dashed stroke style.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var DashedStrokeStyle = {


    /**
     * The stroke style type.
     * @type {string}
     * @readonly
     */
    strokeStyleType: undefined,


    /**
     * The unique ID of the DashedStrokeStyle.
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
     * The parent of the DashedStrokeStyle (a Document or Application).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the DashedStrokeStyle within its containing object.
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
     * The pattern of dashes and gaps, in the format [dash length1, gap length1, dash length2, gap length2]. Define up to ten values.
     * @type {Measurement Unit (Number or String)=any}
     */
    dashArray: Measurement Unit (Number or String)=any,


    /**
     * The corner adjustment applied to the DashedStrokeStyle.
     * @type {StrokeCornerAdjustment}
     */
    strokeCornerAdjustment: StrokeCornerAdjustment,


    /**
     * The end shape of an open path.
     * @type {EndCap}
     */
    endCap: EndCap,


    /**
     * The name of the DashedStrokeStyle.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Duplicates the DashedStrokeStyle.
     *
     * @return DashedStrokeStyle
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
     * Generates a string which, if executed, will return the DashedStrokeStyle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DashedStrokeStyle
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

