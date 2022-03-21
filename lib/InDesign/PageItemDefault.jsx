/*
 * Default page item formatting properties.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var PageItemDefault = {


    /**
     * Transparency settings.
     * @type {TransparencySetting}
     * @readonly
     */
    transparencySettings: TransparencySetting,


    /**
     * Transparency settings for the stroke.
     * @type {StrokeTransparencySetting}
     * @readonly
     */
    strokeTransparencySettings: StrokeTransparencySetting,


    /**
     * Transparency settings for the fill applied to the PageItemDefault.
     * @type {FillTransparencySetting}
     * @readonly
     */
    fillTransparencySettings: FillTransparencySetting,


    /**
     * Transparency settings for the content of the PageItemDefault.
     * @type {ContentTransparencySetting}
     * @readonly
     */
    contentTransparencySettings: ContentTransparencySetting,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PageItemDefault (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


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
     * The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
     * @type {CornerOptions}
     */
    topLeftCornerOption: CornerOptions,


    /**
     * The shape to apply to the top right corner of rectangular shapes
     * @type {CornerOptions}
     */
    topRightCornerOption: CornerOptions,


    /**
     * The shape to apply to the bottom left corner of rectangular shapes.
     * @type {CornerOptions}
     */
    bottomLeftCornerOption: CornerOptions,


    /**
     * The shape to apply to the bottom right corner of rectangular shapes.
     * @type {CornerOptions}
     */
    bottomRightCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    topLeftCornerRadius: undefined,


    /**
     * The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    topRightCornerRadius: undefined,


    /**
     * The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomLeftCornerRadius: undefined,


    /**
     * The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomRightCornerRadius: undefined,


    /**
     * The default graphic object style applied to the PageItemDefault. Can also accept: String.
     * @type {ObjectStyle}
     */
    appliedGraphicObjectStyle: ObjectStyle,


    /**
     * The default text object style applied to the PageItemDefault. Can also accept: String.
     * @type {ObjectStyle}
     */
    appliedTextObjectStyle: ObjectStyle,


    /**
     * The default frame grid object style applied to the PageItemDefault. Can also accept: String.
     * @type {ObjectStyle}
     */
    appliedGridObjectStyle: ObjectStyle,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItemDefault. . Can also accept: String.
     * @type {Swatch}
     */
    fillColor: Swatch,


    /**
     * The percent of tint to use in the PageItemDefault's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    fillTint: undefined,


    /**
     * The weight (in points) to apply to the PageItemDefault's stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    strokeWeight: undefined,


    /**
     * The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join.
     * @type {number}
     */
    miterLimit: 4,


    /**
     * The end shape of an open path.
     * @type {EndCap}
     */
    endCap: EndCap,


    /**
     * The corner join applied to the PageItemDefault.
     * @type {EndJoin}
     */
    endJoin: EndJoin,


    /**
     * The name of the stroke style to apply. Can also accept: String.
     * @type {StrokeStyle}
     */
    strokeType: StrokeStyle,


    /**
     * The arrowhead applied to the start of the path.
     * @type {ArrowHead}
     */
    leftLineEnd: ArrowHead,


    /**
     * The arrowhead applied to the end of the path.
     * @type {ArrowHead}
     */
    rightLineEnd: ArrowHead,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItemDefault. Can also accept: String.
     * @type {Swatch}
     */
    strokeColor: Swatch,


    /**
     * The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    strokeTint: undefined,


    /**
     * The angle of a linear gradient applied to the fill of the PageItemDefault. (Range: -180 to 180)
     * @type {number}
     */
    gradientFillAngle: undefined,


    /**
     * The angle of a linear gradient applied to the stroke of the PageItemDefault. (Range: -180 to 180)
     * @type {number}
     */
    gradientStrokeAngle: undefined,


    /**
     * If true, the PageItemDefault's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
     * @type {boolean}
     */
    overprintStroke: undefined,


    /**
     * If true, the PageItemDefault's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
     * @type {boolean}
     */
    overprintFill: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type.
     * @type {Swatch}
     */
    gapColor: Swatch,


    /**
     * The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    gapTint: undefined,


    /**
     * If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors.
     * @type {boolean}
     */
    overprintGap: undefined,


    /**
     * The stroke alignment applied to the PageItemDefault.
     * @type {StrokeAlignment}
     */
    strokeAlignment: StrokeAlignment,


    /**
     * If true, the PageItemDefault does not print.
     * @type {boolean}
     */
    nonprinting: undefined,


    /**
     * The arrowhead alignment applied to the PageItemDefault.
     * @type {ArrowHeadAlignmentEnum}
     */
    arrowHeadAlignment: ArrowHeadAlignmentEnum,


    /**
     * The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000)
     * @type {number}
     */
    leftArrowHeadScale: undefined,


    /**
     * The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000)
     * @type {number}
     */
    rightArrowHeadScale: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Applies the specified object style.
     *
     * @param {ObjectStyle} [using] The object style to apply.
     * @param {boolean} [clearingOverrides] If true, clears the PageItemDefault's existing attributes before applying the style. (Optional) (default: true)
     * @param {boolean} [clearingOverridesThroughRootObjectStyle] If true, clears attributes and formatting applied to the PageItemDefault that are not defined in the object style. (Optional) (default: false)
     * @return undefined
     */
    applyObjectStyle: function (using, clearingOverrides, clearingOverridesThroughRootObjectStyle) {
        
    },


    /**
     * Clear overrides for object style
     *
     * @return undefined
     */
    clearObjectStyleOverrides: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the PageItemDefault.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PageItemDefault
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

