/*
 * A table cell.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Cell = {


    /**
     * The XML element associated with the Cell.
     * @type {XMLItem}
     * @readonly
     */
    associatedXMLElement: XMLItem,


    /**
     * The unique ID of the Cell.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * The name of the Cell.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The index of the Cell within its containing object.
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
     * Lists all page items contained by the Cell.
     * @type {PageItem}
     * @readonly
     */
    allPageItems: PageItem,


    /**
     * Lists all graphics contained by the Cell.
     * @type {Graphic}
     * @readonly
     */
    allGraphics: Graphic,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Cell (a XMLElement, Cell, Table, Column or Row).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * A collection of text objects.
     * @type {Texts}
     * @readonly
     */
    texts: Texts,


    /**
     * A collection of characters.
     * @type {Characters}
     * @readonly
     */
    characters: Characters,


    /**
     * A collection of words.
     * @type {Words}
     * @readonly
     */
    words: Words,


    /**
     * A collection of lines.
     * @type {Lines}
     * @readonly
     */
    lines: Lines,


    /**
     * A collection of text columns.
     * @type {TextColumns}
     * @readonly
     */
    textColumns: TextColumns,


    /**
     * A collection of paragraphs.
     * @type {Paragraphs}
     * @readonly
     */
    paragraphs: Paragraphs,


    /**
     * A collection of insertion points.
     * @type {InsertionPoints}
     * @readonly
     */
    insertionPoints: InsertionPoints,


    /**
     * A collection of text style ranges.
     * @type {TextStyleRanges}
     * @readonly
     */
    textStyleRanges: TextStyleRanges,


    /**
     * A collection of footnotes.
     * @type {Footnotes}
     * @readonly
     */
    footnotes: Footnotes,


    /**
     * A collection of endnotes.
     * @type {Endnotes}
     * @readonly
     */
    endnotes: Endnotes,


    /**
     * A collection of text variable instances.
     * @type {TextVariableInstances}
     * @readonly
     */
    textVariableInstances: TextVariableInstances,


    /**
     * A collection of tables.
     * @type {Tables}
     * @readonly
     */
    tables: Tables,


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
     * A collection of ellipses.
     * @type {Ovals}
     * @readonly
     */
    ovals: Ovals,


    /**
     * The spline items collection.
     * @type {SplineItems}
     * @readonly
     */
    splineItems: SplineItems,


    /**
     * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,


    /**
     * A collection of rectangles.
     * @type {Rectangles}
     * @readonly
     */
    rectangles: Rectangles,


    /**
     * A collection of graphic lines.
     * @type {GraphicLines}
     * @readonly
     */
    graphicLines: GraphicLines,


    /**
     * A collection of text frames.
     * @type {TextFrames}
     * @readonly
     */
    textFrames: TextFrames,


    /**
     * A collection of polygons.
     * @type {Polygons}
     * @readonly
     */
    polygons: Polygons,


    /**
     * A collection of endnote text frames.
     * @type {EndnoteTextFrames}
     * @readonly
     */
    endnoteTextFrames: EndnoteTextFrames,


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
     * A collection of changes.
     * @type {Changes}
     * @readonly
     */
    changes: Changes,


    /**
     * A collection of notes.
     * @type {Notes}
     * @readonly
     */
    notes: Notes,


    /**
     * A collection of groups.
     * @type {Groups}
     * @readonly
     */
    groups: Groups,


    /**
     * EPSTexts
     * @type {EPSTexts}
     * @readonly
     */
    epstexts: EPSTexts,


    /**
     * A collection of form fields.
     * @type {FormFields}
     * @readonly
     */
    formFields: FormFields,


    /**
     * A collection of buttons.
     * @type {Buttons}
     * @readonly
     */
    buttons: Buttons,


    /**
     * A collection of multi-state objects.
     * @type {MultiStateObjects}
     * @readonly
     */
    multiStateObjects: MultiStateObjects,


    /**
     * A collection of checkboxes.
     * @type {CheckBoxes}
     * @readonly
     */
    checkBoxes: CheckBoxes,


    /**
     * A collection of comboboxes.
     * @type {ComboBoxes}
     * @readonly
     */
    comboBoxes: ComboBoxes,


    /**
     * A collection of listboxes.
     * @type {ListBoxes}
     * @readonly
     */
    listBoxes: ListBoxes,


    /**
     * A collection of radio buttons.
     * @type {RadioButtons}
     * @readonly
     */
    radioButtons: RadioButtons,


    /**
     * A collection of text boxes.
     * @type {TextBoxes}
     * @readonly
     */
    textBoxes: TextBoxes,


    /**
     * A collection of signature fields.
     * @type {SignatureFields}
     * @readonly
     */
    signatureFields: SignatureFields,


    /**
     * A collection of hidden text objects.
     * @type {HiddenTexts}
     * @readonly
     */
    hiddenTexts: HiddenTexts,


    /**
     * The height of the Cell. For a table or column, specifies the sum of the row heights.
     * @type {Measurement Unit (Number or String)=any}
     */
    height: undefined,


    /**
     * The width of the Cell. For a table or row, specifies the sum of the column widths.
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
     * The starting point (in page coordinates) of a gradient applied to the fill of the Cell, in the format [x, y].
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
     * The minimum height of the cells in the Cell. Note: When auto grow is true, cells can automatically grow larger than this amount when content is added. Also, the minimum height can affect redistribution.
     * @type {Measurement Unit (Number or String)=any}
     */
    minimumHeight: undefined,


    /**
     * The maximum height to which cells in the Cell may grow. Note: The maximum height cannot be exceeded even when auto grow is set to true. Also, the maximum height can affect redistribution.
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
     * If true, the height of the cell or the cells in the Cell can increase or decrease automatically to fit cell content. Note: Allows cells to grow or shrink to the maximum or minimum height, if specified.
     * @type {boolean}
     */
    autoGrow: undefined,


    /**
     * The row type.
     * @type {RowTypes}
     */
    rowType: RowTypes,


    /**
     * The content type of cell.
     * @type {CellTypeEnum}
     */
    cellType: CellTypeEnum,


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
     * The cell style applied to the cell. Can also accept: String.
     * @type {CellStyle}
     */
    appliedCellStyle: CellStyle,


    /**
     * The direction of the text in the cell.
     * @type {HorizontalOrVertical}
     */
    writingDirection: HorizontalOrVertical,


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
     * Converts text to outlines. Each line of text becomes a polygon object. When the converted text is a single letter that has no internal spaces or detached parts, the polygon contains only a single path. Note: To determine whether a font allows the creation of outlines, see allow outlines.
     *
     * @param {boolean} [deleteOriginal] If true, deletes the original text. If false, creates the outlines as separate object(s) on top of the text.  (Optional) (default: true)
     * @return PageItem
     */
    createOutlines: function (deleteOriginal) {
        
    },


    /**
     * Tag the object or the parent story using default tags defined in XML preference.
     *
     * @return undefined
     */
    autoTag: function () {
        
    },


    /**
     * Recomposes the text in the Cell.
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
     * Deletes the Cell.
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
     * Unmerges all merged cells in the Cell.
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
     * Convert cell type. The new cell type parameter is required. Preserve data is optional
     *
     * @param {CellTypeEnum} [finalCellType] Cell Type to which the cell is to be converted
     * @param {boolean} [flagToPreserveData] If true then the data inside the cell is preserved. While converting graphic cell to text cell, page item becomes inline.  (Optional) (default: false)
     * @return undefined
     */
    convertCellType: function (finalCellType, flagToPreserveData) {
        
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
     * Clear Cell Style Overrides
     *
     * @param {boolean} [clearingOverridesThroughRootCellStyle] If true, clears all overrides, whether or not they are defined in the underlying cell style (Optional) (default: false)
     * @return undefined
     */
    clearCellStyleOverrides: function (clearingOverridesThroughRootCellStyle) {
        
    },


    /**
     * Convert bullets and numbering to text.
     *
     * @return undefined
     */
    convertBulletsAndNumberingToText: function () {
        
    },


    /**
     * Selects the object.
     *
     * @param {SelectionOptions} [existingSelection] The selection status of the Cell in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
    },


    /**
     * Generates a string which, if executed, will return the Cell.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Cell
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

