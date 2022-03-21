/*
 * Options for applying layout attributes to any page item.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TransformAttributeOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TransformAttributeOption (a ObjectStyle).
     * @type {ObjectStyle}
     * @readonly
     */
    parent: ObjectStyle,


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
     * The left position of the object, defined by the object style.
     * @type {Measurement Unit (Number or String)=any}
     */
    transformAttrX: undefined,


    /**
     * The top position of the object, defined by the object style.
     * @type {Measurement Unit (Number or String)=any}
     */
    transformAttrY: undefined,


    /**
     * The width of the object, defined by the object style.
     * @type {Measurement Unit (Number or String)=any}
     */
    transformAttrWidth: undefined,


    /**
     * The height of the object, defined by the object style.
     * @type {Measurement Unit (Number or String)=any}
     */
    transformAttrHeight: undefined,


    /**
     * The reference point to be used while setting the X attribute of object style.
     * @type {TransformPositionReference}
     */
    transformAttrLeftReference: TransformPositionReference,


    /**
     * The reference point to be used while setting the Y attribute of object style.
     * @type {TransformPositionReference}
     */
    transformAttrTopReference: TransformPositionReference,


    /**
     * Option to specify the achor point to be used by the style for anchoring the object while applying the position.
     * @type {AnchorPoint}
     */
    transformAttrRefAnchorPoint: AnchorPoint,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the TransformAttributeOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TransformAttributeOption
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

