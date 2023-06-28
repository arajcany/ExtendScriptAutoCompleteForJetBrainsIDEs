/*
 * A text path item.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var TextPath = {


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
     * The position of the top left corner of the text path.
     * @type {Point}
     */
    position: Point,


    /**
     * The width of the text path.
     * @type {number}
     */
    width: undefined,


    /**
     * The height of the text path.
     * @type {number}
     */
    height: undefined,


    /**
     * The mode used when compositing an object.
     * @type {BlendModes}
     */
    blendingMode: BlendModes,


    /**
     * The object's opacity (between 0.0 and 100.0)
     * @type {number}
     */
    opacity: undefined,


    /**
     * Can the text path be modified.
     * @type {boolean}
     * @readonly
     */
    editable: undefined,


    /**
     * The top position of the text path.
     * @type {number}
     */
    top: undefined,


    /**
     * The left position of the text path.
     * @type {number}
     */
    left: undefined,


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
     * Note assigned to the path.
     * @type {string}
     */
    note: undefined,


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
     * Set the path using the provided array of anchor points.
     *
     * @param {any} [pathPoints] Array of anchor values for the path points.
     * @return undefined
     */
    setEntirePath: function (pathPoints) {
        
    },


};

