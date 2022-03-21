/*
 * An object style.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var ObjectStyle = {


    /**
     * Export options for the object
     * @type {ObjectExportOption}
     * @readonly
     */
    objectExportOptions: ObjectExportOption,


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
     * Transparency settings for the fill applied to the ObjectStyle.
     * @type {FillTransparencySetting}
     * @readonly
     */
    fillTransparencySettings: FillTransparencySetting,


    /**
     * Transparency settings for the content of the ObjectStyle.
     * @type {ContentTransparencySetting}
     * @readonly
     */
    contentTransparencySettings: ContentTransparencySetting,


    /**
     * The object effects enabling settings.
     * @type {ObjectStyleObjectEffectsCategorySettings}
     * @readonly
     */
    objectEffectsEnablingSettings: ObjectStyleObjectEffectsCategorySettings,


    /**
     * The stroke effects enabling settings.
     * @type {ObjectStyleStrokeEffectsCategorySettings}
     * @readonly
     */
    strokeEffectsEnablingSettings: ObjectStyleStrokeEffectsCategorySettings,


    /**
     * The fill effects enabling settings.
     * @type {ObjectStyleFillEffectsCategorySettings}
     * @readonly
     */
    fillEffectsEnablingSettings: ObjectStyleFillEffectsCategorySettings,


    /**
     * The content effects enabling settings.
     * @type {ObjectStyleContentEffectsCategorySettings}
     * @readonly
     */
    contentEffectsEnablingSettings: ObjectStyleContentEffectsCategorySettings,


    /**
     * The unique ID of the ObjectStyle.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ObjectStyle (a Document, Application or ObjectStyleGroup).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the ObjectStyle within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * A collection of object style export tag maps.
     * @type {ObjectStyleExportTagMaps}
     * @readonly
     */
    objectStyleExportTagMaps: ObjectStyleExportTagMaps,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * Emit CSS
     * @type {boolean}
     */
    emitCss: undefined,


    /**
     * The layout attribute options to apply to any page item.
     * @type {TransformAttributeOption}
     */
    transformAttributeOptions: TransformAttributeOption,


    /**
     * If true, enables the Dimension and Position attributes
     * @type {boolean}
     */
    enableTransformAttributes: undefined,


    /**
     * If true, class attribute will be generated for the style
     * @type {boolean}
     */
    includeClass: undefined,


    /**
     * If true, the object style will apply auto-sizing text frame options.
     * @type {boolean}
     */
    enableTextFrameAutoSizingOptions: undefined,


    /**
     * Enable the text frame column rule options category of object style
     * @type {boolean}
     */
    enableTextFrameColumnRuleOptions: undefined,


    /**
     * If true, the object style will apply an epub tag and class.
     * @type {boolean}
     */
    enableExportTagging: undefined,


    /**
     * If true, the object style will apply alt text export options.
     * @type {boolean}
     */
    enableObjectExportAltTextOptions: undefined,


    /**
     * If true, the object style will apply tagged pdf export options.
     * @type {boolean}
     */
    enableObjectExportTaggedPdfOptions: undefined,


    /**
     * If true, the object style will apply epub export options.
     * @type {boolean}
     */
    enableObjectExportEpubOptions: undefined,


    /**
     * The style that this style is based on. Can return: ObjectStyle or String.
     * @type {varies=any}
     */
    basedOn: undefined,


    /**
     * The name of the ObjectStyle.
     * @type {string}
     */
    name: undefined,


    /**
     * The paragraph style applied to the text. Can also accept: String.
     * @type {ParagraphStyle}
     */
    appliedParagraphStyle: ParagraphStyle,


    /**
     * If true, applies paragraph styles using Next Paragraph Style settings, beginning with the Next Paragraph Style defined in the paragraph style associated with the object style (if any).
     * @type {boolean}
     */
    applyNextParagraphStyle: undefined,


    /**
     * If true, the object style will apply a fill.
     * @type {boolean}
     */
    enableFill: undefined,


    /**
     * If true, the object style will apply a stroke.
     * @type {boolean}
     */
    enableStroke: undefined,


    /**
     * If true, the object style will apply a paragraph style.
     * @type {boolean}
     */
    enableParagraphStyle: undefined,


    /**
     * If true, the object style will apply general text frame options.
     * @type {boolean}
     */
    enableTextFrameGeneralOptions: undefined,


    /**
     * If true, the object style will apply baseline text frame options.
     * @type {boolean}
     */
    enableTextFrameBaselineOptions: undefined,


    /**
     * If true, the object style will apply story options.
     * @type {boolean}
     */
    enableStoryOptions: undefined,


    /**
     * If true, the object style will apply text wrap, contour, and non-printing settings.
     * @type {boolean}
     */
    enableTextWrapAndOthers: undefined,


    /**
     * If true, the object style will apply an anchored object setting.
     * @type {boolean}
     */
    enableAnchoredObjectOptions: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the ObjectStyle. . Can also accept: String.
     * @type {Swatch}
     */
    fillColor: Swatch,


    /**
     * The percent of tint to use in the ObjectStyle's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    fillTint: undefined,


    /**
     * If true, the ObjectStyle's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
     * @type {boolean}
     */
    overprintFill: undefined,


    /**
     * The weight (in points) to apply to the ObjectStyle's stroke.
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
     * The corner join applied to the ObjectStyle.
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
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the ObjectStyle. Can also accept: String.
     * @type {Swatch}
     */
    strokeColor: Swatch,


    /**
     * The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    strokeTint: undefined,


    /**
     * If true, the ObjectStyle's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
     * @type {boolean}
     */
    overprintStroke: undefined,


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
     * The stroke alignment applied to the ObjectStyle.
     * @type {StrokeAlignment}
     */
    strokeAlignment: StrokeAlignment,


    /**
     * If true, the ObjectStyle does not print.
     * @type {boolean}
     */
    nonprinting: undefined,


    /**
     * The angle of a linear gradient applied to the fill of the ObjectStyle. (Range: -180 to 180)
     * @type {number}
     */
    gradientFillAngle: undefined,


    /**
     * The angle of a linear gradient applied to the stroke of the ObjectStyle. (Range: -180 to 180)
     * @type {number}
     */
    gradientStrokeAngle: undefined,


    /**
     * Text frame preference settings.
     * @type {TextFramePreference}
     */
    textFramePreferences: TextFramePreference,


    /**
     * Baseline frame grid option settings.
     * @type {BaselineFrameGridOption}
     */
    baselineFrameGridOptions: BaselineFrameGridOption,


    /**
     * Anchored object settings.
     * @type {AnchoredObjectSetting}
     */
    anchoredObjectSettings: AnchoredObjectSetting,


    /**
     * The text wrap preference properties that define the default formatting for wrapping text around objects.
     * @type {TextWrapPreference}
     */
    textWrapPreferences: TextWrapPreference,


    /**
     * Story preference settings.
     * @type {StoryPreference}
     */
    storyPreferences: StoryPreference,


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
     * The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application.
     * @type {FrameFittingOption}
     */
    frameFittingOptions: FrameFittingOption,


    /**
     * If true, the object style will apply frame fitting options.
     * @type {boolean}
     */
    enableFrameFittingOptions: undefined,


    /**
     * If true, the object style will apply stroke options and corner options.
     * @type {boolean}
     */
    enableStrokeAndCornerOptions: undefined,


    /**
     * The arrowhead alignment applied to the ObjectStyle.
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
     * Enable the text frame footnote options category of object style
     * @type {boolean}
     */
    enableTextFrameFootnoteOptions: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Sets the given dimension attribute state to enabled or disabled state
     *
     * @param {DimensionAttributes} [whichAttributes] Which dimension attributes do you want to enable or disable.
     * @param {boolean} [attributeState] Attribute state to be set, set true to enable and false to disable the attributes
     * @return boolean
     */
    setDimensionAttributeState: function (whichAttributes, attributeState) {
        
    },


    /**
     * Sets the given position attribute state to enabled or disabled state
     *
     * @param {PositionAttributes} [whichAttributes] Which position attributes do you want to enable or disable.
     * @param {boolean} [attributeState] Attribute state to be set, set true to enable and false to disable the attributes
     * @return boolean
     */
    setPositionAttributeState: function (whichAttributes, attributeState) {
        
    },


    /**
     * Duplicates the ObjectStyle.
     *
     * @return ObjectStyle
     */
    duplicate: function () {
        
    },


    /**
     * Moves the ObjectStyle to the specified location.
     *
     * @param {LocationOptions} [to] The new location relative to the reference object or within the container object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter is before or after. Can accept: ObjectStyle, ObjectStyleGroup, Document or Application. (Optional)
     * @return ObjectStyle
     */
    move: function (to, reference) {
        
    },


    /**
     * Deletes the style.
     *
     * @param {ObjectStyle} [replacingWith] The style to apply in place of the deleted style. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
    },


    /**
     * Sets the label to the value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @param {string} [value] The value.
     * @return undefined
     */
    insertLabel: function (key, value) {
        
    },


    /**
     * Gets the label value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @return string
     */
    extractLabel: function (key) {
        
    },


    /**
     * Generates a string which, if executed, will return the ObjectStyle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ObjectStyle
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

