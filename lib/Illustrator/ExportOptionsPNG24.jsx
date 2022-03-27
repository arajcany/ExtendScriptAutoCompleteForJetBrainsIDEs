/*
 * Options which may be supplied when exporting a document as an 24 bit PNG file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var ExportOptionsPNG24 = {


    /**
     * Should the resulting image use transparency.
     * @type {boolean}
     */
    transparency: true,


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
     * Horizontal scaling factor.
     * @type {number}
     */
    horizontalScale: 100,


    /**
     * Vertical scaling factor.
     * @type {number}
     */
    verticalScale: 100,


    /**
     * Should the resulting image be antialiased.
     * @type {boolean}
     */
    antiAliasing: true,


    /**
     * Should the resulting image be clipped to the artboard.
     * @type {boolean}
     */
    artBoardClipping: false,


    /**
     * Should the resulting image be saved as HTML.
     * @type {boolean}
     */
    saveAsHTML: false,


    /**
     * Dimensions in which to contain the resulting raster.
     * @type {Dimensions}
     */
    dimensions: Dimensions,




};

