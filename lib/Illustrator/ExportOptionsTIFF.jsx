/*
 * Options which may be supplied when exporting a document as a TIFF file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var ExportOptionsTIFF = {


    /**
     * The color space of the exported file.
     * @type {ImageColorSpace}
     */
    imageColorSpace: ImageColorSpace.RGB,


    /**
     * The resolution of the exported file.
     * @type {number}
     */
    resolution: 150,


    /**
     * Should the resulting image be antialiased.
     * @type {AntiAliasingMethod}
     */
    antiAliasing: AntiAliasingMethod.ARTOPTIMIZED,


    /**
     * Compress TIFF file with LZW Compression when exporting.
     * @type {boolean}
     */
    lZWCompression: false,


    /**
     * Mac or PC byte order when exporting.
     * @type {TIFFByteOrder}
     */
    byteOrder: TIFFByteOrder.IBMPC,


    /**
     * Embed an ICC profile when exporting.
     * @type {boolean}
     */
    embedICCProfile: false,


    /**
     * All the artboards or range of the artboards will be exported.
     * @type {boolean}
     */
    saveMultipleArtboards: false,


    /**
     * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
     * @type {string}
     */
    artboardRange: undefined,




};

