/*
 * Options which may be provided when exporting a document as a JPEG100 file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var ExportForScreensOptionsJPEG = {


    /**
     * Should the image be compressed.
     * @type {JPEGCompressionMethodType}
     */
    compressionMethod: JPEGCompressionMethodType.BASELINESTANDARD,


    /**
     * Specify the number of detailed scans when downloading a JPEG file using the Progressive option as the CompressionMethod.
     * @type {Int32}
     */
    progressiveScan: 3,


    /**
     * Should the resulting image be antialiased.
     * @type {AntiAliasingMethod}
     */
    antiAliasing: AntiAliasingMethod.ARTOPTIMIZED,


    /**
     * Embed an ICC profile when exporting.
     * @type {boolean}
     */
    embedICCProfile: false,


    /**
     * How should the resulting image be scaled.
     * @type {ExportForScreensScaleType}
     */
    scaleType: ExportForScreensScaleType.SCALEBYFACTOR,


    /**
     * The value by which the resulting image should be scaled.
     * @type {number}
     */
    scaleTypeValue: 1,




};

