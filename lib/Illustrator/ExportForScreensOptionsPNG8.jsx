/*
 * Options which may be provided when exporting a document as an 8 bit PNG file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var ExportForScreensOptionsPNG8 = {


    /**
     * Number of colors in exported color table.
     * @type {Int32}
     */
    colorCount: 128,


    /**
     * Should the resulting image use transparency.
     * @type {boolean}
     */
    transparency: true,


    /**
     * Should the resulting image be interlaced.
     * @type {boolean}
     */
    interlaced: false,


    /**
     * Should the artboard be matted with a color.
     * @type {boolean}
     */
    matte: true,


    /**
     * The color to use when matting the artboard (default: white)
     * @type {RGBColor}
     */
    matteColor: RGBColor,


    /**
     * Should the resulting image be antialiased.
     * @type {AntiAliasingMethod}
     */
    antiAliasing: AntiAliasingMethod.ARTOPTIMIZED,


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

