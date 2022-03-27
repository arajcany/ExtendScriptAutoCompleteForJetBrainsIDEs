/*
 * Represents an image as a matrix of pixell.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var BitmapData = {


    /**
     * Image height in pixels.
     * @type {Number}
     * @readonly
     */
    height: Number,


    /**
     * A pointer to the buffer storing the matrix of pixels.
     * @type {Number}
     * @readonly
     */
    pointer: Number,


    /**
     * The rectangle that defines the size of the bitmap image, in the format [0, 0, w, h]. Origin is top left.
     * @type {Array}
     * @readonly
     */
    rectangle: Array,


    /**
     * The length in bytes of a row of pixels.
     * @type {Number}
     * @readonly
     */
    rowBytes: Number,


    /**
     * True if the bitmap image supports per-pixel transparency.
     * @type {Boolean}
     * @readonly
     */
    transparent: Boolean,


    /**
     * Image width in pixels.
     * @type {Number}
     * @readonly
     */
    width: Number,


    /**
     * 
     * @type {Number}
     * @readonly
     */
    channelCount: Number,


    /**
     * 
     * @type {Number}
     * @readonly
     */
    colorSpace: Number,


    /**
     * A 32-bit Adler checksum of the image data.
     * @type {Number}
     * @readonly
     */
    checksum: Number,



    /**
     * Duplicates this object, creating a new object with an exact copy of the contained bitmap.
     *
     * @return BitmapData
     */
    clone: function () {
        
    },


    /**
     * Explicitly frees the memory used to store pixel data for this object.
     *
     * @return undefined
     */
    dispose: function () {
        
    },


    /**
     * Writes the image data to a file in JPEG format.
     *
     * @param {File} [dest] A  File object or a string containing the platform-specific path and filename for the target file.
     * @param {Number} [jpegQuality] The quality of the image. (default: 60)
     * @return undefined
     */
    exportTo: function (dest, jpegQuality) {
        
    },


    /**
     * Retrieves the color data for a specific pixel from the image.
     *
     * @param {Number} [x] The horizontal coordinate of the pixel, relative to the bitmap's origin, the top left.
     * @param {Number} [y] The vertical coordinate of the pixel, relative to the bitmap's origin, the top left.
     * @return Number
     */
    getPixel: function (x, y) {
        
    },


    /**
     * Retrieves the color data for a specific pixel from the image, including its alpha channel.
     *
     * @param {Number} [x] The horizontal coordinate of the pixel, relative to the bitmap's origin, the top left.
     * @param {Number} [y] The vertical coordinate of the pixel, relative to the bitmap's origin, the top left.
     * @return Number
     */
    getPixel32: function (x, y) {
        
    },


    /**
     * Loads the JPEG stream at a memory address into this object, replacing the previous content.
     *
     * @param {Number} [data] The address of the data stream.
     * @param {Number} [dataSize] The length of the data buffer in bytes.
     * @return undefined
     */
    loadFromJpegStream: function (data, dataSize) {
        
    },


    /**
     * Loads the PNG stream at a memory address into this object, replacing the previous content.
     *
     * @param {Number} [data] The address of the data stream.
     * @param {Number} [dataSize] The length of the data buffer in bytes.
     * @return undefined
     */
    loadFromPngStream: function (data, dataSize) {
        
    },


    /**
     * Resizes the bitmap to the specified dimensions.
     *
     * @param {Number} [dimensions] The desired edge size, in pixels, of the resized image.
     * @param {String} [quality] The algorithm to use in scaling, which trades off image quality and execution time.
     * @return BitmapData
     */
    resize: function (dimensions, quality) {
        
    },


    /**
     * Rotates the bitmap by the specified multiple of 90 degrees.
     *
     * @param {Number} [angle] The rotation angle in degrees.
     * @return BitmapData
     */
    rotate: function (angle) {
        
    },


    /**
     * Sets the color data for a specific pixel from the image.
     *
     * @param {Number} [x] The horizontal coordinate of the pixel, relative to the bitmap's origin, the top left.
     * @param {Number} [y] The vertical coordinate of the pixel, relative to the bitmap's origin, the top left.
     * @param {Object} [color] The color.
     * @return undefined
     */
    setPixel: function (x, y, color) {
        
    },


    /**
     * Sets the color data for a specific pixel from the image, including its alpha channel.
     *
     * @param {Number} [x] The horizontal coordinate of the pixel, relative to the bitmap's origin, the top left.
     * @param {Number} [y] The vertical coordinate of the pixel, relative to the bitmap's origin, the top left.
     * @param {Object} [color] The color.
     * @return undefined
     */
    setPixel32: function (x, y, color) {
        
    },


};

