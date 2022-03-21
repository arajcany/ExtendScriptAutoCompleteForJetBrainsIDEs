/*
 * The instance represents a top-level window or dialog box, which contains user-interface elements.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var Window = {


    /**
     * Deprecated. Use ;ScriptUI.frameworkName ;instead.
     * @type {String}
     * @readonly
     */
    frameworkName: String,


    /**
     * Deprecated. Use ;ScriptUI.version ;instead.
     * @type {Any}
     * @readonly
     */
    version: Any,


    /**
     * The graphics object that can be used to customize the window’s appearance, in response to the onDraw event.
     * @type {ScriptUIGraphics}
     * @readonly
     */
    graphics: ScriptUIGraphics,


    /**
     * When true, the element is shown, when false it is hidden.
     * @type {Boolean}
     */
    visible: Boolean,


    /**
     * The bounds of the window's drawable area, excluding the frame, in screen coordinates.
     * @type {Bounds}
     */
    bounds: Bounds,


    /**
     * The bounds of the window frame in screen coordinates.
     * @type {Bounds}
     * @readonly
     */
    frameBounds: Bounds,


    /**
     * The top left corner of the window frame in screen coordinates.
     * @type {Point}
     */
    frameLocation: Point,


    /**
     * The size and location of the window's frame in screen coordinates.
     * @type {Dimension}
     * @readonly
     */
    frameSize: Dimension,


    /**
     * The upper left corner of the window's drawable area.
     * @type {Point}
     */
    location: Point,


    /**
     * The largest rectangle to which the window can be resized.
     * @type {Dimension}
     */
    maximumSize: Dimension,


    /**
     * The smallest rectangle to which the window can be resized.
     * @type {Dimension}
     */
    minimumSize: Dimension,


    /**
     * The preferred size of the window.
     * @type {Dimension}
     */
    preferredSize: Dimension,


    /**
     * The current size and location of the content area of the window in screen coordinates.
     * @type {Dimension}
     */
    size: Dimension,


    /**
     * The bounds of this window relative to the top-level parent window.
     * @type {Bounds}
     * @readonly
     */
    windowBounds: Bounds,


    /**
     * A number of characters for which to reserve space when calculating the preferred size of the window.
     * @type {Number}
     */
    characters: Number,


    /**
     * The default text justification style for child text elements.
     * @type {String}
     */
    justify: left,


    /**
     * The title, label, or displayed text, a localizeable string.
     * @type {String}
     */
    text: String,


    /**
     * Set to true to make this window active.
     * @type {Boolean}
     */
    active: Boolean,


    /**
     * The keypress combination that invokes this element's ;onShortcutKey() ;callback.
     * @type {String}
     */
    shortcutKey: String,


    /**
     * For windows of type dialog, the UI element to notify when the user presses a cancellation key combination.
     * @type {Object}
     */
    cancelElement: Object,


    /**
     * For windows of type dialog, the UI element to notify when the user presses a Enter key.
     * @type {Object}
     */
    defaultElement: Object,


    /**
     * True if the window is expanded.
     * @type {Boolean}
     */
    maximized: Boolean,


    /**
     * True if the window is minimized or iconified.
     * @type {Boolean}
     */
    minimized: Boolean,


    /**
     * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
     * @type {String}
     */
    alignChildren: String,


    /**
     * The collection of UI elements that have been added to this container.
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
     * The alignment style for child elements of a container. If defined, this value overrides the alignChildren setting for the parent container.
     * @type {String}
     */
    alignment: String,


    /**
     * An object that contains one or more creation properties of the container (properties used only when the element is created).
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
     * The number of pixels to indent the element.
     * @type {Number}
     */
    indent: Number,


    /**
     * The immediate parent element.
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
     * The element type; "dialog", "palette", or "window".
     * @type {String}
     * @readonly
     */
    type: String,


    /**
     * The opacity of the window, in the range [0..1].
     * @type {Number}
     */
    opacity: 1.0,



    /**
     * Use this method to find an existing window.
     *
     * @param {String} [type] The name of a predefined resource available to JavaScript in the current application; or the window type.
     * @param {String} [title] The window title.
     * @return Window
     */
    find: function (type, title) {
        
    },


    /**
     * Displays a platform-standard dialog containing a short message and an OK button.
     *
     * @param {String} [message] TThe string for the displayed message.
     * @param {String} [title] A string to appear as the title of the dialog, if the platform supports a title.
     * @param {Boolean} [errorIcon] When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. (default: false)
     * @return undefined
     */
    alert: function (message, title, errorIcon) {
        
    },


    /**
     * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
     *
     * @param {String} [message] The string for the displayed message.
     * @param {Boolean} [noAsDefault] When true, the No button is the default choice, selected when the user types Enter. (default: false)
     * @param {String} [title] A string to appear as the title of the dialog, if the platform supports a title.
     * @return Boolean
     */
    confirm: function (message, noAsDefault, title) {
        
    },


    /**
     * Displays a modal dialog that returns the user’s text input.
     *
     * @param {String} [prompt] The string for the displayed message.
     * @param {String} [defaultXYZ] The initial value to be displayed in the text edit field.
     * @param {String} [title] A string to appear as the title of the dialog.
     * @return String
     */
    prompt: function (prompt, defaultXYZ, title) {
        
    },


    /**
     * Makes this window visible.
     *
     * @return undefined
     */
    show: function () {
        
    },


    /**
     * Hides this windows.
     *
     * @return undefined
     */
    hide: function () {
        
    },


    /**
     * Sends a notification message to all listeners, simulating the specified user interaction event.
     *
     * @param {String} [eventName] The event name; if omitted, the default event is sent.
     * @return undefined
     */
    notify: function (eventName) {
        
    },


    /**
     * Centers this window on screen or with repect to another window.
     *
     * @param {Window} [window] The relative window. If not specified, centers on the screen.
     * @return undefined
     */
    center: function (window) {
        
    },


    /**
     * Closes this window.
     *
     * @param {Any} [return] A number to be returned from the show() method that invoked this window as a modal dialog.
     * @return undefined
     */
    close: function (return) {
        
    },


    /**
     * Creates and returns a new control or container object and adds it to the children of this window.
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
     * Removes the specified child control from this window’s children array.
     *
     * @param {Any} [what] The child control to remove, specified by 0-based index, text property value, or as a control object.
     * @return undefined
     */
    remove: function (what) {
        
    },


    /**
     * Registers an event handler for a particular type of event occuring in this window.
     *
     * @param {String} [eventName] The name of the event.
     * @param {Function} [handler] The function that handles the event.
     * @param {Boolean} [capturePhase] When true, the handler is called only in the capturing phase of the event propagation. (default: false)
     * @return Boolean
     */
    addEventListener: function (eventName, handler, capturePhase) {
        
    },


    /**
     * Unregisters an event handler for a particular type of event occuring in this window.
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
     * @return UIEvent
     */
    dispatchEvent: function () {
        
    },


};

