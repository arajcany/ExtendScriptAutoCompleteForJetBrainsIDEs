/*
 * Gradient feather effect settings.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var GradientFeatherSetting = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the GradientFeatherSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
     * If true, the gradient feather effect is applied.
     * @type {boolean}
     */
    applied: undefined,


    /**
     * The type of gradient.
     * @type {GradientType}
     */
    type: GradientType,


    /**
     * The angle of the gradient feather.
     * @type {number}
     */
    angle: undefined,


    /**
     * The length of the axial gradient, or radius of the radial gradient.
     * @type {Measurement Unit (Number or String)=any}
     */
    length: undefined,


    /**
     * The center point (for a radial gradient) or starting point (for a linear gradient) applied to the fill, as page coordinates in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    gradientStart: undefined,


    /**
     * The hilite angle of the radial gradient feather.
     * @type {number}
     */
    hiliteAngle: undefined,


    /**
     * The hilite length of the radial gradient feather.
     * @type {Measurement Unit (Number or String)=any}
     */
    hiliteLength: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the GradientFeatherSetting.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return GradientFeatherSetting
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

