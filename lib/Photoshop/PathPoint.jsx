/*
 * Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var PathPoint = {


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
     * The position (coordinates) of the anchor point.
     * @type {Point}
     * @readonly
     */
    anchor: Point,


    /**
     * The location of the left direction point (the "in" position).
     * @type {Point}
     * @readonly
     */
    leftDirection: Point,


    /**
     * The location of the right direction point (the "out" position).
     * @type {Point}
     * @readonly
     */
    rightDirection: Point,


    /**
     * The type of point.
     * @type {PointKind}
     * @readonly
     */
    kind: PointKind,




};

