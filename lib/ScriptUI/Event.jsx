/*
 * Base class for UIEvent.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var Event = {


    /**
     * 
     * @type {any}
     * @readonly
     */
    NOT_DISPATCHING: any,


    /**
     * 
     * @type {any}
     * @readonly
     */
    CAPTURING_PHASE: any,


    /**
     * 
     * @type {any}
     * @readonly
     */
    AT_TARGET: any,


    /**
     * 
     * @type {any}
     * @readonly
     */
    BUBBLING_PHASE: any,


    /**
     * True if this event can be captured.
     * @type {Boolean}
     * @readonly
     */
    captures: Boolean,


    /**
     * True if the event is of a type that bubbles.
     * @type {Boolean}
     * @readonly
     */
    bubbles: Boolean,


    /**
     * True if the default action associated with the event can be canceled with preventDefault().
     * @type {Boolean}
     * @readonly
     */
    cancelable: Boolean,


    /**
     * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
     * @type {Boolean}
     * @readonly
     */
    currentTarget: Boolean,


    /**
     * The current phase of event propagation; one of none, target, capture, bubble.
     * @type {String}
     * @readonly
     */
    eventPhase: String,


    /**
     * The event target object for this event.
     * @type {Object}
     * @readonly
     */
    target: Object,


    /**
     * The date and time at which the event occurred.
     * @type {Date}
     * @readonly
     */
    timeStamp: Date,


    /**
     * The name of the event that this object represents.
     * @type {String}
     * @readonly
     */
    type: String,



    /**
     * Prevents the default action associated with this event from being called.
     *
     * @return undefined
     */
    preventDefault: function () {
        
    },


    /**
     * Stops the propagation of this event.
     *
     * @return undefined
     */
    stopPropagation: function () {
        
    },


};

