/*
 * Tracing options that guide the tracing process.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var TracingOptions = {


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
     * The name of the preset in use. Read-only.
     * @type {string}
     * @readonly
     */
    preset: undefined,


    /**
     * The visualization mode.
     * @type {ViewType}
     */
    viewMode: ViewType,


    /**
     * The tracing mode: color, gray, black and white.
     * @type {TracingModeType}
     */
    tracingMode: TracingModeType,


    /**
     * Color Type used for tracing, TracingLimitedColor or TracingFullColor .
     * @type {TracingColorType}
     */
    tracingColorTypeValue: TracingColorType,


    /**
     * The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name.
     * @type {string}
     */
    palette: undefined,


    /**
     * The color group name used for tracing. Use 'All' or any color group name available in color Palette (library).
     * @type {string}
     */
    colorGroup: undefined,


    /**
     * Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor.
     * @type {Int32}
     */
    tracingColors: Int32,


    /**
     * ColorFidelity when TracingColorTypeValue is TracingFullColor.
     * @type {number}
     */
    colorFidelity: undefined,


    /**
     * The threshold value for a black and white mode tracing.
     * @type {Int32}
     */
    threshold: Int32,


    /**
     * The gray levels for a grayscale mode tracing..
     * @type {Int32}
     */
    grayLevels: Int32,


    /**
     * Path fidelity for tracing.
     * @type {number}
     */
    pathFidelity: undefined,


    /**
     * Corner fidelity for tracing.
     * @type {number}
     */
    cornerFidelity: undefined,


    /**
     * Specifies minimum area of pixels to be vectorized.
     * @type {number}
     */
    noiseFidelity: undefined,


    /**
     * Method for tracing, either abutting or adjoining paths.
     * @type {TracingMethodType}
     */
    tracingMethod: TracingMethodType,


    /**
     * Tracing with fills. Fills, Strokes or both must be on.
     * @type {boolean}
     */
    fills: undefined,


    /**
     * Tracing with strokes. Fills, Strokes or both must be on.
     * @type {boolean}
     */
    strokes: undefined,


    /**
     * Maximum stroke weight (stroke only).
     * @type {number}
     */
    maxStrokeWeight: undefined,


    /**
     * Controls whether to snap curve to lines.
     * @type {boolean}
     */
    snapCurveToLines: undefined,


    /**
     * Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white.
     * @type {boolean}
     */
    ignoreWhite: undefined,



    /**
     * Load options from preset.
     *
     * @param {string} [presetName] The name of the preset.
     * @return boolean
     */
    loadFromPreset: function (presetName) {
        
    },


    /**
     * Store options to a preset kAiVectorizeSuite. Will overwrite an existing (unlocked) preset if names match.
     *
     * @param {string} [presetName] The name of the preset.
     * @return boolean
     */
    storeToPreset: function (presetName) {
        
    },


};

