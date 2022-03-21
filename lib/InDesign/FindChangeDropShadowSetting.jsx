/*
 * Drop shadow settings.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var FindChangeDropShadowSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FindChangeDropShadowSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
     * The distance between the item and its shadow. Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    distance: undefined,


    /**
     * The angle at which the shadow is thrown. Can return: Real (-180 - 180) or NothingEnum enumerator.
     * @type {varies=any}
     */
    angle: undefined,


    /**
     * The shadow mode. Can return: ShadowMode enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    mode: undefined,


    /**
     * The blending mode for the drop shadow effect. Can return: BlendMode enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    blendMode: undefined,


    /**
     * The opacity of the drop shadow (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    opacity: undefined,


    /**
     * The horizontal offset of the drop shadow. Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for ciceros: -78c2.389 to 78c2.389. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    xOffset: undefined,


    /**
     * The vertical offset of the drop shadow. (Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for ciceros: -78c2.389 to 78c2.389). Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    yOffset: undefined,


    /**
     * The radius (in pixels) of the blur applied to the drop shadow. (Range depends on the unit type. For points: 0 to 144; for picas: 0p0 to 12p0; for inches: 0 to 2; for mm: 0 to 50.08; for cm: 0 to 5.08; for ciceros: 0c0 to 11c3.128.). Can return: Unit (0 - 144 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    size: undefined,


    /**
     * The color applied to the drop shadow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    effectColor: undefined,


    /**
     * The amount (as a percentage) of noise applied to the shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    noise: undefined,


    /**
     * The amount (as a percentage of the blur width) to spread the footprint of the drop shadow and reduce the radius of the blur. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
     * @type {varies=any}
     */
    spread: undefined,


    /**
     * If true, uses the global light angle. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    useGlobalLight: undefined,


    /**
     * If true, the layer will knock out the drop shadow. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    knockedOut: undefined,


    /**
     * If true, the drop shadow will take into account other non-shadow effects. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    honorOtherEffects: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FindChangeDropShadowSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FindChangeDropShadowSetting
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

