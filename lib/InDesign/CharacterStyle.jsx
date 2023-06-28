/*
 * A character style.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var CharacterStyle = {


    /**
     * If true, the style was imported from another document. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     * @readonly
     */
    imported: undefined,


    /**
     * The unique ID of the CharacterStyle.
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
     * The parent of the CharacterStyle (a Document, Application or CharacterStyleGroup).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the CharacterStyle within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * The style that this style is based on. Can return: CharacterStyle or String.
     * @type {varies=any}
     */
    basedOn: undefined,


    /**
     * Split Document (EPUB only). Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    splitDocument: undefined,


    /**
     * Emit CSS. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    emitCss: undefined,


    /**
     * A unique id that can be assigned to a style. This can be used to differentiate between the styles. Internal use only. Can return: String or NothingEnum enumerator.
     * @type {varies=any}
     */
    styleUniqueId: undefined,


    /**
     * The font applied to the CharacterStyle, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
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
     * The horizontal scaling applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    horizontalScale: undefined,


    /**
     * The vertical scaling applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    verticalScale: undefined,


    /**
     * The baseline shift applied to the text. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    baselineShift: undefined,


    /**
     * The skew angle of the CharacterStyle. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    skew: undefined,


    /**
     * The tint (as a percentage) of the fill color of the CharacterStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    fillTint: undefined,


    /**
     * The tint (as a percentage) of the stroke color of the CharacterStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
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
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the CharacterStyle. . Can return: Swatch or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    fillColor: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the CharacterStyle. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    strokeColor: undefined,


    /**
     * The language of the text. Can return: LanguageWithVendors, Language or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    appliedLanguage: undefined,


    /**
     * If true, class attribute will be generated for the style. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    includeClass: undefined,


    /**
     * Value of Design Axes. Can return: Array of Reals or NothingEnum enumerator.
     * @type {varies=any}
     */
    designAxes: undefined,


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
     * The name of the style.
     * @type {string}
     */
    name: undefined,


    /**
     * The color to use for preview, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    previewColor: undefined,


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
     * @param {CharacterStyle} [replacingWith] The style to apply in place of the deleted style. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
    },


    /**
     * Duplicates the CharacterStyle.
     *
     * @return CharacterStyle
     */
    duplicate: function () {
        
    },


    /**
     * Moves the style to the specified location.
     *
     * @param {LocationOptions} [to] The location relative to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional)
     * @return CharacterStyle
     */
    move: function (to, reference) {
        
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
     * Generates a string which, if executed, will return the CharacterStyle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return CharacterStyle
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

