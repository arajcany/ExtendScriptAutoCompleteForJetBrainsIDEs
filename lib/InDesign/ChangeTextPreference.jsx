/*
 * Change text preferences.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var ChangeTextPreference = {


    /**
     * Numbering restart policies. Can return: NumberingRestartPolicy or NothingEnum enumerator.
     * @type {varies=any}
     * @readonly
     */
    numberingRestartPolicies: undefined,


    /**
     * Bullet character. Can return: Bullet or NothingEnum enumerator.
     * @type {varies=any}
     * @readonly
     */
    bulletChar: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the ChangeTextPreference (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


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
     * The space between paragraphs using same style. Can return: Unit, Spacing enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    sameParaStyleSpacing: undefined,


    /**
     * Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    paragraphKashidaWidth: undefined,


    /**
     * Value of Design Axes. Can return: Array of Reals or NothingEnum enumerator.
     * @type {varies=any}
     */
    designAxes: undefined,


    /**
     * The replacement ChangeTextPreference. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    changeTo: undefined,


    /**
     * The character style to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: CharacterStyle.
     * @type {varies=any}
     */
    appliedCharacterStyle: undefined,


    /**
     * The paragraph style to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: ParagraphStyle.
     * @type {varies=any}
     */
    appliedParagraphStyle: undefined,


    /**
     * The XML tag applied to the element. Can return: String or NothingEnum enumerator. Can also accept: XMLTag.
     * @type {varies=any}
     */
    markupTag: undefined,


    /**
     * The amount to indent the first line. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    firstLineIndent: undefined,


    /**
     * The width of the left indent. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftIndent: undefined,


    /**
     * The width of the right indent. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightIndent: undefined,


    /**
     * The height of the paragraph space above. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    spaceBefore: undefined,


    /**
     * The height of the paragraph space below. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    spaceAfter: undefined,


    /**
     * If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. Can return: Boolean, BalanceLinesStyle enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    balanceRaggedLines: undefined,


    /**
     * The paragraph alignment. Can return: Justification enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    justification: undefined,


    /**
     * The alignment to use for lines that contain a single word. Can return: SingleWordJustification enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    singleWordJustification: undefined,


    /**
     * The percent of the type size to use for auto leading. (Range: 0 to 500). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    autoLeading: undefined,


    /**
     * The number of lines to drop cap. Can return: Short Integer (0 - 25) or NothingEnum enumerator.
     * @type {varies=any}
     */
    dropCapLines: undefined,


    /**
     * The number of characters to drop cap. Can return: Short Integer (0 - 150) or NothingEnum enumerator.
     * @type {varies=any}
     */
    dropCapCharacters: undefined,


    /**
     * If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    keepLinesTogether: undefined,


    /**
     * If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    keepAllLinesTogether: undefined,


    /**
     * The minimum number of lines to keep with the next paragraph. Can return: Short Integer (0 - 5) or NothingEnum enumerator.
     * @type {varies=any}
     */
    keepWithNext: undefined,


    /**
     * The minimum number of lines to keep together in a paragraph before allowing a page break. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
     * @type {varies=any}
     */
    keepFirstLines: undefined,


    /**
     * The minimum number of lines to keep together in a paragraph after a page break. Can return: Short Integer (1 - 50) or NothingEnum enumerator.
     * @type {varies=any}
     */
    keepLastLines: undefined,


    /**
     * The location at which to start the paragraph. Can return: StartParagraph enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    startParagraph: undefined,


    /**
     * The text composer to use to compose the text. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    composer: undefined,


    /**
     * The amount to indent the last line in the paragraph. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    lastLineIndent: undefined,


    /**
     * If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    hyphenateLastWord: undefined,


    /**
     * Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. Can return: Long Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    dropcapDetail: undefined,


    /**
     * If true, allows the last word in a text column to be hyphenated. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    hyphenateAcrossColumns: undefined,


    /**
     * If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    keepRuleAboveInFrame: undefined,


    /**
     * If true, ignores optical edge alignment for the paragraph. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    ignoreEdgeAlignment: undefined,


    /**
     * The font applied to the ChangeTextPreference, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    appliedFont: undefined,


    /**
     * The name of the font style. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    fontStyle: undefined,


    /**
     * The text size. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    pointSize: undefined,


    /**
     * The leading applied to the text. Can return: Unit, Leading enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    leading: undefined,


    /**
     * The type of pair kerning. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    kerningMethod: undefined,


    /**
     * The amount by which to loosen or tighten a block of text, specified in thousands of an em. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    tracking: undefined,


    /**
     * The capitalization scheme. Can return: Capitalization enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    capitalization: undefined,


    /**
     * The text position relative to the baseline. Can return: Position enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    position: undefined,


    /**
     * If true, underlines the text. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    underline: undefined,


    /**
     * If true, draws a strikethrough line through the text. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThru: undefined,


    /**
     * If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    ligatures: undefined,


    /**
     * If true, keeps the text on the same line. . Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    noBreak: undefined,


    /**
     * The horizontal scaling applied to the ChangeTextPreference. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    horizontalScale: undefined,


    /**
     * The vertical scaling applied to the ChangeTextPreference. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    verticalScale: undefined,


    /**
     * The baseline shift applied to the text. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    baselineShift: undefined,


    /**
     * The skew angle of the ChangeTextPreference. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    skew: undefined,


    /**
     * The tint (as a percentage) of the fill color of the ChangeTextPreference. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    fillTint: undefined,


    /**
     * The tint (as a percentage) of the stroke color of the ChangeTextPreference. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    strokeTint: undefined,


    /**
     * The stroke weight applied to the characters of the text. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    strokeWeight: undefined,


    /**
     * If true, the stroke of the characters will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    overprintStroke: undefined,


    /**
     * If true, the fill color of the characters will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    overprintFill: undefined,


    /**
     * The figure style in OpenType fonts. Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfFigureStyle: undefined,


    /**
     * If true, uses ordinals in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfOrdinal: undefined,


    /**
     * If true, uses fractions in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfFraction: undefined,


    /**
     * If true, uses discretionary ligatures in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfDiscretionaryLigature: undefined,


    /**
     * If true, uses titling forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfTitling: undefined,


    /**
     * If true, uses contextual alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfContextualAlternate: undefined,


    /**
     * If true, uses swash forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfSwash: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. . Can return: Swatch, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. Can return: Swatch, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineGapColor: undefined,


    /**
     * The underline stroke tint (as a percentage). (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineTint: undefined,


    /**
     * The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineGapTint: undefined,


    /**
     * If true, the underline stroke color will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineOverprint: undefined,


    /**
     * If true, the gap color of the underline stroke will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineGapOverprint: undefined,


    /**
     * The stroke type of the underline stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineType: undefined,


    /**
     * The amount by which to offset the underline from the text baseline. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineOffset: undefined,


    /**
     * The stroke weight of the underline stroke. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    underlineWeight: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughGapColor: undefined,


    /**
     * The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughTint: undefined,


    /**
     * The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughGapTint: undefined,


    /**
     * If true, the strikethrough stroke will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughOverprint: undefined,


    /**
     * If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughGapOverprint: undefined,


    /**
     * The stroke type of the strikethrough stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughType: undefined,


    /**
     * The amount by which to offset the strikethrough stroke from the text baseline. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughOffset: undefined,


    /**
     * The stroke weight of the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    strikeThroughWeight: undefined,


    /**
     * If true, use a slashed zeroes in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfSlashedZero: undefined,


    /**
     * If true, use historical forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfHistorical: undefined,


    /**
     * The stylistic sets to use in OpenType fonts. Can return: Long Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfStylisticSets: undefined,


    /**
     * The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientFillLength: undefined,


    /**
     * The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientFillAngle: undefined,


    /**
     * The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientStrokeLength: undefined,


    /**
     * The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientStrokeAngle: undefined,


    /**
     * The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientFillStart: undefined,


    /**
     * The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientStrokeStart: undefined,


    /**
     * If true, uses mark positioning in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfMark: undefined,


    /**
     * If true, uses localized forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfLocale: undefined,


    /**
     * The OpenType positional form. Can return: PositionalForms enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    positionalForm: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink), applied as a fill color, to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
     * @type {varies=any}
     */
    fillColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink), applied as a stroke color, to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: Swatch.
     * @type {varies=any}
     */
    strokeColor: undefined,


    /**
     * The language to search for or change to. Can return: String or NothingEnum enumerator. Can also accept: Language or LanguageWithVendors.
     * @type {varies=any}
     */
    appliedLanguage: undefined,


    /**
     * The amount of space to add or remove between characters, specified in thousands of an em. . Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    kerningValue: undefined,


    /**
     * The change conditions mode, change either replaces applied conditions or adds to applied conditions. Can return: ChangeConditionsModes enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    changeConditionsMode: undefined,


    /**
     * The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. Can return: Real (0 - 1000) or NothingEnum enumerator.
     * @type {varies=any}
     */
    miterLimit: 4,


    /**
     * The stroke alignment applied to the text. Can return: TextStrokeAlign enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    strokeAlignment: undefined,


    /**
     * The stroke join type applied to the characters of the text. Can return: OutlineJoin enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    endJoin: undefined,


    /**
     * The conditions to search for or change to. Specify the "nothing" enum for "Any" or an empty list for "[Unconditional]". Can return: Array of Strings or NothingEnum enumerator. Can also accept: Array of Conditions.
     * @type {varies=any}
     */
    appliedConditions: undefined,


    /**
     * Paragraph direction. Can return: ParagraphDirectionOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    paragraphDirection: undefined,


    /**
     * Paragraph justification. Can return: ParagraphJustificationOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    paragraphJustification: undefined,


    /**
     * If true, use overlapping swash forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfOverlapSwash: undefined,


    /**
     * If true, use stylistic alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfStylisticAlternate: undefined,


    /**
     * If true, use alternate justification forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfJustificationAlternate: undefined,


    /**
     * If true, use stretched alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfStretchedAlternate: undefined,


    /**
     * The direction of the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    characterDirection: undefined,


    /**
     * The keyboard direction of the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    keyboardDirection: undefined,


    /**
     * The digits type. Can return: DigitsTypeOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    digitsType: undefined,


    /**
     * Use of Kashidas for justification. Can return: KashidasOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kashidas: undefined,


    /**
     * Position of diacriticical characters. Can return: DiacriticPositionOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    diacriticPosition: undefined,


    /**
     * The x (horizontal) offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    xOffsetDiacritic: undefined,


    /**
     * The y (vertical) offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    yOffsetDiacritic: undefined,


    /**
     * If the first line in the paragraph should be kept with the last line of previous paragraph. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    keepWithPrevious: undefined,


    /**
     * The number of columns a paragraph spans or the number of split columns. Can return: Short Integer (1 - 40), SpanColumnCountOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    spanSplitColumnCount: undefined,


    /**
     * Whether a paragraph should be a single column, span columns or split columns. Can return: SpanColumnTypeOptions enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    spanColumnType: undefined,


    /**
     * The inside gutter if the paragraph splits columns. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    splitColumnInsideGutter: undefined,


    /**
     * The outside gutter if the paragraph splits columns. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    splitColumnOutsideGutter: undefined,


    /**
     * The minimum space before a span or a split column. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    spanColumnMinSpaceBefore: undefined,


    /**
     * The minimum space after a span or a split column. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    spanColumnMinSpaceAfter: undefined,


    /**
     * The alignment of small characters to the largest character in the line. Can return: CharacterAlignment enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    characterAlignment: undefined,


    /**
     * The amount of horizontal character compression. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    tsume: undefined,


    /**
     * The amount of space before each character. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    leadingAki: undefined,


    /**
     * The amount of space after each character. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    trailingAki: undefined,


    /**
     * The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    characterRotation: undefined,


    /**
     * The number of grid squares in which to arrange the text. . Can return: Short Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    jidori: undefined,


    /**
     * The amount (as a percentage) of shatai obliquing to apply. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    shataiMagnification: undefined,


    /**
     * The shatai lens angle (in degrees). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    shataiDegreeAngle: undefined,


    /**
     * If true, applies shatai rotation. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    shataiAdjustRotation: undefined,


    /**
     * If true, adjusts shatai tsume. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    shataiAdjustTsume: undefined,


    /**
     * If true, makes the character horizontal in vertical text. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    tatechuyoko: undefined,


    /**
     * The horizontal offset for horizontal characters in vertical text. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    tatechuyokoXOffset: undefined,


    /**
     * The vertical offset for horizontal characters in vertical text. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    tatechuyokoYOffset: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. Can return: Swatch, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenFillColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. Can return: Swatch, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenStrokeColor: undefined,


    /**
     * The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenTint: undefined,


    /**
     * The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenStrokeTint: undefined,


    /**
     * The stroke weight (in points) of kenten characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenWeight: undefined,


    /**
     * The method of overprinting the kenten fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenOverprintFill: undefined,


    /**
     * The method of overprinting the kenten stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenOverprintStroke: undefined,


    /**
     * The style of kenten characters. Can return: KentenCharacter enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenKind: undefined,


    /**
     * The distance between kenten characters and their parent characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenPlacement: undefined,


    /**
     * The alignment of kenten characters relative to the parent characters. . Can return: KentenAlignment enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenAlignment: undefined,


    /**
     * The kenten position relative to the parent character. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenPosition: undefined,


    /**
     * The font to use for kenten characters. Can return: Font, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenFont: undefined,


    /**
     * The font style of kenten characters. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenFontStyle: undefined,


    /**
     * The size (in points) of kenten characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenFontSize: undefined,


    /**
     * The horizontal size of kenten characters as a percent of the original size. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenXScale: undefined,


    /**
     * The vertical size of kenten charachers as a percent of the original size. . Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenYScale: undefined,


    /**
     * The character used for kenten. Note: Valid only when kenten kind is custom. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenCustomCharacter: undefined,


    /**
     * The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. . Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kentenCharacterSet: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. Can return: Swatch, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyFill: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. Can return: Swatch, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyStroke: undefined,


    /**
     * The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyTint: undefined,


    /**
     * The stroke weight (in points) of ruby characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyWeight: undefined,


    /**
     * The method of overprinting the ruby fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyOverprintFill: undefined,


    /**
     * The method of overprinting the ruby stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyOverprintStroke: undefined,


    /**
     * The stroke tint (as a percentage) of ruby characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyStrokeTint: undefined,


    /**
     * The font applied to ruby characters. Can return: Font, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyFont: undefined,


    /**
     * The font style of ruby characters. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyFontStyle: undefined,


    /**
     * The size (in points) of ruby characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyFontSize: undefined,


    /**
     * If true, uses OpenType Pro fonts for ruby. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyOpenTypePro: undefined,


    /**
     * The horizontal size of ruby characters, specified as a percent of the original size. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyXScale: undefined,


    /**
     * The vertical size of ruby characters, specified as a percent of the original size. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyYScale: undefined,


    /**
     * The ruby type. Can return: RubyTypes enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyType: undefined,


    /**
     * The ruby alignment. Can return: RubyAlignments enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyAlignment: undefined,


    /**
     * The position of ruby characters relative to the parent text. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyPosition: undefined,


    /**
     * The amount of horizontal space between ruby and parent characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyXOffset: undefined,


    /**
     * The amount of vertical space between ruby and parent characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyYOffset: undefined,


    /**
     * The ruby spacing relative to the parent text. . Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyParentSpacing: undefined,


    /**
     * If true, auto aligns ruby. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyAutoAlign: undefined,


    /**
     * If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. . Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyOverhang: undefined,


    /**
     * If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. . Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyAutoScaling: undefined,


    /**
     * The amount (as a percentage) to scale the parent text size to determine the ruby text size. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyParentScalingPercent: undefined,


    /**
     * The amount by which ruby characters can overhang the parent text. Can return: RubyOverhang enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyParentOverhangAmount: undefined,


    /**
     * The number of digits included in auto tcy (tate-chuu-yoko) in ruby. Can return: Short Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyAutoTcyDigits: undefined,


    /**
     * If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyAutoTcyIncludeRoman: undefined,


    /**
     * If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rubyAutoTcyAutoScale: undefined,


    /**
     * If true, turns on warichu. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    warichu: undefined,


    /**
     * The amount (as a percentage) to scale parent text size to determine warichu size. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    warichuSize: undefined,


    /**
     * The number of lines of warichu within a single normal line. Can return: Short Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    warichuLines: undefined,


    /**
     * The gap between lines of warichu characters. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    warichuLineSpacing: undefined,


    /**
     * The warichu alignment. Can return: WarichuAlignment enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    warichuAlignment: undefined,


    /**
     * The minimum number of characters allowed after a line break. . Can return: Short Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    warichuCharsAfterBreak: undefined,


    /**
     * The minimum number of characters allowed before a line break. Can return: Short Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    warichuCharsBeforeBreak: undefined,


    /**
     * If true, kerns according to proportional CJK metrics in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfProportionalMetrics: undefined,


    /**
     * If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. . Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfHVKana: undefined,


    /**
     * If true, applies italics to half-width alphanumerics. . Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    otfRomanItalics: undefined,


    /**
     * If true, the line changes size when characters are scaled. . Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    scaleAffectsLineHeight: undefined,


    /**
     * If true, uses grid tracking to track non-Roman characters in CJK grids. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    cjkGridTracking: undefined,


    /**
     * The glyph variant to substitute for standard glyphs. Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    glyphForm: undefined,


    /**
     * If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    paragraphGyoudori: undefined,


    /**
     * The alignment to the frame grid or baseline grid. Can return: GridAlignment enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    gridAlignment: undefined,


    /**
     * The manual gyoudori setting. Can return: Short Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    gridGyoudori: undefined,


    /**
     * The number of half-width characters at or below which the characters automatically run horizontally in vertical text. Can return: Short Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    autoTcy: undefined,


    /**
     * If true, auto tcy includes Roman characters. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    autoTcyIncludeRoman: undefined,


    /**
     * The kinsoku set that determines legitimate line breaks. Can return: KinsokuTable, KinsokuSet enumerator, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    kinsokuSet: undefined,


    /**
     * The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. Can return: KinsokuType enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kinsokuType: undefined,


    /**
     * The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. Can return: KinsokuHangTypes enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    kinsokuHangType: undefined,


    /**
     * If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    bunriKinshi: undefined,


    /**
     * The mojikumi table. For information, see mojikumi table defaults. Can return: MojikumiTable, String, MojikumiTableDefaults enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    mojikumi: undefined,


    /**
     * If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rensuuji: undefined,


    /**
     * If true, rotates Roman characters in vertical text. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rotateSingleByteCharacters: undefined,


    /**
     * The point from which leading is measured from line to line. Can return: LeadingModel enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    leadingModel: undefined,


    /**
     * If true, ideographic spaces will not wrap to the next line like text characters. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    treatIdeographicSpaceAsSpace: undefined,


    /**
     * If true, words unassociated with a hyphenation dictionary can break to the next line on any character. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    allowArbitraryHyphenation: undefined,


    /**
     * The text after string expression for bullets. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    bulletsTextAfter: undefined,


    /**
     * The list to be part of. Can return: NumberingList, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    appliedNumberingList: undefined,


    /**
     * The level of the paragraph. Can return: Long Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    numberingLevel: undefined,


    /**
     * Numbering format options. Can return: NumberingStyle enumerator, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    numberingFormat: undefined,


    /**
     * Continue the numbering at this level. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    numberingContinue: undefined,


    /**
     * Determines starting number in a numbered list. Can return: Long Integer or NothingEnum enumerator.
     * @type {varies=any}
     */
    numberingStartAt: undefined,


    /**
     * If true, apply the numbering restart policy. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    numberingApplyRestartPolicy: undefined,


    /**
     * The character style to be used for the text after string. Can return: CharacterStyle, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    bulletsCharacterStyle: undefined,


    /**
     * The character style to be used for the number string. Can return: CharacterStyle, String or NothingEnum enumerator.
     * @type {varies=any}
     */
    numberingCharacterStyle: undefined,


    /**
     * The number string expression for numbering. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    numberingExpression: undefined,


    /**
     * List type for bullets and numbering. Can return: ListType enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    bulletsAndNumberingListType: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



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
     * Generates a string which, if executed, will return the ChangeTextPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return ChangeTextPreference
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

