/*
 * Preflight book options.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PreflightBookOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PreflightBookOption (a Application or Book).
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
     * The pages or documents to preflight, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PreflightScopeOptions enumerator or String.
     * @type {varies=any}
     */
    preflightScope: undefined,


    /**
     * Which layers to preflight.
     * @type {PreflightLayerOptions}
     */
    preflightWhichLayers: PreflightLayerOptions,


    /**
     * If true, include objects on pasteboard when preflighting.
     * @type {boolean}
     */
    preflightIncludeObjectsOnPasteboard: undefined,


    /**
     * If true, include objects that do not print when preflighting.
     * @type {boolean}
     */
    preflightIncludeNonprintingObjects: undefined,


    /**
     * The policy for preflighting applied when opening a document or book, whether to use embedded profile or the another profile when the preflight is turned on.
     * @type {PreflightProfileOptions}
     */
    preflightProfilePolicy: PreflightProfileOptions,


    /**
     * The working preflight profile. Can return: PreflightProfile or String.
     * @type {varies=any}
     */
    preflightWorkingProfile: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the PreflightBookOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PreflightBookOption
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

