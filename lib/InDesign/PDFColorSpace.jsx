/*
 * Options for specifying how to represent color information in the exported PDF.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var PDFColorSpace = {


    /**
     * Represents all color values using the RGB color space. Best suited for documents that will be viewed onscreen.
     * @type {number}
     * @readonly
     */
    RGB: 1666336578,


    /**
     * Represents all color values using CYMK color space.
     * @type {number}
     * @readonly
     */
    CMYK: 1129142603,


    /**
     * Leaves each image in its original color space.
     * @type {number}
     * @readonly
     */
    UNCHANGED_COLOR_SPACE: 1970161251,


    /**
     * Repurposes RGB colors.
     * @type {number}
     * @readonly
     */
    REPURPOSE_RGB: 1917994818,


    /**
     * Repurposes CMYK colors.
     * @type {number}
     * @readonly
     */
    REPURPOSE_CMYK: 1917013337,


    /**
     * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects.
     * @type {number}
     * @readonly
     */
    GRAY: 1766290041,




};

