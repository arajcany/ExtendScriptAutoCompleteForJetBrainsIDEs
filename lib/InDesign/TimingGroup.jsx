/*
 * a timing group.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TimingGroup = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TimingGroup (a TimingList).
     * @type {TimingList}
     * @readonly
     */
    parent: TimingList,


    /**
     * The index of the TimingGroup within its containing object.
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
     * A collection of timing target.
     * @type {TimingTargets}
     * @readonly
     */
    timingTargets: TimingTargets,


    /**
     * The placement of the timing group in the timing list.
     * @type {number}
     */
    placement: undefined,


    /**
     * The number of times this timing group plays.
     * @type {number}
     */
    plays: undefined,


    /**
     * Set to true if timing group loops.
     * @type {boolean}
     */
    playsLoop: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the TimingGroup.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Unlink all targets in the group into separate groups in this timing list.
     *
     * @return undefined
     */
    unlink: function () {
        
    },


    /**
     * Moves the timing group or target to the specified location.
     *
     * @param {LocationOptions} [to] The location in relation to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. . Can accept: TimingGroup, TimingTarget or TimingList. (Optional)
     * @return TimingGroup
     */
    move: function (to, reference) {
        
    },


    /**
     * Generates a string which, if executed, will return the TimingGroup.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TimingGroup
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

