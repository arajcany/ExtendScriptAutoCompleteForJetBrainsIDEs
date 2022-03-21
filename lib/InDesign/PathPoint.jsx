/*
 * A path point of a path.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PathPoint = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PathPoint (a Path).
     * @type {Path}
     * @readonly
     */
    parent: Path,


    /**
     * The index of the PathPoint within its containing object.
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
     * The path point type.
     * @type {PointType}
     */
    pointType: PointType,


    /**
     * The location of the path point on the page, in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    anchor: undefined,


    /**
     * The left-direction point, which controls the curve of the line segment preceding the path point on the path, in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    leftDirection: undefined,


    /**
     * The right-direction point, which controls the curve of the line segment following the path point on the path, in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    rightDirection: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the PathPoint.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Join this path point to another path point. The two points must be end points and their paths combined into a single path on a single page item.
     *
     * @param {PathPoint} [reference] The reference object. The path point to join to
     * @param {JoinOptions} [given] The join option to use. (Optional)
     * @return undefined
     */
    join: function (reference, given) {
        
    },


    /**
     * Generates a string which, if executed, will return the PathPoint.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PathPoint
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

