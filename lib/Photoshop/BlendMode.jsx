/*
 * Controls how pixels in the image are blended.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var BlendMode = {


    /**
     * Allows any blend modes, advanced blending options, and opacity and fill values applied to layers within a set to affect layers below the set in the Layers palette.
     * @type {int}
     * @readonly
     */
    PASSTHROUGH: 1,


    /**
     * Edits or paints each pixel to make it the result color. (Called "Threshold" when you’re working with a bitmapped or indexed-color image.)
     * @type {int}
     * @readonly
     */
    NORMAL: 2,


    /**
     * Edits or paints each pixel to make it the result color. However, the result color is a random replacement of the pixels with the base color or the blend color, depending on the opacity at any pixel location.
     * @type {int}
     * @readonly
     */
    DISSOLVE: 3,


    /**
     * Looks at the color information in each channel and selects the base or blend color—whichever is darker—as the result color. Pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change.
     * @type {int}
     * @readonly
     */
    DARKEN: 4,


    /**
     * Looks at the color information in each channel and multiplies the base color by the blend color. The result color is always a darker color. Multiplying any color with black produces black. Multiplying any color with white leaves the color unchanged. When you’re painting with a color other than black or white, successive strokes with a painting tool produce progressively darker colors. The effect is similar to drawing on the image with multiple marking pens.
     * @type {int}
     * @readonly
     */
    MULTIPLY: 5,


    /**
     * Looks at the color information in each channel and darkens the base color to reflect the blend color by increasing the contrast. Blending with white produces no change.
     * @type {int}
     * @readonly
     */
    COLORBURN: 6,


    /**
     * Looks at the color information in each channel and darkens the base color to reflect the blend color by decreasing the brightness. Blending with white produces no change.
     * @type {int}
     * @readonly
     */
    LINEARBURN: 7,


    /**
     * Looks at the color information in each channel and selects the base or blend color—whichever is lighter—as the result color. Pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change.
     * @type {int}
     * @readonly
     */
    LIGHTEN: 8,


    /**
     * Looks at each channel’s color information and multiplies the inverse of the blend and base colors. The result color is always a lighter color. Screening with black leaves the color unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other.
     * @type {int}
     * @readonly
     */
    SCREEN: 9,


    /**
     * Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing the contrast. Blending with black produces no change.
     * @type {int}
     * @readonly
     */
    COLORDODGE: 10,


    /**
     * Looks at the color information in each channel and brightens the base color to reflect the blend color by increasing the brightness. Blending with black produces no change.
     * @type {int}
     * @readonly
     */
    LINEARDODGE: 11,


    /**
     * Multiplies or screens the colors, depending on the base color. Patterns or colors overlay the existing pixels while preserving the highlights and shadows of the base color. The base color is not replaced but is mixed with the blend color to reflect the lightness or darkness of the original color.
     * @type {int}
     * @readonly
     */
    OVERLAY: 12,


    /**
     * Darkens or lightens the colors, depending on the blend color. The effect is similar to shining a diffused spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened as if it were dodged. If the blend color is darker than 50% gray, the image is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area but does not result in pure black or white.
     * @type {int}
     * @readonly
     */
    SOFTLIGHT: 13,


    /**
     * Multiplies or screens the colors, depending on the blend color. The effect is similar to shining a harsh spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened, as if it were screened. This is useful for adding highlights to an image. If the blend color is darker than 50% gray, the image is darkened, as if it were multiplied. This is useful for adding shadows to an image. Painting with pure black or white results in pure black or white.
     * @type {int}
     * @readonly
     */
    HARDLIGHT: 14,


    /**
     * Burns or dodges the colors by increasing or decreasing the contrast, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by decreasing the contrast. If the blend color is darker than 50% gray, the image is darkened by increasing the contrast.
     * @type {int}
     * @readonly
     */
    VIVIDLIGHT: 15,


    /**
     * Burns or dodges the colors by decreasing or increasing the brightness, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by increasing the brightness. If the blend color is darker than 50% gray, the image is darkened by decreasing the brightness.
     * @type {int}
     * @readonly
     */
    LINEARLIGHT: 16,


    /**
     * Replaces the colors, depending on the blend color. If the blend color (light source) is lighter than 50% gray, pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change. If the blend color is darker than 50% gray, pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change. This is useful for adding special effects to an image.
     * @type {int}
     * @readonly
     */
    PINLIGHT: 17,


    /**
     * Looks at the color information in each channel and subtracts either the blend color from the base color or the base color from the blend color, depending on which has the greater brightness value. Blending with white inverts the base color values; blending with black produces no change.
     * @type {int}
     * @readonly
     */
    DIFFERENCE: 18,


    /**
     * Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base color values. Blending with black produces no change.
     * @type {int}
     * @readonly
     */
    EXCLUSION: 19,


    /**
     * 
     * @type {int}
     * @readonly
     */
    SUBTRACT: 29,


    /**
     * 
     * @type {int}
     * @readonly
     */
    DIVIDE: 30,


    /**
     * Creates a result color with the luminance and saturation of the base color and the hue of the blend color.
     * @type {int}
     * @readonly
     */
    HUE: 20,


    /**
     * Creates a result color with the luminance and hue of the base color and the saturation of the blend color. Painting with this mode in an area with no (0) saturation (gray) causes no change.
     * @type {int}
     * @readonly
     */
    SATURATION: 21,


    /**
     * Creates a result color with the luminance of the base color and the hue and saturation of the blend color. This preserves the gray levels in the image and is useful for coloring monochrome images and for tinting color images.
     * @type {int}
     * @readonly
     */
    COLORBLEND: 22,


    /**
     * Creates a result color with the hue and saturation of the base color and the luminance of the blend color. This mode creates an inverse effect from that of the Color mode.
     * @type {int}
     * @readonly
     */
    LUMINOSITY: 23,


    /**
     * Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding.
     * @type {int}
     * @readonly
     */
    HARDMIX: 26,


    /**
     * Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding.
     * @type {int}
     * @readonly
     */
    LIGHTERCOLOR: 27,


    /**
     * Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding.
     * @type {int}
     * @readonly
     */
    DARKERCOLOR: 28,




};

