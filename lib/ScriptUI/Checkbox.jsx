/*
 * A dual-state control showing a box that has a checkmark when the ;value ;is true, and is empty when the ;value ;is false.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var Checkbox = {


    /**
     * The selection state of the control.
     * @type {Boolean}
     */
    value: Boolean,


    /**
     * A number of characters for which to reserve space when calculating the preferred size of the element.
     * @type {Number}
     */
    characters: Number,


    /**
     * The default text justification style for child text elements.
     * @type {String}
     */
    justify: left,


    /**
     * The text to display, a localizable string.
     * @type {String}
     */
    text: String,


    /**
     * True if this element is active.
     * @type {Boolean}
     */
    active: Boolean,


    /**
     * The key sequence that invokes the ;onShortcutKey() ;callback for this element (in Windows only).
     * @type {String}
     */
    shortcutKey: String,


    /**
     * The graphics object that can be used to customize the element's appearance, in response to the ;onDraw() ;event.
     * @type {ScriptUIGraphics}
     * @readonly
     */
    graphics: ScriptUIGraphics,


    /**
     * True if this element is shown, false if it is hidden.
     * @type {Boolean}
     */
    visible: Boolean,


    /**
     * The boundaries of the element, in parent-relative coordinates.
     * @type {Bounds}
     */
    bounds: Bounds,


    /**
     * The upper left corner of this element relative to its parent.
     * @type {Point}
     */
    location: Point,


    /**
     * The maximum height and width to which the element can be resized.
     * @type {Dimension}
     */
    maximumSize: Dimension,


    /**
     * The minimum height and width to which the element can be resized.
     * @type {Dimension}
     */
    minimumSize: Dimension,


    /**
     * The preferred size, used by layout managers to determine the best size for each element.
     * @type {Dimension}
     */
    preferredSize: Dimension,


    /**
     * The current dimensions of this element.
     * @type {Dimension}
     */
    size: Dimension,


    /**
     * The bounds of this element relative to the top-level parent window.
     * @type {Bounds}
     * @readonly
     */
    windowBounds: Bounds,


    /**
     * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
     * @type {String}
     */
    alignment: String,


    /**
     * An array of child elements.
     * @type {Object}
     * @readonly
     */
    children: Object,


    /**
     * An object that contains one or more creation properties of the item (properties used only when the element is created).
     * @type {Object}
     */
    properties: Object,


    /**
     * True if this element is enabled.
     * @type {Boolean}
     */
    enabled: Boolean,


    /**
     * The help text that is displayed when the mouse hovers over the element.
     * @type {String}
     */
    helpTip: String,


    /**
     * The number of pixels to indent the element during automatic layout.
     * @type {Number}
     */
    indent: Number,


    /**
     * The parent element.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The window that this element belongs to.
     * @type {Window}
     * @readonly
     */
    window: Window,


    /**
     * The element type; "checkbox".
     * @type {String}
     * @readonly
     */
    type: String,



    /**
     * Sends a notification message, simulating the specified user interaction event.
     *
     * @param {String} [eventName] The name of the control event handler to call.
     * @return undefined
     */
    notify: function (eventName) {
        
    },


    /**
     * Shows this element.
     *
     * @return undefined
     */
    show: function () {
        
    },


    /**
     * Hides this element.
     *
     * @return undefined
     */
    hide: function () {
        
    },


    /**
     * Registers an event handler for a particular type of event occuring in this element.
     *
     * @param {String} [eventName] The name of the event.
     * @param {Function} [handler] The function that handles the event.
     * @param {Boolean} [capturePhase] When true, the handler is called only in the capturing phase of the event propagation. (default: false)
     * @return Boolean
     */
    addEventListener: function (eventName, handler, capturePhase) {
        
    },


    /**
     * Unregisters an event handler for a particular type of event occuring in this element.
     *
     * @param {String} [eventName] The name of the event.
     * @param {Function} [handler] The function that handles the event.
     * @param {Boolean} [capturePhase] Whether to call the handler only in the capturing phase of the event propagation. (default: false)
     * @return Boolean
     */
    removeEventListener: function (eventName, handler, capturePhase) {
        
    },


    /**
     * Simulates the occurrence of an event in this target.
     *
     * @return Event
     */
    dispatchEvent: function () {
        
    },


};

