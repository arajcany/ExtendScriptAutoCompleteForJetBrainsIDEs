/*
 * Defines the properties and methods needed to extend the Adobe Bridge node model.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var ExtensionHandler = {


    /**
     * A collection of Infoset objects defining node data managed by this handler.
     * @type {Array}
     * @readonly
     */
    infosets: Array,


    /**
     * New methods that are defined on Thumbnail objects that are managed by this handler.
     * @type {Object}
     */
    methods: Object,


    /**
     * The unique identifying name of this node-handling extension.
     * @type {String}
     * @readonly
     */
    name: String,


    /**
     * A collection of lexical prefix strings for Bridge URIs.
     * @type {Array}
     * @readonly
     */
    prefixes: Array,


    /**
     * Implement a function that duplicates a set of nodes that are handled by this handler.
     * @type {Function}
     */
    duplicate: Function,


    /**
     * Implement a function that converts a path string to a canonical Bridge URI.
     * @type {Function}
     */
    getBridgeUriForPath: Function,


    /**
     * Implement a function that executes an extension-defined search among Adobe Bridge nodes of an extension-defined node type.
     * @type {Function}
     */
    getBridgeUriForSearch: Function,


    /**
     * Implement a function that retrieves existing sidecar files for a set of nodes.
     * @type {Function}
     */
    getSidecars: Function,


    /**
     * Implement a function that creates a model instance that implements node handling.
     * @type {Function}
     */
    makeModel: Function,


    /**
     * Implement a function that sets the rotation setting in metadata for a set of thumbnails to the same value for all. Does not rotate image bits.
     * @type {Function}
     */
    rotate: Function,


    /**
     * Implement a function that sets the labels for a set of thumbnails.
     * @type {Function}
     */
    setLabels: Function,


    /**
     * Implement a function that sets the ratings for a set of thumbnails.
     * @type {Function}
     */
    setRatings: Function,


    /**
     * Implement a function that embeds XMP file metadata packets in a set of files.
     * @type {Function}
     */
    setXmp: Function,


    /**
     * Implement a function that  acquires actual file data for a set of placeholder nodes.
     * @type {Function}
     */
    acquirePhysicalFiles: Function,


    /**
     * Implement a function that deletes a set of nodes, marking the associated files for deletion on disc by moving them to the system trash or recycle bin.
     * @type {Function}
     */
    moveToTrash: Function,




};

