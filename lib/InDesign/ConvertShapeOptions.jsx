/*
 * Options for indicating the type of shape to which to covert an object.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var ConvertShapeOptions = {


    /**
     * Converts the object to a rectangle.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_RECTANGLE: 1129534021,


    /**
     * Converts the object to a rectangle with rounded corners.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_ROUNDED_RECTANGLE: 1129534034,


    /**
     * Converts the object to a rectangle with beveled corners.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_BEVELED_RECTANGLE: 1129529938,


    /**
     * Converts the object to a rectangle with inverse rounded corners.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_INVERSE_ROUNDED_RECTANGLE: 1129531730,


    /**
     * Converts the object to an ellipse.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_OVAL: 1129533270,


    /**
     * Converts the object to a triangle.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_TRIANGLE: 1129534546,


    /**
     * Converts the object to a polygon.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_POLYGON: 1129533519,


    /**
     * Converts the object to a line that connects the upper left and lower right corners of the object's bounding box.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_LINE: 1129532489,


    /**
     * Converts the object to straight line. If the object is a square, circle, or its bounding box is wider than it is tall, the line is horizontal and connects the center points on the vertical sides of the bounding box. If the object's bounding box is taller than it is wide, the line connects the center points of the horizontal sides of the bounding box.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_STRAIGHT_LINE: 1129534284,


    /**
     * Converts the object to an open path.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_OPEN_PATH: 1129533296,


    /**
     * Converts the object to a closed path.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_CLOSED_PATH: 1129530224,




};

