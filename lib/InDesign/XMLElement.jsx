/*
 * An XML element.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var XMLElement = {


    /**
     * The insertion point before the table in the story containing the table.
     * @type {InsertionPoint}
     * @readonly
     */
    storyOffset: InsertionPoint,


    /**
     * The story that contains the text.
     * @type {Story}
     * @readonly
     */
    parentStory: Story,


    /**
     * The text content or page item referred to by the element. Can return: Text, Story, PageItem, Movie, Sound, Graphic, Table or Cell.
     * @type {varies=any}
     * @readonly
     */
    xmlContent: undefined,


    /**
     * The unique ID of the XMLElement.
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
     * The parent of the XMLElement (a Document or XMLElement).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the XMLElement within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of XML attributes.
     * @type {XMLAttributes}
     * @readonly
     */
    xmlAttributes: XMLAttributes,


    /**
     * A collection of XML elements.
     * @type {XMLElements}
     * @readonly
     */
    xmlElements: XMLElements,


    /**
     * A collection of XML items.
     * @type {XMLItems}
     * @readonly
     */
    xmlItems: XMLItems,


    /**
     * A collection of XML comments.
     * @type {XMLComments}
     * @readonly
     */
    xmlComments: XMLComments,


    /**
     * A collection of XML instructions.
     * @type {XMLInstructions}
     * @readonly
     */
    xmlInstructions: XMLInstructions,


    /**
     * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
     * @type {PageItems}
     * @readonly
     */
    pageItems: PageItems,


    /**
     * A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).
     * @type {Images}
     * @readonly
     */
    images: Images,


    /**
     * A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).
     * @type {Graphics}
     * @readonly
     */
    graphics: Graphics,


    /**
     * A collection of EPS files.
     * @type {EPSs}
     * @readonly
     */
    epss: EPSs,


    /**
     * A collection of WMF graphics.
     * @type {WMFs}
     * @readonly
     */
    wmfs: WMFs,


    /**
     * A collection of PICT graphics.
     * @type {PICTs}
     * @readonly
     */
    picts: PICTs,


    /**
     * A collection of PDF files.
     * @type {PDFs}
     * @readonly
     */
    pdfs: PDFs,


    /**
     * A collection of stories.
     * @type {Stories}
     * @readonly
     */
    stories: Stories,


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
     * A collection of SVG files.
     * @type {SVGs}
     * @readonly
     */
    svgs: SVGs,


    /**
     * The XML tag applied to the element. Can also accept: String.
     * @type {XMLTag}
     */
    markupTag: XMLTag,


    /**
     * The contents of the text. Can return: String or SpecialCharacters enumerator.
     * @type {varies=any}
     */
    contents: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Stores the object in the specified library.
     *
     * @param {Library} [using] The library in which to store the object.
     * @param {Object} [withProperties] Initial values for properties of the new XMLElement (Optional)
     * @return Asset
     */
    store: function (using, withProperties) {
        
    },


    /**
     * Moves the element to the specified location.
     *
     * @param {LocationOptions} [to] The location in relation to the reference object or within the containing object.
     * @param {varies=any} [reference] The reference object. Note: Required when the to parameter specifies before or after. . Can accept: XMLItem or Text. (Optional)
     * @return XMLElement
     */
    move: function (to, reference) {
        
    },


    /**
     * Duplicates the XMLElement.
     *
     * @return XMLElement
     */
    duplicate: function () {
        
    },


    /**
     * Associates the object with the specified XML element while preserving existing content.
     *
     * @param {varies=any} [using] The object to mark up. Can accept: PageItem, Movie, Sound, Graphic, Story, Text or Table.
     * @return undefined
     */
    markup: function (using) {
        
    },


    /**
     * Places XML content into the story, replacing the existing content.
     *
     * @param {varies=any} [using] The object to place into. Can accept: Story, PageItem, Graphic, Movie or Sound.
     * @return undefined
     */
    placeXML: function (using) {
        
    },


    /**
     * Untags an element.
     *
     * @return undefined
     */
    untag: function () {
        
    },


    /**
     * Validates the element against a DTD.
     *
     * @param {number} [maximumErrors] The maximum number of validation errors to generate. (Optional) (default: 250)
     * @return ValidationError
     */
    validate: function (maximumErrors) {
        
    },


    /**
     * Applies the specified paragraph style to the text content of the XMLElement.
     *
     * @param {varies=any} [using] The paragraph style to apply. Can accept: String or ParagraphStyle.
     * @param {boolean} [clearingOverrides] If true, clears any attributes before applying the style. (Optional) (default: true)
     * @return undefined
     */
    applyParagraphStyle: function (using, clearingOverrides) {
        
    },


    /**
     * Applies the specified character style to the text content of the XMLElement.
     *
     * @param {varies=any} [using] The character style to apply. Can accept: String or CharacterStyle.
     * @return undefined
     */
    applyCharacterStyle: function (using) {
        
    },


    /**
     * Converts the XMLElement to an attribute of its parent element.
     *
     * @param {string} [using] The name to give to the new attribute. (Optional)
     * @return XMLAttribute
     */
    convertToAttribute: function (using) {
        
    },


    /**
     * Converts the content of the XML element to a table.
     *
     * @param {XMLTag} [rowTag] The XML tag that indicates a table row.
     * @param {XMLTag} [cellTag] The XML tag that indicates a table cell.
     * @return Table
     */
    convertElementToTable: function (rowTag, cellTag) {
        
    },


    /**
     * Places an XML element into an inline frame.
     *
     * @param {Measurement Unit (Number or String)=any} [dimensions] The dimensions of the inline frame in the format [width, height].
     * @return PageItem
     */
    placeIntoInlineFrame: function (dimensions) {
        
    },


    /**
     * Associates an existing page item with the XML element and places it into an inline frame.
     *
     * @param {PageItem} [copyItem] The page item to copy.
     * @param {boolean} [retainExistingFrame] If true, moves the existing page item. If false, moves a copy of the page item. (Optional) (default: false)
     * @return PageItem
     */
    placeIntoInlineCopy: function (copyItem, retainExistingFrame) {
        
    },


    /**
     * Replaces the content of XML element with content imported from a file.
     *
     * @param {string} [using] The file path to the import file.
     * @param {string} [relativeBasePath] Base path used to resolve relative paths. (Optional)
     * @return PageItem
     */
    setContent: function (using, relativeBasePath) {
        
    },


    /**
     * Inserts the specified text as content before, in, or after the XML element.
     *
     * @param {varies=any} [using] The text to be inserted. Can accept: String or SpecialCharacters enumerator.
     * @param {XMLElementPosition} [position] The position at which to insert the text. Note that text inserted before or after the element does not become part of the content of the element. Instead, it becomes content of the parent of the element.
     * @return Text
     */
    insertTextAsContent: function (using, position) {
        
    },


    /**
     * Applies a table style to the table associated with the XMLElement.
     *
     * @param {varies=any} [using] The table style to apply. Can accept: String or TableStyle.
     * @param {boolean} [clearingOverrides] If true, removes local formatting before applying the table style. (Optional) (default: true)
     * @return undefined
     */
    applyTableStyle: function (using, clearingOverrides) {
        
    },


    /**
     * Applies a cell style to the table cells associated with the XMLElement.
     *
     * @param {varies=any} [using] The cell style to apply. Can accept: String or CellStyle.
     * @param {boolean} [clearingOverrides] If true, removes local formatting before applying the cell style. (Optional) (default: true)
     * @return undefined
     */
    applyCellStyle: function (using, clearingOverrides) {
        
    },


    /**
     * Applies an object style to the frame associated with the XMLElement.
     *
     * @param {varies=any} [using] The object style to apply. Can accept: String or ObjectStyle.
     * @param {boolean} [clearingOverrides] If true, removes local formatting before applying the object style. (Optional) (default: true)
     * @param {boolean} [clearingOverridesThroughRootObjectStyle] If true, clears unchecked category attributes through the root style. (Optional) (default: false)
     * @return undefined
     */
    applyObjectStyle: function (using, clearingOverrides, clearingOverridesThroughRootObjectStyle) {
        
    },


    /**
     * Places the XML element into a new rectangular page item. If the XML element was already associated with a page item, that page item is deleted.
     *
     * @param {varies=any} [on] The page or spread on which to create the new page item. Can accept: Spread, Page or MasterSpread.
     * @param {Measurement Unit (Number or String)=any} [geometricBounds] The bounds of the page item excluding the stroke width, in the format [y1, x1, y2, x2].
     * @return PageItem
     */
    placeIntoFrame: function (on, geometricBounds) {
        
    },


    /**
     * Associates the XML element with a copy of a page item.
     *
     * @param {varies=any} [on] The page or spread on which to create the new page item. Can accept: Spread, Page or MasterSpread.
     * @param {Measurement Unit (Number or String)=any} [placePoint] The page coordinates of the top left corner of the page item, in the format [y1, x1]
     * @param {PageItem} [copyItem] The page item to copy.
     * @param {boolean} [retainExistingFrame] If true, associates the XML element with the existing page item and moves the page item (rather than a copy of the page item). (Optional) (default: false)
     * @return PageItem
     */
    placeIntoCopy: function (on, placePoint, copyItem, retainExistingFrame) {
        
    },


    /**
     * Imports the specified XML file into an InDesign document.
     *
     * @param {File} [from] The XML file.
     * @return undefined
     */
    importXML: function (from) {
        
    },


    /**
     * Evaluates an XPath expression starting at this XML element in the structure.
     *
     * @param {string} [using] The XPath expression.
     * @param {varies=any} [prefixMappingTable] The namespace mapping table. Can accept: Array of Arrays of 2 Strings. (Optional)
     * @return XMLItem
     */
    evaluateXPathExpression: function (using, prefixMappingTable) {
        
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
     * Exports the object(s) to a file.
     *
     * @param {varies=any} [format] The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
     * @param {File} [to] The path to the export file.
     * @param {boolean} [showingOptions] If true, displays the export options dialog. (Optional) (default: false)
     * @param {PDFExportPreset} [using] The export style. (Optional)
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    exportFile: function (format, to, showingOptions, using, versionComments, forceSave) {
        
    },


    /**
     * asynchronously exports the object(s) to a file.
     *
     * @param {varies=any} [format] The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
     * @param {File} [to] The path to the export file.
     * @param {boolean} [showingOptions] If true, displays the export options dialog. (Optional) (default: false)
     * @param {PDFExportPreset} [using] The export style. (Optional)
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return BackgroundTask
     */
    asynchronousExportFile: function (format, to, showingOptions, using, versionComments, forceSave) {
        
    },


    /**
     * Deletes the XMLElement.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Selects the object.
     *
     * @param {SelectionOptions} [existingSelection] The selection status of the XMLElement in relation to previously selected objects. (Optional) (default: SelectionOptions.REPLACE_WITH)
     * @return undefined
     */
    select: function (existingSelection) {
        
    },


    /**
     * Generates a string which, if executed, will return the XMLElement.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return XMLElement
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

