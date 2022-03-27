/*
 * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var ArtLayer = {


    /**
     * The object's container.
     * @type {Object}
     * @readonly
     */
    parent: Object,


    /**
     * The class name of the object.
     * @type {string}
     * @readonly
     */
    typename: undefined,


    /**
     * The interior opacity of the layer. Range: 0.0 to 100.0.
     * @type {number}
     */
    fillOpacity: undefined,


    /**
     * The density of the layer mask (between 0.0 and 100.0)
     * @type {number}
     */
    layerMaskDensity: undefined,


    /**
     * The feather of the layer mask (between 0.0 and 250.0)
     * @type {number}
     */
    layerMaskFeather: undefined,


    /**
     * The density of the vector mask (between 0.0 and 100.0)
     * @type {number}
     */
    vectorMaskDensity: undefined,


    /**
     * The feather of the vector mask (between 0.0 and 250.0)
     * @type {number}
     */
    vectorMaskFeather: undefined,


    /**
     * The density of the filter mask (between 0.0 and 100.0)
     * @type {number}
     */
    filterMaskDensity: undefined,


    /**
     * The feather of the filter mask (between 0.0 and 250.0)
     * @type {number}
     */
    filterMaskFeather: undefined,


    /**
     * If true, the layer is grouped with the layer below.
     * @type {boolean}
     */
    grouped: undefined,


    /**
     * If true, the layer is a background layer.
     * @type {boolean}
     */
    isBackgroundLayer: undefined,


    /**
     * If true, the pixels in the layer's image cannot be edited.
     * @type {boolean}
     */
    pixelsLocked: undefined,


    /**
     * If true, the pixels in the layer's image cannot be moved within the layer.
     * @type {boolean}
     */
    positionLocked: undefined,


    /**
     * If true, editing is confined to the opaque portions of the layer.
     * @type {boolean}
     */
    transparentPixelsLocked: undefined,


    /**
     * Sets the layer kind (such as 'text layer') for an empty layer. Valid only when the layer is empty and when 'is background layer ' is false. You can use the 'kind ' property to make a background layer a normal layer; however, to make a layer a background layer, you must set 'is background layer' to true.
     * @type {LayerKind}
     */
    kind: LayerKind,


    /**
     * The text that is associated with the layer. Valid only when 'kind' is text layer.
     * @type {TextItem}
     * @readonly
     */
    textItem: TextItem,



    /**
     * Adds an element.
     *
     * @return ArtLayer
     */
    add: function () {
        
    },


    /**
     * Applies the specified style to the layer.
     *
     * @param {string} [styleName] The layer style to apply.
     * @return undefined
     */
    applyStyle: function (styleName) {
        
    },


    /**
     * 
     *
     * @param {File} [file] Style file to apply.
     * @return undefined
     */
    applyStyleFile: function (file) {
        
    },


    /**
     * 
     *
     * @param {File} [file] File to save the style to.
     * @param {File} [thumbnail] File to save the style thumbnail to.
     * @param {int} [thumbnailSize] Size of thumbnail to save.
     * @param {number} [backgroundValue] Background grayvalue.
     * @return undefined
     */
    saveStyleFile: function (file, thumbnail, thumbnailSize, backgroundValue) {
        
    },


    /**
     * Cuts the layer without moving it to the clipboard.
     *
     * @return undefined
     */
    clear: function () {
        
    },


    /**
     * Copies the layer to the clipboard.
     *
     * @param {boolean} [merge] If true, the copy includes all visible layers. If false, the copy only copies from the current layer. (default: false)
     * @return undefined
     */
    copy: function (merge) {
        
    },


    /**
     * Cuts the layer to the clipboard.
     *
     * @return undefined
     */
    cut: function () {
        
    },


    /**
     * Merges the layer down, removing the layer from the document. Returns a reference to the art layer that this layer is merged into.
     *
     * @return ArtLayer
     */
    merge: function () {
        
    },


    /**
     * Converts the targeted content in the layer into a flat, raster image.
     *
     * @param {RasterizeType} [target] What to rasterize.
     * @return undefined
     */
    rasterize: function (target) {
        
    },


    /**
     * Applies the average filter.
     *
     * @return undefined
     */
    applyAverage: function () {
        
    },


    /**
     * Applies the gaussian blur filter.
     *
     * @param {number} [radius] The blur width in pixels. Range: 1.0 to 250.0.
     * @return undefined
     */
    applyGaussianBlur: function (radius) {
        
    },


    /**
     * Apply the lens blur filter.
     *
     * @param {DepthMapSource} [source] The source for the depth map. (default: DepthMapSource.NONE)
     * @param {int} [focalDistance] The blur focal distance (in pixels) for the depth map. RangeL 0 to 255. Valid only when 'source' is transparency or layer mask. (default: 0)
     * @param {boolean} [invertDepthMap] If true, inverts the depth map. (default: false)
     * @param {Geometry} [shape] The shape of the iris. (default: Geometry.HEXAGON)
     * @param {int} [radius] The radius of the iris. Range: 0 to 100. (default: 15)
     * @param {int} [bladeCurvature] The blade curvature of the iris. Range: 0 to 100. (default: 0)
     * @param {int} [rotation] The rotation of the iris (in degrees). Range: 0 to 360. (default: 0)
     * @param {int} [brightness] The brightness for the specular highlights. Range: 0 to 100. (default: 0)
     * @param {int} [threshold] The threshold for the specular highlights. Range: 0 to 255. (default: 0)
     * @param {int} [amount] The amount of noise. Range: 0 to 100. (default: 0)
     * @param {NoiseDistribution} [distribution] The distribution value for the noise. (default: NoiseDistribution.UNIFORM)
     * @param {boolean} [monochromatic] If true, the noise is monochromatic. (default: false)
     * @return undefined
     */
    applyLensBlur: function (source, focalDistance, invertDepthMap, shape, radius, bladeCurvature, rotation, brightness, threshold, amount, distribution, monochromatic) {
        
    },


    /**
     * Applies the blur filter.
     *
     * @return undefined
     */
    applyBlur: function () {
        
    },


    /**
     * Applies the blur more filter.
     *
     * @return undefined
     */
    applyBlurMore: function () {
        
    },


    /**
     * Applies the motion blur filter.
     *
     * @param {int} [angle] The angle (in degrees). Range: -360 to 360.
     * @param {number} [radius] The radius (in pixels). Range: 1 to 999.
     * @return undefined
     */
    applyMotionBlur: function (angle, radius) {
        
    },


    /**
     * Applies the radial blur filter.
     *
     * @param {int} [amount] The amount of blur. Range: 1 to 100.
     * @param {RadialBlurMethod} [blurMethod] The blur method to use.
     * @param {RadialBlurQuality} [blurQuality] The smoothness or graininess of the blurred image.
     * @param {UnitPoint} [blurCenter] Position (unit value)
     * @return undefined
     */
    applyRadialBlur: function (amount, blurMethod, blurQuality, blurCenter) {
        
    },


    /**
     * Applies the smart blur filter.
     *
     * @param {number} [radius] The blur radius. Range: 0 - 1000.
     * @param {number} [threshold] The blur threshold. Range: 0 - 1000.
     * @param {SmartBlurQuality} [blurQuality] The smoothness or graininess of the blurred image.
     * @param {SmartBlurMode} [mode] The smart blur mode.
     * @return undefined
     */
    applySmartBlur: function (radius, threshold, blurQuality, mode) {
        
    },


    /**
     * Applies the diffuse glow filter.
     *
     * @param {int} [graininess] The amount of graininess. Range: 0 to 10.
     * @param {int} [glowAmount] The glow amount. Range: 0 to 20.
     * @param {int} [clearAmount] The clear amount. Range: 0 to 20.
     * @return undefined
     */
    applyDiffuseGlow: function (graininess, glowAmount, clearAmount) {
        
    },


    /**
     * Applies the displace filter.
     *
     * @param {int} [horizontalScale] The amount of horizontal distortion. Range: -999 to 999.
     * @param {int} [verticalScale] The amount of vertical distortion. Range: -999 to 999.
     * @param {DisplacementMapType} [displacementType] The displacement type.
     * @param {UndefinedAreas} [undefinedAreas] The treatment of undistorted areas.
     * @param {File} [displacementMapFile] The distortion image map.
     * @return undefined
     */
    applyDisplace: function (horizontalScale, verticalScale, displacementType, undefinedAreas, displacementMapFile) {
        
    },


    /**
     * Applies the glass filter.
     *
     * @param {int} [distortion] The amount of distortion. Range: 0 to 20.
     * @param {int} [smoothness] The smoothness. Range: 1 to 15.
     * @param {int} [scaling] The amount of scaling. Range: 50 to 200.
     * @param {boolean} [invert] If true, the texture is inverted. (default: false)
     * @param {TextureType} [texture] The type of texture.
     * @param {File} [textureFile] The file from which to load the texture type.
     * @return undefined
     */
    applyGlassEffect: function (distortion, smoothness, scaling, invert, texture, textureFile) {
        
    },


    /**
     * Applies the ocean ripple filter.
     *
     * @param {int} [size] The ripple size. Range: 1 to 15.
     * @param {int} [magnitude] The ripple magnitude. Range: 0 to 20.
     * @return undefined
     */
    applyOceanRipple: function (size, magnitude) {
        
    },


    /**
     * Applies the pinch filter.
     *
     * @param {int} [amount] The pinch amount. Range: -100 to 100.
     * @return undefined
     */
    applyPinch: function (amount) {
        
    },


    /**
     * Applies the polar coordinates filter.
     *
     * @param {PolarConversionType} [conversion] The conversion type.
     * @return undefined
     */
    applyPolarCoordinates: function (conversion) {
        
    },


    /**
     * Applies the ripple filter.
     *
     * @param {int} [amount] The ripple amount. Range: -999 to 999.
     * @param {RippleSize} [size] The ripple size.
     * @return undefined
     */
    applyRipple: function (amount, size) {
        
    },


    /**
     * Applies the shear filter.
     *
     * @param {any} [curve] Specification of the shear curve in points as x,y coordinate pairs in the format [[x1, y1],[x2, y2]]. Any number of coordinate pairs can be specified.
     * @param {UndefinedAreas} [undefinedAreas] The treatment of areas left blank by the distortion.
     * @return undefined
     */
    applyShear: function (curve, undefinedAreas) {
        
    },


    /**
     * Applies the spherize filter.
     *
     * @param {int} [amount] The amount of distortion. Range: -100 to 100.
     * @param {SpherizeMode} [mode] The distortion mode.
     * @return undefined
     */
    applySpherize: function (amount, mode) {
        
    },


    /**
     * Applies the twirl filter.
     *
     * @param {int} [angle] The twirl angle. Range: -999 to 999.
     * @return undefined
     */
    applyTwirl: function (angle) {
        
    },


    /**
     * Applies the wave filter.
     *
     * @param {int} [generatorNumber] The number of generators. Range: 1 to 999.
     * @param {int} [minimumWavelength] The minimum wave length. Range: 1 to 998.
     * @param {int} [maximumWavelength] The maximum wave length. Range: 2 to (minimum wavelength + 1)
     * @param {int} [minimumAmplitude] The minimum amplitude. Range: 1 to 998.
     * @param {int} [maximumAmplitude] The maximum amplitude. Range: 2 to (minimum amplitude + 1)
     * @param {int} [horizontalScale] The amount of horizontal scale (as a percentage). Range: 1 to 100.
     * @param {int} [verticalScale] The amount of vertical scale (as a percentage). Range: 1 to 100.
     * @param {WaveType} [waveType] The wave type.
     * @param {UndefinedAreas} [undefinedAreas] The treatment of areas left blank by the distortion.
     * @param {int} [randomSeed] The random seed.
     * @return undefined
     */
    applyWave: function (generatorNumber, minimumWavelength, maximumWavelength, minimumAmplitude, maximumAmplitude, horizontalScale, verticalScale, waveType, undefinedAreas, randomSeed) {
        
    },


    /**
     * Applies the zigzag filter.
     *
     * @param {int} [amount] The amount of zigzag. Range: -100 to 100.
     * @param {int} [ridges] The ridge length.
     * @param {ZigZagType} [style] The zigzag style.
     * @return undefined
     */
    applyZigZag: function (amount, ridges, style) {
        
    },


    /**
     * Applies the add noise filter.
     *
     * @param {number} [amount] The amount of noise (as a percentage). Range: 0.1 to 400.0.
     * @param {NoiseDistribution} [distribution] The noise distribution type.
     * @param {boolean} [monochromatic] If true, applies the filter only to the tonal elements in the image without changing the colors.
     * @return undefined
     */
    applyAddNoise: function (amount, distribution, monochromatic) {
        
    },


    /**
     * Applies the despeckle filter.
     *
     * @return undefined
     */
    applyDespeckle: function () {
        
    },


    /**
     * Applies the dust and scratches filter.
     *
     * @param {int} [radius] The size (in pixels) of the area searched for dissimilar pixels. Range: 1 to 16.
     * @param {int} [threshold] Determines how dissimilar the pixels should be before they are eliminated. Range: 0 to 255.
     * @return undefined
     */
    applyDustAndScratches: function (radius, threshold) {
        
    },


    /**
     * Applies the median noise filter.
     *
     * @param {number} [radius] The size of the area searched for pixels of similar brightness. Range: 0 to 100.
     * @return undefined
     */
    applyMedianNoise: function (radius) {
        
    },


    /**
     * Applies the clouds filter.
     *
     * @return undefined
     */
    applyClouds: function () {
        
    },


    /**
     * Applies the difference clouds filter.
     *
     * @return undefined
     */
    applyDifferenceClouds: function () {
        
    },


    /**
     * Applies the lens flare filter.
     *
     * @param {int} [brightness] The flare brightness. Range: 10 to 300.
     * @param {UnitPoint} [flareCenter] The position of the flare center.
     * @param {LensType} [lensType] The lens type.
     * @return undefined
     */
    applyLensFlare: function (brightness, flareCenter, lensType) {
        
    },


    /**
     * Applies the texture fill filter.
     *
     * @param {File} [textureFile] The texture file. Must be a grayscale Photoshop file.
     * @return undefined
     */
    applyTextureFill: function (textureFile) {
        
    },


    /**
     * Applies the sharpen filter.
     *
     * @return undefined
     */
    applySharpen: function () {
        
    },


    /**
     * Applies the sharpen edges filter.
     *
     * @return undefined
     */
    applySharpenEdges: function () {
        
    },


    /**
     * Applies the sharpen more filter.
     *
     * @return undefined
     */
    applySharpenMore: function () {
        
    },


    /**
     * Applies the unsharp mask filter.
     *
     * @param {number} [amount] The amount of sharpening (as a percentage). Range: 1 to 500.
     * @param {number} [radius] The radius in pixels. Range: 0.1 to 250.0.
     * @param {int} [threshold] The contrast threshold. Range: 0 to 255.
     * @return undefined
     */
    applyUnSharpMask: function (amount, radius, threshold) {
        
    },


    /**
     * Applies the de-interlace filter.
     *
     * @param {EliminateFields} [eliminateFields] The fields to eliminate.
     * @param {CreateFields} [createFields] The method to use to replace eliminated fields.
     * @return undefined
     */
    applyDeInterlace: function (eliminateFields, createFields) {
        
    },


    /**
     * Applies the NTSC colors filter.
     *
     * @return undefined
     */
    applyNTSC: function () {
        
    },


    /**
     * Applies the custom filter.
     *
     * @param {int} [characteristics] The custom filter characteristics. This is an array of 25 values that corresponds to a left-to-right, top-to- bottom traversal of the array presented in the Custom dialog in the user interface (Filter > Other > Custom).
     * @param {int} [scale] The value by which to divide the sum of the brightness values of the pixels included in the calculation.
     * @param {int} [offset] The value to be added to the result of the scale calculation.
     * @return undefined
     */
    applyCustomFilter: function (characteristics, scale, offset) {
        
    },


    /**
     * Applies the high pass filter.
     *
     * @param {number} [radius] The width (in pixels) of the radius where edge details are retained.
     * @return undefined
     */
    applyHighPass: function (radius) {
        
    },


    /**
     * Applies the maximum filter.
     *
     * @param {number} [radius] The choke area (in pixels). Range: 0 to 100.
     * @return undefined
     */
    applyMaximum: function (radius) {
        
    },


    /**
     * Applies the minimum filter.
     *
     * @param {number} [radius] The spread area (in pixels). Range: 0 to 100.
     * @return undefined
     */
    applyMinimum: function (radius) {
        
    },


    /**
     * Applies the offset filter.
     *
     * @param {UnitValue} [horizontal] The amount (in pixels) to move the selection horizontally (to the right). Range: -6144 to 6144.
     * @param {UnitValue} [vertical] The amount (in pixels) to move the selection vertically (downward). Range: -6144 to 6144.
     * @param {OffsetUndefinedAreas} [undefinedAreas] The method for filling areas left blank by the offset.
     * @return undefined
     */
    applyOffset: function (horizontal, vertical, undefinedAreas) {
        
    },


    /**
     * Adjusts levels of the selected channels.
     *
     * @param {int} [inputRangeStart] The input levels minimum. Range: 0 to 253.
     * @param {int} [inputRangeEnd] The input levels maximum. Range: (input range start + 2) to 253.
     * @param {number} [inputRangeGamma] The input levels gamma. Range: 0.10 to 9.99.
     * @param {int} [outputRangeStart] The output levels minimum. Range: 0 to 253.
     * @param {int} [outputRangeEnd] The output levels maximum. Range: (output range start + 2) to 253.
     * @return undefined
     */
    adjustLevels: function (inputRangeStart, inputRangeEnd, inputRangeGamma, outputRangeStart, outputRangeEnd) {
        
    },


    /**
     * Adjust the levels of the selected channels using the auto levels option.
     *
     * @return undefined
     */
    autoLevels: function () {
        
    },


    /**
     * Adjusts the contrast of the selected channels automatically.
     *
     * @return undefined
     */
    autoContrast: function () {
        
    },


    /**
     * Adjusts the tonal range of the selected channel using up to fourteen points.
     *
     * @param {Point} [curveShape] The curve points. The number of points must be between 2 and 14.
     * @return undefined
     */
    adjustCurves: function (curveShape) {
        
    },


    /**
     * Adjusts the brightness and constrast.
     *
     * @param {int} [brightness] The brightness amount. Range: -100 to 100.
     * @param {int} [contrast] The contrast amount. Range: -100 to 100.
     * @return undefined
     */
    adjustBrightnessContrast: function (brightness, contrast) {
        
    },


    /**
     * Adjusts the color balance of the layer's component channels.
     *
     * @param {int} [shadows] The adjustments for the shadows. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
     * @param {int} [midtones] The adjustments for the midtones. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
     * @param {int} [highlights] The adjustments for the highlights. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
     * @param {boolean} [preserveLuminosity] If true, luminosity is preserved.
     * @return undefined
     */
    adjustColorBalance: function (shadows, midtones, highlights, preserveLuminosity) {
        
    },


    /**
     * Converts a color image to a grayscale image in the current color mode by assigning equal values of each component color to each pixel.
     *
     * @return undefined
     */
    desaturate: function () {
        
    },


    /**
     * 
     *
     * @param {AdjustmentReference} [selectionMethod] Modifies the amount of a process color in a specified primary color without affecting the other primary colors.
     * @param {number} [reds] Array of 4 values: cyan, magenta, yellow, black.
     * @param {number} [yellows] Array of 4 values: cyan, magenta, yellow, black.
     * @param {number} [greens] Array of 4 values: cyan, magenta, yellow, black.
     * @param {number} [cyans] Array of 4 values: cyan, magenta, yellow, black.
     * @param {number} [blues] Array of 4 values: cyan, magenta, yellow, black.
     * @param {number} [magentas] Array of 4 values: cyan, magenta, yellow, black.
     * @param {number} [whites] Array of 4 values: cyan, magenta, yellow, black.
     * @param {number} [neutrals] Array of 4 values: cyan, magenta, yellow, black.
     * @param {number} [blacks] Array of 4 values: cyan, magenta, yellow, black.
     * @return undefined
     */
    selectiveColor: function (selectionMethod, reds, yellows, greens, cyans, blues, magentas, whites, neutrals, blacks) {
        
    },


    /**
     * Modifies a targeted (output) color channel using a mix of the existing color channels in the image. (output channels = An array of channel specifications. For each component channel, specify a list of adjustment values (-200 to 200) followed by a 'constant' value (-200 to 200).) When monochrome = true, the maximum number of channel value specifications is 1. Valid only when 'document mode' = RGB or CMYK. RGB arrays must include four doubles. CMYK arrays must include five doubles.
     *
     * @param {any} [outputChannels] A list of channel specifications. For each component channel that the document has, you must specify a list of adjustment values followed by a 'constant' value.
     * @param {boolean} [monochrome] If true, uses monochrome mixing. Note: If this is true, you can only specify one channel value. (default: false)
     * @return undefined
     */
    mixChannels: function (outputChannels, monochrome) {
        
    },


    /**
     * Inverts the colors in the layer by converting the brightness value of each pixel in the channels to the inverse value on the 256-step color-values scale.
     *
     * @return undefined
     */
    invert: function () {
        
    },


    /**
     * Redistributes the brightness values of pixels in an image to more evenly represent the entire range of brightness levels within the image.
     *
     * @return undefined
     */
    equalize: function () {
        
    },


    /**
     * Converts grayscale or color images to high-contrast, B/W images by converting pixels lighter than the specified threshold to white and pixels darker than the threshold to black.
     *
     * @param {int} [level] The threshold level.
     * @return undefined
     */
    threshold: function (level) {
        
    },


    /**
     * Specifies the number of tonal levels for each channel and then maps pixels to the closest matching level.
     *
     * @param {int} [levels] The tonal levels. Range: 2 to 255.
     * @return undefined
     */
    posterize: function (levels) {
        
    },


    /**
     * Adjusts the layer's color balance and temperature as if a color filter had been applied.
     *
     * @param {SolidColor} [fillColor] The color to use for the fill.
     * @param {int} [density] The density (as a percentage) of the filter effect. Range: 1 to 100. (default: 25)
     * @param {boolean} [preserveLuminosity] If true, luminosity is preserved. (default: true)
     * @return undefined
     */
    photoFilter: function (fillColor, density, preserveLuminosity) {
        
    },


    /**
     * Adjusts the range of tones in the shadows and highlights.
     *
     * @param {int} [shadowAmount] The shadow amount, as a percentage. Range: 0 to 100. (default: 50)
     * @param {int} [shadowWidth] The shadow width, as a percentage. Range: 0 to 100 for tonal width (0 = narrow), (100 = broad). (default: 50)
     * @param {int} [shadowRaduis] The shadow radius (in pixels). Range: 0 to 2500. (default: 30)
     * @param {int} [highlightAmount] The highlight amount, as a percentage. Range: 0 to 100. (default: 0)
     * @param {int} [highlightWidth] The highlight width. Range: 0 to 100 for tonal width (0 = narrow), (100 = broad). (default: 50)
     * @param {int} [highlightRaduis] The highlight radius (in pixels). Range: 0 to 2500. (default: 30)
     * @param {int} [colorCorrection] The amount to adjust the colors in the changed portion of the image. Range: -100 to 100. (default: 20)
     * @param {int} [midtoneContrast] The amount of midtone contrast. Range: -100 to 100. (default: 0)
     * @param {number} [blackClip] Fractions of whites to be clipped. Range: 0.000 to 50.000. (default: 0.01)
     * @param {number} [whiteClip] Fractions of blacks to be clipped. Range: 0.000 to 50.000. (default: 0.01)
     * @return undefined
     */
    shadowHighlight: function (shadowAmount, shadowWidth, shadowRaduis, highlightAmount, highlightWidth, highlightRaduis, colorCorrection, midtoneContrast, blackClip, whiteClip) {
        
    },


};

