/*
 * Encapsulates input event information for an event that propagates through a container and control hierarchy.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var UIEvent = {


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
     * The name of the event that this  object represents.
     * @type {String}
     * @readonly
     */
    type: String,


    /**
     * The ScriptUI element that this event relates to.
     * @type {Any}
     * @readonly
     */
    view: Any,


    /**
     * The click count for a mouse-click event.
     * @type {Any}
     * @readonly
     */
    detail: Any,



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


    /**
     * Initializes a UI event as a core W3C event.
     *
     * @param {String} [type] The event type.
     * @param {Boolean} [captures] Set to true if this event can be captured. (default: false)
     * @param {Boolean} [bubbles] Set to true if the event bubbles. (default: false)
     * @param {Boolean} [cancelable] Set to true if the default action is cancelable. (default: false)
     * @return undefined
     */
    initEvent: function (type, captures, bubbles, cancelable) {
        
    },


    /**
     * Initializes an event.
     *
     * @param {String} [type] The event type.
     * @param {Boolean} [captures] Set to true if this event can be captured. (default: false)
     * @param {Boolean} [bubbles] Set to true if the event bubbles. (default: false)
     * @param {Object} [view] The ScriptUI element that this event relates to.
     * @param {Number} [detail] The click count for a mouse-click event.
     * @return undefined
     */
    initUIEvent: function (type, captures, bubbles, view, detail) {
        
    },


};

