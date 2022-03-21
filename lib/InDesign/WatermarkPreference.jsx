/*
 * Watermark preference
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var WatermarkPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the WatermarkPreference (a Document or Application).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


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
     * Watermark visibility for a document
     * @type {boolean}
     */
    watermarkVisibility: undefined,


    /**
     * Watermark do print for a document
     * @type {boolean}
     */
    watermarkDoPrint: undefined,


    /**
     * Watermark draw in back for a document
     * @type {boolean}
     */
    watermarkDrawInBack: undefined,


    /**
     * Watermark text for a document
     * @type {string}
     */
    watermarkText: undefined,


    /**
     * Watermark font family display name
     * @type {string}
     */
    watermarkFontFamily: undefined,


    /**
     * Watermark font style name
     * @type {string}
     */
    watermarkFontStyle: undefined,


    /**
     * Watermark font point size for a document
     * @type {number}
     */
    watermarkFontPointSize: undefined,


    /**
     * Watermark font color for a document. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
     * @type {varies=any}
     */
    watermarkFontColor: undefined,


    /**
     * Watermark opacity (as a percentage). (Range: 0 to 100)
     * @type {number}
     */
    watermarkOpacity: undefined,


    /**
     * Watermark rotation for a document
     * @type {number}
     */
    watermarkRotation: undefined,


    /**
     * Watermark horizontal position enum for a document
     * @type {WatermarkHorizontalPositionEnum}
     */
    watermarkHorizontalPosition: WatermarkHorizontalPositionEnum,


    /**
     * Watermark horizontal offset for a document
     * @type {Measurement Unit (Number or String)=any}
     */
    watermarkHorizontalOffset: Measurement Unit (Number or String)=any,


    /**
     * Watermark vertical position enum for a document
     * @type {WatermarkVerticalPositionEnum}
     */
    watermarkVerticalPosition: WatermarkVerticalPositionEnum,


    /**
     * Watermark vertical offset for a document
     * @type {Measurement Unit (Number or String)=any}
     */
    watermarkVerticalOffset: Measurement Unit (Number or String)=any,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the WatermarkPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return WatermarkPreference
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

