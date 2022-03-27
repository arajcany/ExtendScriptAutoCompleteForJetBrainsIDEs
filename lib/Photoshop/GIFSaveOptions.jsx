/*
 * Options for saving a document in GIF format.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var GIFSaveOptions = {


    /**
     * The number of colors in palette. Not valid for all palette types.
     * @type {int}
     */
    colors: int,


    /**
     * The type of dither.
     * @type {DitherType}
     */
    dither: DitherType,


    /**
     * The amount of dither. Valid only when 'dither type' is diffusion. Range: 1 to 100.
     * @type {int}
     */
    ditherAmount: 75,


    /**
     * The type of colors to force into the color palette.
     * @type {ForcedColors}
     */
    forced: ForcedColors,


    /**
     * If true, rows are interlaced.
     * @type {boolean}
     */
    interlaced: false,


    /**
     * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Default: white.
     * @type {MatteType}
     */
    matte: MatteType,


    /**
     * The type of palette to use.
     * @type {PaletteType}
     */
    palette: PaletteType.LOCALSELECTIVE,


    /**
     * If true, protects colors in the image that contain entries in the color table from being dithered. Valid only when 'dither' = diffusion.
     * @type {boolean}
     */
    preserveExactColors: undefined,


    /**
     * If true, preserves transparent ares of the image during GIF conversion.
     * @type {boolean}
     */
    transparency: undefined,




};

