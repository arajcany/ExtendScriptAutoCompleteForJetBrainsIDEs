/*
 * A page item object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var PageItem = {


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
     * The value of the Adobe URL tag assigned to this artwork item.
     * @type {string}
     */
    URL: undefined,


    /**
     * The note assigned to this artwork item.
     * @type {string}
     */
    note: undefined,


    /**
     * The layer to which this artwork belongs.
     * @type {Layer}
     * @readonly
     */
    layer: Layer,


    /**
     * Is this artwork item locked?
     * @type {boolean}
     */
    locked: undefined,


    /**
     * Is this artwork item hidden?
     * @type {boolean}
     */
    hidden: undefined,


    /**
     * Is this artwork item selected?
     * @type {boolean}
     */
    selected: undefined,


    /**
     * The position of the top left corner of the art item.
     * @type {Point}
     */
    position: Point,


    /**
     * The width of the art item.
     * @type {number}
     */
    width: undefined,


    /**
     * The height of the art item.
     * @type {number}
     */
    height: undefined,


    /**
     * The bounds of the artwork excluding stroke width.
     * @type {Rect}
     * @readonly
     */
    geometricBounds: Rect,


    /**
     * The visible bounds of the artwork including stroke width.
     * @type {Rect}
     * @readonly
     */
    visibleBounds: Rect,


    /**
     * The bounds of the artwork including stroke width and controls.
     * @type {Rect}
     * @readonly
     */
    controlBounds: Rect,


    /**
     * The item's name.
     * @type {string}
     */
    name: undefined,


    /**
     * The item's unique identifier.
     * @type {string}
     * @readonly
     */
    uuid: undefined,


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
     * Is the artwork isolated.
     * @type {boolean}
     */
    isIsolated: undefined,


    /**
     * Is the artwork used to create a knockout.
     * @type {KnockoutState}
     */
    artworkKnockout: KnockoutState,


    /**
     * The drawing order of the art within it's group or layer.
     * @type {Int32}
     * @readonly
     */
    zOrderPosition: Int32,


    /**
     * The absolute drawing order of the layer.
     * @type {Int32}
     * @readonly
     */
    absoluteZOrderPosition: Int32,


    /**
     * Can the art item be modified.
     * @type {boolean}
     * @readonly
     */
    editable: undefined,


    /**
     * Is the art item sliced (default: false)
     * @type {boolean}
     */
    sliced: undefined,


    /**
     * The top position of the art item.
     * @type {number}
     */
    top: undefined,


    /**
     * The left position of the art item.
     * @type {number}
     */
    left: undefined,


    /**
     * The visibility variable bound to this page item.
     * @type {any}
     */
    visibilityVariable: undefined,


    /**
     * The collection of tags associated with this page item.
     * @type {Tags}
     * @readonly
     */
    tags: Tags,


    /**
     * Is this artwork item aligned to Pixel Grid?
     * @type {boolean}
     */
    pixelAligned: undefined,


    /**
     * Wrap text frame objects around this object (text frame must be above the object)
     * @type {boolean}
     */
    wrapped: undefined,


    /**
     * Use this offset when wrapping text around this object.
     * @type {number}
     */
    wrapOffset: undefined,


    /**
     * Should the text frame object be wrapped inside this object?
     * @type {boolean}
     */
    wrapInside: undefined,



    /**
     * Move the object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return PageItem
     */
    move: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return PageItem
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
     * Reposition art object(s)
     *
     * @param {number} [deltaX] Horizontal transformation. (default: 0.0)
     * @param {number} [deltaY] Vertical transformation. (default: 0.0)
     * @param {boolean} [transformObjects] Are art object positions and orientations affected? (default: true)
     * @param {boolean} [transformFillPatterns] Are the fill patterns assigned to paths to be transformed? (default: true)
     * @param {boolean} [transformFillGradients] Are the fill gradients assigned to paths to be transformed? (default: true)
     * @param {boolean} [transformStrokePattern] Are the stroke patterns assigned to paths to be transformed? (default: true)
     * @return undefined
     */
    translate: function (deltaX, deltaY, transformObjects, transformFillPatterns, transformFillGradients, transformStrokePattern) {
        
    },


    /**
     * Scale art object(s)
     *
     * @param {number} [scaleX] Horizontal scaling factor expressed as a percentage (100 = 100%)
     * @param {number} [scaleY] Vertical scaling factor expressed as a percentage (100 = 100%)
     * @param {boolean} [changePositions] Are art object positions and orientations effected? (default: true)
     * @param {boolean} [changeFillPatterns] Are the fill patterns assigned to paths to be transformed? (default: true)
     * @param {boolean} [changeFillGradients] Are the fill gradients assigned to paths to be transformed? (default: true)
     * @param {boolean} [changeStrokePattern] Are the stroke patterns assigned to paths to be transformed? (default: true)
     * @param {number} [changeLineWidths] The amount line widths are to be scaled (expressed as a percentage) (default: 100.0)
     * @param {Transformation} [scaleAbout] The point on the art item's bounding box to which the scale is applied. (default: Transformation.CENTER)
     * @return undefined
     */
    resize: function (scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout) {
        
    },


    /**
     * Rotate art object(s)
     *
     * @param {number} [angle] Angle of rotation (in degrees). Rotation is performed counter-clock wise.
     * @param {boolean} [changePositions] Are art object positions and orientations effected? (default: true)
     * @param {boolean} [changeFillPatterns] Are the fill patterns assigned to paths to be transformed? (default: true)
     * @param {boolean} [changeFillGradients] Are the fill gradients assigned to paths to be transformed? (default: true)
     * @param {boolean} [changeStrokePattern] Are the stroke patterns assigned to paths to be transformed? (default: true)
     * @param {Transformation} [rotateAbout] The point on the art item's bounding box to which the rotation is applied. (default: Transformation.CENTER)
     * @return undefined
     */
    rotate: function (angle, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, rotateAbout) {
        
    },


    /**
     * Transform art object(s) using a transformation matrix.
     *
     * @param {Matrix} [transformationMatrix] The transformation matrix to be applied to the objects.
     * @param {boolean} [changePositions] Are art object positions and orientations effected? (default: true)
     * @param {boolean} [changeFillPatterns] Are the fill patterns assigned to paths to be transformed? (default: true)
     * @param {boolean} [changeFillGradients] Are the fill gradients assigned to paths to be transformed? (default: true)
     * @param {boolean} [changeStrokePattern] Are the stroke patterns assigned to paths to be transformed? (default: true)
     * @param {number} [changeLineWidths] The amount line widths are to be scaled (expressed as a percentage) (default: 100.0)
     * @param {Transformation} [transformAbout] The point on the art item's bounding box to which scale and rotation operations apply. (default: Transformation.CENTER)
     * @return undefined
     */
    transform: function (transformationMatrix, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, transformAbout) {
        
    },


    /**
     * Place art object(s)in perspective grid at spedified perspective plane and coordinate.
     *
     * @param {number} [positionX] Position towards X direction of specified or active perspective grid plane.
     * @param {number} [positionY] Position towards Y direction of specified or active perspective grid plane.
     * @param {PerspectiveGridPlaneType} [perspectiveGridPlane] Type of perspective grid plane.
     * @return undefined
     */
    bringInPerspective: function (positionX, positionY, perspectiveGridPlane) {
        
    },


    /**
     * Arranges the art relative to other art in the group or layer.
     *
     * @param {ZOrderMethod} [zOrderCmd] How to arrange the art.
     * @return undefined
     */
    zOrder: function (zOrderCmd) {
        
    },


    /**
     * Apply effect to selected artItem.
     *
     * @param {string} [liveEffectXML]
     * @return undefined
     */
    applyEffect: function (liveEffectXML) {
        
    },


    /**
     * Sends the script message to the required plugin.
     *
     * @param {string} [pluginName] Plugin to which message needs to be sent.
     * @param {string} [messageSelector] Functionality that is to be executed.
     * @param {string} [inputString] Pass any data encoded in a string.
     * @return string
     */
    sendScriptMessage: function (pluginName, messageSelector, inputString) {
        
    },


};

