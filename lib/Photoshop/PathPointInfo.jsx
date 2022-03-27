/*
 * A point on a path, expressed as an array of three coordinate arrays: the anchor point, left direction point, and right direction point. For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved segements, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve. You use the left direction point to bend the curve "outward" or make it convex; you use the right direction point to bend the curve "inward" or make it concave.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var PathPointInfo = {


    /**
     * The x and y coordinates of one end point of the path segment.
     * @type {Point}
     */
    anchor: Point,


    /**
     * The location of the left direction point ("in" position).
     * @type {Point}
     */
    leftDirection: Point,


    /**
     * The location of the right direction point ("out" position).
     * @type {Point}
     */
    rightDirection: Point,


    /**
     * The point type.
     * @type {PointKind}
     */
    kind: PointKind,


    /**
     * The x and y coordinates of one end point of the path segment.
     * @type {Point}
     */
    anchor: Point,


    /**
     * The location of the left direction point ("in" position).
     * @type {Point}
     */
    leftDirection: Point,


    /**
     * The location of the right direction point ("out" position).
     * @type {Point}
     */
    rightDirection: Point,


    /**
     * The point type.
     * @type {PointKind}
     */
    kind: PointKind,




};

