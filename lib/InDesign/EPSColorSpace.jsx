/*
 * Color space options for representing color in the exported EPS.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var EPSColorSpace = {


    /**
     * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
     * @type {number}
     * @readonly
     */
    RGB: 1666336578,


    /**
     * Creates a separable file by representing all color values using the gamut of CYMK process color inks.
     * @type {number}
     * @readonly
     */
    CMYK: 1129142603,


    /**
     * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects.
     * @type {number}
     * @readonly
     */
    GRAY: 1766290041,


    /**
     * Leaves each image in its original color space.
     * @type {number}
     * @readonly
     */
    UNCHANGED_COLOR_SPACE: 1970161251,


    /**
     * Uses PostScript color management (includes profiles).
     * @type {number}
     * @readonly
     */
    POSTSCRIPT_COLOR_MANAGEMENT: 1164208483,




};

