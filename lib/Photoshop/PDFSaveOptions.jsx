/*
 * Options for saving a document in PDF format.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var PDFSaveOptions = {


    /**
     * If true, the alpha channels are saved.
     * @type {boolean}
     */
    alphaChannels: undefined,


    /**
     * If true, the layers are saved.
     * @type {boolean}
     */
    layers: undefined,


    /**
     * If true, the annotations are saved.
     * @type {boolean}
     */
    annotations: undefined,


    /**
     * If true, the spot colors are saved.
     * @type {boolean}
     */
    spotColors: undefined,


    /**
     * If true, the color profile is embedded in the document.
     * @type {boolean}
     */
    embedColorProfile: undefined,


    /**
     * DEPRECATED, ( should the embedded color profile be downgraded to version 2 )
     * @type {boolean}
     */
    downgradeColorProfile: undefined,


    /**
     * DEPRECATED.
     * @type {boolean}
     */
    transparency: undefined,


    /**
     * DEPRECATED. ( use image interpolation? )
     * @type {boolean}
     */
    interpolation: undefined,


    /**
     * DEPRECATED. ( include vector data )
     * @type {boolean}
     */
    vectorData: undefined,


    /**
     * DEPRECATED. ( embed fonts? Only valid if a text layer is included )
     * @type {boolean}
     */
    embedFonts: undefined,


    /**
     * DEPRECATED. ( use outlines for text? Only valid if vector data is included )
     * @type {boolean}
     */
    useOutlines: undefined,


    /**
     * The encoding method to use.
     * @type {PDFEncodingType}
     */
    encoding: PDFEncodingType,


    /**
     * The quality of the produced image. Valid only for JPEG-encoded PDF documents. Range: 0 to 12.
     * @type {int}
     */
    jpegQuality: int,


    /**
     * The preset file to use for settings; overrides other settings.
     * @type {string}
     */
    presetFile: undefined,


    /**
     * The PDF standard to make the document compatible with.
     * @type {PDFStandardType}
     */
    PDFStandard: PDFStandardType,


    /**
     * The PDF version to make the document compatible with.
     * @type {PDFCompatibilityType}
     */
    PDFCompatibility: PDFCompatibilityType,


    /**
     * Description of the save options in use.
     * @type {string}
     */
    description: undefined,


    /**
     * If true, allows users to reopen the PDF in Photoshop with native Photoshop data intact.
     * @type {boolean}
     */
    preserveEditing: undefined,


    /**
     * If true, includes a small preview image in Acrobat.
     * @type {boolean}
     */
    embedThumbnail: undefined,


    /**
     * If true, improves performance of PDFs on Web servers.
     * @type {boolean}
     */
    optimizeForWeb: undefined,


    /**
     * If true, opens the saved PDF in Acrobat.
     * @type {boolean}
     */
    view: undefined,


    /**
     * The downsample method to use.
     * @type {PDFResampleType}
     */
    downSample: PDFResampleType,


    /**
     * The size (in pixels per inch) to downsample images to if they exceed the value specified for 'down sample size limit'.
     * @type {number}
     */
    downSampleSize: undefined,


    /**
     * Limits downsampling or subsampling to images that exceed this value (in pixels per inch).
     * @type {number}
     */
    downSampleSizeLimit: undefined,


    /**
     * The compression option. Valid only when encoding is JPEG2000.
     * @type {int}
     */
    tileSize: int,


    /**
     * If true, converts a 16-bit image to 8-bit for better compatibility with other applications.
     * @type {boolean}
     */
    convertToEightBit: undefined,


    /**
     * If true, converts the color profile to the destination profile.
     * @type {boolean}
     */
    colorConversion: undefined,


    /**
     * Describes the final RGB or CMYK output device, such as a monitor or press standard.
     * @type {string}
     */
    destinationProfile: undefined,


    /**
     * If true, shows which profiles to include.
     * @type {boolean}
     */
    profileInclusionPolicy: undefined,


    /**
     * An optional comment field for inserting descriptions of the output condition. The text is stored in the PDF/X file.
     * @type {string}
     */
    outputCondition: undefined,


    /**
     * The identifier for the output condition.
     * @type {string}
     */
    outputConditionID: undefined,


    /**
     * The URL where the output condition is registered.
     * @type {string}
     */
    registryName: undefined,




};

