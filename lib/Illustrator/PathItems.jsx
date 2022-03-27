/*
 * A collection of path items.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var PathItems = {


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
     * Number of elements in the collection.
     * @type {int}
     * @readonly
     */
    length: int,



    /**
     * Create a path.
     *
     * @return PathItem
     */
    add: function () {
        
    },


    /**
     * Create an elliptical path item.
     *
     * @param {number} [top] The ellipse's bounds. (default: 100)
     * @param {number} [left] The ellipse's bounds. (default: 100)
     * @param {number} [width] The ellipse's bounds. (default: 50)
     * @param {number} [height] The height of the ellipse. (default: 100)
     * @param {boolean} [reversed] Is the ellipse path reversed? (default: false)
     * @param {boolean} [inscribed] Is the ellipse path inscribed? (default: true)
     * @return PathItem
     */
    ellipse: function (top, left, width, height, reversed, inscribed) {
        
    },


    /**
     * Used to create a rectangular path item. Not for path item access.
     *
     * @param {number} [top] The top coordinate of the rectangle's bounds.
     * @param {number} [left] The left coordinate of the rectangle's bounds.
     * @param {number} [width] The width of the rectangle.
     * @param {number} [height] The height of the rectangle.
     * @param {boolean} [reversed] Is the rectangle path reversed? (default: false)
     * @return PathItem
     */
    rectangle: function (top, left, width, height, reversed) {
        
    },


    /**
     * Used to create a rounded-corner rectangular path item. Not for path item access.
     *
     * @param {number} [top] 
     * @param {number} [left] 
     * @param {number} [width] 
     * @param {number} [height] 
     * @param {number} [horizontalRadius] Horizontal corner radius. (default: 15)
     * @param {number} [verticalRadius] Vertical corner radius. (default: 20)
     * @param {boolean} [reversed] Is the rectangle path reversed? (default: false)
     * @return PathItem
     */
    roundedRectangle: function (top, left, width, height, horizontalRadius, verticalRadius, reversed) {
        
    },


    /**
     * Used to create a regular polygon path item. Not for path item access.
     *
     * @param {number} [centerX]  (default: 200)
     * @param {number} [centerY]  (default: 300)
     * @param {number} [radius] The radius of the polygon points. (default: 50)
     * @param {Int32} [sides] The number of sides on the polygon. (default: 8)
     * @param {boolean} [reversed] Is the polygon path reversed? (default: false)
     * @return PathItem
     */
    polygon: function (centerX, centerY, radius, sides, reversed) {
        
    },


    /**
     * Used to create a star-shaped path item. Not for path item access.
     *
     * @param {number} [centerX]  (default: 200)
     * @param {number} [centerY]  (default: 300)
     * @param {number} [radius] The outside radius of the star points. (default: 50)
     * @param {number} [innerRadius] The inside radius of the star points. (default: 20)
     * @param {Int32} [points] The number of points on the star. (default: 5)
     * @param {boolean} [reversed] Is the star path reversed? (default: false)
     * @return PathItem
     */
    star: function (centerX, centerY, radius, innerRadius, points, reversed) {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Get the first element in the collection with the provided name.
     *
     * @param {string} [name]
     * @return PathItem
     */
    getByName: function (name) {
        
    },


};

