/*
 * The automatic adjustment to make to the pattern of a dashed or dotted stroke to cover corner points in a path.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var StrokeCornerAdjustment = {


    /**
     * No adjustment.
     * @type {number}
     * @readonly
     */
    NONE: 1852796517,


    /**
     * Changes the length of dashes so that dashes always occur at path ends and corners; maintains set gap length. Note: Can cause dashes to be different lengths on shapes whose sides are of different lengths, such as rectangles.
     * @type {number}
     * @readonly
     */
    DASHES: 1162113896,


    /**
     * Changes the length of gaps so that dashes or dots always occur at ends and corners; maintains dash length or dot diameter. Note: Can cause gaps to be different lengths on shapes whose sides are of different lengths, such as rectangles.
     * @type {number}
     * @readonly
     */
    GAPS: 1164406899,


    /**
     * Adjusts both dashes and gaps to cover corners and end points. Note: Causes dash and gap sizes to be consistent on all sides of the shape.
     * @type {number}
     * @readonly
     */
    DASHES_AND_GAPS: 1148405616,




};

