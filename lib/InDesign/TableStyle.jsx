/*
 * A table style.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var TableStyle = {


    /**
     * The unique ID of the TableStyle.
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
     * The parent of the TableStyle (a Document, Application or TableStyleGroup).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the TableStyle within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * The name of the TableStyle.
     * @type {string}
     */
    name: undefined,


    /**
     * The style that this style is based on. Can return: TableStyle or String.
     * @type {varies=any}
     */
    basedOn: undefined,


    /**
     * The order in which to display row and column strokes at corners.
     * @type {StrokeOrderTypes}
     */
    strokeOrder: StrokeOrderTypes,


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
     * If true, use the cell style of the body region for the header region.
     * @type {boolean}
     */
    headerRegionSameAsBodyRegion: undefined,


    /**
     * If true, uses the cell style of the body region for the footer region.
     * @type {boolean}
     */
    footerRegionSameAsBodyRegion: undefined,


    /**
     * If true, uses the cell style of the body region for the left column region.
     * @type {boolean}
     */
    leftColumnRegionSameAsBodyRegion: undefined,


    /**
     * If true, uses the cell style of the body region for the right column region.
     * @type {boolean}
     */
    rightColumnRegionSameAsBodyRegion: undefined,


    /**
     * The cell style of the header region. Can also accept: String.
     * @type {CellStyle}
     */
    headerRegionCellStyle: CellStyle,


    /**
     * The cell style of the footer region. Can also accept: String.
     * @type {CellStyle}
     */
    footerRegionCellStyle: CellStyle,


    /**
     * The cell style of the left column region. Can also accept: String.
     * @type {CellStyle}
     */
    leftColumnRegionCellStyle: CellStyle,


    /**
     * The cell style of the right column region. Can also accept: String.
     * @type {CellStyle}
     */
    rightColumnRegionCellStyle: CellStyle,


    /**
     * The cell style of the body region. Can also accept: String.
     * @type {CellStyle}
     */
    bodyRegionCellStyle: CellStyle,


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
     * Deletes the style.
     *
     * @param {TableStyle} [replacingWith] The style to apply in place of the deleted style. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
    },


    /**
     * Duplicates the TableStyle.
     *
     * @return TableStyle
     */
    duplicate: function () {
        
    },


    /**
     * Moves the style to the specified location.
     *
     * @param {LocationOptions} [to] The location relative to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional)
     * @return TableStyle
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
     * Generates a string which, if executed, will return the TableStyle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return TableStyle
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

