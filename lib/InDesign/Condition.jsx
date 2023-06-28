/*
 * A condition for conditional text.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Condition = {


    /**
     * The unique ID of the Condition.
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
     * The parent of the Condition (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Condition within its containing object.
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
     * The name of the Condition.
     * @type {string}
     */
    name: undefined,


    /**
     * The color for the condition indicator; specified either as an array of three doubles representing RGB values in the range 0 to 255, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    indicatorColor: undefined,


    /**
     * The condition indicator method.
     * @type {ConditionIndicatorMethod}
     */
    indicatorMethod: ConditionIndicatorMethod,


    /**
     * The condition underline indicator appearance.
     * @type {ConditionUnderlineIndicatorAppearance}
     */
    underlineIndicatorAppearance: ConditionUnderlineIndicatorAppearance,


    /**
     * If true, the Condition is visible.
     * @type {boolean}
     */
    visible: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Delete the condition.
     *
     * @param {varies=any} [replacingWith] The condition to apply to text in place of the deleted condition. By default, no condition is applied in place of the deleted condition. Can accept: Condition or String. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
    },


    /**
     * Sets the label to the value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @param {string} [value] The value.
     * @return undefined
     */
    insertLabel: function (key, value) {
        
    },


    /**
     * Gets the label value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @return string
     */
    extractLabel: function (key) {
        
    },


    /**
     * Generates a string which, if executed, will return the Condition.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Condition
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

