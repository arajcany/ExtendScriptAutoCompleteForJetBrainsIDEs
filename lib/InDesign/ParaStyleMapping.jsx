/*
 * A para style mapping.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var ParaStyleMapping = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ParaStyleMapping (a Application, Document, Story or XmlStory).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the ParaStyleMapping within its containing object.
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
     * The source style name property.
     * @type {string}
     */
    sourceStyleName: undefined,


    /**
     * The destination style name property.
     * @type {string}
     */
    destinationStyleName: undefined,


    /**
     * The type of the mapping rule.
     * @type {MapType}
     */
    mappingRuleType: MapType,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * deletes a style mapping.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the ParaStyleMapping.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ParaStyleMapping
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
