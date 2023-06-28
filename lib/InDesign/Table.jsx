/*
 * A table.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Table = {


    /**
     * The XML element associated with the Table.
     * @type {XMLItem}
     * @readonly
     */
    associatedXMLElement: XMLItem,


    /**
     * The insertion point before the table in the story containing the table.
     * @type {InsertionPoint}
     * @readonly
     */
    storyOffset: InsertionPoint,


    /**
     * The index of the Table within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * Lists all page items contained by the Table.
     * @type {PageItem}
     * @readonly
     */
    allPageItems: PageItem,


    /**
     * Lists all graphics contained by the Table.
     * @type {Graphic}
     * @readonly
     */
    allGraphics: Graphic,


    /**
     * The unique ID of the Table.
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
     * The parent of the Table (a XMLElement, XmlStory, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or Cell).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


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
     * The number of header rows.
     * @type {number}
     */
    headerRowCount: undefined,


    /**
     * The number of footer rows.
     * @type {number}
     */
    footerRowCount: undefined,


    /**
     * The height of the Table. For a table or column, specifies the sum of the row heights.
     * @type {Measurement Unit (Number or String)=any}
     */
    height: undefined,


    /**
     * The width of the Table. For a table or row, specifies the sum of the column widths.
     * @type {Measurement Unit (Number or String)=any}
     */
    width: undefined,


    /**
     * The stroke weight of the table's top border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    topBorderStrokeWeight: undefined,


    /**
     * The stroke type of the top border. Can also accept: String.
     * @type {StrokeStyle}
     */
    topBorderStrokeType: StrokeStyle,


    /**
     * The color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke.
     * @type {Swatch}
     */
    topBorderStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the table's top border stroke. (Range: 0 to 100)
     * @type {number}
     */
    topBorderStrokeTint: undefined,


    /**
     * If true, the top border strokes will overprint.
     * @type {boolean}
     */
    topBorderStrokeOverprint: undefined,


    /**
     * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. Note: Valid only when top border stroke type is not solid.
     * @type {Swatch}
     */
    topBorderStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the gap color of the table's top border stroke. (Range: 0 to 100) Note: Valid only when top border stroke type is not solid.
     * @type {number}
     */
    topBorderStrokeGapTint: undefined,


    /**
     * If true, the gap of the top border stroke will overprint. Note: Valid only when top border stroke type is not solid.
     * @type {boolean}
     */
    topBorderStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the left border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    leftBorderStrokeWeight: undefined,


    /**
     * The stroke type of the left border. Can also accept: String.
     * @type {StrokeStyle}
     */
    leftBorderStrokeType: StrokeStyle,


    /**
     * The color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke.
     * @type {Swatch}
     */
    leftBorderStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the left border stroke. (Range: 0 to 100)
     * @type {number}
     */
    leftBorderStrokeTint: undefined,


    /**
     * If true, the left border stroke will overprint.
     * @type {boolean}
     */
    leftBorderStrokeOverprint: undefined,


    /**
     * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. Note: Valid only when left border stroke type is not solid.
     * @type {Swatch}
     */
    leftBorderStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the gap color of the left border stroke. (Range: 0 to 100) Note: Valid only when left border stroke type is not solid.
     * @type {number}
     */
    leftBorderStrokeGapTint: undefined,


    /**
     * If true, the gap of the left border stroke will overprint. Note: Valid only when left border stroke type is not solid.
     * @type {boolean}
     */
    leftBorderStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the bottom border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    bottomBorderStrokeWeight: undefined,


    /**
     * The stroke type of the bottom border. Can also accept: String.
     * @type {StrokeStyle}
     */
    bottomBorderStrokeType: StrokeStyle,


    /**
     * The color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke.
     * @type {Swatch}
     */
    bottomBorderStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the bottom border stroke. (Range: 0 to 100)
     * @type {number}
     */
    bottomBorderStrokeTint: undefined,


    /**
     * If true, the bottom border stroke will overprint.
     * @type {boolean}
     */
    bottomBorderStrokeOverprint: undefined,


    /**
     * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. Note: Valid only when bottom border stroke type is not solid.
     * @type {Swatch}
     */
    bottomBorderStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the gap color of the bottom border stroke. (Range: 0 to 100) Note: Valid only when bottom border stroke type is not solid.
     * @type {number}
     */
    bottomBorderStrokeGapTint: undefined,


    /**
     * If true, the gap of the bottom border stroke will overprint. Note: Valid only when bottom border stroke type is not solid.
     * @type {boolean}
     */
    bottomBorderStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the right border stroke.
     * @type {Measurement Unit (Number or String)=any}
     */
    rightBorderStrokeWeight: undefined,


    /**
     * The stroke type of the right border. Can also accept: String.
     * @type {StrokeStyle}
     */
    rightBorderStrokeType: StrokeStyle,


    /**
     * The color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke.
     * @type {Swatch}
     */
    rightBorderStrokeColor: Swatch,


    /**
     * The tint (as a percentage) of the right border stroke. (Range: 0 to 100)
     * @type {number}
     */
    rightBorderStrokeTint: undefined,


    /**
     * If true, the right border stroke will overprint.
     * @type {boolean}
     */
    rightBorderStrokeOverprint: undefined,


    /**
     * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. Note: Valid only when right border stroke type is not solid.
     * @type {Swatch}
     */
    rightBorderStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the gap color of the right border stroke. (Range: 0 to 100) Note: Valid only when right border stroke type is not solid.
     * @type {number}
     */
    rightBorderStrokeGapTint: undefined,


    /**
     * If true, the gap color of the right border stroke will overprint. Note: Valid only when right border stroke type is not solid.
     * @type {boolean}
     */
    rightBorderStrokeGapOverprint: undefined,


    /**
     * The space above the table.
     * @type {Measurement Unit (Number or String)=any}
     */
    spaceBefore: undefined,


    /**
     * The space below the table.
     * @type {Measurement Unit (Number or String)=any}
     */
    spaceAfter: undefined,


    /**
     * The number of body rows at the beginning of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater.
     * @type {number}
     */
    skipFirstAlternatingStrokeRows: undefined,


    /**
     * The number of body rows at the end of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater.
     * @type {number}
     */
    skipLastAlternatingStrokeRows: undefined,


    /**
     * The number of rows in the first alternating row strokes group.
     * @type {number}
     */
    startRowStrokeCount: undefined,


    /**
     * The color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater.
     * @type {Swatch}
     */
    startRowStrokeColor: Swatch,


    /**
     * The stroke weight of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater.
     * @type {Measurement Unit (Number or String)=any}
     */
    startRowStrokeWeight: undefined,


    /**
     * The stroke type of rows in the first alternating strokes group. Can also accept: String.
     * @type {StrokeStyle}
     */
    startRowStrokeType: StrokeStyle,


    /**
     * The tint (as a percentage) of the borders in the first alternating row strokes group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater.
     * @type {number}
     */
    startRowStrokeTint: undefined,


    /**
     * If true, the gap color of the row border stroke in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater.
     * @type {boolean}
     */
    startRowStrokeGapOverprint: undefined,


    /**
     * The stroke gap color of row borders in the first alternating row strokes group, specified as a swatch (color, gradient, tint, or mixed ink). Note: Valid when start row stroke count is 1 or greater.
     * @type {Swatch}
     */
    startRowStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the gap color of row borders in the first alternating rows group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater.
     * @type {number}
     */
    startRowStrokeGapTint: undefined,


    /**
     * If true, the row borders in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater.
     * @type {boolean}
     */
    startRowStrokeOverprint: undefined,


    /**
     * The number of rows in the second alternating row strokes group.
     * @type {number}
     */
    endRowStrokeCount: undefined,


    /**
     * The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater.
     * @type {Swatch}
     */
    endRowStrokeColor: Swatch,


    /**
     * The stroke weight of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater.
     * @type {Measurement Unit (Number or String)=any}
     */
    endRowStrokeWeight: undefined,


    /**
     * The stroke type of rows in the second alternating strokes group. Can also accept: String.
     * @type {StrokeStyle}
     */
    endRowStrokeType: StrokeStyle,


    /**
     * The tint (as a percentage) of the row borders in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater.
     * @type {number}
     */
    endRowStrokeTint: undefined,


    /**
     * If true, the rows in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater.
     * @type {boolean}
     */
    endRowStrokeOverprint: undefined,


    /**
     * The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating rows group. Note: Valid when end row stroke count is 1 or greater.
     * @type {Swatch}
     */
    endRowStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the gap color of rows in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater and end row stroke type is not solid.
     * @type {number}
     */
    endRowStrokeGapTint: undefined,


    /**
     * If true, the gap of the row borders in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater.
     * @type {boolean}
     */
    endRowStrokeGapOverprint: undefined,


    /**
     * The number of columns on the left of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater.
     * @type {number}
     */
    skipFirstAlternatingStrokeColumns: undefined,


    /**
     * The number of columns on the right side of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater.
     * @type {number}
     */
    skipLastAlternatingStrokeColumns: undefined,


    /**
     * The number of columns in the first alternating column strokes group.
     * @type {number}
     */
    startColumnStrokeCount: undefined,


    /**
     * The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group.
     * @type {Swatch}
     */
    startColumnStrokeColor: Swatch,


    /**
     * The stroke weight of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater.
     * @type {Measurement Unit (Number or String)=any}
     */
    startColumnStrokeWeight: undefined,


    /**
     * The stroke type of columns in the first alternating strokes group. Can also accept: String.
     * @type {StrokeStyle}
     */
    startColumnStrokeType: StrokeStyle,


    /**
     * The tint (as a percentage) of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater.
     * @type {number}
     */
    startColumnStrokeTint: undefined,


    /**
     * If true, the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater.
     * @type {boolean}
     */
    startColumnStrokeOverprint: undefined,


    /**
     * The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater.
     * @type {Swatch}
     */
    startColumnStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the gap color of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater.
     * @type {number}
     */
    startColumnStrokeGapTint: undefined,


    /**
     * If true, the gap of the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater.
     * @type {boolean}
     */
    startColumnStrokeGapOverprint: undefined,


    /**
     * The number of columns in the second alternating column strokes group.
     * @type {number}
     */
    endColumnStrokeCount: undefined,


    /**
     * The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
     * @type {Swatch}
     */
    endColumnStrokeColor: Swatch,


    /**
     * The stroke weight of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
     * @type {Measurement Unit (Number or String)=any}
     */
    endColumnStrokeWeight: undefined,


    /**
     * The stroke type of columns in the second alternating strokes group. Can also accept: String.
     * @type {StrokeStyle}
     */
    endColumnLineStyle: StrokeStyle,


    /**
     * The tint (as a percentage) of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater.
     * @type {number}
     */
    endColumnStrokeTint: undefined,


    /**
     * If true, the column borders in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater.
     * @type {boolean}
     */
    endColumnStrokeOverprint: undefined,


    /**
     * The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
     * @type {Swatch}
     */
    endColumnStrokeGapColor: Swatch,


    /**
     * The tint (as a percentage) of the gap color of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater.
     * @type {number}
     */
    endColumnStrokeGapTint: undefined,


    /**
     * If true, the gap of the column border stroke in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater.
     * @type {boolean}
     */
    endColumnStrokeGapOverprint: undefined,


    /**
     * If true, hides alternating row fills. If false, hides alternating column fills.
     * @type {boolean}
     */
    columnFillsPriority: undefined,


    /**
     * The number of body rows at the beginning of the table to skip before applying the row fill color. Note: Valid when alternating fills are defined for table rows.
     * @type {number}
     */
    skipFirstAlternatingFillRows: undefined,


    /**
     * The number of body rows at the end of the table in which to not apply the row fill color. Note: Valid when alternating fills are defined for table rows.
     * @type {number}
     */
    skipLastAlternatingFillRows: undefined,


    /**
     * The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows.
     * @type {Swatch}
     */
    startRowFillColor: Swatch,


    /**
     * The number of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows.
     * @type {number}
     */
    startRowFillCount: undefined,


    /**
     * The tint (as a percentage) of the rows in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows.
     * @type {number}
     */
    startRowFillTint: undefined,


    /**
     * If true, the rows in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows.
     * @type {boolean}
     */
    startRowFillOverprint: undefined,


    /**
     * The number of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows.
     * @type {number}
     */
    endRowFillCount: undefined,


    /**
     * The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows.
     * @type {Swatch}
     */
    endRowFillColor: Swatch,


    /**
     * The tint (as a percentage) of the rows in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows.
     * @type {number}
     */
    endRowFillTint: undefined,


    /**
     * If true, the rows in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows.
     * @type {boolean}
     */
    endRowFillOverprint: undefined,


    /**
     * The number of columns on the left side of the table to skip before applying the column fill color. Note: Valid when alternating fills are defined for table columns.
     * @type {number}
     */
    skipFirstAlternatingFillColumns: undefined,


    /**
     * The number columns on the right side of the table in which to not apply the column fill color. Note: Valid when alternating fills are defined for table columns.
     * @type {number}
     */
    skipLastAlternatingFillColumns: undefined,


    /**
     * The number of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns.
     * @type {number}
     */
    startColumnFillCount: undefined,


    /**
     * The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns.
     * @type {Swatch}
     */
    startColumnFillColor: Swatch,


    /**
     * The tint (as a percentage) of the columns in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns.
     * @type {number}
     */
    startColumnFillTint: undefined,


    /**
     * If true, the columns in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns.
     * @type {boolean}
     */
    startColumnFillOverprint: undefined,


    /**
     * The number of columns in the second alternating fills group. Note: Valid when alternating fills are defined for table columns.
     * @type {number}
     */
    endColumnFillCount: undefined,


    /**
     * The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the second alternating fill group. Note: Valid when alternating fills are defined for table columns.
     * @type {Swatch}
     */
    endColumnFillColor: Swatch,


    /**
     * The tint (as a percentage) of the columns in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns.
     * @type {number}
     */
    endColumnFillTint: undefined,


    /**
     * If true, the columns in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns.
     * @type {boolean}
     */
    endColumnFillOverprint: undefined,


    /**
     * The header placement.
     * @type {HeaderFooterBreakTypes}
     */
    breakHeaders: HeaderFooterBreakTypes,


    /**
     * The footer placement.
     * @type {HeaderFooterBreakTypes}
     */
    breakFooters: HeaderFooterBreakTypes,


    /**
     * If true, skips the first occurrence of header rows.
     * @type {boolean}
     */
    skipFirstHeader: undefined,


    /**
     * If true, skips the last occurrence of footer rows.
     * @type {boolean}
     */
    skipLastFooter: undefined,


    /**
     * The order in which to display row and column strokes at corners.
     * @type {StrokeOrderTypes}
     */
    strokeOrder: StrokeOrderTypes,


    /**
     * The pattern for alternating fills.
     * @type {AlternatingFillsTypes}
     */
    alternatingFills: AlternatingFillsTypes,


    /**
     * The contents to place in cells, specified as an array whose first item populates the top left cell and whose second item populates the next cell to the right, and so on until each cell in the top row is populated, at which point the next item populates the left-most cell in the second row, and so on. Note: If the array contains fewer strings than the table contains cells, the remaining cells are left blank. Can return: Array of Strings or SpecialCharacters enumerators. Can also accept: Array of Strings, SpecialCharacters enumerators or NothingEnum enumerators.
     * @type {varies=any}
     */
    contents: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


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
     * The number of body rows.
     * @type {number}
     */
    bodyRowCount: undefined,


    /**
     * The number of columns.
     * @type {number}
     */
    columnCount: undefined,


    /**
     * The name of the Table; this is an alias to the Table's label property.
     * @type {string}
     */
    name: undefined,


    /**
     * The table style applied to the table. Can also accept: String.
     * @type {TableStyle}
     */
    appliedTableStyle: TableStyle,


    /**
     * The direction of the the table
     * @type {TableDirectionOptions}
     */
    tableDirection: TableDirectionOptions,


    /**
     * If true, then the table will show collapsed in story and galley views.
     * @type {boolean}
     */
    displayCollapsed: undefined,


    /**
     * Specifies the order the table cells will display in when viewing in story and galley views.
     * @type {DisplayOrderOptions}
     */
    displayOrder: DisplayOrderOptions,


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
     * Associates the page item with the specified XML element while preserving existing content.
     *
     * @param {XMLElement} [using] The XML element.
     * @return undefined
     */
    markup: function (using) {
        
    },


    /**
     * Recomposes the text in the Table.
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
     * Deletes the Table.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Unmerges all merged cells in the Table.
     *
     * @return Cell
     */
    unmerge: function () {
        
    },


    /**
     * Converts the table to text.
     *
     * @param {string} [columnSeparator] The character to insert between the each column's content in the converted text. Note: Can be defined as any single character, such as a letter, number, or punctuation mark, or by typing a space or tab. Use the actual character rather than its name, such as ',' rather than 'Comma'. Precede double or single quotes or a backslash with an extra backslash as an escape character. For paragraphs, use ^p. (Optional)
     * @param {string} [rowSeparator] The character to use to separate each row's content in the converted text. Note: Can be defined as any single character, such as a letter, number, or punctuation mark, or by typing a space or tab. Use the actual character rather than its name, such as , rather than Comma. Precede double or single quotes or a backslash with an extra backslash as an escape character. For paragraphs, use ^p. (Optional)
     * @return Text
     */
    convertToText: function (columnSeparator, rowSeparator) {
        
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
     * Clear Table Style Overrides
     *
     * @return undefined
     */
    clearTableStyleOverrides: function () {
        
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
     * @param {SelectionOptions} [existingSelection] The selection status of the Table in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
    },


    /**
     * Generates a string which, if executed, will return the Table.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Table
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

