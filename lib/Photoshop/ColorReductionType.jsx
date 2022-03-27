/*
 * The color reduction algorithm.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var ColorReductionType = {


    /**
     * Gives priority to colors for which the human eye has greater sensitivity.
     * @type {int}
     * @readonly
     */
    PERCEPTUAL: 0,


    /**
     * Gives priority to broad areas of color and the preservation of web colors; usually produces images with the greatest color integrity.
     * @type {int}
     * @readonly
     */
    SELECTIVE: 1,


    /**
     * Samples color from the spectrum appearing most commonly in the image.
     * @type {int}
     * @readonly
     */
    ADAPTIVE: 2,


    /**
     * Uses the standard 216-color color table common to Windows and Mac OS 8-bit (256-color or web-safe palette); ensures that no browser dither is applied when the image is displayed using 8-bit color.
     * @type {int}
     * @readonly
     */
    RESTRICTIVE: 3,


    /**
     * Uses a color palette that is created or modified by the user. If you open an existing GIF or PNG-8 file, it will have a custom color palette.
     * @type {int}
     * @readonly
     */
    CUSTOM: 4,


    /**
     * Uses a set palette of colors.
     * @type {int}
     * @readonly
     */
    BLACKWHITE: 5,


    /**
     * Uses a set palette of colors.
     * @type {int}
     * @readonly
     */
    GRAYSCALE: 6,


    /**
     * Uses a set palette of colors.
     * @type {int}
     * @readonly
     */
    MACINTOSH: 7,


    /**
     * Uses a set palette of colors.
     * @type {int}
     * @readonly
     */
    WINDOWS: 8,




};

