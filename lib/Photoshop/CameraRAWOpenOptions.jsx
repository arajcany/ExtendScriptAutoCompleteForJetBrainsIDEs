/*
 * Options for opening a camera RAW document.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var CameraRAWOpenOptions = {


    /**
     * The image color space.
     * @type {ColorSpaceType}
     */
    colorSpace: ColorSpaceType,


    /**
     * The number of bits per channel.
     * @type {BitsPerChannelType}
     */
    bitsPerChannel: BitsPerChannelType,


    /**
     * The size of the new document.
     * @type {CameraRAWSize}
     */
    size: CameraRAWSize,


    /**
     * The resolution of the document (in pixels per inch)
     * @type {number}
     */
    resolution: undefined,


    /**
     * The global settings for all Camera RAW options.
     * @type {CameraRAWSettingsType}
     */
    settings: CameraRAWSettingsType.CAMERA,


    /**
     * The white balance options for the image.
     * @type {WhiteBalanceType}
     */
    whiteBalance: WhiteBalanceType,


    /**
     * The temperature of the shot. Range: 2000 to 50000.
     * @type {int}
     */
    temperature: int,


    /**
     * The tint of the shot. Range: -150 to 150.
     * @type {int}
     */
    tint: int,


    /**
     * The exposure of the shot. Range: -4.0 to 4.0.
     * @type {number}
     */
    exposure: undefined,


    /**
     * The shadows of the shot. Range: 0 to 100.
     * @type {int}
     */
    shadows: int,


    /**
     * The brightness of the shot. Range: 0 to 150.
     * @type {int}
     */
    brightness: int,


    /**
     * The constrast of the shot. Range: -50 to 100.
     * @type {int}
     */
    contrast: int,


    /**
     * The saturation of the shot. Range: -100 to 100.
     * @type {int}
     */
    saturation: int,


    /**
     * The sharpness of the shot. Range: 0 to 100.
     * @type {int}
     */
    sharpness: int,


    /**
     * The luminance smoothing of the shot. Range: 0 to 100.
     * @type {int}
     */
    luminanceSmoothing: int,


    /**
     * The color noise reduction of the shot. Range: 0 to 100.
     * @type {int}
     */
    colorNoiseReduction: int,


    /**
     * The chromatic aberration R/C of the shot. Range: -100 to 100.
     * @type {int}
     */
    chromaticAberrationRC: int,


    /**
     * The chromatic aberration B/Y of the shot. Range: -100 to 100.
     * @type {int}
     */
    chromaticAberrationBY: int,


    /**
     * The vignetting amount of the shot. Range: -100 to 100.
     * @type {int}
     */
    vignettingAmount: int,


    /**
     * The vignetting mid point of the shot. Range: -100 to 100.
     * @type {int}
     */
    vignettingMidpoint: int,


    /**
     * The shadow tint of the shot. Range: -100 to 100.
     * @type {int}
     */
    shadowTint: int,


    /**
     * The red hue of the shot. Range: -100 to 100.
     * @type {int}
     */
    redHue: int,


    /**
     * The red saturation of the shot. Range: -100 to 100.
     * @type {int}
     */
    redSaturation: int,


    /**
     * The green hue of the shot. Range: -100 to 100.
     * @type {int}
     */
    greenHue: int,


    /**
     * The green saturation of the shot. Range: -100 to 100.
     * @type {int}
     */
    greenSaturation: int,


    /**
     * The blue hue of the shot. Range: -100 to 100.
     * @type {int}
     */
    blueHue: int,


    /**
     * The blue saturation of the shot. Range: -100 to 100.
     * @type {int}
     */
    blueSaturation: int,




};

