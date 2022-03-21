/*
 * A mapping object that maps an export type to an export tag.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var StyleExportTagMap = {


    /**
     * The type of export.
     * @type {string}
     * @readonly
     */
    exportType: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the StyleExportTagMap (a CharacterStyle or ParagraphStyle).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the StyleExportTagMap within its containing object.
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
     * The tag to map.
     * @type {string}
     */
    exportTag: undefined,


    /**
     * The class to map.
     * @type {string}
     */
    exportClass: undefined,


    /**
     * The attributes to map.
     * @type {string}
     */
    exportAttributes: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the StyleExportTagMap.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the StyleExportTagMap.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return StyleExportTagMap
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

