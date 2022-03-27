/*
 * The color conversion intent.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Intent = {


    /**
     * Gives priority to colors for which the human eye has greater sensitivity.
     * @type {int}
     * @readonly
     */
    PERCEPTUAL: 1,


    /**
     * Tries to produce vivid colors in an image at the expense of color accuracy.
     * @type {int}
     * @readonly
     */
    SATURATION: 2,


    /**
     * Compares the extreme highlight of the source color space to that of the destination color space and shifts all colors accordingly. Out of gamut colors are shifted to the closest reproducible color in the destination color space.
     * @type {int}
     * @readonly
     */
    RELATIVECOLORIMETRIC: 3,


    /**
     * Aims to maintain color accuracy at the expense of preserving relationships between colors and is suitable for proofing to simulate the output of a particular device. This intent is particularly useful for previewing how paper color affects printed colors.
     * @type {int}
     * @readonly
     */
    ABSOLUTECOLORIMETRIC: 4,




};

