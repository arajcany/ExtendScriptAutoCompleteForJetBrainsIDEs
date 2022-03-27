/*
 * The quality of an image converted to bitmap mode.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var BitmapConversionType = {


    /**
     * 50% Threshold.
     * @type {int}
     * @readonly
     */
    HALFTHRESHOLD: 1,


    /**
     * Applies a halftone-like square pattern to determine the value of pixels.
     * @type {int}
     * @readonly
     */
    PATTERNDITHER: 2,


    /**
     * Applies a random pattern that is usually less noticeable than pattern dither. The dither effects are diffused across adjacent pixels. If you select this algorithm, specify a dither percentage to control the amount of dithering applied to the image.
     * @type {int}
     * @readonly
     */
    DIFFUSIONDITHER: 3,


    /**
     * Lets you convert a grayscale image to simulated halftone dots.
     * @type {int}
     * @readonly
     */
    HALFTONESCREEN: 4,


    /**
     * Simulates the effect of printing a grayscale image through a custom halftone screen. This method lets you apply a screen texture, such as a wood grain, to an image. To use this option, you must first define a pattern.
     * @type {int}
     * @readonly
     */
    CUSTOMPATTERN: 5,




};

