/*
 * Options which may be supplied when capturing a portion of the artwork as an 24 bit PNG file.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var ImageCaptureOptions = {


    /**
     * The resolution of the captured image file.
     * @type {number}
     */
    resolution: 150,


    /**
     * Should the resulting image use transparency.
     * @type {boolean}
     */
    transparency: false,


    /**
     * Should the artboard be matted with a color.
     * @type {boolean}
     */
    matte: false,


    /**
     * The color to use when matting the artboard (default: white)
     * @type {RGBColor}
     */
    matteColor: RGBColor,


    /**
     * Should the resulting image be antialiased.
     * @type {boolean}
     */
    antiAliasing: false,




};

