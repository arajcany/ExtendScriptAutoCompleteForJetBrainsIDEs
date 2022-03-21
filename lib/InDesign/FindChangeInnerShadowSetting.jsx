/*
 * Inner shadow effect settings.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var FindChangeInnerShadowSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FindChangeInnerShadowSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
     * The horizontal offset of the shadow. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    xOffset: undefined,


    /**
     * The vertical offset of the shadow. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    yOffset: undefined,


    /**
     * If true, the inner shadow effect is applied. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    applied: undefined,


    /**
     * The color applied to the inner shadow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127. . Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    effectColor: undefined,


    /**
     * The blending mode for the inner shadow effect. Can return: BlendMode enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    blendMode: undefined,


    /**
     * The opacity (as a percentage) of the inner shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    opacity: undefined,


    /**
     * The angle at which the inner shadow is thrown. (Range: -360 to 360). Can return: Real (-180 - 180) or NothingEnum enumerator.
     * @type {varies=any}
     */
    angle: undefined,


    /**
     * The distance between the FindChangeInnerShadowSetting and the shadow. . Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    distance: undefined,


    /**
     * If true, the global light angle is used. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    useGlobalLight: undefined,


    /**
     * The amount to choke the inner shadow (as a percentage of shadow size). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    chokeAmount: undefined,


    /**
     * The size of the inner shadow. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    size: undefined,


    /**
     * The amount (as a percentage) of noise to add to the shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    noise: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FindChangeInnerShadowSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FindChangeInnerShadowSetting
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

