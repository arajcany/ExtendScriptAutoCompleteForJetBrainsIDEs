/*
 * An idle event.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var IdleEvent = {


    /**
     * Dispatched at idle time for this IdleEvent. This event does not bubble. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    ON_IDLE: onIdle,


    /**
     * Amount of time allocated to this task at the time the event was dispatched.
     * @type {number}
     * @readonly
     */
    timeAllocated: undefined,


    /**
     * The name of the event.
     * @type {string}
     * @readonly
     */
    eventType: undefined,


    /**
     * The target of the event.
     * @type {Object}
     * @readonly
     */
    target: Object,


    /**
     * The current propagation target of the event.
     * @type {Object}
     * @readonly
     */
    currentTarget: Object,


    /**
     * The current propagation phase of the event.
     * @type {EventPhases}
     * @readonly
     */
    eventPhase: EventPhases,


    /**
     * If true, the event supports the bubbling phase of propagation.
     * @type {boolean}
     * @readonly
     */
    bubbles: undefined,


    /**
     * If true, the default behavior of the event on its target can be canceled.
     * @type {boolean}
     * @readonly
     */
    cancelable: undefined,


    /**
     * The time the event was initialized.
     * @type {Date}
     * @readonly
     */
    timeStamp: Date,


    /**
     * If true, propagation of the event beyond the current target has been stopped.
     * @type {boolean}
     * @readonly
     */
    propagationStopped: undefined,


    /**
     * If true, the default behavior of the event on its target has been canceled.
     * @type {boolean}
     * @readonly
     */
    defaultPrevented: undefined,


    /**
     * The unique ID of the IdleEvent.
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
     * The parent of the IdleEvent (a IdleTask).
     * @type {IdleTask}
     * @readonly
     */
    parent: IdleTask,


    /**
     * The index of the IdleEvent within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Stops propagation of the event beyond the current target.
     *
     * @return undefined
     */
    stopPropagation: function () {
        
    },


    /**
     * Cancels the default behavior of the event on its target.
     *
     * @return undefined
     */
    preventDefault: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the IdleEvent.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return IdleEvent
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


};

