/*
 * Options for saving a document in Photoshop DCS 2.0 format.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var DCS2_SaveOptions = {


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
     * The type of preview.
     * @type {MacPreviewType}
     */
    preview: MacPreviewType.MACOSEIGHTBIT,


    /**
     * The DCS type.
     * @type {DCSType}
     */
    DCS: DCSType.NOCOMPOSITE,


    /**
     * If true, saves color channels as multiple files.
     * @type {boolean}
     */
    multiFileDCS: false,


    /**
     * The type of encoding to use for document.
     * @type {SaveEncoding}
     */
    encoding: SaveEncoding.BINARY,


    /**
     * If true, includes halftone screen.
     * @type {boolean}
     */
    halftoneScreen: false,


    /**
     * If true, includes transfer functions in the document to compensate for dot gain between the image and film.
     * @type {boolean}
     */
    transferFunction: false,


    /**
     * If true, includes vector data. Valid only if the document contains vector data (un-rasterized text).
     * @type {boolean}
     */
    vectorData: undefined,


    /**
     * If true, image interpolation is used.
     * @type {boolean}
     */
    interpolation: false,




};

