/*
 * A cross reference building block object.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var BuildingBlock = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the BuildingBlock (a CrossReferenceFormat).
     * @type {CrossReferenceFormat}
     * @readonly
     */
    parent: CrossReferenceFormat,


    /**
     * The index of the BuildingBlock within its containing object.
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
     * Type of the building block.
     * @type {BuildingBlockTypes}
     */
    blockType: BuildingBlockTypes,


    /**
     * Character style to be applied to the building block.
     * @type {CharacterStyle}
     */
    appliedCharacterStyle: CharacterStyle,


    /**
     * Building block custom text. Currently this is only useful in custom string building block. It is ignored for other types of building blocks.
     * @type {string}
     */
    customText: undefined,


    /**
     * Delimiter character for paragraph text and full paragraph building blocks. It is ignored for other types of building blocks.
     * @type {string}
     */
    appliedDelimiter: undefined,


    /**
     * If true, the source generated for the building block includes the delimiter. It is ignored if no delimiter is specified on the building block.
     * @type {boolean}
     */
    includeDelimiter: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the BuildingBlock.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the BuildingBlock.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return BuildingBlock
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

