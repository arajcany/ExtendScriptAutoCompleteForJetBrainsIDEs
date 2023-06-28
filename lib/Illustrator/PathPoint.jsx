/*
 * A point on a path.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2023\omv.xml
 * OMV Time: Wed Aug 17 13:33:16 UTC+5 2022
 * OMV Title: Adobe Illustrator 27 Type Library
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
     */
    anchor: Point,


    /**
     * Location of the left direction point (in position)
     * @type {Point}
     */
    leftDirection: Point,


    /**
     * Location of the right direction point (out position)
     * @type {Point}
     */
    rightDirection: Point,


    /**
     * The type of point: smooth/corner.
     * @type {PointType}
     */
    pointType: PointType,


    /**
     * The path point selected state.
     * @type {PathPointSelection}
     */
    selected: PathPointSelection,



    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


};

