/*
 * PDF export settings for the application object.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PDFExportPreference = {


    /**
     * Effective destination color profile. Can return: PDFProfileSelector enumerator or String.
     * @type {varies=any}
     * @readonly
     */
    effectivePDFDestinationProfile: undefined,


    /**
     * Effective PDF/X OC Registry.
     * @type {string}
     * @readonly
     */
    effectiveOCRegistry: undefined,


    /**
     * Effective PDF/X output condition.
     * @type {string}
     * @readonly
     */
    effectiveOutputCondition: undefined,


    /**
     * Effective PDF X color profile. Can return: PDFProfileSelector enumerator or String.
     * @type {varies=any}
     * @readonly
     */
    effectivePDFXProfile: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * The parent of the PDFExportPreference (a Application).
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
     * If true, activates security controls for the PDF document.
     * @type {boolean}
     */
    useSecurity: undefined,


    /**
     * The password to enter when opening the PDF document. Valid only when use security is true. Note: A script can set but not get this value.
     * @type {string}
     */
    openDocumentPassword: undefined,


    /**
     * Changes the open document password to the specified string. Valid only when use security is true. Note: A script can set but not get this value.
     * @type {string}
     */
    changeSecurityPassword: undefined,


    /**
     * If true, users cannot print the PDF document. Valid only when use security is true.
     * @type {boolean}
     */
    disallowPrinting: undefined,


    /**
     * If true, users cannot fill in forms, sign, extract pages, or add comments in the PDF document. Valid only when use security is true.
     * @type {boolean}
     */
    disallowChanging: undefined,


    /**
     * If true, users cannot copy and paste text, images, or other content from the PDF document. Valid only when use security is true.
     * @type {boolean}
     */
    disallowCopying: undefined,


    /**
     * If true, users cannot add or change notes, edit text, or fill in form fields in the PDF document. Valid only when use security is true.
     * @type {boolean}
     */
    disallowNotes: undefined,


    /**
     * If true, users cannot change form fields in the PDF document. Valid only when use security is true.
     * @type {boolean}
     */
    disallowFormFillIn: undefined,


    /**
     * If true, users cannot extract content from the PDF document using software tools for the visually impaired. Valid only when use security is true.
     * @type {boolean}
     */
    disallowExtractionForAccessibility: undefined,


    /**
     * If true, users cannot insert, delete, or rotate pages in the PDF document. Valid only when use security is true.
     * @type {boolean}
     */
    disallowDocumentAssembly: undefined,


    /**
     * If true, users cannot print high-resolution copies of the PDF document. Valid only when use security is true.
     * @type {boolean}
     */
    disallowHiResPrinting: undefined,


    /**
     * If true and acrobat compatibility is Acrobat 6 or higher, storage systems and search engines cannot access metadata stored in the PDF document. If true and acrobat compatibility is acrobat 5 or higher, users cannot copy and extract content from the document. Valid only when use security is true.
     * @type {boolean}
     */
    disallowPlaintextMetadata: undefined,


    /**
     * If true, automatically opens the PDF file after exporting.
     * @type {boolean}
     */
    viewPDF: undefined,


    /**
     * Sets the threshold for embedding complete fonts based on how many of the fonts' characters are used in the document. If the percentage of characters used in the document for any given font exceeds the specified value, the font is completely embedded; otherwise, the font is subsetted. (Range: 0 to 100) Notes: Embedding complete fonts increases file size. To completely embed all fonts, use 0 (zero).
     * @type {number}
     */
    subsetFontsBelow: undefined,


    /**
     * The color space to use to represent color information in the exported PDF document.
     * @type {PDFColorSpace}
     */
    pdfColorSpace: PDFColorSpace,


    /**
     * The ICC Profiles to include in the exported PDF document. Can also accept: Boolean.
     * @type {ICCProfiles}
     */
    includeICCProfiles: ICCProfiles,


    /**
     * If true, replaces EPS images with OPI links.
     * @type {boolean}
     */
    omitEPS: undefined,


    /**
     * If true, replaces PDF images with OPI links.
     * @type {boolean}
     */
    omitPDF: undefined,


    /**
     * If true, replaces bitmap images with OPI links.
     * @type {boolean}
     */
    omitBitmaps: undefined,


    /**
     * If true, image data that falls outside the visible portion of an image's frame is not exported to the PDF document.
     * @type {boolean}
     */
    cropImagesToFrames: undefined,


    /**
     * If true, generates thumbnail images for each page or spread.
     * @type {boolean}
     */
    generateThumbnails: undefined,


    /**
     * If true, optimizes the exported PDF document for faster viewing in a web browser. Note: Compresses text and line art, regardless of specified compression settings.
     * @type {boolean}
     */
    optimizePDF: undefined,


    /**
     * If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher.
     * @type {boolean}
     */
    includeStructure: undefined,


    /**
     * The exported PDF document's Acrobat compatibility.
     * @type {AcrobatCompatibility}
     */
    acrobatCompatibility: AcrobatCompatibility,


    /**
     * If true, simulates the effects of overprinting spot inks with different neutral density values by converting spot colors to process colors for printing. Note: Not valid when the color output mode is defined to leave color profiles unchanged.
     * @type {boolean}
     */
    simulateOverprint: undefined,


    /**
     * The gamut of the final RGB or CMYK device. Can return: PDFProfileSelector enumerator or String.
     * @type {varies=any}
     */
    pdfDestinationProfile: undefined,


    /**
     * The PDF X color profile to use for the PDF document. . Can return: PDFProfileSelector enumerator or String.
     * @type {varies=any}
     */
    pdfXProfile: undefined,


    /**
     * If true, includes hyperlinks when exporting the document.
     * @type {boolean}
     */
    includeHyperlinks: undefined,


    /**
     * If true, displays bookmarks and table of contents entries as links in the bookmarks pane in the PDF document. If false, no bookmarks are exported.
     * @type {boolean}
     */
    includeBookmarks: undefined,


    /**
     * If true, makes non-printing objects visible in the PDF document.
     * @type {boolean}
     */
    exportNonprintingObjects: undefined,


    /**
     * If true, includes visible guides and baseline grids in the PDF document.
     * @type {boolean}
     */
    exportGuidesAndGrids: undefined,


    /**
     * If true, saves each layer as an Acrobat layer within the PDF document.
     * @type {boolean}
     */
    exportLayers: undefined,


    /**
     * The PDF/X standards compliance to test against.
     * @type {PDFXStandards}
     */
    standardsCompliance: PDFXStandards,


    /**
     * The name of the intended printing condition. Valid only when a PDF/X compliance standard has been defined for the document. Not valid when PDF/X-3 is the compliance standard or PDF export preset. For information on compliance standards, see standards compliance and PDF X standards.
     * @type {string}
     */
    outputCondition: undefined,


    /**
     * The sampling option to apply to color bitmap images in the PDF document.
     * @type {Sampling}
     */
    colorBitmapSampling: Sampling,


    /**
     * The ppi of the resampled image. (Range: 9 to 2400)
     * @type {number}
     */
    colorBitmapSamplingDPI: undefined,


    /**
     * The amount of bitmap compression to use.
     * @type {BitmapCompression}
     */
    colorBitmapCompression: BitmapCompression,


    /**
     * The compression option to apply to color images.
     * @type {CompressionQuality}
     */
    colorBitmapQuality: CompressionQuality,


    /**
     * The sampling option to apply to grayscale bitmap images.
     * @type {Sampling}
     */
    grayscaleBitmapSampling: Sampling,


    /**
     * The ppi of the resampled image. (Range: 9 to 2400)
     * @type {number}
     */
    grayscaleBitmapSamplingDPI: undefined,


    /**
     * The bitmap compression option to apply to grayscale bitmap images.
     * @type {BitmapCompression}
     */
    grayscaleBitmapCompression: BitmapCompression,


    /**
     * The compression option to apply to grayscale bitmap images.
     * @type {CompressionQuality}
     */
    grayscaleBitmapQuality: CompressionQuality,


    /**
     * The sampling option to apply to monochrome bitmap images.
     * @type {Sampling}
     */
    monochromeBitmapSampling: Sampling,


    /**
     * The ppi of the resampled image. (Range: 9 to 2400)
     * @type {number}
     */
    monochromeBitmapSamplingDPI: undefined,


    /**
     * The bitmap compression option to apply to monochrome bitmap images.
     * @type {MonoBitmapCompression}
     */
    monochromeBitmapCompression: MonoBitmapCompression,


    /**
     * If true, compresses text and line art using ZIP compression.
     * @type {boolean}
     */
    compressTextAndLineArt: undefined,


    /**
     * The minimum dpi at which color compression is applied. (Range: 1 to 10 times the value specified for color bitmap sampling DPI.)
     * @type {number}
     */
    thresholdToCompressColor: undefined,


    /**
     * The minimum dpi at which grayscale compression is applied. (Range: 1 to 10 times the value specified for grayscale bitmap sampling DPI.)
     * @type {number}
     */
    thresholdToCompressGray: undefined,


    /**
     * The minimum dpi at which monochrome compression is applied. (Range: 1 to 10 times the value specified for monochrome bitmap sampling DPI.)
     * @type {number}
     */
    thresholdToCompressMonochrome: undefined,


    /**
     * The tile size for color images. Valid only when color bitmap compression is JPEG 2000. (Range: 128 to 2048)
     * @type {number}
     */
    colorTileSize: undefined,


    /**
     * The tile size for grayscale images. Valid only when grayscale bitmap compression is JPEG 2000. (Range: 128 to 2048)
     * @type {number}
     */
    grayTileSize: undefined,


    /**
     * The objects to compress in the PDF document.
     * @type {PDFCompressionType}
     */
    compressionType: PDFCompressionType,


    /**
     * If true, each spread in the exported document is combined into a single page that has spread's original width.
     * @type {boolean}
     */
    exportReaderSpreads: undefined,


    /**
     * The offset from the edge of the page for page marks.
     * @type {Measurement Unit (Number or String)=any}
     */
    pageMarksOffset: undefined,


    /**
     * Prints crop marks that define where the page should be trimmed.
     * @type {boolean}
     */
    cropMarks: undefined,


    /**
     * If true, prints the filename, page number, current date and time, and color separation name.
     * @type {boolean}
     */
    pageInformationMarks: undefined,


    /**
     * If true, print bleed marks.
     * @type {boolean}
     */
    bleedMarks: undefined,


    /**
     * If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments.
     * @type {boolean}
     */
    colorBars: undefined,


    /**
     * If true, prints small targets outside the page area for aligning color separations.
     * @type {boolean}
     */
    registrationMarks: undefined,


    /**
     * The stroke weight for printer's marks.
     * @type {PDFMarkWeight}
     */
    printerMarkWeight: PDFMarkWeight,


    /**
     * The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedTop: undefined,


    /**
     * The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedInside: undefined,


    /**
     * The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedBottom: undefined,


    /**
     * The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
     * @type {Measurement Unit (Number or String)=any}
     */
    bleedOutside: undefined,


    /**
     * The type of printer marks, either an enum value or the name of a custom marks file. Can return: MarkTypes enumerator or String.
     * @type {varies=any}
     */
    pdfMarkType: undefined,


    /**
     * If true, uses the document's bleed settings in the PDF document.
     * @type {boolean}
     */
    useDocumentBleedWithPDF: undefined,


    /**
     * If true, includes the document's slug area in the PDF document.
     * @type {boolean}
     */
    includeSlugWithPDF: undefined,


    /**
     * If true, ignores flattener spread overrides.
     * @type {boolean}
     */
    ignoreSpreadOverrides: undefined,


    /**
     * The transparency flattener preset to use.
     * @type {FlattenerPreset}
     */
    appliedFlattenerPreset: FlattenerPreset,


    /**
     * The name of the output condition. Valid only when a PDF/X standard has been defined for the document.
     * @type {string}
     */
    outputConditionName: undefined,


    /**
     * The web address for the output condition registry. Not valid when PDF/X-3 is the compliance standard or PDF export preset.
     * @type {string}
     */
    ocRegistry: undefined,


    /**
     * How to draw interactive elements.
     * @type {InteractiveElementsOptions}
     */
    interactiveElementsOption: InteractiveElementsOptions,


    /**
     * Which layers to export.
     * @type {ExportLayerOptions}
     */
    exportWhichLayers: ExportLayerOptions,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the PDFExportPreference.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PDFExportPreference
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

