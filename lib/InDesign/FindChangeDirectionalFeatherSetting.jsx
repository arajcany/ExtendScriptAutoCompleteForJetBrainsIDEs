/*
 * Directional feather effect settings.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var FindChangeDirectionalFeatherSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FindChangeDirectionalFeatherSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
     * If true, the directional feather effect is applied. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    applied: undefined,


    /**
     * The feather width (in pixels) on the left side of the FindChangeDirectionalFeatherSetting. Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftWidth: undefined,


    /**
     * The feather width (in pixels) on the right side of the FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightWidth: undefined,


    /**
     * The feather width (in pixels) on the top side of the object FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    topWidth: undefined,


    /**
     * The feather width (in pixels) on the bottom side of the object FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomWidth: undefined,


    /**
     * The amount to choke the directional feather (as a percentage of the feather width). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    chokeAmount: undefined,


    /**
     * The angle of the feather. (Range: 180 to -180). Can return: Real (-180 - 180) or NothingEnum enumerator.
     * @type {varies=any}
     */
    angle: undefined,


    /**
     * The shape-following algorithm applied to the feather. Can return: FollowShapeModeOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    followShapeMode: undefined,


    /**
     * The amount of noise (as a percentage) applied to the feather region. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    noise: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FindChangeDirectionalFeatherSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FindChangeDirectionalFeatherSetting
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

