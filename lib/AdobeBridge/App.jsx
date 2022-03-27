/*
 * Represents the Adobe Bridge application.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var App = {


    /**
     * A collection of the default FilterDescription objects used to populate the Filter palette.
     * @type {Array}
     * @readonly
     */
    defaultFilterCriteria: Array,


    /**
     * A collection of the default SortCriterion objects used to sort the contents of container nodes.
     * @type {Array}
     * @readonly
     */
    defaultSortCriteria: Array,


    /**
     * The policy for the display of modal dialogs.
     * @type {String}
     */
    displayDialogs: String,


    /**
     * The active (top-most)   Document   object, representing the active browser window.
     * @type {Document}
     */
    document: Document,


    /**
     * A collection of   Document   objects representing the set of all open browser windows.
     * @type {Array}
     * @readonly
     */
    documents: Array,


    /**
     * An array of  event handler objects installed by scripts.
     * @type {Array}
     */
    eventHandlers: Array,


    /**
     * A collection of ExtensionHandler objects representing registered node-handling extensions.
     * @type {Array}
     * @readonly
     */
    extensions: Array,


    /**
     * The top-level Favoritesobject for the navigation hierarchy displayed in the Favorites palette.
     * @type {Favorites}
     * @readonly
     */
    favorites: Favorites,


    /**
     * The list of Bridge URI strings for the root nodes of the Folders palette.
     * @type {Array}
     * @readonly
     */
    folderRoots: Array,


    /**
     * The collection of script-defined InspectorPanel objects that make up the Inspector view for new browser windows.
     * @type {Array}
     * @readonly
     */
    inspectorPanels: Array,


    /**
     * The display name of the language for the current locale, as configured by the operating system.
     * @type {String}
     * @readonly
     */
    language: String,


    /**
     * The application specifier for the application that has most recently sent an interapplication message to Adobe Bridge.
     * @type {String}
     */
    lastSender: String,


    /**
     * The Adobe locale code for the current locale, as configured by the operating system.
     * @type {String}
     * @readonly
     */
    locale: String,


    /**
     * The application specifier for this application, "bridge".
     * @type {String}
     * @readonly
     */
    name: String,


    /**
     * The number of background tasks that Adobe Bridge has left to process.
     * @type {Number}
     * @readonly
     */
    pendingJobs: Number,


    /**
     * The Preferences object, which provides access to the user preferences shown in the Preferences dialog.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * 
     * @type {Array}
     * @readonly
     */
    standardFavorites: Array,


    /**
     * When true, Adobe Bridge attempts to ensure that all Thumbnail properties are valid before returning their values.
     * @type {Boolean}
     */
    synchronousMode: Boolean,


    /**
     * 
     * @type {Array}
     * @readonly
     */
    userFavorites: Array,


    /**
     * The version number of the Adobe Bridge application.
     * @type {String}
     * @readonly
     */
    version: String,


    /**
     * The duration in seconds between checks for folder consistency (checking whether files have been added or removed).
     * @type {Number}
     */
    watchDirInterval: Number,


    /**
     * The list of all available workspaces, both default and user- or script-defined.
     * @type {Array}
     * @readonly
     */
    workspaces: Array,



    /**
     * For each specified file or folder, if it refers to a resource that does not have a local copy (such as the files referenced by VersionCue nodes), downloads the resource.
     *
     * @param {Array} [files] An array of strings, each of which is a file or folder specification
     * @return undefined
     */
    acquirePhysicalFiles: function (files) {
        
    },


    /**
     * Adds a member thumbnail, or set of member thumbnails, to a collection.
     *
     * @param {Thumbnail} [collection] The Thumbnail object for the collection node, as returned by app.createCollection().
     * @param {any} [member] A Thumbnail object or Array of Thumbnail objects to be added to the collection.
     * @return Boolean
     */
    addCollectionMember: function (collection, member) {
        
    },


    /**
     * Appends a line of text to the Credits section of the Adobe Bridge About box.
     *
     * @param {String} [title] The unique identifying string for this addition.
     * @param {String} [content] The localizable string to be displayed.
     * @return any
     */
    addCredits: function (title, content) {
        
    },


    /**
     * Appends a custom URI to the list of root nodes in app.folderRoots, which appear in the Folders palette.
     *
     * @param {String} [uri] The Bridge URI string.
     * @return Boolean
     */
    addCustomRoot: function (uri) {
        
    },


    /**
     * Appends a line of text to the Legal Notice section of the Adobe Bridge About box.
     *
     * @param {String} [title] The unique identifying string for this addition.
     * @param {String} [content] The localizable string to be displayed.
     * @return any
     */
    addLegalNotice: function (title, content) {
        
    },


    /**
     * Calls on the operating system to emit a short audio tone.
     *
     * @return undefined
     */
    beep: function () {
        
    },


    /**
     * Gives Adobe Bridge the application focus for the operating system, and makes the current browser window the topmost active window in the windowing system.
     *
     * @return undefined
     */
    bringToFront: function () {
        
    },


    /**
     * Deprecated in Creative Suite 3. Do not use.
     *
     * @return Any
     */
    browseTo: function () {
        
    },


    /**
     * Forces Adobe Bridge to create thumbnail images for the specified folder.
     *
     * @param {} [path] The folder.
     * @param {Boolean} [recurse] Optional in Adobe Bridge 1.0, not used in Adobe Bridge 2.0.
     * @param {String} [quality] Whether to create low or high quality thumbnail images.
     * @param {Boolean} [buildFullSize] Whether to export fullsize images to cache folder.
     * @return Any
     */
    buildFolderCache: function (path, recurse, quality, buildFullSize) {
        
    },


    /**
     * Cancels a task that has been scheduled using app.scheduleTask().
     *
     * @param {Number} [taskId] The task ID number, as returned from app.scheduleTask().
     * @return Any
     */
    cancelTask: function (taskId) {
        
    },


    /**
     * Creates a new, named collection node.
     *
     * @param {String} [name] The name of the new collection.
     * @return Thumbnail
     */
    createCollection: function (name) {
        
    },


    /**
     * Creates a new, named smart collection node.
     *
     * @param {String} [name] The name of the new smart collection.
     * @param {Thumbnail} [scope] A Thumbnail object for the target container node.
     * @param {SearchSpecification} [searchSpec] A SearchSpecification object used to generate the search result.
     * @return Thumbnail
     */
    createSmartCollection: function (name, scope, searchSpec) {
        
    },


    /**
     * Deletes a collection node.
     *
     * @param {Thumbnail} [collection] The Thumbnail object for the collection node, as returned by app.createCollection().
     * @return Boolean
     */
    deleteCollection: function (collection) {
        
    },


    /**
     * Deletes a smart collection node.
     *
     * @param {Thumbnail} [collection] The Thumbnail object for the collection node, as returned by app.createSmartCollection().
     * @return Boolean
     */
    deleteSmartCollection: function (collection) {
        
    },


    /**
     * Enqueues a long-running node-handling operation for execution at an appropriate time.
     *
     * @param {Object} [operator] The ModalOperator or ProgressOperator instance that encapsulates the operation, returned by an ExtensionModel method.
     * @return undefined
     */
    enqueueOperation: function (operator) {
        
    },


    /**
     * Exports keywords from the Keywords palette to a file.
     *
     * @param {} [keywordsFile] The file, specified as a string or ExtendScript File object.
     * @return undefined
     */
    exportKeywordsFromFile: function (keywordsFile) {
        
    },


    /**
     * Retrieves the collection members for a collection node.
     *
     * @param {Thumbnail} [collection] The Thumbnail object for the collection node, as returned by app.createCollection().
     * @return Array
     */
    getCollectionMembers: function (collection) {
        
    },


    /**
     * Retrieves all collection nodes, as created with app.createCollection().
     *
     * @return Array
     */
    getCollections: function () {
        
    },


    /**
     * Retrieves all smart collection nodes, as created with app.createSmartCollection().
     *
     * @return Array
     */
    getSmartCollections: function () {
        
    },


    /**
     * Hides or minimizes all Adobe Bridge browser windows.
     *
     * @return undefined
     */
    hide: function () {
        
    },


    /**
     * Imports keywords from a file to the Keywords palette.
     *
     * @param {} [keywordsFile] The file, specified as a string or ExtendScript File object.
     * @param {String} [importType] Whether to replace existing keywords in the palette, or merge these keywords with any existing keywords in the palette.
     * @return undefined
     */
    importKeywordsFromFile: function (keywordsFile, importType) {
        
    },


    /**
     * Reports whether a given thumbnail is a member of a given collection.
     *
     * @param {Thumbnail} [collection] The Thumbnail object for the collection node, as returned by app.createCollection().
     * @param {Thumbnail} [member] The Thumbnail object for the node to be tested.
     * @return Boolean
     */
    isCollectionMember: function (collection, member) {
        
    },


    /**
     * Reports whether Adobe Bridge is processing any jobs. Returns false if all the jobs are finished.
     *
     * @return Boolean
     */
    isProcessingJob: function () {
        
    },


    /**
     * Opens a page in the platform's default web browser.
     *
     * @param {String} [url] The URL for the page to open.
     * @return undefined
     */
    openUrl: function (url) {
        
    },


    /**
     * Notifies Adobe Bridge of an update to the processing status or progress of a long-running background operation implemented by a ProgressOperator object.
     *
     * @param {ProgressOperator} [operator] The ProgressOperator object that encapsulates the operation.
     * @return undefined
     */
    operationChanged: function (operator) {
        
    },


    /**
     * DEPRECATED in Creative Suite 3. Use app.acquirePhysicalFiles() instead.
     *
     * @param {} [files]
     * @return Boolean
     */
    preflightFiles: function (files) {
        
    },


    /**
     * Purges the thumbnail caches for all folders.
     *
     * @return undefined
     */
    purgeAllCaches: function () {
        
    },


    /**
     * Purges the thumbnail cache for a folder.
     *
     * @param {} [path] The folder to purge.
     * @return Any
     */
    purgeFolderCache: function (path) {
        
    },


    /**
     * Shuts down the Adobe Bridge application and closes all browser windows.
     *
     * @return undefined
     */
    quit: function () {
        
    },


    /**
     * DEPRECATED in Creative Suite 3. Do not use.
     *
     * @param {String} [protocol] 
     * @param {Object} [handler]
     * @return Boolean
     */
    registerBrowseScheme: function (protocol, handler) {
        
    },


    /**
     * Adds a script-defined node-handling extension to the application's list of available handlers, app.extensions.
     *
     * @param {ExtensionHandler} [extension] The ExtensionHandler object.
     * @return Boolean
     */
    registerExtension: function (extension) {
        
    },


    /**
     * Declares a new node-data information set, associating it with a node-handling extension.
     *
     * @param {ExtensionHandler} [extension] The ExtensionHandler object.
     * @param {Infoset} [infoset] The Infoset object.
     * @return Boolean
     */
    registerInfoset: function (extension, infoset) {
        
    },


    /**
     * Registers a script-defined Inspector panel, adding it to app.inspectorPanels.
     *
     * @param {InspectorPanel} [panel] The InspectorPanel object.
     * @return Boolean
     */
    registerInspectorPanel: function (panel) {
        
    },


    /**
     * Associates a URI prefix string with a node-handling extension.
     *
     * @param {String} [prefix] The prefix string , which must contain only ASCII characters.
     * @param {ExtensionHandler} [extension] The ExtensionHandler object.
     * @return Boolean
     */
    registerPrefix: function (prefix, extension) {
        
    },


    /**
     * Removes one or more member thumbnails from a collection.
     *
     * @param {Thumbnail} [collection] The Thumbnail object for the collection node, as returned by app.createCollection().
     * @param {any} [member] The Thumbnail object for the node to be removed, or an Array of Thumbnail objects.
     * @return Boolean
     */
    removeCollectionMember: function (collection, member) {
        
    },


    /**
     * Removes a text item from the Credits area of the Adobe Bridge About box.
     *
     * @param {} [title] The unique identifying string for the item to remove.
     * @return any
     */
    removeCredits: function (title) {
        
    },


    /**
     * Removes a text item from the LegalNotice area of the Adobe Bridge About box.
     *
     * @param {} [title] The unique identifying string for the item to remove.
     * @return any
     */
    removeLegalNotice: function (title) {
        
    },


    /**
     * 
     *
     * @param {Thumbnail} [arg1] 
     * @param {String} [name]
     * @return Thumbnail
     */
    renameCollection: function (arg1, name) {
        
    },


    /**
     * 
     *
     * @param {Thumbnail} [arg1] 
     * @param {String} [name]
     * @return Thumbnail
     */
    renameSmartCollection: function (arg1, name) {
        
    },


    /**
     * Loads a set of files or thumbnails as a slideshow, using the Preference options currently set for Adobe Bridge.
     *
     * @param {Array} [sources] An array of Thumbnail objects or file path strings.
     * @return undefined
     */
    runSlideshow: function (sources) {
        
    },


    /**
     * Executes a script after a specified delay.
     *
     * @param {String} [script] A string containing the script to be run.
     * @param {Number} [delay] A number of milliseconds to wait before executing the script.
     * @param {Boolean} [repeat] When true, execute the script repeatedly after each elapsed delay.
     * @return Number
     */
    scheduleTask: function (script, delay, repeat) {
        
    },


    /**
     * Issues the argument to the operating system, as if it were entered on the command line in a shell.
     *
     * @param {String} [commandLine] The command to pass to the operating system.
     * @return Any
     */
    system: function (commandLine) {
        
    },


    /**
     * Removes a node-handling extension, previously registered with app.registerExtension(), from the application’s global list.
     *
     * @param {ExtensionHandler} [extension] The ExtensionHandler object.
     * @return undefined
     */
    unregisterExtension: function (extension) {
        
    },


    /**
     * Removes a script-defined Inspector panel from the global list in app.inspectorPanels().
     *
     * @param {InspectorPanel} [panel] The InspectorPanel object.
     * @return Boolean
     */
    unregisterInspectorPanel: function (panel) {
        
    },


    /**
     * Removes the association between an extension and an information set, previously established with app.registerInfoset().
     *
     * @param {ExtensionHandler} [extension] The ExtensionHandler object.
     * @param {Infoset} [infoset] The Infoset object.
     * @return Any
     */
    unregisterInfoset: function (extension, infoset) {
        
    },


    /**
     * Removes a node URI prefix from the list of prefixes that the associated node-handling extension manages.
     *
     * @param {String} [prefix] The prefix string.
     * @param {ExtensionHandler} [extension] The ExtensionHandler object.
     * @return Boolean
     */
    unregisterPrefix: function (prefix, extension) {
        
    },


};

