/*
 * A preset that contains transparency flattener properties.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var FlattenerPreset = {


    /**
     * The unique ID of the FlattenerPreset.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FlattenerPreset (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the FlattenerPreset within its containing object.
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
     * The name of the FlattenerPreset.
     * @type {string}
     */
    name: undefined,


    /**
     * The amount of vector artwork to rasterize during flattening, specified as an enumerator or as a percentage in the range 0 to 100. Can return: FlattenerLevel enumerator or Real (0 - 100).
     * @type {varies=any}
     */
    rasterVectorBalance: undefined,


    /**
     * The resolution for vector objects rasterized as a result of flattening. (Range: 1 to 9600) For information, see raster vector balance.
     * @type {number}
     */
    lineArtAndTextResolution: undefined,


    /**
     * The resolution for gradients rasterized as a result of flattening and for drop shadow and feathers when printed or exported. (Range: 0 to 1200) Note: Resolutions higher than 300 ppi increase file size and printing time but generally do not improve the image quality.
     * @type {number}
     */
    gradientAndMeshResolution: undefined,


    /**
     * If true, ensures that the boundaries between vector and rasterized artwork fall along object paths.
     * @type {boolean}
     */
    clipComplexRegions: undefined,


    /**
     * If true, converts all strokes to outlines and ensures that stroke widths remain constant during flattening. Note: Can cause thin strokes to appear slightly thicker than their original width. Affects all strokes, not only strokes involved in the transparency.
     * @type {boolean}
     */
    convertAllStrokesToOutlines: undefined,


    /**
     * If true, converts all text to outlines and discards all type glyph information on spreads with transparency; ensures that the width of text strokes remains constant during flattening. Note: Can cause small fonts to appear slightly thicker when viewed in Acrobat or printed on low-quality desktop printers, but does not affect type quality when printed on high-resolution printers or imagesetters.
     * @type {boolean}
     */
    convertAllTextToOutlines: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Duplicates the FlattenerPreset.
     *
     * @return FlattenerPreset
     */
    duplicate: function () {
        
    },


    /**
     * Deletes the FlattenerPreset.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Sets the label to the value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @param {string} [value] The value.
     * @return undefined
     */
    insertLabel: function (key, value) {
        
    },


    /**
     * Gets the label value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @return string
     */
    extractLabel: function (key) {
        
    },


    /**
     * Generates a string which, if executed, will return the FlattenerPreset.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FlattenerPreset
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

