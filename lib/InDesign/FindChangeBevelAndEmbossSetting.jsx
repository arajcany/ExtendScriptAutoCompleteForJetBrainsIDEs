/*
 * Bevel and emboss effect settings.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var FindChangeBevelAndEmbossSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FindChangeBevelAndEmbossSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
     * If true, the bevel or emboss effect is applied. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    applied: undefined,


    /**
     * The style of bevel or emboss. Can return: BevelAndEmbossStyle enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    style: undefined,


    /**
     * The edging technique of the bevel or emboss. Can return: BevelAndEmbossTechnique enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    technique: undefined,


    /**
     * The depth of the bevel or emboss (as a percentage). (Range: 0 to 1000). Can return: Real (0 - 1000) or NothingEnum enumerator.
     * @type {varies=any}
     */
    depth: undefined,


    /**
     * The direction of the bevel or emboss. Can return: BevelAndEmbossDirection enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    direction: undefined,


    /**
     * The size of the bevel or emboss. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    size: undefined,


    /**
     * The amount (in pixels) of softening. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    soften: undefined,


    /**
     * The angle of the light source. (Range: -180 to 180). Can return: Real (-180 - 180) or NothingEnum enumerator.
     * @type {varies=any}
     */
    angle: undefined,


    /**
     * The altitude of the light source. (Range: 0 to 90). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    altitude: undefined,


    /**
     * If true, the global light source is used. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    useGlobalLight: undefined,


    /**
     * The color applied to the highlight portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    highlightColor: undefined,


    /**
     * The blending mode for the highlight portion of the effect. Can return: BlendMode enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    highlightBlendMode: undefined,


    /**
     * The opacity of the highlight portion of the effect (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    highlightOpacity: undefined,


    /**
     * The color applied to the shadow portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    shadowColor: undefined,


    /**
     * The blending mode for the shadow portion of the effect. Can return: BlendMode enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    shadowBlendMode: undefined,


    /**
     * The opacity of the shadow portion of the effect (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    shadowOpacity: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FindChangeBevelAndEmbossSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FindChangeBevelAndEmbossSetting
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

