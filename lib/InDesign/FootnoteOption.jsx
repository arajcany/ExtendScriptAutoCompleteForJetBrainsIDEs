/*
 * Options for specifying default footnote formatting.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var FootnoteOption = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the FootnoteOption (a Application or Document).
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
     * The footnote numbering style. Can return: FootnoteNumberingStyle enumerator or String.
     * @type {varies=any}
     */
    footnoteNumberingStyle: undefined,


    /**
     * The number at which to start footnote numbering.
     * @type {number}
     */
    startAt: undefined,


    /**
     * The point at which to restart footnote numbering. Can return: FootnoteRestarting enumerator or String.
     * @type {varies=any}
     */
    restartNumbering: undefined,


    /**
     * The position of the footnote prefix and/or suffix. Can return: FootnotePrefixSuffix enumerator or String.
     * @type {varies=any}
     */
    showPrefixSuffix: undefined,


    /**
     * The prefix text of the footnote. (Limit: 0 to 100 characters)
     * @type {string}
     */
    prefix: undefined,


    /**
     * The suffix text of the footnote. (Limit: 0 to 100 characters)
     * @type {string}
     */
    suffix: undefined,


    /**
     * The paragraph style to apply to footnotes. Note: The space before and after the paragraph defined in the paragraph style is ignored for footnotes. To define space above and between footnotes, see spacer and space between.
     * @type {ParagraphStyle}
     */
    footnoteTextStyle: ParagraphStyle,


    /**
     * The character style to apply to footnote reference numbers in the main text.
     * @type {CharacterStyle}
     */
    footnoteMarkerStyle: CharacterStyle,


    /**
     * The position of footnote reference numbers in the main text. Can return: FootnoteMarkerPositioning enumerator or String.
     * @type {varies=any}
     */
    markerPositioning: undefined,


    /**
     * The text to insert between the footnote marker number and the footnote text. (Range: 0 to 100 characters)
     * @type {string}
     */
    separatorText: undefined,


    /**
     * The amount of vertical space between footnotes. Note: The space before and space after defined for the paragraph style applied to the footnote is ignored.
     * @type {Measurement Unit (Number or String)=any}
     */
    spaceBetween: undefined,


    /**
     * The minimum amount of vertical space between the bottom of the text column and the first footnote. Note: The space before amount defined in the paragraph style applied to the footnote is ignored for the first footnote.
     * @type {Measurement Unit (Number or String)=any}
     */
    spacer: undefined,


    /**
     * The distance between the top of the footnote container and the footnote text.
     * @type {FootnoteFirstBaseline}
     */
    footnoteFirstBaselineOffset: FootnoteFirstBaseline,


    /**
     * The minimum distance between the baseline of the text and the top of the footnote container.
     * @type {Measurement Unit (Number or String)=any}
     */
    footnoteMinimumFirstBaselineOffset: undefined,


    /**
     * If true, footnotes at the end of the story are placed just below the text. If false, footnotes at the end of the story are placed at the bottom of the column.
     * @type {boolean}
     */
    eosPlacement: undefined,


    /**
     * If true, footnotes cannot split across columns. If false, footnotes flow into succeeding columns when the footnote text causes the footnote area to expand upward to reach the footnote reference number in the main text.
     * @type {boolean}
     */
    noSplitting: undefined,


    /**
     * If true, draws a rule between the text and the first footnote in the column.
     * @type {boolean}
     */
    ruleOn: undefined,


    /**
     * The stroke type of the rule above the first footnote in a column. Note: Valid when rule on is true. Can return: StrokeStyle or String.
     * @type {varies=any}
     */
    ruleType: undefined,


    /**
     * The stroke weight of the rule above the first footnote in the column. (Range: 0 to 1000) Note: Valid when rule on is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleLineWeight: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the rule above the first footnote in the column. Note: Valid when rule on is true. Can return: Swatch or String.
     * @type {varies=any}
     */
    ruleColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above the first footnote in the column. Note: Valid when rule type is not solid. Can return: Swatch or String.
     * @type {varies=any}
     */
    ruleGapColor: undefined,


    /**
     * The tint (as a percentage) of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule on is true.
     * @type {number}
     */
    ruleTint: undefined,


    /**
     * The tint (as a percentage) of the gap color of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule type is not solid.
     * @type {number}
     */
    ruleGapTint: undefined,


    /**
     * If true, overprints the gap color of the rule above the first footnote in the column. Note: Valid when rule type is not solid.
     * @type {boolean}
     */
    ruleGapOverprint: undefined,


    /**
     * If true, overprints the rule above the first footnote in the column. Note: Valid when rule on is true.
     * @type {boolean}
     */
    ruleOverprint: undefined,


    /**
     * The amount to left indent the rule above the first footnote in the column. Note: Valid when rule on is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleLeftIndent: undefined,


    /**
     * The length of the rule above the first footnote in the column. Note: Valid when rule on is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleWidth: undefined,


    /**
     * The vertical offset of the rule above the first footnote in the column. Note: Valid when rule on is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleOffset: undefined,


    /**
     * If true, draws a rule above footnote text that continues from a previous column. Note: Valid when no splitting is false or undefined.
     * @type {boolean}
     */
    continuingRuleOn: undefined,


    /**
     * The stroke type of the rule above continued footnote text. Note: Valid when continuing rule on is true. Can return: StrokeStyle or String.
     * @type {varies=any}
     */
    continuingRuleType: undefined,


    /**
     * The stroke weight of the rule above continued footnote text. (Range: 0 to 1000) Note: Valid when continuing rule on is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    continuingRuleLineWeight: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the rule above continued footnote text. Note: Valid when continuing rule on is true. Can return: Swatch or String.
     * @type {varies=any}
     */
    continuingRuleColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. Can return: Swatch or String.
     * @type {varies=any}
     */
    continuingRuleGapColor: undefined,


    /**
     * The tint (as a percentage) of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid.
     * @type {number}
     */
    continuingRuleTint: undefined,


    /**
     * The tint (as a percentage) of the gap color of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid.
     * @type {number}
     */
    continuingRuleGapTint: undefined,


    /**
     * If true, overprints the rule above continued footnote text. Note: Valid when continuing rule on is true.
     * @type {boolean}
     */
    continuingRuleOverprint: undefined,


    /**
     * If true, overprints the gap color of the rule above continued footnote text. Note: Valid when continuing rule type is not solid.
     * @type {boolean}
     */
    continuingRuleGapOverprint: undefined,


    /**
     * The amount to left indent the rule above continued footnote text. Note: Valid when continuing rule on is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    continuingRuleLeftIndent: undefined,


    /**
     * The length of the rule above continued footnote text. Note: Valid when continuing rule on is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    continuingRuleWidth: undefined,


    /**
     * The vertical offset of the rule above continued footnote text. Note: Valid when continuing rule on is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    continuingRuleOffset: undefined,


    /**
     * If true, document will have straddling footnotes. If false, document will not have straddling footnotes.
     * @type {boolean}
     */
    enableStraddling: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the FootnoteOption.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return FootnoteOption
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

