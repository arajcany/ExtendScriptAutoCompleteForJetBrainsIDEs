/*
 * A path.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Path = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Path (a SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame, MediaItem, Sound, Movie, Button, MultiStateObject, ClippingPathSettings or TextWrapPreference).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Path within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of path points.
     * @type {PathPoints}
     * @readonly
     */
    pathPoints: PathPoints,


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
     * The path type.
     * @type {PathType}
     */
    pathType: PathType,


    /**
     * A list of the coordinates of all of the path points on the path, including anchor points and left- and right-direction points. When creating a path using this property, supply either a list of anchor point coordinates ([[x1, y1], [x2, y2], ...]) or a list of anchor point, left-direction point, and right-direction point coordinates ([[[x1, y1], [x2, y2], [x3, y3]], [[x4, y4], [x5, y5], [x6, y6]], ...]). Note: Providing only anchor points results in a path on which all of the path points are connected with straight line segments; supplying the positions of left- and right-direction points specifies curved line segments. Can return: Array of Arrays of 2 Units.
     * @type {varies=any}
     */
    entirePath: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the Path.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Reverses the path.
     *
     * @return undefined
     */
    reverse: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Path.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Path
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

