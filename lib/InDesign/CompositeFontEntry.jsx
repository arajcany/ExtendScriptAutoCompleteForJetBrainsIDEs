/*
 * A composite font entry.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var CompositeFontEntry = {


    /**
     * If true, the CompositeFontEntry is locked.
     * @type {boolean}
     * @readonly
     */
    locked: undefined,


    /**
     * The unique ID of the CompositeFontEntry.
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
     * The parent of the CompositeFontEntry (a CompositeFont).
     * @type {CompositeFont}
     * @readonly
     */
    parent: CompositeFont,


    /**
     * The index of the CompositeFontEntry within its containing object.
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
     * The name of the CompositeFontEntry.
     * @type {string}
     */
    name: undefined,


    /**
     * The font applied to the CompositeFontEntry, specified as either a font object or the name of font family. Can return: Font or String.
     * @type {varies=any}
     */
    appliedFont: undefined,


    /**
     * The name of the font style.
     * @type {string}
     */
    fontStyle: undefined,


    /**
     * The size of the entry relative to the base entry. Note: The base entry cannot be modified.
     * @type {number}
     */
    relativeSize: undefined,


    /**
     * The horizontal scaling applied to the CompositeFontEntry.
     * @type {number}
     */
    horizontalScale: undefined,


    /**
     * The vertical scaling applied to the CompositeFontEntry.
     * @type {number}
     */
    verticalScale: undefined,


    /**
     * The characters that the set affects.
     * @type {string}
     */
    customCharacters: undefined,


    /**
     * If true, scales characters from the center.
     * @type {boolean}
     */
    scaleOption: undefined,


    /**
     * The amount of baseline shift.
     * @type {number}
     */
    baselineShift: undefined,


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
     * Deletes the CompositeFontEntry.
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
     * Generates a string which, if executed, will return the CompositeFontEntry.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return CompositeFontEntry
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

