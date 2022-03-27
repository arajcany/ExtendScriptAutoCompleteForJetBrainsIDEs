/*
 * Options for converting an RGB image to an indexed color model.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var IndexedConversionOptions = {


    /**
     * The type of palette.
     * @type {PaletteType}
     */
    palette: PaletteType.EXACT,


    /**
     * The number of colors in the palette. Not valid for all palette types.
     * @type {int}
     */
    colors: int,


    /**
     * The type of colors to force into the color palette.
     * @type {ForcedColors}
     */
    forced: ForcedColors,


    /**
     * If true, preserves transparent areas of the image during conversion to GIF format.
     * @type {boolean}
     */
    transparency: undefined,


    /**
     * The type of dither.
     * @type {DitherType}
     */
    dither: DitherType,


    /**
     * The amount of dither. Valid only when 'dither' = diffusion.
     * @type {int}
     */
    ditherAmount: int,


    /**
     * If true, protects colors in the image that contain entries in the color table from being dithered. Valid only when 'dither' = diffusion.
     * @type {boolean}
     */
    preserveExactColors: undefined,


    /**
     * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. When transparency = false, the matte color is applied to transparent areas.
     * @type {MatteType}
     */
    matte: MatteType,




};

