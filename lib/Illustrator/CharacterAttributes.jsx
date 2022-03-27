/*
 * Properties of a character.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var CharacterAttributes = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * The text font.
     * @type {TextFont}
     */
    textFont: TextFont,


    /**
     * Font size in points.
     * @type {number}
     */
    size: undefined,


    /**
     * Character horizontal scaling factor expressed as a percentage (100 = 100%)
     * @type {number}
     */
    horizontalScale: undefined,


    /**
     * Character vertical scaling factor expressed as a percentage (100 = 100%)
     * @type {number}
     */
    verticalScale: undefined,


    /**
     * Whether to use automatic leading.
     * @type {boolean}
     */
    autoLeading: undefined,


    /**
     * The amount of space between two lines of text (in points)
     * @type {number}
     */
    leading: undefined,


    /**
     * The tracking or range kerning amount in thousands of an em.
     * @type {Int32}
     */
    tracking: Int32,


    /**
     * The amount of shift (in points) of the text baseline.
     * @type {number}
     */
    baselineShift: undefined,


    /**
     * The character rotation angle (in degrees)
     * @type {number}
     */
    rotation: undefined,


    /**
     * The automatic kerning method to use.
     * @type {AutoKernType}
     */
    kerningMethod: AutoKernType,


    /**
     * The case of text.
     * @type {FontCapsOption}
     */
    capitalization: FontCapsOption,


    /**
     * The baseline position of text.
     * @type {FontBaselineOption}
     */
    baselinePosition: FontBaselineOption,


    /**
     * The OpenType baseline position.
     * @type {FontOpenTypePositionOption}
     */
    openTypePosition: FontOpenTypePositionOption,


    /**
     * Whether the ligature should be used.
     * @type {boolean}
     */
    ligature: undefined,


    /**
     * Whether the discretionary ligature should be used.
     * @type {boolean}
     */
    discretionaryLigature: undefined,


    /**
     * Whether the contextual ligature should be used.
     * @type {boolean}
     */
    contextualLigature: undefined,


    /**
     * Whether the OpenType fractions should be used.
     * @type {boolean}
     */
    fractions: undefined,


    /**
     * Whether the OpenType ordinals should be used.
     * @type {boolean}
     */
    ordinals: undefined,


    /**
     * Whether the OpenType swash should be used.
     * @type {boolean}
     */
    swash: undefined,


    /**
     * Whether the OpenType titling alternates should be used.
     * @type {boolean}
     */
    titling: undefined,


    /**
     * Whether the OpenType connection forms should be used.
     * @type {boolean}
     */
    connectionForms: undefined,


    /**
     * Whether the OpenType stylistic alternates should be used.
     * @type {boolean}
     */
    stylisticAlternates: undefined,


    /**
     * Whether the OpenType ornaments should be used.
     * @type {boolean}
     */
    ornaments: undefined,


    /**
     * Which figure style to use in OpenType font.
     * @type {FigureStyleType}
     */
    figureStyle: FigureStyleType,


    /**
     * Does the Japanese OpenType support proportional font?
     * @type {boolean}
     */
    proportionalMetrics: undefined,


    /**
     * Does the Japanese OpenType support kana?
     * @type {boolean}
     */
    kana: undefined,


    /**
     * Does the Japanese OpenType support italics?
     * @type {boolean}
     */
    italics: undefined,


    /**
     * The Japanese text baseline direction.
     * @type {BaselineDirectionType}
     */
    baselineDirection: BaselineDirectionType,


    /**
     * The language of text.
     * @type {LanguageType}
     */
    language: LanguageType,


    /**
     * The alternate glyphs form.
     * @type {AlternateGlyphsForm}
     */
    alternateGlyphs: AlternateGlyphsForm,


    /**
     * The percentage of space reduction around a Japanese character (100 = 100%)
     * @type {number}
     */
    Tsume: undefined,


    /**
     * The character alignment type.
     * @type {StyleRunAlignmentType}
     */
    alignment: StyleRunAlignmentType,


    /**
     * Whether WariChu is enabled.
     * @type {boolean}
     */
    wariChuEnabled: undefined,


    /**
     * The number of Wari-Chu (multiple text lines fit into a space meant for one) lines.
     * @type {Int32}
     */
    wariChuLines: Int32,


    /**
     * The Wari-Chu line gap.
     * @type {Int32}
     */
    wariChuLineGap: Int32,


    /**
     * The Wari-Chu scale.
     * @type {number}
     */
    wariChuScale: undefined,


    /**
     * 
     * @type {Int32}
     */
    wariChuCharactersBeforeBreak: Int32,


    /**
     * 
     * @type {Int32}
     */
    wariChuCharactersAfterBreak: Int32,


    /**
     * 
     * @type {WariChuJustificationType}
     */
    wariChuJustification: WariChuJustificationType,


    /**
     * The Tate-Chu-Yoko vertical adjustment in points.
     * @type {Int32}
     */
    tateChuYokoVertical: Int32,


    /**
     * The Tate-Chu-Yoko horizontal adjustment in points.
     * @type {Int32}
     */
    tateChuYokoHorizontal: Int32,


    /**
     * The em amount of left aki.
     * @type {number}
     */
    akiLeft: undefined,


    /**
     * The em amount of right aki amount.
     * @type {number}
     */
    akiRight: undefined,


    /**
     * Whether line breaks are allowed.
     * @type {boolean}
     */
    noBreak: undefined,


    /**
     * The color of the text fill.
     * @type {Color}
     */
    fillColor: Color,


    /**
     * The color of the text stroke.
     * @type {Color}
     */
    strokeColor: Color,


    /**
     * Whether to overprint the stroke of the text.
     * @type {boolean}
     */
    overprintStroke: undefined,


    /**
     * Whether to overprint the fill of the text.
     * @type {boolean}
     */
    overprintFill: undefined,


    /**
     * Line width of stroke.
     * @type {number}
     */
    strokeWeight: undefined,


    /**
     * Whether to underline the text.
     * @type {boolean}
     */
    underline: undefined,


    /**
     * Whether to draw a strike through line over the text.
     * @type {boolean}
     */
    strikeThrough: undefined,


    /**
     * Kashidas attribute.
     * @type {KashidasType}
     */
    kashidas: KashidasType,


    /**
     * Direction override attribute.
     * @type {DirOverrideType}
     */
    dirOverride: DirOverrideType,


    /**
     * Digit set attribute.
     * @type {DigitSetType}
     */
    digitSet: DigitSetType,


    /**
     * Diacritics positioning attribute.
     * @type {DiacVPosType}
     */
    diacVPos: DiacVPosType,


    /**
     * Diacritics x offset attribute.
     * @type {number}
     */
    diacXOffset: undefined,


    /**
     * Diacritics y offset attribute.
     * @type {number}
     */
    diacYOffset: undefined,


    /**
     * Justification alternates attribute.
     * @type {boolean}
     */
    justificationAlternates: undefined,


    /**
     * Stylistic sets attribute.
     * @type {Int32}
     */
    stylisticSets: Int32,




};

