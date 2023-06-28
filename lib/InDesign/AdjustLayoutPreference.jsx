/*
 * Adjust layout preferences.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var AdjustLayoutPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the AdjustLayoutPreference (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


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
     * If true, adjust layout is enabled.
     * @type {boolean}
     */
    enableAdjustLayout: undefined,


    /**
     * If true, allows locked objects or objects on locked layers to be adjusted.
     * @type {boolean}
     */
    allowLockedObjectsToAdjust: undefined,


    /**
     * If true, allows font sizes and leading to adjust.
     * @type {boolean}
     */
    allowFontSizeAndLeadingAdjustment: undefined,


    /**
     * If true, imposes the font size restriction during the adjustment.
     * @type {boolean}
     */
    imposeFontSizeRestriction: undefined,


    /**
     * minimum font size after adjustment in points
     * @type {number}
     */
    minimumFontSize: undefined,


    /**
     * maximum font size after adjustment in points
     * @type {number}
     */
    maximumFontSize: undefined,


    /**
     * If true, margins are adjusted automatically if page size is changed.
     * @type {boolean}
     */
    enableAutoAdjustMargins: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the AdjustLayoutPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return AdjustLayoutPreference
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

