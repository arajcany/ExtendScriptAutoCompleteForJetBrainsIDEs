/*
 * Options which may be supplied when rasterizing the artwork.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var RasterizeOptions = {


    /**
     * The color model for the rasterization.
     * @type {RasterizationColorModel}
     */
    colorModel: RasterizationColorModel.DEFAULTCOLORMODEL,


    /**
     * The rasterization resolution in dots-per-inch (dpi)
     * @type {number}
     */
    resolution: 300,


    /**
     * Should the resulting image use transparency.
     * @type {boolean}
     */
    transparency: false,


    /**
     * The type of antialiasing method.
     * @type {AntiAliasingMethod}
     */
    antiAliasingMethod: AntiAliasingMethod.ARTOPTIMIZED,


    /**
     * Should a clipping mask be created for the resulting image.
     * @type {boolean}
     */
    clippingMask: false,


    /**
     * Whether to convert all spot colors to process colors in the resulting image.
     * @type {boolean}
     */
    convertSpotColors: false,


    /**
     * Should all text be converted to outlines before rasterization.
     * @type {boolean}
     */
    convertTextToOutlines: false,


    /**
     * Should the resulting image incorporates the layer attributes (such as opacity and blend mode)
     * @type {boolean}
     */
    includeLayers: false,


    /**
     * Should rasterize against a black background instead of white.
     * @type {boolean}
     */
    backgroundBlack: false,


    /**
     * The amount of white space (in points) to be added around the object during rasterization.
     * @type {number}
     */
    padding: 0,




};

