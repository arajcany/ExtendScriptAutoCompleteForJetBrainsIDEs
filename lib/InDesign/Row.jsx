/*
 * A table row.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Row = {


    /**
     * The name of the Row.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The index of the Row within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * The number of rows that the object spans.
     * @type {number}
     * @readonly
     */
    rowSpan: undefined,


    /**
     * The number of columns that the object spans.
     * @type {number}
     * @readonly
     */
    columnSpan: undefined,


    /**
     * If true, the story has overset text.
     * @type {boolean}
     * @readonly
     */
    overflows: undefined,


    /**
     * The parent row of the cell.
     * @type {Row}
     * @readonly
     */
    parentRow: Row,


    /**
     * The parent column of the cell.
     * @type {Column}
     * @readonly
     */
    parentColumn: Column,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Row (a Table).
     * @type {Table}
     * @readonly
     */
    parent: Table,


    /**
     * A collection of table cells.
     * @type {Cells}
     * @readonly
     */
    cells: Cells,


    /**
     * A collection of table rows.
     * @type {Rows}
     * @readonly
     */
    rows: Rows,


    /**
     * A collection of table columns.
     * @type {Columns}
     * @readonly
     */
    columns: Columns,


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
     * The height of the Row. For a table or column, specifies the sum of the row heights.
     * @type {Measurement Unit (Number or String)=any}
     */
    height: undefined,


    /**
     * The width of the Row. For a table or row, specifies the sum of the column widths.
     * @type {Measurement Unit (Number or String)=any}
     */
    width: undefined,


    /**
     * The text contents. For rows or columns, when specified as a string, the sting populates each cell in the row or column; when specified as an array, the first value in the array populates the left-most cell in the row or the top-most cell in the column; the next value populates the next cell to the right (for rows) or the next lowest cell (for columns), and so on. Can return: PageItem, String, SpecialCharacters enumerator or Array of Strings, SpecialCharacters enumerators or PageItems. Can also accept: PageItem, NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators, NothingEnum enumerators or PageItems.
     * @type {varies=any}
     */
    contents: undefined,


    /**
     * The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object.
     * @type {number}
     */
    gradientFillLength: undefined,


    /**
     * The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180)
     * @type {number}
     */
    gradientFillAngle: undefined,


    /**
     * The starting point (in page coordinates) of a gradient applied to the fill of the Row, in the format [x, y].
     * @type {Measurement Unit (Number or String)=any}
     */
    gradientFillStart: undefined,


    /**
     * The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset
     * @type {Measurement Unit (Number or String)=any}
     */
    topInset: undefined,


    /**
     * The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset
     * @type {Measurement Unit (Number or String)=any}
     */
    leftInset: undefined,


    /**
     * The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomInset: undefined,


    /**
     * The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset
     * @type {Measurement Unit (Number or String)=any}
     */
    rightInset: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. Can also accept: String.
     * @type {Swatch}
     */
    fillColor: Swatch,


    /**
     * The tint (as a percentage) of the fill of the object.
     * @type {number}
     */
    fillTint: undefined,


    /**
     * If true, the fill of the object will overprint.
     * @type {boolean}
     */
    overprintFill: undefined,


    /**
     * If true, draws a diagonal line starting from the top left.
     * @type {boolean}
     */
    topLeftDiagonalLine: undefined,


    /**
     * If true, draws a diagonal line starting from the top right.
     * @type {boolean}
     */
    topRightDiagonalLine: undefined,


    /**
     * If true, draws the diagonal line in front of cell contents.
     * @type {boolean}
     */
    diagonalLineInFront: undefined,


    /**
     * The diagonal line stroke weight.
     * @type {Measurement Unit (Number or String)=any}
     */
    diagonalLineStrokeWeight: undefined,


    /**
     * The stroke type of the diagonal line(s). Can also accept: String.
     * @type {StrokeStyle}
     */
    diagonalLineStrokeType: StrokeStyle,


    /**
     * The diagonal line color, specified as a swatch.
     * @type {Swatch}
     */
    diagonalLineStrokeColor: Swatch,


    /**
     * The diagonal line tint (as a percentage). (Range: 0 to 100)
     * @type {number}
     */
    diagonalLineStrokeTint: undefined,


    /**
     * If true, the diagonal line stroke will overprint.
     * @type {boolean}
     */
    diagonalLineStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid.
     * @type {Swatch}
     */
    diagonalLineStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid.
     * @type {number}
     */
    diagonalLineStrokeGapTint: undefined,


    /**
     * If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid.
     * @type {boolean}
     */
    diagonalLineStrokeGapOverprint: undefined,


    /**
     * If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell
     * @type {boolean}
     */
    clipContentToCell: undefined,


    /**
     * The distance between the baseline of the text and the top inset of the cell.
     * @type {FirstBaseline}
     */
    firstBaselineOffset: FirstBaseline,


    /**
     * The vertical alignment of cell.
     * @type {VerticalJustification}
     */
    verticalJustification: VerticalJustification,


    /**
     * The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified.
     * @type {Measurement Unit (Number or String)=any}
     */
    paragraphSpacingLimit: undefined,


    /**
     * The space between the baseline of the text and the top inset of the frame or cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    minimumFirstBaselineOffset: undefined,


    /**
     * The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270.
     * @type {number}
     */
    rotationAngle: undefined,


    /**
     * The stroke weight of the left edge border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    leftEdgeStrokeWeight: undefined,


    /**
     * The stroke type of the left edge. Can also accept: String.
     * @type {StrokeStyle}
     */
    leftEdgeStrokeType: StrokeStyle,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke.
     * @type {Swatch}
     */
    leftEdgeStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100)
     * @type {number}
     */
    leftEdgeStrokeTint: undefined,


    /**
     * If true, the left edge border stroke will overprint.
     * @type {boolean}
     */
    leftEdgeStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid.
     * @type {Swatch}
     */
    leftEdgeStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid.
     * @type {number}
     */
    leftEdgeStrokeGapTint: undefined,


    /**
     * If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid.
     * @type {boolean}
     */
    leftEdgeStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the top edge border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    topEdgeStrokeWeight: undefined,


    /**
     * The stroke type of the top edge. Can also accept: String.
     * @type {StrokeStyle}
     */
    topEdgeStrokeType: StrokeStyle,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke.
     * @type {Swatch}
     */
    topEdgeStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100)
     * @type {number}
     */
    topEdgeStrokeTint: undefined,


    /**
     * If true, the top edge border stroke will overprint.
     * @type {boolean}
     */
    topEdgeStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid.
     * @type {Swatch}
     */
    topEdgeStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid.
     * @type {number}
     */
    topEdgeStrokeGapTint: undefined,


    /**
     * If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid.
     * @type {boolean}
     */
    topEdgeStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the right edge border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    rightEdgeStrokeWeight: undefined,


    /**
     * The stroke type of the right edge. Can also accept: String.
     * @type {StrokeStyle}
     */
    rightEdgeStrokeType: StrokeStyle,


    /**
     * The color, specified as a swatch, of the right edge border stroke.
     * @type {Swatch}
     */
    rightEdgeStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100)
     * @type {number}
     */
    rightEdgeStrokeTint: undefined,


    /**
     * If true, the right edge border stroke will overprint.
     * @type {boolean}
     */
    rightEdgeStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid.
     * @type {Swatch}
     */
    rightEdgeStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid.
     * @type {number}
     */
    rightEdgeStrokeGapTint: undefined,


    /**
     * If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid.
     * @type {boolean}
     */
    rightEdgeStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the bottom edge border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomEdgeStrokeWeight: undefined,


    /**
     * The stroke type of the bottom edge. Can also accept: String.
     * @type {StrokeStyle}
     */
    bottomEdgeStrokeType: StrokeStyle,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke.
     * @type {Swatch}
     */
    bottomEdgeStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the bottom edge border stroke.
     * @type {number}
     */
    bottomEdgeStrokeTint: undefined,


    /**
     * If true, the bottom edge border stroke will overprint.
     * @type {boolean}
     */
    bottomEdgeStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid.
     * @type {Swatch}
     */
    bottomEdgeStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid.
     * @type {number}
     */
    bottomEdgeStrokeGapTint: undefined,


    /**
     * If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid.
     * @type {boolean}
     */
    bottomEdgeStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the inner row border strokes.
     * @type {Measurement Unit (Number or String)=any}
     */
    innerRowStrokeWeight: undefined,


    /**
     * The stroke type of the inner row. Can also accept: String.
     * @type {StrokeStyle}
     */
    innerRowStrokeType: StrokeStyle,


    /**
     * The color, specified as a swatch, of the inner row border stroke.
     * @type {Swatch}
     */
    innerRowStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the inner row border stroke. (Range: 0 to 100)
     * @type {number}
     */
    innerRowStrokeTint: undefined,


    /**
     * If true, the inner row border stroke will overprint.
     * @type {boolean}
     */
    innerRowStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the inner row border stroke. Note: Not valid when inner row stroke type is solid.
     * @type {Swatch}
     */
    innerRowStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the inner row border stroke. (Range: 0 to 100) Note: Not valid when inner row stroke type is solid.
     * @type {number}
     */
    innerRowStrokeGapTint: undefined,


    /**
     * If true, the gap color of the inner row border stroke will overprint. Note: Not valid when inner row stroke type is solid.
     * @type {boolean}
     */
    innerRowStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the inner column border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    innerColumnStrokeWeight: undefined,


    /**
     * The stroke type of the inner column. Can also accept: String.
     * @type {StrokeStyle}
     */
    innerColumnStrokeType: StrokeStyle,


    /**
     * The color, specified as a swatch, of the inner column border stroke.
     * @type {Swatch}
     */
    innerColumnStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the inner column border stroke. (Range: 0 to 100)
     * @type {number}
     */
    innerColumnStrokeTint: undefined,


    /**
     * If true, the inner column border stroke will overprint.
     * @type {boolean}
     */
    innerColumnStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the inner column border stroke. Note: Not valid when inner column stroke type is solid.
     * @type {Swatch}
     */
    innerColumnStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the inner column border stroke gap color. (Range: 0 to 100) Note: Not valid when inner column stroke type is solid.
     * @type {number}
     */
    innerColumnStrokeGapTint: undefined,


    /**
     * If true, the gap color of the inner column border stroke will overprint. Note: Not valid when inner column stroke type is solid.
     * @type {boolean}
     */
    innerColumnStrokeGapOverprint: undefined,


    /**
     * The minimum height of the cells in the Row. Note: When auto grow is true, cells can automatically grow larger than this amount when content is added. Also, the minimum height can affect redistribution.
     * @type {Measurement Unit (Number or String)=any}
     */
    minimumHeight: undefined,


    /**
     * The maximum height to which cells in the Row may grow. Note: The maximum height cannot be exceeded even when auto grow is set to true. Also, the maximum height can affect redistribution.
     * @type {Measurement Unit (Number or String)=any}
     */
    maximumHeight: undefined,


    /**
     * If true, keeps the row with the next row when the table is split across text frames or pages.
     * @type {boolean}
     */
    keepWithNextRow: undefined,


    /**
     * Indicates where to start the row.
     * @type {StartParagraph}
     */
    startRow: StartParagraph,


    /**
     * If true, the height of the cell or the cells in the Row can increase or decrease automatically to fit cell content. Note: Allows cells to grow or shrink to the maximum or minimum height, if specified.
     * @type {boolean}
     */
    autoGrow: undefined,


    /**
     * The row type.
     * @type {RowTypes}
     */
    rowType: RowTypes,


    /**
     * The left inset of the graphic cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    graphicLeftInset: undefined,


    /**
     * The top inset of the graphic cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    graphicTopInset: undefined,


    /**
     * The right inset of the graphic cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    graphicRightInset: undefined,


    /**
     * The bottom inset of the graphic cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    graphicBottomInset: undefined,


    /**
     * If true, clips the graphic cell's content to width and height of the cell.
     * @type {boolean}
     */
    clipContentToGraphicCell: undefined,


    /**
     * The top inset of the text cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    textTopInset: undefined,


    /**
     * The left inset of the text cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    textLeftInset: undefined,


    /**
     * The bottom inset of the text cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    textBottomInset: undefined,


    /**
     * The right inset of the text cell.
     * @type {Measurement Unit (Number or String)=any}
     */
    textRightInset: undefined,


    /**
     * If true, clips the text cell's content to width and height of the cell.
     * @type {boolean}
     */
    clipContentToTextCell: undefined,


    /**
     * The direction of the text in the cell.
     * @type {HorizontalOrVertical}
     */
    writingDirection: HorizontalOrVertical,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Converts text to outlines. Each line of text becomes a polygon object. When the converted text is a single letter that has no internal spaces or detached parts, the polygon contains only a single path. Note: To determine whether a font allows the creation of outlines, see allow outlines.
     *
     * @param {boolean} [deleteOriginal] If true, deletes the original text. If false, creates the outlines as separate object(s) on top of the text.  (Optional) (default: true)
     * @return PageItem
     */
    createOutlines: function (deleteOriginal) {
        
    },


    /**
     * Recomposes the text in the Row.
     *
     * @return undefined
     */
    recompose: function () {
        
    },


    /**
     * Finds text that matches the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findText: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value and replaces the text with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeText: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findGrep: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find what value and replaces the text with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeGrep: function (reverseOrder) {
        
    },


    /**
     * Finds glyphs that match the find what value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findGlyph: function (reverseOrder) {
        
    },


    /**
     * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeGlyph: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find character type value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    findTransliterate: function (reverseOrder) {
        
    },


    /**
     * Finds text that matches the find character type value and replaces the text with the change character type value.
     *
     * @param {boolean} [reverseOrder] If true, returns the results in reverse order. (Optional)
     * @return Text
     */
    changeTransliterate: function (reverseOrder) {
        
    },


    /**
     * Deletes the Row.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Merges the cells.
     *
     * @param {varies=any} [withXYZ] The cell(s) to merge with. Can accept: Cell, Row or Column. (Optional)
     * @return Cell
     */
    merge: function (withXYZ) {
        
    },


    /**
     * Unmerges all merged cells in the Row.
     *
     * @return Cell
     */
    unmerge: function () {
        
    },


    /**
     * Splits the cell along the specified axis.
     *
     * @param {HorizontalOrVertical} [using] The direction in which to split the cell.
     * @return undefined
     */
    split: function (using) {
        
    },


    /**
     * Redistributes the specified range of Rows so that the Rows have a uniform size. Note: The maximum or minimum height or width specified for some of the cells in the range may prevent them from being exactly even.
     *
     * @param {HorizontalOrVertical} [using] The direction in which to redistribute.
     * @param {varies=any} [thru] The last Row in the range. Can accept: Cell, Column or Row. (Optional)
     * @return undefined
     */
    redistribute: function (using, thru) {
        
    },


    /**
     * Selects the object.
     *
     * @param {SelectionOptions} [existingSelection] The selection status of the Row in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
    },


    /**
     * Generates a string which, if executed, will return the Row.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Row
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

