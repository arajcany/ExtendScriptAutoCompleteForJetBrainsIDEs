/*
 * Options for fitting placed or pasted content in a frame.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var FrameFittingOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FrameFittingOption (a ObjectStyle, Oval, Rectangle, Polygon, Application or Document).
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
     * If true, the last saved fitting options will be applied to the contents of a frame when it is resized.
     * @type {boolean}
     */
    autoFit: undefined,


    /**
     * The amount in measurement units to crop the left edge of a graphic.
     * @type {Measurement Unit (Number or String)=any}
     */
    leftCrop: Measurement Unit (Number or String)=any,


    /**
     * The amount in measurement units to crop the top edge of a graphic.
     * @type {Measurement Unit (Number or String)=any}
     */
    topCrop: Measurement Unit (Number or String)=any,


    /**
     * The amount in measurement units to crop the right edge of a graphic.
     * @type {Measurement Unit (Number or String)=any}
     */
    rightCrop: Measurement Unit (Number or String)=any,


    /**
     * The amount in measurement units to crop the bottom edge of a graphic.
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomCrop: Measurement Unit (Number or String)=any,


    /**
     * The frame fitting option to apply to placed or pasted content if the frame is empty. Can be applied to a frame, object style, or document or to the application.
     * @type {EmptyFrameFittingOptions}
     */
    fittingOnEmptyFrame: EmptyFrameFittingOptions,


    /**
     * The point with which to align the image empty when fitting in a frame. For information, see frame fitting options.
     * @type {AnchorPoint}
     */
    fittingAlignment: AnchorPoint,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FrameFittingOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FrameFittingOption
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

