/*
 * The type of dither.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var DitherType = {


    /**
     * No dither is used.
     * @type {int}
     * @readonly
     */
    NONE: 1,


    /**
     * Diffuses dither effects in random patterns across adjacent pixels.
     * @type {int}
     * @readonly
     */
    DIFFUSION: 2,


    /**
     * Applies a halftone-like square pattern.
     * @type {int}
     * @readonly
     */
    PATTERN: 3,


    /**
     * Applies a random pattern but without diffusing the pattern across adjacent pixels; prevents the appearance of seams.
     * @type {int}
     * @readonly
     */
    NOISE: 4,




};

