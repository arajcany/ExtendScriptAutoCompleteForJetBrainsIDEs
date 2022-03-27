/*
 * An (exportable) asset.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var Asset = {


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
     * The UID for the asset which is unique within a document.
     * @type {Int32}
     * @readonly
     */
    assetID: Int32,


    /**
     * Name of the asset.
     * @type {string}
     */
    assetName: undefined,



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


    /**
     * Gets the normalized name without special characters, such that it can be used as a file name.
     *
     * @return string
     */
    getNormalizedName: function () {
        
    },


};

