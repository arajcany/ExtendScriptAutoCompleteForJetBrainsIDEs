/*
 * Options which may be provided when exporting a document as an 24 bit PNG file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var ExportForScreensOptionsPNG24 = {


    /**
     * Should the resulting image use transparency.
     * @type {boolean}
     */
    transparency: true,


    /**
     * Should the resulting image be antialiased.
     * @type {AntiAliasingMethod}
     */
    antiAliasing: AntiAliasingMethod.ARTOPTIMIZED,


    /**
     * Should the resulting image rasterize against a black background (with value true) or white background(with value false) if it doesn't use transparency.
     * @type {boolean}
     */
    backgroundBlack: false,


    /**
     * Should the resulting image be interlaced.
     * @type {boolean}
     */
    interlaced: false,


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

