/*
 * A paragraph style.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ParagraphStyle = {


    /**
     * If true, the style was imported from another document.
     * @type {boolean}
     * @readonly
     */
    imported: undefined,


    /**
     * Bullet character.
     * @type {Bullet}
     * @readonly
     */
    bulletChar: Bullet,


    /**
     * Numbering restart policies.
     * @type {NumberingRestartPolicy}
     * @readonly
     */
    numberingRestartPolicies: NumberingRestartPolicy,


    /**
     * The unique ID of the ParagraphStyle.
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
     * The parent of the ParagraphStyle (a Document, Application or ParagraphStyleGroup).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the ParagraphStyle within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of nested line styles.
     * @type {NestedLineStyles}
     * @readonly
     */
    nestedLineStyles: NestedLineStyles,


    /**
     * A collection of nested GREP styles.
     * @type {NestedGrepStyles}
     * @readonly
     */
    nestedGrepStyles: NestedGrepStyles,


    /**
     * A collection of nested styles.
     * @type {NestedStyles}
     * @readonly
     */
    nestedStyles: NestedStyles,


    /**
     * A collection of tab stops.
     * @type {TabStops}
     * @readonly
     */
    tabStops: TabStops,


    /**
     * A collection of style export tag maps.
     * @type {StyleExportTagMaps}
     * @readonly
     */
    styleExportTagMaps: StyleExportTagMaps,


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
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * The name of the ParagraphStyle.
     * @type {string}
     */
    name: undefined,


    /**
     * The style that this style is based on. Can return: ParagraphStyle or String.
     * @type {varies=any}
     */
    basedOn: undefined,


    /**
     * The style to apply to new paragraphs that follow paragraphs tagged with this style.
     * @type {ParagraphStyle}
     */
    nextStyle: ParagraphStyle,


    /**
     * Split Document (EPUB only)
     * @type {boolean}
     */
    splitDocument: undefined,


    /**
     * Emit CSS
     * @type {boolean}
     */
    emitCss: undefined,


    /**
     * A unique id that can be assigned to a style. This can be used to differentiate between the styles. Internal use only.
     * @type {string}
     */
    styleUniqueId: undefined,


    /**
     * The distance to offset the left edge of the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphShadingLeftOffset: undefined,


    /**
     * The distance to offset the right edge of the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphShadingRightOffset: undefined,


    /**
     * The distance to offset the top edge of the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphShadingTopOffset: undefined,


    /**
     * The distance to offset the bottom edge of the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphShadingBottomOffset: undefined,


    /**
     * The basis (text width or column width) used to calculate the width of the paragraph shading.
     * @type {ParagraphShadingWidthEnum}
     */
    paragraphShadingWidth: ParagraphShadingWidthEnum,


    /**
     * The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading.
     * @type {ParagraphShadingTopOriginEnum}
     */
    paragraphShadingTopOrigin: ParagraphShadingTopOriginEnum,


    /**
     * The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading.
     * @type {ParagraphShadingBottomOriginEnum}
     */
    paragraphShadingBottomOrigin: ParagraphShadingBottomOriginEnum,


    /**
     * If true, forces the shading of the paragraph to be clipped with respect to frame shape.
     * @type {boolean}
     */
    paragraphShadingClipToFrame: undefined,


    /**
     * If true, suppress printing of the shading of the paragraph.
     * @type {boolean}
     */
    paragraphShadingSuppressPrinting: undefined,


    /**
     * If true, the paragraph shading is On.
     * @type {boolean}
     */
    paragraphShadingOn: undefined,


    /**
     * If true, the paragraph shading will overprint.
     * @type {boolean}
     */
    paragraphShadingOverprint: undefined,


    /**
     * The tint (as a percentage) of the paragraph shading. (Range: 0 to 100)
     * @type {number}
     */
    paragraphShadingTint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. Can return: Swatch or String.
     * @type {varies=any}
     */
    paragraphShadingColor: undefined,


    /**
     * The font applied to the ParagraphStyle, specified as either a font object or the name of font family. Can return: Font or String.
     * @type {varies=any}
     */
    appliedFont: undefined,


    /**
     * The name of the font style.
     * @type {string}
     */
    fontStyle: undefined,


    /**
     * The text size.
     * @type {Measurement Unit (Number or String)=any}
     */
    pointSize: undefined,


    /**
     * The leading applied to the text. Can return: Unit or Leading enumerator.
     * @type {varies=any}
     */
    leading: undefined,


    /**
     * The type of pair kerning.
     * @type {string}
     */
    kerningMethod: undefined,


    /**
     * The amount by which to loosen or tighten a block of text, specified in thousands of an em.
     * @type {number}
     */
    tracking: undefined,


    /**
     * The capitalization scheme.
     * @type {Capitalization}
     */
    capitalization: Capitalization,


    /**
     * The text position relative to the baseline.
     * @type {Position}
     */
    position: Position,


    /**
     * If true, underlines the text.
     * @type {boolean}
     */
    underline: undefined,


    /**
     * If true, draws a strikethrough line through the text.
     * @type {boolean}
     */
    strikeThru: undefined,


    /**
     * If true, replaces specific character combinations (e.g., fl, fi) with ligature characters.
     * @type {boolean}
     */
    ligatures: undefined,


    /**
     * If true, keeps the text on the same line.
     * @type {boolean}
     */
    noBreak: undefined,


    /**
     * The horizontal scaling applied to the ParagraphStyle.
     * @type {number}
     */
    horizontalScale: undefined,


    /**
     * The vertical scaling applied to the ParagraphStyle.
     * @type {number}
     */
    verticalScale: undefined,


    /**
     * The baseline shift applied to the text.
     * @type {Measurement Unit (Number or String)=any}
     */
    baselineShift: undefined,


    /**
     * The skew angle of the ParagraphStyle.
     * @type {number}
     */
    skew: undefined,


    /**
     * The tint (as a percentage) of the fill color of the ParagraphStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    fillTint: undefined,


    /**
     * The tint (as a percentage) of the stroke color of the ParagraphStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
     * @type {number}
     */
    strokeTint: undefined,


    /**
     * The stroke weight applied to the characters of the text.
     * @type {Measurement Unit (Number or String)=any}
     */
    strokeWeight: undefined,


    /**
     * If true, the stroke of the characters will overprint.
     * @type {boolean}
     */
    overprintStroke: undefined,


    /**
     * If true, the fill color of the characters will overprint.
     * @type {boolean}
     */
    overprintFill: undefined,


    /**
     * The figure style in OpenType fonts.
     * @type {OTFFigureStyle}
     */
    otfFigureStyle: OTFFigureStyle,


    /**
     * If true, uses ordinals in OpenType fonts.
     * @type {boolean}
     */
    otfOrdinal: undefined,


    /**
     * If true, uses fractions in OpenType fonts.
     * @type {boolean}
     */
    otfFraction: undefined,


    /**
     * If true, uses discretionary ligatures in OpenType fonts.
     * @type {boolean}
     */
    otfDiscretionaryLigature: undefined,


    /**
     * If true, uses titling forms in OpenType fonts.
     * @type {boolean}
     */
    otfTitling: undefined,


    /**
     * If true, uses contextual alternate forms in OpenType fonts.
     * @type {boolean}
     */
    otfContextualAlternate: undefined,


    /**
     * If true, uses swash forms in OpenType fonts.
     * @type {boolean}
     */
    otfSwash: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. . Can return: Swatch or String.
     * @type {varies=any}
     */
    underlineColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. Can return: Swatch or String.
     * @type {varies=any}
     */
    underlineGapColor: undefined,


    /**
     * The underline stroke tint (as a percentage). (Range: 0 to 100)
     * @type {number}
     */
    underlineTint: undefined,


    /**
     * The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid.
     * @type {number}
     */
    underlineGapTint: undefined,


    /**
     * If true, the underline stroke color will overprint.
     * @type {boolean}
     */
    underlineOverprint: undefined,


    /**
     * If true, the gap color of the underline stroke will overprint.
     * @type {boolean}
     */
    underlineGapOverprint: undefined,


    /**
     * The stroke type of the underline stroke. Can return: StrokeStyle or String.
     * @type {varies=any}
     */
    underlineType: undefined,


    /**
     * The amount by which to offset the underline from the text baseline.
     * @type {Measurement Unit (Number or String)=any}
     */
    underlineOffset: undefined,


    /**
     * The stroke weight of the underline stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    underlineWeight: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. Can return: Swatch or String.
     * @type {varies=any}
     */
    strikeThroughColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. Can return: Swatch or String.
     * @type {varies=any}
     */
    strikeThroughGapColor: undefined,


    /**
     * The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100)
     * @type {number}
     */
    strikeThroughTint: undefined,


    /**
     * The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid.
     * @type {number}
     */
    strikeThroughGapTint: undefined,


    /**
     * If true, the strikethrough stroke will overprint.
     * @type {boolean}
     */
    strikeThroughOverprint: undefined,


    /**
     * If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid.
     * @type {boolean}
     */
    strikeThroughGapOverprint: undefined,


    /**
     * The stroke type of the strikethrough stroke. Can return: StrokeStyle or String.
     * @type {varies=any}
     */
    strikeThroughType: undefined,


    /**
     * The amount by which to offset the strikethrough stroke from the text baseline.
     * @type {Measurement Unit (Number or String)=any}
     */
    strikeThroughOffset: undefined,


    /**
     * The stroke weight of the strikethrough stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    strikeThroughWeight: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the ParagraphStyle. . Can also accept: String.
     * @type {Swatch}
     */
    fillColor: Swatch,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the ParagraphStyle. Can also accept: String.
     * @type {Swatch}
     */
    strokeColor: Swatch,


    /**
     * The language of the text. Can return: LanguageWithVendors or Language. Can also accept: String.
     * @type {varies=any}
     */
    appliedLanguage: undefined,


    /**
     * If true, class attribute will be generated for the style
     * @type {boolean}
     */
    includeClass: undefined,


    /**
     * If true, the paragraph border is on.
     * @type {boolean}
     */
    paragraphBorderOn: undefined,


    /**
     * If true, the paragraph border will overprint.
     * @type {boolean}
     */
    paragraphBorderOverprint: undefined,


    /**
     * The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100)
     * @type {number}
     */
    paragraphBorderTint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. Can return: Swatch or String.
     * @type {varies=any}
     */
    paragraphBorderColor: undefined,


    /**
     * If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid.
     * @type {boolean}
     */
    paragraphBorderGapOverprint: undefined,


    /**
     * The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100)
     * @type {number}
     */
    paragraphBorderGapTint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. Can return: Swatch or String.
     * @type {varies=any}
     */
    paragraphBorderGapColor: undefined,


    /**
     * The type of the border for the paragraph. Can return: StrokeStyle or String.
     * @type {varies=any}
     */
    paragraphBorderType: undefined,


    /**
     * The left line weight of the border of paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderLeftLineWeight: undefined,


    /**
     * The top line weight of the border of paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderTopLineWeight: undefined,


    /**
     * The right line weight of the border of paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderRightLineWeight: undefined,


    /**
     * The bottom line weight of the border of paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderBottomLineWeight: undefined,


    /**
     * The end shape of an open path.
     * @type {EndCap}
     */
    paragraphBorderStrokeEndCap: EndCap,


    /**
     * The corner join applied to the ParagraphStyle.
     * @type {EndJoin}
     */
    paragraphBorderStrokeEndJoin: EndJoin,


    /**
     * The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphShadingTopLeftCornerRadius: undefined,


    /**
     * The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
     * @type {CornerOptions}
     */
    paragraphShadingTopLeftCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphShadingTopRightCornerRadius: undefined,


    /**
     * The shape to apply to the top right corner of rectangular shapes
     * @type {CornerOptions}
     */
    paragraphShadingTopRightCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphShadingBottomLeftCornerRadius: undefined,


    /**
     * The shape to apply to the bottom left corner of rectangular shapes.
     * @type {CornerOptions}
     */
    paragraphShadingBottomLeftCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphShadingBottomRightCornerRadius: undefined,


    /**
     * The shape to apply to the bottom right corner of rectangular shapes.
     * @type {CornerOptions}
     */
    paragraphShadingBottomRightCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderTopLeftCornerRadius: undefined,


    /**
     * The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
     * @type {CornerOptions}
     */
    paragraphBorderTopLeftCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderTopRightCornerRadius: undefined,


    /**
     * The shape to apply to the top right corner of rectangular shapes
     * @type {CornerOptions}
     */
    paragraphBorderTopRightCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderBottomLeftCornerRadius: undefined,


    /**
     * The shape to apply to the bottom left corner of rectangular shapes.
     * @type {CornerOptions}
     */
    paragraphBorderBottomLeftCornerOption: CornerOptions,


    /**
     * The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderBottomRightCornerRadius: undefined,


    /**
     * The shape to apply to the bottom right corner of rectangular shapes.
     * @type {CornerOptions}
     */
    paragraphBorderBottomRightCornerOption: CornerOptions,


    /**
     * The basis (text width or column width) used to calculate the width of the paragraph border.
     * @type {ParagraphBorderEnum}
     */
    paragraphBorderWidth: ParagraphBorderEnum,


    /**
     * The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border.
     * @type {ParagraphBorderTopOriginEnum}
     */
    paragraphBorderTopOrigin: ParagraphBorderTopOriginEnum,


    /**
     * The basis (descent or baseline) used to calculate the bottom origin of the paragraph border.
     * @type {ParagraphBorderBottomOriginEnum}
     */
    paragraphBorderBottomOrigin: ParagraphBorderBottomOriginEnum,


    /**
     * The distance to offset the left edge of the paragraph border.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderLeftOffset: undefined,


    /**
     * The distance to offset the right edge of the paragraph border.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderRightOffset: undefined,


    /**
     * The distance to offset the top edge of the paragraph border.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderTopOffset: undefined,


    /**
     * The distance to offset the bottom edge of the paragraph border.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphBorderBottomOffset: undefined,


    /**
     * If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns.
     * @type {boolean}
     */
    paragraphBorderDisplayIfSplits: undefined,


    /**
     * The hyphenation style chosen for the provider.
     * @type {HyphenationStyleEnum}
     */
    providerHyphenationStyle: HyphenationStyleEnum,


    /**
     * If true, consecutive para borders with completely similar properties are merged.
     * @type {boolean}
     */
    mergeConsecutiveParaBorders: undefined,


    /**
     * The space between paragraphs using same style. Can return: Unit or Spacing enumerator.
     * @type {varies=any}
     */
    sameParaStyleSpacing: undefined,


    /**
     * Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long
     * @type {number}
     */
    paragraphKashidaWidth: undefined,


    /**
     * Value of Design Axes
     * @type {number}
     */
    designAxes: undefined,


    /**
     * If true, aligns the baseline of the text to the baseline grid.
     * @type {boolean}
     */
    alignToBaseline: undefined,


    /**
     * The amount to indent the first line.
     * @type {Measurement Unit (Number or String)=any}
     */
    firstLineIndent: undefined,


    /**
     * The width of the left indent.
     * @type {Measurement Unit (Number or String)=any}
     */
    leftIndent: undefined,


    /**
     * The width of the right indent.
     * @type {Measurement Unit (Number or String)=any}
     */
    rightIndent: undefined,


    /**
     * The height of the paragraph space above.
     * @type {Measurement Unit (Number or String)=any}
     */
    spaceBefore: undefined,


    /**
     * The height of the paragraph space below.
     * @type {Measurement Unit (Number or String)=any}
     */
    spaceAfter: undefined,


    /**
     * If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. Can return: Boolean or BalanceLinesStyle enumerator.
     * @type {varies=any}
     */
    balanceRaggedLines: undefined,


    /**
     * The paragraph alignment.
     * @type {Justification}
     */
    justification: Justification,


    /**
     * The alignment to use for lines that contain a single word.
     * @type {SingleWordJustification}
     */
    singleWordJustification: SingleWordJustification,


    /**
     * The percent of the type size to use for auto leading. (Range: 0 to 500).
     * @type {number}
     */
    autoLeading: undefined,


    /**
     * The number of lines to drop cap.
     * @type {number}
     */
    dropCapLines: undefined,


    /**
     * The number of characters to drop cap.
     * @type {number}
     */
    dropCapCharacters: undefined,


    /**
     * If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames.
     * @type {boolean}
     */
    keepLinesTogether: undefined,


    /**
     * If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns.
     * @type {boolean}
     */
    keepAllLinesTogether: undefined,


    /**
     * The minimum number of lines to keep with the next paragraph.
     * @type {number}
     */
    keepWithNext: undefined,


    /**
     * The minimum number of lines to keep together in a paragraph before allowing a page break.
     * @type {number}
     */
    keepFirstLines: undefined,


    /**
     * The minimum number of lines to keep together in a paragraph after a page break.
     * @type {number}
     */
    keepLastLines: undefined,


    /**
     * The location at which to start the paragraph.
     * @type {StartParagraph}
     */
    startParagraph: StartParagraph,


    /**
     * The text composer to use to compose the text.
     * @type {string}
     */
    composer: undefined,


    /**
     * The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000)
     * @type {number}
     */
    minimumWordSpacing: undefined,


    /**
     * The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000)
     * @type {number}
     */
    maximumWordSpacing: undefined,


    /**
     * The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000)
     * @type {number}
     */
    desiredWordSpacing: undefined,


    /**
     * The minimum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified.
     * @type {number}
     */
    minimumLetterSpacing: undefined,


    /**
     * The maximum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified.
     * @type {number}
     */
    maximumLetterSpacing: undefined,


    /**
     * The desired letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500)
     * @type {number}
     */
    desiredLetterSpacing: undefined,


    /**
     * The minimum width (as a percentage) of individual characters. (Range: 50 to 200)
     * @type {number}
     */
    minimumGlyphScaling: undefined,


    /**
     * The maximum width (as a percentage) of individual characters. (Range: 50 to 200)
     * @type {number}
     */
    maximumGlyphScaling: undefined,


    /**
     * The desired width (as a percentage) of individual characters. (Range: 50 to 200)
     * @type {number}
     */
    desiredGlyphScaling: undefined,


    /**
     * If true, places a rule above the paragraph.
     * @type {boolean}
     */
    ruleAbove: undefined,


    /**
     * If true, the paragraph rule above will overprint.
     * @type {boolean}
     */
    ruleAboveOverprint: undefined,


    /**
     * The line weight of the rule above.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleAboveLineWeight: undefined,


    /**
     * The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100)
     * @type {number}
     */
    ruleAboveTint: undefined,


    /**
     * The amount to offset the paragraph rule above from the baseline of the first line the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleAboveOffset: undefined,


    /**
     * The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleAboveLeftIndent: undefined,


    /**
     * The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleAboveRightIndent: undefined,


    /**
     * The basis (text width or column width) used to calculate the width of the paragraph rule above.
     * @type {RuleWidth}
     */
    ruleAboveWidth: RuleWidth,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. Can return: Swatch or String.
     * @type {varies=any}
     */
    ruleAboveColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. Can return: Swatch or String.
     * @type {varies=any}
     */
    ruleAboveGapColor: undefined,


    /**
     * The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid.
     * @type {number}
     */
    ruleAboveGapTint: undefined,


    /**
     * If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid.
     * @type {boolean}
     */
    ruleAboveGapOverprint: undefined,


    /**
     * The stroke type of the rule above the paragraph. Can return: StrokeStyle or String.
     * @type {varies=any}
     */
    ruleAboveType: undefined,


    /**
     * If true, applies a paragraph rule below.
     * @type {boolean}
     */
    ruleBelow: undefined,


    /**
     * The line weight of the rule below.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleBelowLineWeight: undefined,


    /**
     * The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100)
     * @type {number}
     */
    ruleBelowTint: undefined,


    /**
     * The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleBelowOffset: undefined,


    /**
     * The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleBelowLeftIndent: undefined,


    /**
     * The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    ruleBelowRightIndent: undefined,


    /**
     * The basis (text width or column width) used to calculate the width of the paragraph rule below.
     * @type {RuleWidth}
     */
    ruleBelowWidth: RuleWidth,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. Can return: Swatch or String.
     * @type {varies=any}
     */
    ruleBelowColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. Can return: Swatch or String.
     * @type {varies=any}
     */
    ruleBelowGapColor: undefined,


    /**
     * The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid.
     * @type {number}
     */
    ruleBelowGapTint: undefined,


    /**
     * The stroke type of the rule below the paragraph. Can return: StrokeStyle or String.
     * @type {varies=any}
     */
    ruleBelowType: undefined,


    /**
     * If true, allows hyphenation of capitalized words.
     * @type {boolean}
     */
    hyphenateCapitalizedWords: undefined,


    /**
     * If true, allows hyphenation.
     * @type {boolean}
     */
    hyphenation: undefined,


    /**
     * The minimum number of letters at the end of a word that can be broken by a hyphen.
     * @type {number}
     */
    hyphenateBeforeLast: undefined,


    /**
     * The mininum number of letters at the beginning of a word that can be broken by a hyphen.
     * @type {number}
     */
    hyphenateAfterFirst: undefined,


    /**
     * The minimum number of letters a word must have in order to qualify for hyphenation.
     * @type {number}
     */
    hyphenateWordsLongerThan: undefined,


    /**
     * The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero.
     * @type {number}
     */
    hyphenateLadderLimit: undefined,


    /**
     * The amount of white space allowed at the end of a line of non-justified text before hypenation begins. Note: Valid when composer is single-line composer.
     * @type {Measurement Unit (Number or String)=any}
     */
    hyphenationZone: undefined,


    /**
     * The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100)
     * @type {number}
     */
    hyphenWeight: undefined,


    /**
     * The character style to apply to the drop cap. Can also accept: String.
     * @type {CharacterStyle}
     */
    dropCapStyle: CharacterStyle,


    /**
     * The amount to indent the last line in the paragraph.
     * @type {Measurement Unit (Number or String)=any}
     */
    lastLineIndent: undefined,


    /**
     * If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true.
     * @type {boolean}
     */
    hyphenateLastWord: undefined,


    /**
     * If true, use a slashed zeroes in OpenType fonts.
     * @type {boolean}
     */
    otfSlashedZero: undefined,


    /**
     * If true, use historical forms in OpenType fonts.
     * @type {boolean}
     */
    otfHistorical: undefined,


    /**
     * The stylistic sets to use in OpenType fonts.
     * @type {number}
     */
    otfStylisticSets: undefined,


    /**
     * The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text.
     * @type {number}
     */
    gradientFillLength: undefined,


    /**
     * The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180)
     * @type {number}
     */
    gradientFillAngle: undefined,


    /**
     * The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text.
     * @type {number}
     */
    gradientStrokeLength: undefined,


    /**
     * The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180)
     * @type {number}
     */
    gradientStrokeAngle: undefined,


    /**
     * The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    gradientFillStart: undefined,


    /**
     * The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    gradientStrokeStart: undefined,


    /**
     * If the first line in the paragraph should be kept with the last line of previous paragraph.
     * @type {boolean}
     */
    keepWithPrevious: undefined,


    /**
     * The number of columns a paragraph spans or the number of split columns. Can return: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
     * @type {varies=any}
     */
    spanSplitColumnCount: undefined,


    /**
     * Whether a paragraph should be a single column, span columns or split columns
     * @type {SpanColumnTypeOptions}
     */
    spanColumnType: SpanColumnTypeOptions,


    /**
     * The inside gutter if the paragraph splits columns
     * @type {Measurement Unit (Number or String)=any}
     */
    splitColumnInsideGutter: undefined,


    /**
     * The outside gutter if the paragraph splits columns
     * @type {Measurement Unit (Number or String)=any}
     */
    splitColumnOutsideGutter: undefined,


    /**
     * The minimum space before a span or a split column
     * @type {Measurement Unit (Number or String)=any}
     */
    spanColumnMinSpaceBefore: undefined,


    /**
     * The minimum space after a span or a split column
     * @type {Measurement Unit (Number or String)=any}
     */
    spanColumnMinSpaceAfter: undefined,


    /**
     * If true, the rule below will overprint.
     * @type {boolean}
     */
    ruleBelowOverprint: undefined,


    /**
     * If true, the gap color of the rule below will overprint.
     * @type {boolean}
     */
    ruleBelowGapOverprint: undefined,


    /**
     * Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid.
     * @type {number}
     */
    dropcapDetail: undefined,


    /**
     * If true, allows the last word in a text column to be hyphenated.
     * @type {boolean}
     */
    hyphenateAcrossColumns: undefined,


    /**
     * If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true.
     * @type {boolean}
     */
    keepRuleAboveInFrame: undefined,


    /**
     * If true, ignores optical edge alignment for the paragraph.
     * @type {boolean}
     */
    ignoreEdgeAlignment: undefined,


    /**
     * If true, uses mark positioning in OpenType fonts.
     * @type {boolean}
     */
    otfMark: undefined,


    /**
     * If true, uses localized forms in OpenType fonts.
     * @type {boolean}
     */
    otfLocale: undefined,


    /**
     * The OpenType positional form.
     * @type {PositionalForms}
     */
    positionalForm: PositionalForms,


    /**
     * The color to use for preview, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    previewColor: undefined,


    /**
     * Paragraph direction.
     * @type {ParagraphDirectionOptions}
     */
    paragraphDirection: ParagraphDirectionOptions,


    /**
     * Paragraph justification.
     * @type {ParagraphJustificationOptions}
     */
    paragraphJustification: ParagraphJustificationOptions,


    /**
     * The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join.
     * @type {number}
     */
    miterLimit: 4,


    /**
     * The stroke alignment applied to the text.
     * @type {TextStrokeAlign}
     */
    strokeAlignment: TextStrokeAlign,


    /**
     * The stroke join type applied to the characters of the text.
     * @type {OutlineJoin}
     */
    endJoin: OutlineJoin,


    /**
     * If true, use overlapping swash forms in OpenType fonts
     * @type {boolean}
     */
    otfOverlapSwash: undefined,


    /**
     * If true, use stylistic alternate forms in OpenType fonts
     * @type {boolean}
     */
    otfStylisticAlternate: undefined,


    /**
     * If true, use alternate justification forms in OpenType fonts
     * @type {boolean}
     */
    otfJustificationAlternate: undefined,


    /**
     * If true, use stretched alternate forms in OpenType fonts
     * @type {boolean}
     */
    otfStretchedAlternate: undefined,


    /**
     * The direction of the character.
     * @type {CharacterDirectionOptions}
     */
    characterDirection: CharacterDirectionOptions,


    /**
     * The keyboard direction of the character.
     * @type {CharacterDirectionOptions}
     */
    keyboardDirection: CharacterDirectionOptions,


    /**
     * The digits type.
     * @type {DigitsTypeOptions}
     */
    digitsType: DigitsTypeOptions,


    /**
     * Use of Kashidas for justification
     * @type {KashidasOptions}
     */
    kashidas: KashidasOptions,


    /**
     * Position of diacriticical characters.
     * @type {DiacriticPositionOptions}
     */
    diacriticPosition: DiacriticPositionOptions,


    /**
     * The x (horizontal) offset for diacritic adjustment.
     * @type {number}
     */
    xOffsetDiacritic: undefined,


    /**
     * The y (vertical) offset for diacritic adjustment.
     * @type {number}
     */
    yOffsetDiacritic: undefined,


    /**
     * A list of the tab stops in the paragraph. Can return: Array of Arrays of Property Name/Value Pairs.
     * @type {varies=any}
     */
    tabList: undefined,


    /**
     * If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid.
     * @type {boolean}
     */
    gridAlignFirstLineOnly: undefined,


    /**
     * The alignment to the frame grid or baseline grid.
     * @type {GridAlignment}
     */
    gridAlignment: GridAlignment,


    /**
     * The manual gyoudori setting.
     * @type {number}
     */
    gridGyoudori: undefined,


    /**
     * The number of half-width characters at or below which the characters automatically run horizontally in vertical text.
     * @type {number}
     */
    autoTcy: undefined,


    /**
     * If true, auto tcy includes Roman characters.
     * @type {boolean}
     */
    autoTcyIncludeRoman: undefined,


    /**
     * The kinsoku set that determines legitimate line breaks. Can return: KinsokuTable, KinsokuSet enumerator or String.
     * @type {varies=any}
     */
    kinsokuSet: undefined,


    /**
     * The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined.
     * @type {KinsokuType}
     */
    kinsokuType: KinsokuType,


    /**
     * The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect.
     * @type {KinsokuHangTypes}
     */
    kinsokuHangType: KinsokuHangTypes,


    /**
     * If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect.
     * @type {boolean}
     */
    bunriKinshi: undefined,


    /**
     * The mojikumi table. For information, see mojikumi table defaults. Can return: MojikumiTable, String or MojikumiTableDefaults enumerator.
     * @type {varies=any}
     */
    mojikumi: undefined,


    /**
     * If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers.
     * @type {boolean}
     */
    rensuuji: undefined,


    /**
     * If true, rotates Roman characters in vertical text.
     * @type {boolean}
     */
    rotateSingleByteCharacters: undefined,


    /**
     * The point from which leading is measured from line to line.
     * @type {LeadingModel}
     */
    leadingModel: LeadingModel,


    /**
     * The alignment of small characters to the largest character in the line.
     * @type {CharacterAlignment}
     */
    characterAlignment: CharacterAlignment,


    /**
     * The amount of horizontal character compression.
     * @type {number}
     */
    tsume: undefined,


    /**
     * The amount of space before each character.
     * @type {number}
     */
    leadingAki: undefined,


    /**
     * The amount of space after each character.
     * @type {number}
     */
    trailingAki: undefined,


    /**
     * The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise.
     * @type {number}
     */
    characterRotation: undefined,


    /**
     * The number of grid squares in which to arrange the text.
     * @type {number}
     */
    jidori: undefined,


    /**
     * The amount (as a percentage) of shatai obliquing to apply.
     * @type {number}
     */
    shataiMagnification: undefined,


    /**
     * The shatai lens angle (in degrees).
     * @type {number}
     */
    shataiDegreeAngle: undefined,


    /**
     * If true, applies shatai rotation.
     * @type {boolean}
     */
    shataiAdjustRotation: undefined,


    /**
     * If true, adjusts shatai tsume.
     * @type {boolean}
     */
    shataiAdjustTsume: undefined,


    /**
     * If true, makes the character horizontal in vertical text.
     * @type {boolean}
     */
    tatechuyoko: undefined,


    /**
     * The horizontal offset for horizontal characters in vertical text.
     * @type {number}
     */
    tatechuyokoXOffset: undefined,


    /**
     * The vertical offset for horizontal characters in vertical text.
     * @type {number}
     */
    tatechuyokoYOffset: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. Can return: Swatch or String.
     * @type {varies=any}
     */
    kentenFillColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. Can return: Swatch or String.
     * @type {varies=any}
     */
    kentenStrokeColor: undefined,


    /**
     * The fill tint (as a percentage) of kenten characters. (Range: 0 to 100)
     * @type {number}
     */
    kentenTint: undefined,


    /**
     * The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100)
     * @type {number}
     */
    kentenStrokeTint: undefined,


    /**
     * The stroke weight (in points) of kenten characters.
     * @type {number}
     */
    kentenWeight: undefined,


    /**
     * The method of overprinting the kenten fill.
     * @type {AdornmentOverprint}
     */
    kentenOverprintFill: AdornmentOverprint,


    /**
     * The method of overprinting the kenten stroke.
     * @type {AdornmentOverprint}
     */
    kentenOverprintStroke: AdornmentOverprint,


    /**
     * The style of kenten characters.
     * @type {KentenCharacter}
     */
    kentenKind: KentenCharacter,


    /**
     * The distance between kenten characters and their parent characters.
     * @type {number}
     */
    kentenPlacement: undefined,


    /**
     * The alignment of kenten characters relative to the parent characters.
     * @type {KentenAlignment}
     */
    kentenAlignment: KentenAlignment,


    /**
     * The kenten position relative to the parent character.
     * @type {RubyKentenPosition}
     */
    kentenPosition: RubyKentenPosition,


    /**
     * The font to use for kenten characters. Can return: Font or String.
     * @type {varies=any}
     */
    kentenFont: undefined,


    /**
     * The font style of kenten characters. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenFontStyle: undefined,


    /**
     * The size (in points) of kenten characters.
     * @type {number}
     */
    kentenFontSize: undefined,


    /**
     * The horizontal size of kenten characters as a percent of the original size.
     * @type {number}
     */
    kentenXScale: undefined,


    /**
     * The vertical size of kenten charachers as a percent of the original size.
     * @type {number}
     */
    kentenYScale: undefined,


    /**
     * The character used for kenten. Note: Valid only when kenten kind is custom.
     * @type {string}
     */
    kentenCustomCharacter: undefined,


    /**
     * The character set used for the custom kenten character. Note: Valid only when kenten kind is custom.
     * @type {KentenCharacterSet}
     */
    kentenCharacterSet: KentenCharacterSet,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. Can return: Swatch or String.
     * @type {varies=any}
     */
    rubyFill: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. Can return: Swatch or String.
     * @type {varies=any}
     */
    rubyStroke: undefined,


    /**
     * The tint (as a percentage) of the ruby fill color. (Range: 0 to 100)
     * @type {number}
     */
    rubyTint: undefined,


    /**
     * The stroke weight (in points) of ruby characters.
     * @type {number}
     */
    rubyWeight: undefined,


    /**
     * The method of overprinting the ruby fill.
     * @type {AdornmentOverprint}
     */
    rubyOverprintFill: AdornmentOverprint,


    /**
     * The method of overprinting the ruby stroke.
     * @type {AdornmentOverprint}
     */
    rubyOverprintStroke: AdornmentOverprint,


    /**
     * The stroke tint (as a percentage) of ruby characters.
     * @type {number}
     */
    rubyStrokeTint: undefined,


    /**
     * The font applied to ruby characters. Can return: Font or String.
     * @type {varies=any}
     */
    rubyFont: undefined,


    /**
     * The font style of ruby characters. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyFontStyle: undefined,


    /**
     * The size (in points) of ruby characters.
     * @type {number}
     */
    rubyFontSize: undefined,


    /**
     * If true, uses OpenType Pro fonts for ruby.
     * @type {boolean}
     */
    rubyOpenTypePro: undefined,


    /**
     * The horizontal size of ruby characters, specified as a percent of the original size.
     * @type {number}
     */
    rubyXScale: undefined,


    /**
     * The vertical size of ruby characters, specified as a percent of the original size.
     * @type {number}
     */
    rubyYScale: undefined,


    /**
     * The ruby type.
     * @type {RubyTypes}
     */
    rubyType: RubyTypes,


    /**
     * The ruby alignment.
     * @type {RubyAlignments}
     */
    rubyAlignment: RubyAlignments,


    /**
     * The position of ruby characters relative to the parent text.
     * @type {RubyKentenPosition}
     */
    rubyPosition: RubyKentenPosition,


    /**
     * The amount of horizontal space between ruby and parent characters.
     * @type {number}
     */
    rubyXOffset: undefined,


    /**
     * The amount of vertical space between ruby and parent characters.
     * @type {number}
     */
    rubyYOffset: undefined,


    /**
     * The ruby spacing relative to the parent text.
     * @type {RubyParentSpacing}
     */
    rubyParentSpacing: RubyParentSpacing,


    /**
     * If true, auto aligns ruby.
     * @type {boolean}
     */
    rubyAutoAlign: undefined,


    /**
     * If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount.
     * @type {boolean}
     */
    rubyOverhang: undefined,


    /**
     * If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent.
     * @type {boolean}
     */
    rubyAutoScaling: undefined,


    /**
     * The amount (as a percentage) to scale the parent text size to determine the ruby text size.
     * @type {number}
     */
    rubyParentScalingPercent: undefined,


    /**
     * The amount by which ruby characters can overhang the parent text.
     * @type {RubyOverhang}
     */
    rubyParentOverhangAmount: RubyOverhang,


    /**
     * If true, turns on warichu.
     * @type {boolean}
     */
    warichu: undefined,


    /**
     * The amount (as a percentage) to scale parent text size to determine warichu size.
     * @type {number}
     */
    warichuSize: undefined,


    /**
     * The number of lines of warichu within a single normal line.
     * @type {number}
     */
    warichuLines: undefined,


    /**
     * The gap between lines of warichu characters.
     * @type {number}
     */
    warichuLineSpacing: undefined,


    /**
     * The warichu alignment.
     * @type {WarichuAlignment}
     */
    warichuAlignment: WarichuAlignment,


    /**
     * The minimum number of characters allowed after a line break.
     * @type {number}
     */
    warichuCharsAfterBreak: undefined,


    /**
     * The minimum number of characters allowed before a line break.
     * @type {number}
     */
    warichuCharsBeforeBreak: undefined,


    /**
     * If true, kerns according to proportional CJK metrics in OpenType fonts.
     * @type {boolean}
     */
    otfProportionalMetrics: undefined,


    /**
     * If true, switches hiragana fonts, which have different glyphs for horizontal and vertical.
     * @type {boolean}
     */
    otfHVKana: undefined,


    /**
     * If true, applies italics to half-width alphanumerics.
     * @type {boolean}
     */
    otfRomanItalics: undefined,


    /**
     * If true, the line changes size when characters are scaled.
     * @type {boolean}
     */
    scaleAffectsLineHeight: undefined,


    /**
     * If true, uses grid tracking to track non-Roman characters in CJK grids.
     * @type {boolean}
     */
    cjkGridTracking: undefined,


    /**
     * The glyph variant to substitute for standard glyphs.
     * @type {AlternateGlyphForms}
     */
    glyphForm: AlternateGlyphForms,


    /**
     * If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph.
     * @type {boolean}
     */
    paragraphGyoudori: undefined,


    /**
     * The number of digits included in auto tcy (tate-chuu-yoko) in ruby.
     * @type {number}
     */
    rubyAutoTcyDigits: undefined,


    /**
     * If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby.
     * @type {boolean}
     */
    rubyAutoTcyIncludeRoman: undefined,


    /**
     * If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em.
     * @type {boolean}
     */
    rubyAutoTcyAutoScale: undefined,


    /**
     * If true, ideographic spaces will not wrap to the next line like text characters.
     * @type {boolean}
     */
    treatIdeographicSpaceAsSpace: undefined,


    /**
     * If true, words unassociated with a hyphenation dictionary can break to the next line on any character.
     * @type {boolean}
     */
    allowArbitraryHyphenation: undefined,


    /**
     * List type for bullets and numbering.
     * @type {ListType}
     */
    bulletsAndNumberingListType: ListType,


    /**
     * The character style to be used for the text after string. Can return: CharacterStyle or String.
     * @type {varies=any}
     */
    bulletsCharacterStyle: undefined,


    /**
     * The character style to be used for the number string. Can return: CharacterStyle or String.
     * @type {varies=any}
     */
    numberingCharacterStyle: undefined,


    /**
     * The number string expression for numbering.
     * @type {string}
     */
    numberingExpression: undefined,


    /**
     * The text after string expression for bullets.
     * @type {string}
     */
    bulletsTextAfter: undefined,


    /**
     * The list to be part of. Can return: NumberingList or String.
     * @type {varies=any}
     */
    appliedNumberingList: undefined,


    /**
     * The level of the paragraph.
     * @type {number}
     */
    numberingLevel: undefined,


    /**
     * Numbering format options. Can return: NumberingStyle enumerator or String.
     * @type {varies=any}
     */
    numberingFormat: undefined,


    /**
     * Continue the numbering at this level.
     * @type {boolean}
     */
    numberingContinue: undefined,


    /**
     * Determines starting number in a numbered list.
     * @type {number}
     */
    numberingStartAt: undefined,


    /**
     * If true, apply the numbering restart policy.
     * @type {boolean}
     */
    numberingApplyRestartPolicy: undefined,


    /**
     * The alignment of the bullet character.
     * @type {ListAlignment}
     */
    bulletsAlignment: ListAlignment,


    /**
     * The alignment of the number.
     * @type {ListAlignment}
     */
    numberingAlignment: ListAlignment,


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
     * Create thumbnail for selected text with the given properties.
     *
     * @param {string} [previewText] Text to use as sample
     * @param {number} [pointSize] Text font size (in points)
     * @param {ColorSpace} [space] Color space RGB, CMYK or LAB
     * @param {number} [colorValue] Color values
     * @param {File} [to] The path to the export file.
     * @return boolean
     */
    createThumbnailWithProperties: function (previewText, pointSize, space, colorValue, to) {
        
    },


    /**
     * Deletes the paragraph style forcefully. For internal use only.
     *
     * @param {ParagraphStyle} [replacingWith] The style to apply in place of the deleted style. (Optional)
     * @return undefined
     */
    forceDelete: function (replacingWith) {
        
    },


    /**
     * Set Nth design axis of a variable font.
     *
     * @param {number} [nthAxisIndex] Index of design axis.
     * @param {number} [nthAxisValue] Value of nth design axis.
     * @return undefined
     */
    setNthDesignAxis: function (nthAxisIndex, nthAxisValue) {
        
    },


    /**
     * If true, Nth design axis of variable font is hidden.
     *
     * @param {number} [nthAxisIndex] Index of design axis.
     * @return boolean
     */
    isNthDesignAxisHidden: function (nthAxisIndex) {
        
    },


    /**
     * Deletes the style.
     *
     * @param {ParagraphStyle} [replacingWith] The style to apply in place of the deleted style. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
    },


    /**
     * Duplicates the ParagraphStyle.
     *
     * @return ParagraphStyle
     */
    duplicate: function () {
        
    },


    /**
     * Moves the style to the specified location.
     *
     * @param {LocationOptions} [to] The location relative to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional)
     * @return ParagraphStyle
     */
    move: function (to, reference) {
        
    },


    /**
     * Convert bullets and numbering to text.
     *
     * @return undefined
     */
    convertBulletsAndNumberingToText: function () {
        
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
     * Generates a string which, if executed, will return the ParagraphStyle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ParagraphStyle
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

