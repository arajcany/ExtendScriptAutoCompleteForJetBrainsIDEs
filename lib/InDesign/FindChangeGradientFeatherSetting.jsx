/*
 * Gradient feather effect settings.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var FindChangeGradientFeatherSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FindChangeGradientFeatherSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * A collection of opacity gradient stops.
     * @type {OpacityGradientStops}
     * @readonly
     */
    opacityGradientStops: OpacityGradientStops,


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
     * If true, the gradient feather effect is applied. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    applied: undefined,


    /**
     * The type of gradient. Can return: GradientType enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    type: undefined,


    /**
     * The angle of the gradient feather. Can return: Real (-180 - 180) or NothingEnum enumerator.
     * @type {varies=any}
     */
    angle: undefined,


    /**
     * The length of the axial gradient, or radius of the radial gradient. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    length: undefined,


    /**
     * The center point (for a radial gradient) or starting point (for a linear gradient) applied to the fill, as page coordinates in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientStart: undefined,


    /**
     * The hilite angle of the radial gradient feather. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    hiliteAngle: undefined,


    /**
     * The hilite length of the radial gradient feather. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    hiliteLength: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FindChangeGradientFeatherSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FindChangeGradientFeatherSetting
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

