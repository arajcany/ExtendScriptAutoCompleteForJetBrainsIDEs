/*
 * Directional feather effect settings.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var DirectionalFeatherSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the DirectionalFeatherSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
     * If true, the directional feather effect is applied.
     * @type {boolean}
     */
    applied: undefined,


    /**
     * The feather width (in pixels) on the left side of the DirectionalFeatherSetting.
     * @type {Measurement Unit (Number or String)=any}
     */
    leftWidth: undefined,


    /**
     * The feather width (in pixels) on the right side of the DirectionalFeatherSetting. (Range: .2 to 250)
     * @type {Measurement Unit (Number or String)=any}
     */
    rightWidth: undefined,


    /**
     * The feather width (in pixels) on the top side of the object DirectionalFeatherSetting. (Range: .2 to 250)
     * @type {Measurement Unit (Number or String)=any}
     */
    topWidth: undefined,


    /**
     * The feather width (in pixels) on the bottom side of the object DirectionalFeatherSetting. (Range: .2 to 250)
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomWidth: undefined,


    /**
     * The amount to choke the directional feather (as a percentage of the feather width). (Range: 0 to 100)
     * @type {number}
     */
    chokeAmount: undefined,


    /**
     * The angle of the feather. (Range: 180 to -180)
     * @type {number}
     */
    angle: undefined,


    /**
     * The shape-following algorithm applied to the feather.
     * @type {FollowShapeModeOptions}
     */
    followShapeMode: FollowShapeModeOptions,


    /**
     * The amount of noise (as a percentage) applied to the feather region. (Range: 0 to 100)
     * @type {number}
     */
    noise: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the DirectionalFeatherSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DirectionalFeatherSetting
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

