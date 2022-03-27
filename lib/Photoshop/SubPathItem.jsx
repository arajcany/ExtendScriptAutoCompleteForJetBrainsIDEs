/*
 * Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var SubPathItem = {


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
     * If true, the path is closed.
     * @type {boolean}
     * @readonly
     */
    closed: undefined,


    /**
     * The sub path operation on other sub paths.
     * @type {ShapeOperation}
     * @readonly
     */
    operation: ShapeOperation,


    /**
     * The path points collection in the sub path.
     * @type {PathPoints}
     * @readonly
     */
    pathPoints: PathPoints,




};

