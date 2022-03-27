/*
 * An artwork path item.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var PathItem = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * Is this path closed?
     * @type {boolean}
     */
    closed: undefined,


    /**
     * The area of this path in square points.
     * @type {number}
     * @readonly
     */
    area: undefined,


    /**
     * The length of this path in points.
     * @type {number}
     * @readonly
     */
    length: undefined,


    /**
     * Is this path a guide object?
     * @type {boolean}
     */
    guides: undefined,


    /**
     * Should the path be filled?
     * @type {boolean}
     */
    filled: undefined,


    /**
     * Fill color.
     * @type {Color}
     */
    fillColor: Color,


    /**
     * Will art beneath a filled object be overprinted?
     * @type {boolean}
     */
    fillOverprint: undefined,


    /**
     * Should the path be stroked?
     * @type {boolean}
     */
    stroked: undefined,


    /**
     * Stroke color.
     * @type {Color}
     */
    strokeColor: Color,


    /**
     * Will art beneath a stroked object be overprinted?
     * @type {boolean}
     */
    strokeOverprint: undefined,


    /**
     * Width of stroke.
     * @type {number}
     */
    strokeWidth: undefined,


    /**
     * Dash lengths (set to {} for a solid line)
     * @type {number}
     */
    strokeDashes: undefined,


    /**
     * The default distance into the dash pattern at which the pattern should be started.
     * @type {number}
     */
    strokeDashOffset: undefined,


    /**
     * Type of line capping.
     * @type {StrokeCap}
     */
    strokeCap: StrokeCap,


    /**
     * Type of joints.
     * @type {StrokeJoin}
     */
    strokeJoin: StrokeJoin,


    /**
     * Whether a join is mitered (pointed) or beveled (squared-off)
     * @type {number}
     */
    strokeMiterLimit: undefined,


    /**
     * Should this be used as a clipping path?
     * @type {boolean}
     */
    clipping: undefined,


    /**
     * Should the even-odd rule be used to determine insideness?
     * @type {boolean}
     */
    evenodd: undefined,


    /**
     * The resolution of the path.
     * @type {number}
     */
    resolution: undefined,


    /**
     * All the selected points in the path.
     * @type {ObjectArray}
     * @readonly
     */
    selectedPathPoints: ObjectArray,


    /**
     * The polarity the path.
     * @type {PolarityValues}
     */
    polarity: PolarityValues,


    /**
     * 
     * @type {PathPoints}
     * @readonly
     */
    pathPoints: PathPoints,



    /**
     * Move the object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return PathItem
     */
    move: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return PathItem
     */
    duplicate: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Set the path using the provided array of path point (x, y) coordinate pairs.
     *
     * @param {any} [pathPoints] Array of (x, y) coordinate pairs for the path points.
     * @return undefined
     */
    setEntirePath: function (pathPoints) {
        
    },


};

