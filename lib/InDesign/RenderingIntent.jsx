/*
 * Rendering intent options.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var RenderingIntent = {


    /**
     * Uses the current color settings.
     * @type {number}
     * @readonly
     */
    USE_COLOR_SETTINGS: 1380541299,


    /**
     * Preserves the visual relationship between colors at the expense of actual color values; most suitable for photographic images with high percentages of out-of-gamut colors.
     * @type {number}
     * @readonly
     */
    PERCEPTUAL: 1380544611,


    /**
     * Produces vivid colors at the expense of color accuracy; most suitable for business graphics such as graphs or charts.
     * @type {number}
     * @readonly
     */
    SATURATION: 1380545377,


    /**
     * Compares the extreme highlight of the source color space to that of the desination color space and shifts all colors accordingly; out-of-gamut colors are shifted to the closest reproducible color in the destination color space.
     * @type {number}
     * @readonly
     */
    RELATIVE_COLORIMETRIC: 1380545123,


    /**
     * Maintains color accuracy at the expense of preserving relationships between colors; most suitable for previewing how paper color affects printed colors.
     * @type {number}
     * @readonly
     */
    ABSOLUTE_COLORIMETRIC: 1380540771,




};

