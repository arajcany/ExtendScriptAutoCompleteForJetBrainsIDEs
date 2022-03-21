/*
 * Feather effect settings.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var FeatherSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FeatherSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
     * The feather mode.
     * @type {FeatherMode}
     */
    mode: FeatherMode,


    /**
     * The feather width. (Range depends on the unit type. For points: 0 to 1000; for picas: 0 to 83p4; for inches: 0 to 13.8889; for mm: 0 to 352.778; for cm: 0 to 35.277; for ciceros: 0 to 78c2.389.)
     * @type {Measurement Unit (Number or String)=any}
     */
    width: undefined,


    /**
     * The corner effect applied to the feather.
     * @type {FeatherCornerType}
     */
    cornerType: FeatherCornerType,


    /**
     * The amount (as a percentage) of noise applied to the feather. (Range: 0 to 100)
     * @type {number}
     */
    noise: undefined,


    /**
     * The amount to choke the feather (as a percentage of the feather width). (Range: 0 to 100)
     * @type {number}
     */
    chokeAmount: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FeatherSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FeatherSetting
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

