/*
 * The palette type for converting an image to indexed color.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var PaletteType = {


    /**
     * The palette uses the exact colors appearing in the RGB image; available only if the image uses 256 or fewer colors.
     * @type {int}
     * @readonly
     */
    EXACT: 1,


    /**
     * The Mac OS default 8-bit palette, whch is based on a uniform sampling of RGB colors.
     * @type {int}
     * @readonly
     */
    MACOSPALETTE: 2,


    /**
     * The Windows system's default 8-bit palette, whch is based on a uniform sampling of RGB colors.
     * @type {int}
     * @readonly
     */
    WINDOWSPALETTE: 3,


    /**
     * The 216-color palette that web browsers, regardless of platform, use to display images on a monitor limited to 256 colors.
     * @type {int}
     * @readonly
     */
    WEBPALETTE: 4,


    /**
     * Creates a palette by uniformly sampling colors from the RGB color cube.
     * @type {int}
     * @readonly
     */
    UNIFORM: 5,


    /**
     * Creates a custom palette by giving priority to colors for in the image which the human eye has greater sensitivity.
     * @type {int}
     * @readonly
     */
    LOCALPERCEPTUAL: 6,


    /**
     * Creates a color table similar to the Perceptual color table, but favoring broad areas of color in the image and the preservation of web colors.
     * @type {int}
     * @readonly
     */
    LOCALSELECTIVE: 7,


    /**
     * Creates a palette by sampling the colors from the spectrum appearing most commonly in the image.
     * @type {int}
     * @readonly
     */
    LOCALADAPTIVE: 8,


    /**
     * Creates a custom palette by giving priority to colors in a group of open images with the same color palette for which the human eye has greater sensitivity.
     * @type {int}
     * @readonly
     */
    MASTERPERCEPTUAL: 9,


    /**
     * Creates a color table similar to the Master Perceptual color table, but favoring broad areas of color and the preservation of web colors.
     * @type {int}
     * @readonly
     */
    MASTERSELECTIVE: 10,


    /**
     * Creates a palette by sampling the colors from the spectrum appearing most commonly in a group of open images that share the same color palette.
     * @type {int}
     * @readonly
     */
    MASTERADAPTIVE: 11,


    /**
     * Uses the custom palette from the previous conversion, making it easy to convert several images with the same custom palette.
     * @type {int}
     * @readonly
     */
    PREVIOUSPALETTE: 12,




};

