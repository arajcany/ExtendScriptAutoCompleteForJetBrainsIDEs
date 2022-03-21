/*
 * Interactive PDF export settings for the application object.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var InteractivePDFExportPreference = {


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the InteractivePDFExportPreference (a Application).
     * @type {Application}
     * @readonly
     */
    parent: Application,


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
     * The export PDF display title.
     * @type {PdfDisplayTitleOptions}
     */
    pdfDisplayTitle: PdfDisplayTitleOptions,


    /**
     * Sets the default document language in the exported PDF. The correct ISO code of the language must be provided.
     * @type {string}
     */
    defaultDocumentLanguage: undefined,


    /**
     * Export each page or spread as a separate PDF file.
     * @type {boolean}
     */
    exportAsSinglePages: undefined,


    /**
     * Suffix to be used at the end of each file when pages are exported as separate PDF files.
     * @type {string}
     */
    singlePagesPDFSuffix: undefined,


    /**
     * The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
     * @type {varies=any}
     */
    pageRange: undefined,


    /**
     * If true, each spread in the exported document is combined into a single page that has spread's original width.
     * @type {boolean}
     */
    exportReaderSpreads: undefined,


    /**
     * If true, automatically opens the PDF file after exporting.
     * @type {boolean}
     */
    viewPDF: undefined,


    /**
     * If true, generates thumbnail images for each page or spread.
     * @type {boolean}
     */
    generateThumbnails: undefined,


    /**
     * If true, saves each layer as an Acrobat layer within the PDF document.
     * @type {boolean}
     */
    exportLayers: undefined,


    /**
     * If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher.
     * @type {boolean}
     */
    includeStructure: undefined,


    /**
     * The export PDF magnification options.
     * @type {PdfMagnificationOptions}
     */
    pdfMagnification: PdfMagnificationOptions,


    /**
     * The export PDF page layout.
     * @type {PageLayoutOptions}
     */
    pdfPageLayout: PageLayoutOptions,


    /**
     * Open PDF in full screen mode.
     * @type {boolean}
     */
    openInFullScreen: undefined,


    /**
     * Automatically flip pages in the exported PDF.
     * @type {boolean}
     */
    flipPages: undefined,


    /**
     * The speed that the pages flip.
     * @type {number}
     */
    flipPagesSpeed: undefined,


    /**
     * The name of the page transition to use for all pages.
     * @type {PageTransitionOverrideOptions}
     */
    pageTransitionOverride: PageTransitionOverrideOptions,


    /**
     * How to draw interactive elements.
     * @type {InteractivePDFInteractiveElementsOptions}
     */
    interactivePDFInteractiveElementsOption: InteractivePDFInteractiveElementsOptions,


    /**
     * The PDF raster compression options.
     * @type {PDFRasterCompressionOptions}
     */
    pdfRasterCompression: PDFRasterCompressionOptions,


    /**
     * The PDF JPEG quality options.
     * @type {PDFJPEGQualityOptions}
     */
    pdfJPEGQuality: PDFJPEGQualityOptions,


    /**
     * The raster resolution. Can return: RasterResolutionOptions enumerator or Long Integer (72 - 300).
     * @type {varies=any}
     */
    rasterResolution: undefined,


    /**
     * Use tagged PDF structure for interactive elements tab order.
     * @type {boolean}
     */
    usePDFStructureForTabOrder: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the InteractivePDFExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return InteractivePDFExportPreference
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

