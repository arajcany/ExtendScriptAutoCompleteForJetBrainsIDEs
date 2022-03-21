/*
 * A container for other types of controls, with an optional frame.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var Panel = {


    /**
     * Reserve space for the specified number of characters; affects calculation of ;preferredSize ;.
     * @type {Number}
     */
    characters: Number,


    /**
     * The default text justification style for child text elements.
     * @type {String}
     */
    justify: left,


    /**
     * The title or label text, a localizable string.
     * @type {String}
     */
    text: String,


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
     * The upper left corner of this element's frame relative to its parent.
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
     * Specifies how to align the child elements.
     * @type {String}
     */
    alignChildren: String,


    /**
     * An array of child elements.
     * @type {Object}
     * @readonly
     */
    children: Object,


    /**
     * The layout manager for this container.
     * @type {LayoutManager}
     */
    layout: LayoutManager,


    /**
     * The number of pixels between the edges of a container and the outermost child elements.
     * @type {Number}
     */
    margins: Number,


    /**
     * The layout orientation of children in a container.
     * @type {String}
     */
    orientation: String,


    /**
     * The number of pixels separating one child element from its adjacent sibling element.
     * @type {Number}
     */
    spacing: Number,


    /**
     * The alignment style for this element. If defined, this value overrides the alignChildren setting for the parent container.
     * @type {String}
     */
    alignment: String,


    /**
     * An object that contains one or more creation properties of the control (properties used only when the element is created).
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
     * The element type; "panel".
     * @type {String}
     * @readonly
     */
    type: String,



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
     * Adds a child element to this container.
     *
     * @param {String} [type] The type of the child element, as specified for the type property.
     * @param {Bounds} [bounds] A bounds specification that describes the size and position of the new control or container, relative to its parent.
     * @param {String} [text] The text or label, a localizable string.
     * @param {Object} [properties] An object that contains one or more creation properties of the new child (properties used only when the element is created).
     * @return Object
     */
    add: function (type, bounds, text, properties) {
        
    },


    /**
     * Removes the specified child control from this group's ;children ;array.
     *
     * @param {Any} [what] The child control to remove, specified by 0-based index, text property value, or as a control object.
     * @return undefined
     */
    remove: function (what) {
        
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

