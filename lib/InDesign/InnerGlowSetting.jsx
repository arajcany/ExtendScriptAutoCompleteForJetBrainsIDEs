/*
 * Inner glow effect settings.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var InnerGlowSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the InnerGlowSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
     * If true, the inner glow effect is applied.
     * @type {boolean}
     */
    applied: undefined,


    /**
     * The blending mode for the inner glow effect.
     * @type {BlendMode}
     */
    blendMode: BlendMode,


    /**
     * The opacity of the inner glow (as a percentage). (Range: 0 to 100)
     * @type {number}
     */
    opacity: undefined,


    /**
     * The amount (as a percentage) of noise applied to the inner glow. (Range: 0 to 100)
     * @type {number}
     */
    noise: undefined,


    /**
     * The color applied to the inner glow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127.
     * @type {Swatch}
     */
    effectColor: Swatch,


    /**
     * The technique used for the inner glow.
     * @type {GlowTechnique}
     */
    technique: GlowTechnique,


    /**
     * The amount of spread (as a percentage of the inner glow size). (Range: 0 to 100)
     * @type {number}
     */
    spread: undefined,


    /**
     * The size of the inner glow.
     * @type {Measurement Unit (Number or String)=any}
     */
    size: undefined,


    /**
     * The light source of the inner glow effect.
     * @type {InnerGlowSource}
     */
    source: InnerGlowSource,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the InnerGlowSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return InnerGlowSetting
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

