/*
 * Outer glow effect settings.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var FindChangeOuterGlowSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FindChangeOuterGlowSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
     * If true, the outer glow effect is applied. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    applied: undefined,


    /**
     * The blending mode for the outer glow effect. Can return: BlendMode enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    blendMode: undefined,


    /**
     * The opacity of the outer glow (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    opacity: undefined,


    /**
     * The amount (as a percentage) of noise applied to the outer glow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    noise: undefined,


    /**
     * The color applied to the outer glow, specified as a swatch (color, gradient, tint, or mixed ink), or an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    effectColor: undefined,


    /**
     * The technique applied to the outer glow. Can return: GlowTechnique enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    technique: undefined,


    /**
     * The amount of spread (as a percentage of the outer glow size). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    spread: undefined,


    /**
     * The size of the outer glow. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    size: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FindChangeOuterGlowSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FindChangeOuterGlowSetting
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

