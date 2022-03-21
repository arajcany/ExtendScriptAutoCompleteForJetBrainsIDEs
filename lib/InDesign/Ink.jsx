/*
 * An ink.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Ink = {


    /**
     * If true, the ink is a process ink.
     * @type {boolean}
     * @readonly
     */
    isProcessInk: undefined,


    /**
     * The name of the Ink.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The solidity value of the ink. (Range: 0.0 to 1.0)
     * @type {number}
     * @readonly
     */
    solidity: undefined,


    /**
     * The unique ID of the Ink.
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
     * The parent of the Ink (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the Ink within its containing object.
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
     * The ink object to map this ink to.
     * @type {string}
     */
    aliasInkName: undefined,


    /**
     * The angle of the ink. (Range: 0 to 360)
     * @type {number}
     */
    angle: undefined,


    /**
     * Converts spot inks to process inks.
     * @type {boolean}
     */
    convertToProcess: undefined,


    /**
     * The frequency of the ink. (Range: 1 to 500)
     * @type {number}
     */
    frequency: undefined,


    /**
     * The neutral density of the ink. (Range: 0.001 to 10.0)
     * @type {number}
     */
    neutralDensity: undefined,


    /**
     * If true, prints the ink. Only valid when printing separations.
     * @type {boolean}
     */
    printInk: undefined,


    /**
     * The place of the ink in the trapping sequence.
     * @type {number}
     */
    trapOrder: undefined,


    /**
     * The trapping type of the ink.
     * @type {InkTypes}
     */
    inkType: InkTypes,


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
     * Generates a string which, if executed, will return the Ink.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Ink
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

