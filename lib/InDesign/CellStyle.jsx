/*
 * A cell style.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var CellStyle = {


    /**
     * The unique ID of the CellStyle.
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
     * The parent of the CellStyle (a Document, Application or CellStyleGroup).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the CellStyle within its containing object.
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
     * The left inset of the graphic cell. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    graphicLeftInset: undefined,


    /**
     * The top inset of the graphic cell. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    graphicTopInset: undefined,


    /**
     * The right inset of the graphic cell. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    graphicRightInset: undefined,


    /**
     * The bottom inset of the graphic cell. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    graphicBottomInset: undefined,


    /**
     * If true, clips the graphic cell's content to width and height of the cell. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    clipContentToGraphicCell: undefined,


    /**
     * The top inset of the text cell. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    textTopInset: undefined,


    /**
     * The left inset of the text cell. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    textLeftInset: undefined,


    /**
     * The bottom inset of the text cell. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    textBottomInset: undefined,


    /**
     * The right inset of the text cell. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    textRightInset: undefined,


    /**
     * If true, clips the text cell's content to width and height of the cell. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    clipContentToTextCell: undefined,


    /**
     * The style that this style is based on. Can return: CellStyle or String.
     * @type {varies=any}
     */
    basedOn: undefined,


    /**
     * The paragraph style applied to the text. Can return: ParagraphStyle or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    appliedParagraphStyle: undefined,


    /**
     * The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientFillLength: undefined,


    /**
     * The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientFillAngle: undefined,


    /**
     * The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
     * @type {varies=any}
     */
    gradientFillStart: undefined,


    /**
     * The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    topInset: undefined,


    /**
     * The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftInset: undefined,


    /**
     * The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomInset: undefined,


    /**
     * The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightInset: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    fillColor: undefined,


    /**
     * The tint (as a percentage) of the fill of the object. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    fillTint: undefined,


    /**
     * If true, the fill of the object will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    overprintFill: undefined,


    /**
     * If true, draws a diagonal line starting from the top left. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    topLeftDiagonalLine: undefined,


    /**
     * If true, draws a diagonal line starting from the top right. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    topRightDiagonalLine: undefined,


    /**
     * If true, draws the diagonal line in front of cell contents. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    diagonalLineInFront: undefined,


    /**
     * The diagonal line stroke weight. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    diagonalLineStrokeWeight: undefined,


    /**
     * The stroke type of the diagonal line(s). Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    diagonalLineStrokeType: undefined,


    /**
     * The diagonal line color, specified as a swatch. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    diagonalLineStrokeColor: undefined,


    /**
     * The diagonal line tint (as a percentage). (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    diagonalLineStrokeTint: undefined,


    /**
     * If true, the diagonal line stroke will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    diagonalLineStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    diagonalLineStrokeGapColor: undefined,


    /**
     * The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    diagonalLineStrokeGapTint: undefined,


    /**
     * If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    diagonalLineStrokeGapOverprint: undefined,


    /**
     * If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    clipContentToCell: undefined,


    /**
     * The distance between the baseline of the text and the top inset of the cell. Can return: FirstBaseline enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    firstBaselineOffset: undefined,


    /**
     * The vertical alignment of cell. Can return: VerticalJustification enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    verticalJustification: undefined,


    /**
     * The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    paragraphSpacingLimit: undefined,


    /**
     * The space between the baseline of the text and the top inset of the frame or cell. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
     * @type {varies=any}
     */
    minimumFirstBaselineOffset: undefined,


    /**
     * The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rotationAngle: undefined,


    /**
     * The stroke weight of the left edge border stroke. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftEdgeStrokeWeight: undefined,


    /**
     * The stroke type of the left edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    leftEdgeStrokeType: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftEdgeStrokeColor: undefined,


    /**
     * The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftEdgeStrokeTint: undefined,


    /**
     * If true, the left edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftEdgeStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftEdgeStrokeGapColor: undefined,


    /**
     * The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftEdgeStrokeGapTint: undefined,


    /**
     * If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    leftEdgeStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the top edge border stroke. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    topEdgeStrokeWeight: undefined,


    /**
     * The stroke type of the top edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    topEdgeStrokeType: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    topEdgeStrokeColor: undefined,


    /**
     * The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    topEdgeStrokeTint: undefined,


    /**
     * If true, the top edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    topEdgeStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    topEdgeStrokeGapColor: undefined,


    /**
     * The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    topEdgeStrokeGapTint: undefined,


    /**
     * If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. . Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    topEdgeStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the right edge border stroke. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightEdgeStrokeWeight: undefined,


    /**
     * The stroke type of the right edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    rightEdgeStrokeType: undefined,


    /**
     * The color, specified as a swatch, of the right edge border stroke. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightEdgeStrokeColor: undefined,


    /**
     * The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightEdgeStrokeTint: undefined,


    /**
     * If true, the right edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightEdgeStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightEdgeStrokeGapColor: undefined,


    /**
     * The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightEdgeStrokeGapTint: undefined,


    /**
     * If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    rightEdgeStrokeGapOverprint: undefined,


    /**
     * The stroke weight of the bottom edge border stroke. Can return: Unit or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomEdgeStrokeWeight: undefined,


    /**
     * The stroke type of the bottom edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
     * @type {varies=any}
     */
    bottomEdgeStrokeType: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomEdgeStrokeColor: undefined,


    /**
     * The tint (as a percentage) of the bottom edge border stroke. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomEdgeStrokeTint: undefined,


    /**
     * If true, the bottom edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomEdgeStrokeOverprint: undefined,


    /**
     * The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomEdgeStrokeGapColor: undefined,


    /**
     * The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. Can return: Real or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomEdgeStrokeGapTint: undefined,


    /**
     * If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
     * @type {varies=any}
     */
    bottomEdgeStrokeGapOverprint: undefined,


    /**
     * The name of the style.
     * @type {string}
     */
    name: undefined,


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
     * @param {CellStyle} [replacingWith] The style to apply in place of the deleted style. (Optional)
     * @return undefined
     */
    remove: function (replacingWith) {
        
    },


    /**
     * Duplicates the CellStyle.
     *
     * @return CellStyle
     */
    duplicate: function () {
        
    },


    /**
     * Moves the style to the specified location.
     *
     * @param {LocationOptions} [to] The location relative to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional)
     * @return CellStyle
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
     * Generates a string which, if executed, will return the CellStyle.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return CellStyle
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

