/*
 * Options for changing the document mode to Bitmap.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var BitmapConversionOptions = {


    /**
     * The output resolution (in pixels per inch)
     * @type {number}
     */
    resolution: 72,


    /**
     * The conversion method.
     * @type {BitmapConversionType}
     */
    method: BitmapConversionType.DIFFUSIONDITHER,


    /**
     * The name of the pattern to use. Valid only when 'method' = custom.
     * @type {string}
     */
    patternName: undefined,


    /**
     * The number of printer dots per inch. Valid only when 'method' = halftone screen. Range: 1.0 to 999.99.
     * @type {number}
     */
    frequency: undefined,


    /**
     * The angle (in degrees) at which to orient individual dots. Valid only when 'method' = halftone screen. Range: -180 to 180.
     * @type {number}
     */
    angle: undefined,


    /**
     * The dot shape. Valid only when 'method' = halftone screen.
     * @type {BitmapHalfToneType}
     */
    shape: BitmapHalfToneType,




};

