/*
 * Represents the navigation nodes that appear in the Favorites pane in the Adobe Bridge browser.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var Favorites = {


    /**
     * Sets the section of the Favorites pane for the next node operations in the immediate scope.
     * @type {String}
     */
    section: String,



    /**
     * Appends a new node into the current section of the favorites array.
     *
     * @param {Thumbnail} [thumbnail] The Thumbnail object for the node to add.
     * @return Boolean
     */
    add: function (thumbnail) {
        
    },


    /**
     * Inserts a new node into favorites.
     *
     * @param {Thumbnail} [parent] The Thumbnail object for the parent node.
     * @param {Thumbnail} [child] The Thumbnail object for the new subnode.
     * @return Boolean
     */
    addChild: function (parent, child) {
        
    },


    /**
     * Associates a named workspace with a thumbnail in the standard section of the Favorites pane.
     *
     * @param {Thumbnail} [thumb] The Thumbnail object.
     * @param {String} [workspace] The workspace name.
     * @return Boolean
     */
    associateWorkspace: function (thumb, workspace) {
        
    },


    /**
     * Deletes all the nodes from the current section of the favorites array and updates the Favorites pane.
     *
     * @return undefined
     */
    clearAll: function () {
        
    },


    /**
     * Reports whether the list of favorites currently contains a specific node, either in the standard or user sections.
     *
     * @param {String} [uri] The Bridge URI string for the node.
     * @return Boolean
     */
    contains: function (uri) {
        
    },


    /**
     * Disables a node from the standard section.
     *
     * @param {String} [uri] The Bridge URI string for the node.
     * @return undefined
     */
    disable: function (uri) {
        
    },


    /**
     * Enables a node from the standard section.
     *
     * @param {String} [uri] The Bridge URI string for the node.
     * @return undefined
     */
    enable: function (uri) {
        
    },


    /**
     * Retrieves the children of a node in the Standard section of the Favorites pane.
     *
     * @param {String} [uri] The Bridge URI string for the node.
     * @return Array
     */
    getChildren: function (uri) {
        
    },


    /**
     * Inserts a new node into the current section of the favorites array.
     *
     * @param {Thumbnail} [thumbnail] The Thumbnail object for the node to add.
     * @param {} [index] A 0-based index into the existing node array at which to insert the new node, or an object reference for a node in the existing node array.
     * @return Boolean
     */
    insert: function (thumbnail, index) {
        
    },


    /**
     * Removes the specified script-defined node from the favorites array and updates the Favorites pane.
     *
     * @param {Thumbnail} [thumbnail] The Thumbnail object for the node to remove.
     * @return Boolean
     */
    remove: function (thumbnail) {
        
    },


};

