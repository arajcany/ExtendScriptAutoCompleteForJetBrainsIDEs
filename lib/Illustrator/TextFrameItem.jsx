/*
 * Text frame item.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var TextFrameItem = {


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
     * The story of the text frame.
     * @type {Story}
     * @readonly
     */
    story: Story,


    /**
     * The text contents of this text frame.
     * @type {string}
     */
    contents: undefined,


    /**
     * The text range of the text frame.
     * @type {TextRange}
     * @readonly
     */
    textRange: TextRange,


    /**
     * The selected text (ranges) in the story.
     * @type {TextRange}
     * @readonly
     */
    textSelection: TextRange,


    /**
     * The row count in the text frame (area text only)
     * @type {Int32}
     */
    rowCount: Int32,


    /**
     * The column count in the text frame (area text only)
     * @type {Int32}
     */
    columnCount: Int32,


    /**
     * The row gutter in the text frame (area text only)
     * @type {number}
     */
    rowGutter: undefined,


    /**
     * The column gutter in the text frame (area text only)
     * @type {number}
     */
    columnGutter: undefined,


    /**
     * Flow text between linked frame horizontally first. (area text only)
     * @type {boolean}
     */
    flowLinksHorizontally: undefined,


    /**
     * The amount of spacing (path text only)
     * @type {number}
     */
    spacing: undefined,


    /**
     * Is the optical alignment active?
     * @type {boolean}
     */
    opticalAlignment: undefined,


    /**
     * The type of a text frame item.
     * @type {TextType}
     * @readonly
     */
    kind: TextType,


    /**
     * The content variable bound to this text art item.
     * @type {any}
     */
    contentVariable: undefined,


    /**
     * The orientation of the text in the frame.
     * @type {TextOrientation}
     */
    orientation: TextOrientation,


    /**
     * The path for the text frame (area and path text)
     * @type {TextPath}
     * @readonly
     */
    textPath: TextPath,


    /**
     * The position of the anchor point (start of base line for point text)
     * @type {Point}
     */
    anchor: Point,


    /**
     * The start position of text along a path, as a value relative to the path's segments (path text only)
     * @type {number}
     */
    startTValue: undefined,


    /**
     * The end position of text along a path, as a value relative to the path's segments (path text only)
     * @type {number}
     */
    endTValue: undefined,


    /**
     * The linked text frame preceding this one.
     * @type {TextFrameItem}
     */
    previousFrame: TextFrameItem,


    /**
     * The linked text frame following this one.
     * @type {TextFrameItem}
     */
    nextFrame: TextFrameItem,


    /**
     * The transformation matrix of the text frame object.
     * @type {Matrix}
     * @readonly
     */
    matrix: Matrix,


    /**
     * The type of a text anti-aliasing on text frame item.
     * @type {TextAntialias}
     */
    antialias: TextAntialias,


    /**
     * The first baseline offset type for text frame item (for Area Text only)
     * @type {FirstBaselineType}
     */
    firstBaseline: FirstBaselineType,


    /**
     * The first baseline offset minimum value for text frame item (for Area Text only)
     * @type {number}
     */
    firstBaselineMin: undefined,


    /**
     * All the characters in this text range.
     * @type {Characters}
     * @readonly
     */
    characters: Characters,


    /**
     * All the words in this text range.
     * @type {Words}
     * @readonly
     */
    words: Words,


    /**
     * All the lines in this text range.
     * @type {Lines}
     * @readonly
     */
    lines: Lines,


    /**
     * All the paragraphs in this text range.
     * @type {Paragraphs}
     * @readonly
     */
    paragraphs: Paragraphs,


    /**
     * All the text in this text range.
     * @type {TextRanges}
     * @readonly
     */
    textRanges: TextRanges,


    /**
     * All the insertion points in this text range.
     * @type {InsertionPoints}
     * @readonly
     */
    insertionPoints: InsertionPoints,



    /**
     * Move the object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return TextFrameItem
     */
    move: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return TextFrameItem
     */
    duplicate: function (relativeObject, insertionLocation) {
        
    },


    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Convert text item to path items.
     *
     * @return GroupItem
     */
    createOutline: function () {
        
    },


    /**
     * Convert Area Type Text Object To Point Type Object.
     *
     * @return TextFrameItem
     */
    convertAreaObjectToPointObject: function () {
        
    },


    /**
     * Convert Point Type Text Object To Area Type Object.
     *
     * @return TextFrameItem
     */
    convertPointObjectToAreaObject: function () {
        
    },


    /**
     * Generates the thumbnail with the properties of first character in the text frame.
     *
     * @param {string} [textString] The text string which is to be used in the thumbnail generation.
     * @param {number} [fontSize] The size in points of the text string.
     * @param {Color} [textColor] The color of the text string.
     * @param {File} [destinationPath] The location at which the thumbnail is to be stored.
     * @return undefined
     */
    generateThumbnailWithTextFrameProperties: function (textString, fontSize, textColor, destinationPath) {
        
    },


};

