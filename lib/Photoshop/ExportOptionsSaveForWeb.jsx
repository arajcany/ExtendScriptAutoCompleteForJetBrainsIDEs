/*
 * Options for exporting Save For Web files.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var ExportOptionsSaveForWeb = {


    /**
     * The file format to use. Save For Web supports only Compuserve GIF, JPEG, PNG-8, PNG-24, and BMP formats.
     * @type {SaveDocumentType}
     */
    format: SaveDocumentType.COMPUSERVEGIF,


    /**
     * If true, uses 8 bits. If false, uses 24 bits. Valid only when 'format' = PNG.
     * @type {boolean}
     */
    PNG8: true,


    /**
     * The amount of lossiness allowed.
     * @type {int}
     */
    lossy: 0,


    /**
     * The color reduction algorithm.
     * @type {ColorReductionType}
     */
    colorReduction: ColorReductionType.SELECTIVE,


    /**
     * The number of colors in the palette.
     * @type {int}
     */
    colors: 256,


    /**
     * The type of dither.
     * @type {DitherType}
     */
    dither: DitherType.DIFFUSION,


    /**
     * The amount of dither. Valid only when 'dither' = diffusion.
     * @type {int}
     */
    ditherAmount: 100,


    /**
     * If true, transparent areas of the image are included in the saved image.
     * @type {boolean}
     */
    transparency: true,


    /**
     * The transparency dither algorithm.
     * @type {DitherType}
     */
    transparencyDither: DitherType.NONE,


    /**
     * The amount of transparency dither. Valid only when 'transparency' = true.
     * @type {int}
     */
    transparencyAmount: 100,


    /**
     * If true, the image downloads in multiple passes, progressive.
     * @type {boolean}
     */
    interlaced: false,


    /**
     * The colors to blend transparent pixels against.
     * @type {RGBColor}
     */
    matteColor: RGBColor,


    /**
     * The tolerance amount within which to snap close colors to web palette colors.
     * @type {int}
     */
    webSnap: 0,


    /**
     * If true, creates smaller but less compatible files.
     * @type {boolean}
     */
    optimized: true,


    /**
     * The quality of the produced image (as a percentage). Range: 0 to 100.
     * @type {int}
     */
    quality: 60,


    /**
     * If true, includes the document's embedded profile.
     * @type {boolean}
     */
    includeProfile: false,


    /**
     * The amount of blur to apply to the image to reduce artifacts.
     * @type {number}
     */
    blur: 0,




};

