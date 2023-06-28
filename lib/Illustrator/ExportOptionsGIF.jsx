/*
 * Options which may be supplied when exporting a document as a GIF file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
 */
var ExportOptionsGIF = {


    /**
     * Number of colors in exported color table.
     * @type {Int32}
     */
    colorCount: 128,


    /**
     * Method used to reduce the number of colors.
     * @type {ColorReductionMethod}
     */
    colorReduction: ColorReductionMethod.SELECTIVE,


    /**
     * Level of information loss during compression.
     * @type {Int32}
     */
    infoLossPercent: 0,


    /**
     * Method used to dither colors.
     * @type {ColorDitherMethod}
     */
    colorDither: ColorDitherMethod.DIFFUSION,


    /**
     * How much should the colors be dithered.
     * @type {Int32}
     */
    ditherPercent: 88,


    /**
     * How much should the color table be changed to match the web pallet.
     * @type {Int32}
     */
    webSnap: 0,


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




};

