/*
 * Encapsulates all node-handling data and the node handler for a Thumbnail object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var CacheElement = {


    /**
     * The path of the asset associated with this object.
     * @type {String}
     * @readonly
     */
    path: String,


    /**
     * Core data set.
     * @type {Infoset}
     */
    immediate: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    item: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    itemContent: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    icon: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    badges: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    children: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    thumbnail: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    preview: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    fullsize: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    metadata: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    linkTarget: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    cameraRaw: Infoset,


    /**
     * Core data set.
     * @type {Infoset}
     */
    quickMetadata: Infoset,



    /**
     * Calls the authenticate() method defined in the ExtensionHandler object associated with this element.
     *
     * @return undefined
     */
    doAuthentication: function () {
        
    },


};

