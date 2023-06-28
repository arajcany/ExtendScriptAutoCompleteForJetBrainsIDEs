/*
 * Transform preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var TransformPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TransformPreference (a Application).
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
     * If true, includes the stroke weight when displaying object dimensions. If false, measures objects from the path or frame.
     * @type {boolean}
     */
    dimensionsIncludeStrokeWeight: undefined,


    /**
     * If true, transformation values are relative to the parent object. If false, the transformation values are absolute values.
     * @type {boolean}
     */
    transformationsAreTotals: undefined,


    /**
     * If true, measures the x and y values of the object relative to the containing frame. If false, measures the x and y values relative to the rulers.
     * @type {boolean}
     */
    showContentOffset: undefined,


    /**
     * If true, transparency effects are scaled when objects are scaled.
     * @type {boolean}
     */
    adjustEffectsWhenScaling: undefined,


    /**
     * The method used to scale a page item.
     * @type {WhenScalingOptions}
     */
    whenScaling: WhenScalingOptions,


    /**
     * If true, strokes are scaled when objects are scaled.
     * @type {boolean}
     */
    adjustStrokeWeightWhenScaling: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the TransformPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TransformPreference
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

