/*
 * Represents Adobe Bridge-defined or script-defined data for Adobe Bridge nodes.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var Infoset = {


    /**
     * The CacheData object containing cache status for this set.
     * @type {CacheData}
     */
    cacheData: CacheData,


    /**
     * The descriptions of the members of this set.
     * @type {Array}
     */
    description: Array,


    /**
     * The name of the ExtensionHandler object that manages this data.
     * @type {String}
     * @readonly
     */
    extension: String,


    /**
     * The name of this set.
     * @type {String}
     */
    infosetName: String,



    /**
     * Adds a child node to the core data set children.
     *
     * @param {String} [path] The Bridge URI (path and file name) of the child node
     * @param {ExtensionModel} [model] An ExtensionModel  object that manages the new child.
     * @param {String} [containerHint] Whether the new child is a container.
     * @return undefined
     */
    addChild: function (path, model, containerHint) {
        
    },


    /**
     * Sets all members of this set to the default value for the data type.
     *
     * @return undefined
     */
    initializeMembersToDefaultValues: function () {
        
    },


};

