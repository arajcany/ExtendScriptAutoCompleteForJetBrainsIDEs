/*
 * Text frame preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var TextFramePreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the TextFramePreference (a Application, Document, TextFrame, EndnoteTextFrame or ObjectStyle).
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
     * The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes.
     * @type {number}
     */
    textColumnCount: undefined,


    /**
     * The space between columns in the text frame.
     * @type {Measurement Unit (Number or String)=any}
     */
    textColumnGutter: undefined,


    /**
     * The column width of the columns in the text frame.
     * @type {Measurement Unit (Number or String)=any}
     */
    textColumnFixedWidth: undefined,


    /**
     * If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame.
     * @type {boolean}
     */
    useFixedColumnWidth: undefined,


    /**
     * The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. Can return: Unit (0 - 8640 points) or Array of 4 Units (0 - 8640 points).
     * @type {varies=any}
     */
    insetSpacing: undefined,


    /**
     * The distance between the baseline of the text and the top inset of the text frame or cell.
     * @type {FirstBaseline}
     */
    firstBaselineOffset: FirstBaseline,


    /**
     * The minimum distance between the baseline of the text and the top inset of the text frame or cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    minimumFirstBaselineOffset: undefined,


    /**
     * The vertical alignment of the text content.
     * @type {VerticalJustification}
     */
    verticalJustification: VerticalJustification,


    /**
     * The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    verticalThreshold: undefined,


    /**
     * If true, ignores text wrap settings for drawn or placed objects in the text frame.
     * @type {boolean}
     */
    ignoreWrap: undefined,


    /**
     * If true, maintains column width between a min and max range when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame.
     * @type {boolean}
     */
    useFlexibleColumnWidth: undefined,


    /**
     * The maximum column width of the columns in the text frame. Use 0 to indicate no upper limit.
     * @type {Measurement Unit (Number or String)=any}
     */
    textColumnMaxWidth: undefined,


    /**
     * Auto-sizing type of text frame. Based on type, reference value is automatically adjusted. For example, for height only type, top-left reference point becomes top-center. Recommended to change auto-sizing type, after setting other auto-sizing attributes
     * @type {AutoSizingTypeEnum}
     */
    autoSizingType: AutoSizingTypeEnum,


    /**
     * The reference point for auto sizing of text frame. Reference point is automatically adjusted to the suitable value depending on the auto-sizing type value. As an example, top left reference point becomes top center for height only dimension
     * @type {AutoSizingReferenceEnum}
     */
    autoSizingReferencePoint: AutoSizingReferenceEnum,


    /**
     * If true, minimum height value is used during the auto-sizing of text frame.
     * @type {boolean}
     */
    useMinimumHeightForAutoSizing: undefined,


    /**
     * The minimum height for auto-sizing of the text frame.
     * @type {Measurement Unit (Number or String)=any}
     */
    minimumHeightForAutoSizing: undefined,


    /**
     * If true, minimum width value is used during the auto-sizing of text frame.
     * @type {boolean}
     */
    useMinimumWidthForAutoSizing: undefined,


    /**
     * The minimum width for auto-sizing of the text frame.
     * @type {Measurement Unit (Number or String)=any}
     */
    minimumWidthForAutoSizing: undefined,


    /**
     * If true, line-breaks are not introduced after auto sizing.
     * @type {boolean}
     */
    useNoLineBreaksForAutoSizing: undefined,


    /**
     * If true, enable overrides to text frame vertical column rule options.
     * @type {boolean}
     */
    columnRuleOverride: undefined,


    /**
     * Text Frame Column Rule Offset
     * @type {number}
     */
    columnRuleOffset: undefined,


    /**
     * Text Frame Column Rule top inset
     * @type {number}
     */
    columnRuleTopInset: undefined,


    /**
     * If true, enable inset chain override.
     * @type {boolean}
     */
    columnRuleInsetChainOverride: undefined,


    /**
     * Text Frame Column Rule Bottom Inset
     * @type {number}
     */
    columnRuleBottomInset: undefined,


    /**
     * Text Frame Column Rule Width
     * @type {number}
     */
    columnRuleStrokeWidth: undefined,


    /**
     * Text Frame Column Rule Stroke Color
     * @type {Swatch}
     */
    columnRuleStrokeColor: Swatch,


    /**
     * Text Frame Column Rule Stroke Type
     * @type {StrokeStyle}
     */
    columnRuleStrokeType: StrokeStyle,


    /**
     * Text Frame Column Rule Stroke Tint
     * @type {number}
     */
    columnRuleStrokeTint: undefined,


    /**
     * If true, enable overprint override.
     * @type {boolean}
     */
    columnRuleOverprintOverride: undefined,


    /**
     * If true, enable overrides to document footnote options.
     * @type {boolean}
     */
    footnotesEnableOverrides: undefined,


    /**
     * If true, enable straddling footnotes.
     * @type {boolean}
     */
    footnotesSpanAcrossColumns: undefined,


    /**
     * Minimum Spacing Before First Footnote
     * @type {Measurement Unit (Number or String)=any}
     */
    footnotesMinimumSpacing: undefined,


    /**
     * Space between footnotes.
     * @type {Measurement Unit (Number or String)=any}
     */
    footnotesSpaceBetween: undefined,


    /**
     * Vertically justify balanced across all columns.
     * @type {boolean}
     */
    verticalBalanceColumns: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the TextFramePreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TextFramePreference
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

