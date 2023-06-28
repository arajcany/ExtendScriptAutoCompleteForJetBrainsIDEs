/*
 * a timing target.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var TimingTarget = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TimingTarget (a TimingGroup).
     * @type {TimingGroup}
     * @readonly
     */
    parent: TimingGroup,


    /**
     * The index of the TimingTarget within its containing object.
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
     * A page item target that is an animation, media, or mso. Can return: PageItem, Graphic, Behavior or MediaItem.
     * @type {varies=any}
     */
    dynamicTarget: undefined,


    /**
     * The time delay in seconds for a single target or a group of targets after the previoius group has finished.
     * @type {number}
     */
    delaySeconds: undefined,


    /**
     * Set to true if reversing animation on rolloff. Valid only for self rolloff trigger event.
     * @type {boolean}
     */
    reverseAnimation: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the TimingTarget.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Unlink target from this group and append to the end of this timing list.
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
     * @return TimingTarget
     */
    move: function (to, reference) {
        
    },


    /**
     * Generates a string which, if executed, will return the TimingTarget.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TimingTarget
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

