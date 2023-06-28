/*
 * Options which may be supplied when saving a document as a PDF file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var PDFSaveOptions = {


    /**
     * The max string length is 255 bytes. Name of PDF preset to use.
     * @type {string}
     */
    pDFPreset: undefined,


    /**
     * The version of the Acrobat file format to create.
     * @type {PDFCompatibility}
     */
    compatibility: PDFCompatibility.ACROBAT5,


    /**
     * This control includes the None option for when the user is not complying with any PDF standard.
     * @type {PDFXStandard}
     */
    pDFXStandard: PDFXStandard.PDFXNONE,


    /**
     * This displays the description from the selected preset.
     * @type {string}
     */
    pDFXStandardDescription: undefined,


    /**
     * Preserve Illustrator editing capabilities when saving the document.
     * @type {boolean}
     */
    preserveEditability: true,


    /**
     * Generate thumbnails for the saved document.
     * @type {boolean}
     */
    generateThumbnails: true,


    /**
     * Should the PDF document be optimized for fast web viewing.
     * @type {boolean}
     */
    optimization: false,


    /**
     * View PDF after saving.
     * @type {boolean}
     */
    viewAfterSaving: false,


    /**
     * How should color bitmap images be compressed.
     * @type {CompressionQuality}
     */
    colorCompression: CompressionQuality.None,


    /**
     * Tile size when compressing with JPEG2000.
     * @type {Int32}
     */
    colorTileSize: 256,


    /**
     * How should color bitmap images be resampled.
     * @type {DownsampleMethod}
     */
    colorDownsamplingMethod: DownsampleMethod.NODOWNSAMPLE,


    /**
     * If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to.
     * @type {number}
     */
    colorDownsampling: 150,


    /**
     * Downsample if the image's resolution is above this value.
     * @type {number}
     */
    colorDownsamplingImageThreshold: 225,


    /**
     * How should grayscale bitmap images be compressed.
     * @type {CompressionQuality}
     */
    grayscaleCompression: CompressionQuality.None,


    /**
     * Tile size when compressing with JPEG2000.
     * @type {Int32}
     */
    grayscaleTileSize: 256,


    /**
     * How should grayscale bitmap images be resampled.
     * @type {DownsampleMethod}
     */
    grayscaleDownsamplingMethod: DownsampleMethod.NODOWNSAMPLE,


    /**
     * If zero, no downsampling, otherwise, the resolution to downsample grayscale images to.
     * @type {number}
     */
    grayscaleDownsampling: 150,


    /**
     * Downsample if the image's resolution is above this value.
     * @type {number}
     */
    grayscaleDownsamplingImageThreshold: 225,


    /**
     * How should monochrome bitmap images be compressed.
     * @type {MonochromeCompression}
     */
    monochromeCompression: MonochromeCompression.None,


    /**
     * How should monochrome bitmap images be resampled.
     * @type {DownsampleMethod}
     */
    monochromeDownsamplingMethod: DownsampleMethod.NODOWNSAMPLE,


    /**
     * If zero, no downsampling, otherwise, the resolution to downsample images to.
     * @type {number}
     */
    monochromeDownsampling: 300,


    /**
     * Downsample if the image's resolution is above this value.
     * @type {number}
     */
    monochromeDownsamplingImageThreshold: 450,


    /**
     * Should line art and text be compressed?
     * @type {boolean}
     */
    compressArt: true,


    /**
     * Draw trim marks.
     * @type {boolean}
     */
    trimMarks: false,


    /**
     * Draw registration marks.
     * @type {boolean}
     */
    registrationMarks: false,


    /**
     * Draw color bars.
     * @type {boolean}
     */
    colorBars: false,


    /**
     * Draw page information.
     * @type {boolean}
     */
    pageInformation: false,


    /**
     * The page marks style.
     * @type {PageMarksTypes}
     */
    pageMarksType: PageMarksTypes.Roman,


    /**
     * Trim mark weight.
     * @type {PDFTrimMarkWeight}
     */
    trimMarkWeight: PDFTrimMarkWeight.TRIMMARKWEIGHT0125,


    /**
     * Custom offset (in points) for using the custom paper.
     * @type {number}
     */
    offset: 0,


    /**
     * The bleed offset rect.
     * @type {Rect}
     */
    bleedOffsetRect: Rect,


    /**
     * Link 4 bleed values.
     * @type {boolean}
     */
    bleedLink: true,


    /**
     * PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination.
     * @type {ColorConversion}
     */
    colorConversionID: ColorConversion.None,


    /**
     * When NoColorConversion is specified for Color Conversion, NoColorDestination is set.
     * @type {ColorDestination}
     */
    colorDestinationID: ColorDestination.None,


    /**
     * If CMS is off, Don't Include Profiles is set.
     * @type {ColorProfile}
     */
    colorProfileID: ColorProfile.None,


    /**
     * When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box.
     * @type {string}
     */
    outputIntentProfile: undefined,


    /**
     * This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition.
     * @type {string}
     */
    outputCondition: undefined,


    /**
     * If selected for Output Intent Profile Name, you can set the name of a registered printing condition.
     * @type {string}
     */
    outputConditionID: undefined,


    /**
     * URL to the site where the specified output condition is registered. No validation is performed on the URL.
     * @type {string}
     */
    registryName: undefined,


    /**
     * This indicates if manual trapping has been prepared in the document.
     * @type {boolean}
     */
    trapped: false,


    /**
     * Include a subset of fonts when less than this percentage of characters are used.
     * @type {number}
     */
    fontSubsetThreshold: 100,


    /**
     * The transparency flattener preset name.
     * @type {string}
     */
    flattenerPreset: undefined,


    /**
     * The printing flattener options.
     * @type {PrintFlattenerOptions}
     */
    flattenerOptions: PrintFlattenerOptions,


    /**
     * Flattening printer resolution.
     * @type {number}
     */
    printerResolution: 800,


    /**
     * Create acrobat layers from top-level layers - acrobat 6 only option.
     * @type {boolean}
     */
    acrobatLayers: false,


    /**
     * Require a password to open the document.
     * @type {boolean}
     */
    requireDocumentPassword: false,


    /**
     * A password string to open the document.
     * @type {string}
     */
    documentPassword: undefined,


    /**
     * Use a password to restrict editing security settings.
     * @type {boolean}
     */
    requirePermissionPassword: false,


    /**
     * A password string to restrict editing security settings.
     * @type {string}
     */
    permissionPassword: undefined,


    /**
     * PDF security printing permission.
     * @type {PDFPrintAllowedEnum}
     */
    pDFAllowPrinting: PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION,


    /**
     * PDF security changes allowed.
     * @type {PDFChangesAllowedEnum}
     */
    pDFChangesAllowed: PDFChangesAllowedEnum.CHANGE128ANYCHANGES,


    /**
     * Enable copying of text 128-bit.
     * @type {boolean}
     */
    enableCopy: true,


    /**
     * Enable accessing 128-bit.
     * @type {boolean}
     */
    enableAccess: true,


    /**
     * Enable plaintext metadata 128-bit - available only for acrobat 6.
     * @type {boolean}
     */
    enablePlainText: false,


    /**
     * Enable copying and accessing 40-bit.
     * @type {boolean}
     */
    enableCopyAccess: true,


    /**
     * Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
     * @type {string}
     */
    artboardRange: undefined,




};

