/*
 * Options for saving a document in EPS format.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var EPSSaveOptions = {


    /**
     * If true, the color profile is embedded in the document.
     * @type {boolean}
     */
    embedColorProfile: undefined,


    /**
     * The type of preview.
     * @type {MacPreviewType}
     */
    preview: MacPreviewType.MONOCHROMETIFF,


    /**
     * The type of encoding to use for the document.
     * @type {SaveEncoding}
     */
    encoding: SaveEncoding.BINARY,


    /**
     * If true, includes the halftone screen.
     * @type {boolean}
     */
    halftoneScreen: false,


    /**
     * If true, includes the transfer functions in the document to compensate for dot gain between the image and film.
     * @type {boolean}
     */
    transferFunction: false,


    /**
     * If true, uses PostScript color management.
     * @type {boolean}
     */
    psColorManagement: false,


    /**
     * If true, includes vector data. Valid only when the document contains vector data (un-rasterized text).
     * @type {boolean}
     */
    vectorData: undefined,


    /**
     * If true, uses image interpolation.
     * @type {boolean}
     */
    interpolation: false,


    /**
     * If true, displays white areas as transparent. Valid only for documents in BitMap mode.
     * @type {boolean}
     */
    transparentWhites: undefined,




};

