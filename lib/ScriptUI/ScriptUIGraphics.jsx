/*
 * An object used to draw custom graphics, found in the graphics property of window, container, and control objects.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\CommonFiles\scriptui.xml
 * OMV Time: 
 * OMV Title: ScriptUI Classes
 */
var ScriptUIGraphics = {


    /**
     * Contains the enumerated constants for the type argument of ;newBrush().
     * @type {Object}
     * @readonly
     */
    BrushType: Object,


    /**
     * Contains the enumerated constants for the type argument of ;newPen().
     * @type {Object}
     * @readonly
     */
    PenType: Object,


    /**
     * The background color for containers; for non-containers, the parent background color.
     * @type {ScriptUIBrush}
     */
    backgroundColor: ScriptUIBrush,


    /**
     * The background color for containers when disabled or inactive; for non-containers, the parent background color.
     * @type {ScriptUIBrush}
     */
    disabledBackgroundColor: ScriptUIBrush,


    /**
     * The text color when the element is disabled or inactive.
     * @type {ScriptUIPen}
     */
    disabledForegroundColor: ScriptUIPen,


    /**
     * The default font to use for displaying text.
     * @type {ScriptUIFont}
     */
    font: ScriptUIFont,


    /**
     * The text color.
     * @type {ScriptUIPen}
     */
    foregroundColor: ScriptUIPen,


    /**
     * The current drawing path, encapsulated in a path object.
     * @type {ScriptUIPath}
     * @readonly
     */
    currentPath: ScriptUIPath,


    /**
     * The current position in the current drawing path.
     * @type {Point}
     * @readonly
     */
    currentPoint: Point,



    /**
     * Creates a new painting brush object.
     *
     * @param {Number} [type] The brush type, solid or theme.
     * @param {} [color] The brush color.
     * @return ScriptUIBrush
     */
    newBrush: function (type, color) {
        
    },


    /**
     * Creates a new drawing pen object.
     *
     * @param {Number} [type] The pen type, solid or theme.
     * @param {} [color] The pen color.
     * @param {Number} [width] The width of the pen line in pixels.
     * @return ScriptUIPen
     */
    newPen: function (type, color, width) {
        
    },


    /**
     * Creates a new, empty path object.
     *
     * @return ScriptUIPath
     */
    newPath: function () {
        
    },


    /**
     * Closes the current path.
     *
     * @return undefined
     */
    closePath: function () {
        
    },


    /**
     * Adds a given point to the ;currentPath, and makes it the current drawing position.
     *
     * @param {Number} [x] The X coordinate for the new point, relative to the origin of this element.
     * @param {Number} [y] The Y coordinate for the new point, relative to the origin of this element.
     * @return Point
     */
    moveTo: function (x, y) {
        
    },


    /**
     * Adds a path segment to the ;currentPath.
     *
     * @param {Number} [x] The X coordinate for the destination point, relative to the origin of this element.
     * @param {Number} [y] The Y coordinate for the destination point, relative to the origin of this element.
     * @return Point
     */
    lineTo: function (x, y) {
        
    },


    /**
     * Defines a rectangular path in the ;currentPath ;object.
     *
     * @param {Number} [left] The left coordinate relative to the origin of this element.
     * @param {Number} [top] The top coordinate relative to the origin of this element.
     * @param {Number} [width] The width in pixels.
     * @param {Number} [height] The height in pixels.
     * @return Point
     */
    rectPath: function (left, top, width, height) {
        
    },


    /**
     * Defines an elliptical path within a given rectangular area in the ;currentPath ;object, which can be filled using ;fillPath() ;or stroked using ;strokePath().
     *
     * @param {Number} [left] The left coordinate of the region, relative to the origin of this element.
     * @param {Number} [top] The top coordinate of the region, relative to the origin of this element.
     * @param {Number} [width] The width of the region in pixels.
     * @param {Number} [height] The height of the region in pixels.
     * @return Point
     */
    ellipsePath: function (left, top, width, height) {
        
    },


    /**
     * Strokes the path segments of a path with a given drawing pen.
     *
     * @param {ScriptUIPen} [pen] The drawing pen that defines the color and line width.
     * @param {ScriptUIPath} [path] The path object. Default is the ;currentPath.
     * @return undefined
     */
    strokePath: function (pen, path) {
        
    },


    /**
     * Fills a path using a given painting brush.
     *
     * @param {ScriptUIBrush} [brush] The brush object that defines the fill color.
     * @param {ScriptUIPath} [path] The path object. Default is the ;currentPath.
     * @return undefined
     */
    fillPath: function (brush, path) {
        
    },


    /**
     * Draws a focus ring within a region of this element.
     *
     * @param {Number} [left] The left coordinate of the region.
     * @param {Number} [top] The top coordinate of the region.
     * @param {Number} [width] The width of the region in pixels.
     * @param {Number} [height] The height of the region in pixels.
     * @return undefined
     */
    drawFocusRing: function (left, top, width, height) {
        
    },


    /**
     * Draws an image within a given region of the element.
     *
     * @param {ScriptUIImage} [image] The image to draw.
     * @param {Number} [left] The left coordinate of the region, relative to the origin of this element.
     * @param {Number} [top] The top coordinate of the region, relative to the origin of this element.
     * @param {Number} [width] The width in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image width.
     * @param {Number} [height] The height in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image height.
     * @return undefined
     */
    drawImage: function (image, left, top, width, height) {
        
    },


    /**
     * Draw the platform-specific control associated with this element.
     *
     * @return undefined
     */
    drawOSControl: function () {
        
    },


    /**
     * Draw a string of text starting at a given point in this element, using a given drawing pen and font.
     *
     * @param {String} [text] The text string.
     * @param {ScriptUIPen} [pen] The drawing pen to use.
     * @param {Number} [x] The left coordinate, relative to the origin of this element.
     * @param {Number} [y] The top coordinate, relative to the origin of this element.
     * @param {ScriptUIFont} [font] The font to use. Default is the  ;font ;value in this object.
     * @return undefined
     */
    drawString: function (text, pen, x, y, font) {
        
    },


    /**
     * Calculates the size needed to display a string using the given font.
     *
     * @param {String} [text] The text string to measure.
     * @param {ScriptUIFont} [font] The font to use. Default is the ;font ;value in this object.
     * @param {Number} [boundingWidth] The bounding width.
     * @return Dimension
     */
    measureString: function (text, font, boundingWidth) {
        
    },


};

