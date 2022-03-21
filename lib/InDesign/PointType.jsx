/*
 * The path point type.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var PointType = {


    /**
     * The point is a smooth point, it has two direction lines which are parallel.
     * @type {number}
     * @readonly
     */
    SMOOTH: 1936553064,


    /**
     * The point is a corner point, it has either one direction line, or two independent direction lines.
     * @type {number}
     * @readonly
     */
    CORNER: 1668443762,


    /**
     * The point is a plain point, it has no direction lines.
     * @type {number}
     * @readonly
     */
    PLAIN: 1886151022,


    /**
     * A special type of smooth point with two direction lines of equal length.
     * @type {number}
     * @readonly
     */
    SYMMETRICAL: 1937337709,




};

