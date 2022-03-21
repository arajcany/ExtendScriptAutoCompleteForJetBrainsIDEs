/*
 * A book.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var Book = {


    /**
     * Preflight book option settings.
     * @type {PreflightBookOption}
     * @readonly
     */
    preflightBookOptions: PreflightBookOption,


    /**
     * EPub fixed layout export preference settings.
     * @type {EPubFixedLayoutExportPreference}
     * @readonly
     */
    epubFixedLayoutExportPreferences: EPubFixedLayoutExportPreference,


    /**
     * EPub export preference settings.
     * @type {EPubExportPreference}
     * @readonly
     */
    epubExportPreferences: EPubExportPreference,


    /**
     * Print preference settings.
     * @type {PrintPreference}
     * @readonly
     */
    printPreferences: PrintPreference,


    /**
     * The name of the Book.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The full path to the Book, including the name of the Book.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * The full path to the file.
     * @type {File}
     * @readonly
     */
    filePath: File,


    /**
     * If true, the Book has been modified since it was last saved.
     * @type {boolean}
     * @readonly
     */
    modified: undefined,


    /**
     * If true, the Book has been saved since it was created.
     * @type {boolean}
     * @readonly
     */
    saved: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the Book (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


    /**
     * The index of the Book within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


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
     * A collection of book content objects.
     * @type {BookContents}
     * @readonly
     */
    bookContents: BookContents,


    /**
     * Current style source document. Can return: Document or BookContent.
     * @type {varies=any}
     */
    styleSourceDocument: undefined,


    /**
     * Page numbering options for book content objects within the book.
     * @type {RepaginateOption}
     */
    repaginationOption: RepaginateOption,


    /**
     * If true, inserts a blank page as necessary to fill in page number gaps caused by the odd or even specification set in the repagination option.
     * @type {boolean}
     */
    insertBlankPage: undefined,


    /**
     * If true, automatically updates page numbers when pages in book content files are added, deleted, or rearranged.
     * @type {boolean}
     */
    automaticPagination: undefined,


    /**
     * If true, automatically converts the book content object during repagination and synchronization.
     * @type {boolean}
     */
    automaticDocumentConversion: undefined,


    /**
     * If true, synchronize cross reference formats
     * @type {boolean}
     */
    synchronizeCrossReferenceFormat: undefined,


    /**
     * If true, merges identically named layers when exporting to PDF.
     * @type {boolean}
     */
    mergeIdenticalLayers: undefined,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * If true, synchronize table of content styles.
     * @type {boolean}
     */
    synchronizeTableOfContentStyle: undefined,


    /**
     * If true, synchronize text variables.
     * @type {boolean}
     */
    synchronizeTextVariable: undefined,


    /**
     * If true, synchronize table styles.
     * @type {boolean}
     */
    synchronizeTableStyle: undefined,


    /**
     * If true, synchronize paragraph styles.
     * @type {boolean}
     */
    synchronizeParagraphStyle: undefined,


    /**
     * If true, synchronize character styles.
     * @type {boolean}
     */
    synchronizeCharacterStyle: undefined,


    /**
     * If true, synchronize trap styles.
     * @type {boolean}
     */
    synchronizeTrapStyle: undefined,


    /**
     * If true, synchronize master pages.
     * @type {boolean}
     */
    synchronizeMasterPage: undefined,


    /**
     * If true, synchronize object styles.
     * @type {boolean}
     */
    synchronizeObjectStyle: undefined,


    /**
     * If true, synchronize swatches.
     * @type {boolean}
     */
    synchronizeSwatch: undefined,


    /**
     * If true, synchronize cell styles.
     * @type {boolean}
     */
    synchronizeCellStyle: undefined,


    /**
     * If true, synchronize bullets and numbering.
     * @type {boolean}
     */
    synchronizeBulletNumberingList: undefined,


    /**
     * If true, synchronize conditional text.
     * @type {boolean}
     */
    synchronizeConditionalText: undefined,


    /**
     * How to match styles with same name while synchronizing a book.
     * @type {SmartMatchOptions}
     */
    smartMatchStyleGroups: SmartMatchOptions,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Packages the document.
     *
     * @param {File} [to] The folder, alias, or path in which to place the packaged files.
     * @param {boolean} [copyingFonts] If true, copies fonts used in the document to the package folder.
     * @param {boolean} [copyingLinkedGraphics] If true, copies linked graphics files to the package folder.
     * @param {boolean} [copyingProfiles] If true, copies color profiles to the package folder.
     * @param {boolean} [updatingGraphics] If true, updates graphics links to the package folder.
     * @param {boolean} [includingHiddenLayers] If true, copies fonts and links from hidden layers to the package.
     * @param {boolean} [ignorePreflightErrors] If true, ignores preflight errors and proceeds with the packaging. If false, cancels the packaging when errors exist.
     * @param {boolean} [creatingReport] If true, creates a package report that includes printing instructions, print settings, lists of fonts, links and required inks, and other information.
     * @param {boolean} [includeIdml] If true, generates and includes IDML in the package folder. (Optional)
     * @param {boolean} [includePdf] If true, generates and includes PDF in the package folder. (Optional)
     * @param {string} [pdfStyle] If specified and PDF is to be included, use this style for PDF export if it is valid, otherwise use the last used PDF preset. (Optional)
     * @param {boolean} [useDocumentHyphenationExceptionsOnly] If this option is selected, InDesign flags this document so that it does not reflow when someone else opens or edits it on a computer that has different hyphenation and dictionary settings. (Optional)
     * @param {string} [versionComments] The comments for the version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return boolean
     */
    packageForPrint: function (to, copyingFonts, copyingLinkedGraphics, copyingProfiles, updatingGraphics, includingHiddenLayers, ignorePreflightErrors, creatingReport, includeIdml, includePdf, pdfStyle, useDocumentHyphenationExceptionsOnly, versionComments, forceSave) {
        
    },


    /**
     * Preflight a book and optionally save the resulting report.
     *
     * @param {File} [to] The preflight report to save to. (Optional)
     * @param {boolean} [autoOpen] If true, automatically open the report after creation. (Optional) (default: false)
     * @return undefined
     */
    preflight: function (to, autoOpen) {
        
    },


    /**
     * Prints the Book(s).
     *
     * @param {boolean} [printDialog] Whether to invoke the print dialog (Optional)
     * @param {varies=any} [using] Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. (Optional)
     * @return undefined
     */
    print: function (printDialog, using) {
        
    },


    /**
     * Close the Book
     *
     * @param {SaveOptions} [saving] Whether to save changes before closing the Book (Optional) (default: SaveOptions.ASK)
     * @param {File} [savingIn] The file in which to save the Book (Optional)
     * @param {string} [versionComments] The comment for this version (Optional)
     * @param {boolean} [forceSave] Forcibly save a version (Optional) (default: false)
     * @return undefined
     */
    close: function (saving, savingIn, versionComments, forceSave) {
        
    },


    /**
     * Saves the book.
     *
     * @param {File} [to] The file path. Note: Required only if the book has not been previously saved. If the book has previously been saved, specifying a path saves a copy and closes the original book. (Optional)
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    save: function (to, versionComments, forceSave) {
        
    },


    /**
     * Exports the book to a file.
     *
     * @param {varies=any} [format] The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
     * @param {File} [to] The file to which to export the book. (Optional)
     * @param {boolean} [showingOptions] Used to specify if the PDF Export Options Dialog needs to be shown or not (Optional) (default: false)
     * @param {PDFExportPreset} [using] Used to specify the presets for the export which can be the object of the preset type, enumeration for existing presets or user defined presets, or a string naming the preset to be used, but in case Showing Options is true, the preset specified in the Export Dialog will over ride this parameter (Optional)
     * @param {BookContent} [whichDocuments] Used to specify a list of book content references, from the current book, where the list may contain duplicate entries and if the list is not specified then the entire book contents shall be exported (Optional)
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    exportFile: function (format, to, showingOptions, using, whichDocuments, versionComments, forceSave) {
        
    },


    /**
     * Synchronizes the entire book to the style source document.
     *
     * @return undefined
     */
    synchronize: function () {
        
    },


    /**
     * Repaginates the book.
     *
     * @return undefined
     */
    repaginate: function () {
        
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
     * Updates chapter numbers and paragraph numbers throughout the book.
     *
     * @return undefined
     */
    updateChapterAndParagraphNumbers: function () {
        
    },


    /**
     * Update all numbers (e.g. Page numbers, chapter numbers and paragraph numbers) throughout the book.
     *
     * @return undefined
     */
    updateAllNumbers: function () {
        
    },


    /**
     * Updates the cross references in the entire book.
     *
     * @return undefined
     */
    updateAllCrossReferences: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the Book.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Book
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

