/*
 * Clipping path settings.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var ClippingPathSettings = {


    /**
     * A list of the clipping paths stored in the graphic.
     * @type {string}
     * @readonly
     */
    photoshopPathNames: undefined,


    /**
     * A list of the alpha channels stored in the graphic.
     * @type {string}
     * @readonly
     */
    alphaChannelPathNames: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ClippingPathSettings (a Image, EPS, WMF, PICT, PDF or ImportedPage).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * A collection of paths.
     * @type {Paths}
     * @readonly
     */
    paths: Paths,


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
     * The clipping path type.
     * @type {ClippingPathType}
     */
    clippingType: ClippingPathType,


    /**
     * If true, inverts the clipping path.
     * @type {boolean}
     */
    invertPath: undefined,


    /**
     * If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges.
     * @type {boolean}
     */
    includeInsideEdges: undefined,


    /**
     * If true, truncates the clipping path at the edge of the frame containing the graphic. Note: Valid only when clipping type is alpha channel or detect edges.
     * @type {boolean}
     */
    restrictToFrame: undefined,


    /**
     * If true, uses the high-resolution version of the graphic to create the clipping path. If false, calculates the clipping path based on screen-display resolution. Note: Valid only when clipping type is detect edges.
     * @type {boolean}
     */
    useHighResolutionImage: undefined,


    /**
     * The lowest value (darkest) pixel to allow in the image. All pixels in the image whose values are greater than (lighter than) the threshold value are clipped (obscured). (Range: 0 to 255) Note: Valid only when clipping type is detect edges or alpha channel.
     * @type {number}
     */
    threshold: undefined,


    /**
     * Specifies how similar a pixel's intensity value can be to the threshold value before the pixel is obscured by the clipping path. (Range: 0 to 10) Note: Valid only when clipping type is detect edges or alpha channel.
     * @type {number}
     */
    tolerance: undefined,


    /**
     * Shrinks the area enclosed by the clipping path by the specified amount. (Range depends on the unit. For points: -10000 to 10000; picas: -833p4 to 833p4; inches: -138.8889 to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 352.7778; ciceros: -781c11.889 to 781c11.889)
     * @type {Measurement Unit (Number or String)=any}
     */
    insetFrame: undefined,


    /**
     * The name of the Photoshop path or alpha channel to use as a clipping path.
     * @type {string}
     */
    appliedPathName: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Converts the clipping path to a frame.
     *
     * @return PageItem
     */
    convertToFrame: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the ClippingPathSettings.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ClippingPathSettings
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

