/*
 * Represents a reference to a node in the browser navigation hierarchy.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var Thumbnail = {


    /**
     * If the value of type is alias, the kind of target this thumbnail represents.
     * @type {String}
     * @readonly
     */
    aliasType: String,


    /**
     * The node children of this container node.
     * @type {Array}
     * @readonly
     */
    children: Array,


    /**
     * When true, the node is a container.
     * @type {Boolean}
     * @readonly
     */
    container: Boolean,


    /**
     * Provides access to the core node-data sets defined by the default node handler.
     * @type {Infoset}
     * @readonly
     */
    core: Infoset,


    /**
     * Date the referenced file or folder was created, if it can be determined.
     * @type {Date}
     * @readonly
     */
    creationDate: Date,


    /**
     * DEPRECATED. Do not use.
     * @type {String}
     */
    displayMode: String,


    /**
     * DEPRECATED. Do not use.
     * @type {String}
     */
    displayPath: String,


    /**
     * For a file or folder, whether the resource for this node exists on the local disk.
     * @type {Boolean}
     * @readonly
     */
    exists: Boolean,


    /**
     * All of the ExtensionHandler objects that could handle this node.
     * @type {Array}
     * @readonly
     */
    extensions: Array,


    /**
     * Whether this thumbnail is associated with a file that contains embedded metadata.
     * @type {Boolean}
     * @readonly
     */
    hasMetadata: Boolean,


    /**
     * Whether this thumbnail is displayable.
     * @type {Boolean}
     * @readonly
     */
    hidden: Boolean,


    /**
     * The path to the operating-system icon image file for this node, when it represents a web page.
     * @type {String}
     */
    iconPath: String,


    /**
     * The label string for this thumbnail.
     * @type {String}
     */
    label: String,


    /**
     * Date the referenced file or folder was last modified, if it can be determined.
     * @type {Date}
     * @readonly
     */
    lastModifiedDate: Date,


    /**
     * Whether the thumbnail is associated with a local file-system object or a Version Cue node (which can have both a local and remote replica).
     * @type {String}
     * @readonly
     */
    location: String,


    /**
     * Whether this node represents a read-only file in Windows, or a file that has been locked in the Finder in Mac OS.
     * @type {Boolean}
     * @readonly
     */
    locked: Boolean,


    /**
     * The Metadata object associated with this thumbnail, if it supports embedded metadata.
     * @type {Metadata}
     */
    metadata: Metadata,


    /**
     * The referenced file’s MIME type, if it can be determined.
     * @type {String}
     * @readonly
     */
    mimeType: String,


    /**
     * The ExtensionModel object associated with this node.
     * @type {ExtensionModel}
     * @readonly
     */
    model: ExtensionModel,


    /**
     * The label displayed for the thumbnail.
     * @type {String}
     */
    name: String,


    /**
     * The Thumbnail object for the parent node of this thumbnail.
     * @type {Thumbnail}
     * @readonly
     */
    parent: Thumbnail,


    /**
     * DEPRECATED. Use spec or uri instead.
     * @type {String}
     * @readonly
     */
    path: String,


    /**
     * The rating value for this thumbnail.
     * @type {Number}
     */
    rating: Number,


    /**
     * The angle of rotation for the icon image of this node, in degrees.
     * @type {Number}
     */
    rotation: Number,


    /**
     * A  File or Folder object for this thumbnail’s referenced node.
     * @type {File}
     * @readonly
     */
    spec: File,


    /**
     * Waits for confirmation of a valid value to return the Metadata object associated with this thumbnail, if any.
     * @type {Metadata}
     */
    synchronousMetadata: Metadata,


    /**
     * The type of node this thumbnail references.
     * @type {String}
     * @readonly
     */
    type: String,


    /**
     * The full Bridge URI ( unique resource identifier) for this thumbnail.
     * @type {String}
     * @readonly
     */
    uri: String,



    /**
     * DEPRECATED. Do not use.
     *
     * @return undefined
     */
    add: function () {
        
    },


    /**
     * Creates a new Thumbnail object that references the same node as this one.
     *
     * @param {} [path] The parent node of the new copy.
     * @return Boolean
     */
    copyTo: function (path) {
        
    },


    /**
     * DEPRECATED. Do not use.
     *
     * @return undefined
     */
    insert: function () {
        
    },


    /**
     * Changes the parent of this thumbnail.
     *
     * @param {} [path] The new parent node.
     * @return Boolean
     */
    moveTo: function (path) {
        
    },


    /**
     * Launches the file referenced by this thumbnail in the appropriate application (such as Photoshop for JPEG files).
     *
     * @return Boolean
     */
    open: function () {
        
    },


    /**
     * Launches the file referenced by this thumbnail in the specified application.
     *
     * @param {String} [appPath] A platform-specific path string to the application.
     * @return Boolean
     */
    openWith: function (appPath) {
        
    },


    /**
     * Refreshes an associated information set or sets to reflect the current state of this node’s referenced file or folder.
     *
     * @param {} [infosetName] The data sets to refresh.
     * @return Boolean
     */
    refresh: function (infosetName) {
        
    },


    /**
     * Registers a callback function that is executed whenever a node-data value in this thumbnail changes.
     *
     * @param {} [callback] A developer-defined callback function.
     * @return undefined
     */
    registerInterest: function (callback) {
        
    },


    /**
     * Deletes this Thumbnail object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * If the value of type is alias, retrieves a Thumbnail object for the target of the alias.
     *
     * @return Thumbnail
     */
    resolve: function () {
        
    },


    /**
     * Opens the platform-specific native file browser, displays and selects the file or folder for this thumbnail.
     *
     * @return undefined
     */
    revealInSystemBrowser: function () {
        
    },


    /**
     * Removes a callback function from the list of callbacks registered for this thumbnail.
     *
     * @param {Function} [callback] A developer-defined callback function, previously registered with registerInterest().
     * @return undefined
     */
    unregisterInterest: function (callback) {
        
    },


    /**
     * Re-enumerates the children of a container node.
     *
     * @return undefined
     */
    verifyExternalChanges: function () {
        
    },


    /**
     * Returns true if the Thumbnail object can be played in Bridge.
     *
     * @return undefined
     */
    isDynamicMedia: function () {
        
    },


    /**
     * Toggles the state of the Play or Pause button in Preview panel for the selected item.
     *
     * @return undefined
     */
    togglePlayPause: function () {
        
    },


    /**
     * Returns true if selected file is already playing in the Preview panel.
     *
     * @return undefined
     */
    isPlaying: function () {
        
    },


    /**
     * Toggles the state of the Auto-Loop button in Preview panel for the selected item.
     *
     * @return undefined
     */
    toggleAutoLoop: function () {
        
    },


    /**
     * Returns true if the auto-loop is enabled in the Preview panel.
     *
     * @return undefined
     */
    isAutoLoopOn: function () {
        
    },


    /**
     * Sets seek position of playback slider in the Preview panel.
     *
     * @return undefined
     */
    setPosition: function () {
        
    },


    /**
     * Returns the position of playback slider from Preview panel.
     *
     * @return undefined
     */
    getPosition: function () {
        
    },


    /**
     * Sets position of the volume slider in the Preview panel.
     *
     * @return undefined
     */
    setVolume: function () {
        
    },


    /**
     * Returns the position of volume slider for the item being previewed in Bridge.
     *
     * @return undefined
     */
    getVolume: function () {
        
    },


};

