/*
 * A tint swatch.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Tint = {


    /**
     * The color that the tint is based on.
     * @type {Color}
     * @readonly
     */
    baseColor: Color,


    /**
     * The name of the Tint.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The color model.
     * @type {ColorModel}
     * @readonly
     */
    model: ColorModel,


    /**
     * The color space.
     * @type {ColorSpace}
     * @readonly
     */
    space: ColorSpace,


    /**
     * The ink values that create the color, specified as a percentage for each ink. Note: The number of values required and the range depends on the color space. For RGB, specify three values, with each value in the range 0 to 255; for CMYK, specify four values representing C, M, Y, and K, with each value in the range 0 to 100; for LAB, specify three values representing L (Range: 0 to 100), A (Range: -128 to 127), and B (Range: -128 to 127); for mixed ink, specify values for each ink in the ink list, with each value in the range 0 to 100.
     * @type {number}
     * @readonly
     */
    colorValue: undefined,


    /**
     * The color group that a swatch belongs to
     * @type {ColorGroup}
     * @readonly
     */
    parentColorGroup: ColorGroup,


    /**
     * The unique ID of the Tint.
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
     * The parent of the Tint (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Tint within its containing object.
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
     * The percent of the base color. (Range: 0 to 100)
     * @type {number}
     */
    tintValue: undefined,


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
     * Deletes the swatch.
     *
     * @param {Swatch} [replacingWith] The swatch to apply in place of the deleted swatch. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
    },


    /**
     * Duplicates the Tint.
     *
     * @return Tint
     */
    duplicate: function () {
        
    },


    /**
     * Merges the specified swatches with the swatch.
     *
     * @param {varies=any} [withXYZ] The swatches to merge. Can accept: Array of Swatches, Swatch or String.
     * @return Swatch
     */
    merge: function (withXYZ) {
        
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
     * Generates a string which, if executed, will return the Tint.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Tint
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

