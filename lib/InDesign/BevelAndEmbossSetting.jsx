/*
 * Bevel and emboss effect settings.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var BevelAndEmbossSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the BevelAndEmbossSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
     * If true, the bevel or emboss effect is applied.
     * @type {boolean}
     */
    applied: undefined,


    /**
     * The style of bevel or emboss.
     * @type {BevelAndEmbossStyle}
     */
    style: BevelAndEmbossStyle,


    /**
     * The edging technique of the bevel or emboss.
     * @type {BevelAndEmbossTechnique}
     */
    technique: BevelAndEmbossTechnique,


    /**
     * The depth of the bevel or emboss (as a percentage). (Range: 0 to 1000)
     * @type {number}
     */
    depth: undefined,


    /**
     * The direction of the bevel or emboss.
     * @type {BevelAndEmbossDirection}
     */
    direction: BevelAndEmbossDirection,


    /**
     * The size of the bevel or emboss.
     * @type {Measurement Unit (Number or String)=any}
     */
    size: undefined,


    /**
     * The amount (in pixels) of softening.
     * @type {Measurement Unit (Number or String)=any}
     */
    soften: undefined,


    /**
     * The angle of the light source. (Range: -180 to 180)
     * @type {number}
     */
    angle: undefined,


    /**
     * The altitude of the light source. (Range: 0 to 90)
     * @type {number}
     */
    altitude: undefined,


    /**
     * If true, the global light source is used.
     * @type {boolean}
     */
    useGlobalLight: undefined,


    /**
     * The color applied to the highlight portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100.
     * @type {Swatch}
     */
    highlightColor: Swatch,


    /**
     * The blending mode for the highlight portion of the effect.
     * @type {BlendMode}
     */
    highlightBlendMode: BlendMode,


    /**
     * The opacity of the highlight portion of the effect (as a percentage). (Range: 0 to 100)
     * @type {number}
     */
    highlightOpacity: undefined,


    /**
     * The color applied to the shadow portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100.
     * @type {Swatch}
     */
    shadowColor: Swatch,


    /**
     * The blending mode for the shadow portion of the effect.
     * @type {BlendMode}
     */
    shadowBlendMode: BlendMode,


    /**
     * The opacity of the shadow portion of the effect (as a percentage). (Range: 0 to 100)
     * @type {number}
     */
    shadowOpacity: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the BevelAndEmbossSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return BevelAndEmbossSetting
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

