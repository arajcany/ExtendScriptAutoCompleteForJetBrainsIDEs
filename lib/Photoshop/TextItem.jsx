/*
 * The text object contained in an art layer.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var TextItem = {


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
     * The method of anti-aliasing to use.
     * @type {AntiAlias}
     */
    antiAliasMethod: AntiAlias,


    /**
     * Options for auto kerning.
     * @type {AutoKernType}
     */
    autoKerning: AutoKernType,


    /**
     * The text color.
     * @type {SolidColor}
     */
    color: SolidColor,


    /**
     * If true, uses the font's built-in leading information.
     * @type {boolean}
     */
    useAutoLeading: undefined,


    /**
     * The amount of uniform spacing between multiple characters. Range: -1000 to 10000.
     * @type {number}
     */
    tracking: undefined,


    /**
     * Character scaling (vertical) in proportion to horizontal scale. Range: 0 - 1000 as a percentage.
     * @type {int}
     */
    verticalScale: int,


    /**
     * Character scaling (horizontal) in proportion to horizontal scale. Range: 0 - 1000 as a percentage.
     * @type {int}
     */
    horizontalScale: int,


    /**
     * The amount of baseline offset of text.
     * @type {UnitValue}
     */
    baselineShift: UnitValue,


    /**
     * The actual text in the layer.
     * @type {string}
     */
    contents: undefined,


    /**
     * The text face of the character.
     * @type {string}
     */
    font: undefined,


    /**
     * The leading amount.
     * @type {UnitValue}
     */
    leading: UnitValue,


    /**
     * If true, ligatures are used.
     * @type {boolean}
     */
    ligatures: undefined,


    /**
     * If true, alternate ligatures are used.
     * @type {boolean}
     */
    alternateLigatures: undefined,


    /**
     * If true, old style is used.
     * @type {boolean}
     */
    oldStyle: undefined,


    /**
     * The position of the origin for the text. The array must contain two values. Setting this property is basically equivalent to clicking the text tool at a point in the document to create the point of origin for text.
     * @type {UnitPoint}
     */
    position: UnitPoint,


    /**
     * The text orientation.
     * @type {Direction}
     */
    direction: Direction,


    /**
     * The font size in points.
     * @type {UnitValue}
     */
    size: UnitValue,


    /**
     * If true, faux bold is used.
     * @type {boolean}
     */
    fauxBold: undefined,


    /**
     * If true, faux italic is used.
     * @type {boolean}
     */
    fauxItalic: undefined,


    /**
     * The case of the text.
     * @type {Case}
     */
    capitalization: Case,


    /**
     * The strike through option to use.
     * @type {StrikeThruType}
     */
    strikeThru: StrikeThruType,


    /**
     * Options for underlining the text.
     * @type {UnderlineType}
     */
    underline: UnderlineType,


    /**
     * The language.
     * @type {Language}
     */
    language: Language,


    /**
     * If true, words are not allowed to break at the end of a line. When enacted on large amounts of consecutive characters, can prevent word wrap and thus may prevent some text from appearing on the screen.
     * @type {boolean}
     */
    noBreak: undefined,


    /**
     * The type of text.
     * @type {TextType}
     */
    kind: TextType,


    /**
     * The paragraph justification.
     * @type {Justification}
     */
    justification: Justification,


    /**
     * The amount to indent text from the left. Range: -1296 to 1296.
     * @type {UnitValue}
     */
    leftIndent: UnitValue,


    /**
     * The amount to indent the first line of paragraphs. Range: -1296 to 1296.
     * @type {UnitValue}
     */
    firstLineIndent: UnitValue,


    /**
     * The amount to indent text from the right. Range: -1296 to 1296.
     * @type {UnitValue}
     */
    rightIndent: UnitValue,


    /**
     * The amount of space before each paragraph. Range: -1296 to 1296.
     * @type {UnitValue}
     */
    spaceBefore: UnitValue,


    /**
     * The amount of space after each paragraph. Range: -1296 to 1296.
     * @type {UnitValue}
     */
    spaceAfter: UnitValue,


    /**
     * If true, uses Roman hanging punctuation.
     * @type {boolean}
     */
    hangingPuntuation: undefined,


    /**
     * The text composing engine to use.
     * @type {TextComposer}
     */
    textComposer: TextComposer,


    /**
     * If true, hyphenation is used.
     * @type {boolean}
     */
    hyphenation: undefined,


    /**
     * The minimum amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
     * @type {number}
     */
    minimumGlyphScaling: undefined,


    /**
     * The desired amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
     * @type {number}
     */
    desiredGlyphScaling: undefined,


    /**
     * The maximum amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
     * @type {number}
     */
    maximumGlyphScaling: undefined,


    /**
     * The minimum amount of space (as a percentage) between letters. Range: 100 to 500; at 0, no space is added between letters. Valid only for justified text.
     * @type {number}
     */
    minimumLetterScaling: undefined,


    /**
     * The amount of space (as a percentage) between letters. Range: 100 - 500; at 0, no space is added between letters. Valid only for justified text.
     * @type {number}
     */
    desiredLetterScaling: undefined,


    /**
     * The maximum amount (as a percentage) of space between letters. Range: 100 - 500; at 0, no space is added between letters. Valid only for justified text.
     * @type {number}
     */
    maximumLetterScaling: undefined,


    /**
     * The minimum amount (as a percentage) of space between words. Range: 0 -1000; at 100, no additional space is added between words. Valid only for justified text.
     * @type {number}
     */
    minimumWordScaling: undefined,


    /**
     * The amount (as a percentage) of space between words. Range: 0 -1000; at 100, no additional space is added between words. Valid only for justified text.
     * @type {number}
     */
    desiredWordScaling: undefined,


    /**
     * The maximum amount (as a percentage) of space between words (0 -1000; at 100, no additional space is added between words). Valid only for justified text.
     * @type {number}
     */
    maximumWordScaling: undefined,


    /**
     * The percentage to use for auto leading. Range: 0.01 to 5000.00.
     * @type {number}
     */
    autoLeadingAmount: undefined,


    /**
     * The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed. Range: 2 to 25.
     * @type {int}
     */
    hyphenateWordsLongerThan: int,


    /**
     * The number of letters after which hyphenation in word wrap is allowed. Range: 1 to 15.
     * @type {int}
     */
    hyphenateAfterFirst: int,


    /**
     * The number of letters before which hyphenation in word wrap is allowed. Range: 1 to 15.
     * @type {int}
     */
    hyphenateBeforeLast: int,


    /**
     * The maximum number of consecutive lines that can end with a hyphenated word.
     * @type {int}
     */
    hyphenLimit: int,


    /**
     * The distance at the end of a line that will cause a word to break in unjustified type. Range: 0 - 720 picas.
     * @type {UnitValue}
     */
    hyphenationZone: UnitValue,


    /**
     * If true, capitalized words can be hyphenated.
     * @type {boolean}
     */
    hyphenateCapitalWords: undefined,


    /**
     * The width of the bounding box for paragraph text.
     * @type {UnitValue}
     */
    width: UnitValue,


    /**
     * The height of the bounding box for paragraph text.
     * @type {UnitValue}
     */
    height: UnitValue,


    /**
     * The style of warp.
     * @type {WarpStyle}
     */
    warpStyle: WarpStyle,


    /**
     * The warp direction.
     * @type {Direction}
     */
    warpDirection: Direction,


    /**
     * The warp bend percentage. Range: -100 to 100.
     * @type {number}
     */
    warpBend: undefined,


    /**
     * The warp horizontal distortion percentage. Range: -100 to 100.
     * @type {number}
     */
    warpHorizontalDistortion: undefined,


    /**
     * The warp vertical distortion percentage. Range: -100 to 100.
     * @type {number}
     */
    warpVerticalDistortion: undefined,



    /**
     * Creates a clipping path from the outlines of the actual text items (such as letters or words).
     *
     * @return undefined
     */
    createPath: function () {
        
    },


    /**
     * Converts the text object and its containing layer to a fill layer with the text changed to a clipping path.
     *
     * @return undefined
     */
    convertToShape: function () {
        
    },


};

