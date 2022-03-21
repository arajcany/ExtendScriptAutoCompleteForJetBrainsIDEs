/*
 * Anchored object default settings.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var AnchoredObjectDefault = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the AnchoredObjectDefault (a Application or Document).
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
     * The initial frame type of a new anchored object.
     * @type {ContentType}
     */
    anchorContent: ContentType,


    /**
     * The initial height of a new anchored object.
     * @type {Measurement Unit (Number or String)=any}
     */
    initialAnchorHeight: Measurement Unit (Number or String)=any,


    /**
     * The initial width of a new anchored object.
     * @type {Measurement Unit (Number or String)=any}
     */
    initialAnchorWidth: Measurement Unit (Number or String)=any,


    /**
     * The initial paragraph style of a new anchored object. Note: Valid when anchor content is text.
     * @type {ParagraphStyle}
     */
    anchoredParagraphStyle: ParagraphStyle,


    /**
     * The initial object style of a new anchored object.
     * @type {ObjectStyle}
     */
    anchoredObjectStyle: ObjectStyle,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the AnchoredObjectDefault.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return AnchoredObjectDefault
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

