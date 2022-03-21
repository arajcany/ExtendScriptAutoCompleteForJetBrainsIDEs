/*
 * The default rendering intent.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var DefaultRenderingIntent = {


    /**
     * Aims to preserve the visual relationship between colors so they are perceived as natural to the human eye, even though the color values themselves may change.
     * @type {number}
     * @readonly
     */
    PERCEPTUAL: 1380544611,


    /**
     * Tries to produce vivid colors in an image at the expense of color accuracy.
     * @type {number}
     * @readonly
     */
    SATURATION: 1380545377,


    /**
     * Compares the extreme highlight of the source color space to that of the destination color space and shifts all colors accordingly. Out-of-gamut colors are shifted to the closest reproducible color in the destination color space. Note: Preserves more of the original colors in an image than perceptual rendering intent does.
     * @type {number}
     * @readonly
     */
    RELATIVE_COLORIMETRIC: 1380545123,


    /**
     * Aims to maintain color accuracy at the expense of color relationshps and is suitable for proofing to simulate the output of a particular device. Note: Leaves colors that fall inside the destination gamut unchanged and clips out-of-gamut colors.
     * @type {number}
     * @readonly
     */
    ABSOLUTE_COLORIMETRIC: 1380540771,




};

