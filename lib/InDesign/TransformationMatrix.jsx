/*
 * A transformation matrix.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TransformationMatrix = {


    /**
     * The name of the TransformationMatrix.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The values of the transformation matrix.
     * @type {number}
     * @readonly
     */
    matrixValues: undefined,


    /**
     * The horizontal scale factor of the transformation matrix.
     * @type {number}
     * @readonly
     */
    horizontalScaleFactor: undefined,


    /**
     * The vertical scale factor of the transformation matrix.
     * @type {number}
     * @readonly
     */
    verticalScaleFactor: undefined,


    /**
     * The shear angle of the transformation matrix.
     * @type {number}
     * @readonly
     */
    clockwiseShearAngle: undefined,


    /**
     * The rotation angle of the transformation matrix.
     * @type {number}
     * @readonly
     */
    counterclockwiseRotationAngle: undefined,


    /**
     * The horizontal translation of the transformation matrix.
     * @type {number}
     * @readonly
     */
    horizontalTranslation: undefined,


    /**
     * The vertical translation of the transformation matrix.
     * @type {number}
     * @readonly
     */
    verticalTranslation: undefined,


    /**
     * The mapping the transformation matrix performs on the unit triangle. Can return: Array of Array of 2 Arrays of 2 Reals.
     * @type {varies=any}
     * @readonly
     */
    matrixMapping: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TransformationMatrix (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the TransformationMatrix within its containing object.
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
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Scale the transformation matrix.
     *
     * @param {number} [horizontallyBy] The horizontal scale factor (Optional)
     * @param {number} [verticallyBy] The vertical scale factor (Optional)
     * @return TransformationMatrix
     */
    scaleMatrix: function (horizontallyBy, verticallyBy) {
        
    },


    /**
     * Shear the transformation matrix.
     *
     * @param {number} [byAngle] The horizontal shear angle (Optional)
     * @param {number} [bySlope] The horizontal shear slope (Optional)
     * @return TransformationMatrix
     */
    shearMatrix: function (byAngle, bySlope) {
        
    },


    /**
     * Rotate the transformation matrix.
     *
     * @param {number} [byAngle] The counterclockwise rotation angle (Optional)
     * @param {number} [byCosine] The cosine of the desired rotation (Optional)
     * @param {number} [bySine] The sine of the desired rotation (Optional)
     * @return TransformationMatrix
     */
    rotateMatrix: function (byAngle, byCosine, bySine) {
        
    },


    /**
     * Translate the transformation matrix.
     *
     * @param {number} [horizontallyBy] The horizontal translation distance (Optional)
     * @param {number} [verticallyBy] The vertical translation distance (Optional)
     * @return TransformationMatrix
     */
    translateMatrix: function (horizontallyBy, verticallyBy) {
        
    },


    /**
     * Multiply the transformation matrix by another.
     *
     * @param {TransformationMatrix} [withMatrix] The right hand matrix factor
     * @return TransformationMatrix
     */
    catenateMatrix: function (withMatrix) {
        
    },


    /**
     * Invert the transformation matrix.
     *
     * @return TransformationMatrix
     */
    invertMatrix: function () {
        
    },


    /**
     * Multiply the point by the matrix.
     *
     * @param {number} [point] The point to transform
     * @return number
     */
    changeCoordinates: function (point) {
        
    },


    /**
     * Generates a string which, if executed, will return the TransformationMatrix.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TransformationMatrix
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

