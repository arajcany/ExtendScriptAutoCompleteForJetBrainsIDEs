/*
 * Represents an Adobe Bridge browser window.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var Document = {


    /**
     * Identifies up to four lines of additional metadata to display for thumbnails in the Content pane.
     * @type {Array}
     */
    additionalMetadata: Array,


    /**
     * Whether to allow drag-and-drop of thumbnails in this browser window.
     * @type {Boolean}
     */
    allowDrags: Boolean,


    /**
     * DEPRECATED. Use navbars.filesystem.bottom.
     * @type {}
     */
    bottomNavbar: undefined,


    /**
     * The browser window mode, corresponding to the UI button on the upper right, "Switch to compact mode".
     * @type {String}
     */
    browserMode: String,


    /**
     * DEPRECATED. Do not use.
     * @type {}
     * @readonly
     */
    content: undefined,


    /**
     * DEPRECATED. Do not use.
     * @type {String}
     */
    contentPaneMode: String,


    /**
     * The Thumbnail object a user has right-clicked to invoke a context menu; otherwise undefined.
     * @type {Thumbnail}
     * @readonly
     */
    context: Thumbnail,


    /**
     * Whether to display Inspector panels.
     * @type {Boolean}
     */
    displayInspectorView: Boolean,


    /**
     * Current selected thumbnails in the Content pane.
     * @type {Array}
     * @readonly
     */
    groupedSelections: Array,


    /**
     * The height of the browser window in pixels.
     * @type {Number}
     */
    height: Number,


    /**
     * In Windows only, a platform-specific handle to the window for this browser.
     * @type {Number}
     * @readonly
     */
    hwnd: Number,


    /**
     * A unique identifier for the browser window, valid for the life of the window.
     * @type {Number}
     * @readonly
     */
    id: Number,


    /**
     * DEPRECATED. Do not use.
     * @type {}
     */
    jsFuncs: undefined,


    /**
     * When true, this browser window is in the zoomed or maximized state.
     * @type {Boolean}
     * @readonly
     */
    maximized: Boolean,


    /**
     * When true, this browser window is in the collapsed or minimized state.
     * @type {Boolean}
     * @readonly
     */
    minimized: Boolean,


    /**
     * Contains the predefined NavBar objects for the configurable navigation bars.
     * @type {Object}
     * @readonly
     */
    navbars: Object,


    /**
     * Text to be displayed in the Content pane when the selected thumbnail is for an empty folder.
     * @type {String}
     */
    noItems: String,


    /**
     * The Adobe Bridge-enabled application that created or first activated this browser window, if it was not Adobe Bridge.
     * @type {String}
     */
    owner: String,


    /**
     * A collection of TabbedPalette objects for all default and script-defined display palettes available to this browser, regardless of their visibility status.
     * @type {Array}
     * @readonly
     */
    palettes: Array,


    /**
     * The position of this browser window on the screen.
     * @type {Object}
     */
    position: Object,


    /**
     * The presentation mode of the Content pane.
     * @type {String}
     * @readonly
     */
    presentationMode: String,


    /**
     * The path to the content displayed in the Content pane.
     * @type {String}
     */
    presentationPath: String,


    /**
     * The Thumbnail objects for all currently selected files in the Content pane of this document.
     * @type {Array}
     * @readonly
     */
    selections: Array,


    /**
     * The number of currently selected thumbnails in the Content pane.
     * @type {Number}
     * @readonly
     */
    selectionLength: Number,


    /**
     * The number of currently selected thumbnails in the Content pane.
     * @type {Number}
     * @readonly
     */
    selectionsLength: Number,


    /**
     * How the thumbnails in the Content pane are sorted.
     * @type {Array}
     */
    sorts: Array,


    /**
     * When true, thumbnail names are displayed in the Content pane.
     * @type {Boolean}
     */
    showThumbnailName: Boolean,


    /**
     * A list of all current thumbnail stacks in this browser.
     * @type {Array}
     */
    stacks: Array,


    /**
     * The text displayed in the document's status line at the bottom of the Content pane.
     * @type {String}
     */
    status: String,


    /**
     * The Thumbnail object for the node currently selected in the Folders or Favorites pane.
     * @type {Thumbnail}
     */
    thumbnail: Thumbnail,


    /**
     * The view mode of the Content pane, as selected by the View menu.
     * @type {String}
     */
    thumbnailViewMode: String,


    /**
     * DEPRECATED. Use navbars.filesystem.top.
     * @type {}
     */
    topNavbar: undefined,


    /**
     * When true, the browser window is expanded, as opposed to being minimized or collapsed.
     * @type {Boolean}
     */
    visible: Boolean,


    /**
     * An array of Thumbnail objects that are currently shown in the Content pane.
     * @type {Array}
     * @readonly
     */
    visibleThumbnails: Array,


    /**
     * The number of thumbnails in the visibleThumbnails array.
     * @type {Number}
     * @readonly
     */
    visibleThumbnailsLength: Number,


    /**
     * DEPRECATED. Do not use.
     * @type {}
     */
    visitUrl: undefined,


    /**
     * The width of the browser window in pixels.
     * @type {Number}
     */
    width: Number,


    /**
     * Retrieves the most recently set workspace.
     * @type {Object}
     * @readonly
     */
    workspace: Object,



    /**
     * Makes this browser window the topmost active window in the windowing system.
     *
     * @return undefined
     */
    bringToFront: function () {
        
    },


    /**
     * Centers this browser window on the screen.
     *
     * @return undefined
     */
    center: function () {
        
    },


    /**
     * Executes an Adobe Bridge-defined or script-defined menu command programatically.
     *
     * @param {String} [menuID] The unique identifier for the command to execute.
     * @return undefined
     */
    chooseMenuItem: function (menuID) {
        
    },


    /**
     * Closes this browser window.
     *
     * @return undefined
     */
    close: function () {
        
    },


    /**
     * Deselects a node in the Content pane.
     *
     * @param {Thumbnail} [thumbnail] The Thumbnail for the node.
     * @return Boolean
     */
    deselect: function (thumbnail) {
        
    },


    /**
     * Deselects all selected nodes in the Content pane.
     *
     * @return undefined
     */
    deselectAll: function () {
        
    },


    /**
     * DEPRECATED. Do not use.
     *
     * @return undefined
     */
    execJS: function () {
        
    },


    /**
     * Stores stack properties into the cache file.
     *
     * @return undefined
     */
    flushStackProperties: function () {
        
    },


    /**
     * Collects selected thumbnails for files of a given type, if any are selected.
     *
     * @param {String} [filter] A comma-delimited list of file extensions to match.
     * @return Array
     */
    getSelection: function (filter) {
        
    },


    /**
     * Maximizes or zooms this browser window.
     *
     * @return undefined
     */
    maximize: function () {
        
    },


    /**
     * Minimizes or docks this browser window.
     *
     * @return undefined
     */
    minimize: function () {
        
    },


    /**
     * Centers this browser window on the screen, and sets the height and width to 80% of the screen height and width.
     *
     * @return undefined
     */
    normalize: function () {
        
    },


    /**
     * DEPRECATED in Creative Suite 3. Use app.acquirePhysicalFiles() instead.
     *
     * @return undefined
     */
    preflightFiles: function () {
        
    },


    /**
     * DEPRECATED. Do not use.
     *
     * @return undefined
     */
    print: function () {
        
    },


    /**
     * Refreshes the display of this browser window.
     *
     * @return undefined
     */
    refresh: function () {
        
    },


    /**
     * Restores the default configuration of the tabbed palettes in this browser window.
     *
     * @return undefined
     */
    resetToDefaultWorkspace: function () {
        
    },


    /**
     * Restores this browser window after it has been minimized.
     *
     * @return undefined
     */
    restore: function () {
        
    },


    /**
     * Causes the Content pane (not the Folders or Favorites pane) to show the specified thumbnail.
     *
     * @param {Thumbnail} [thumbnail] The Thumbnail object.
     * @return undefined
     */
    reveal: function (thumbnail) {
        
    },


    /**
     * Selects a thumbnail in the Content pane.
     *
     * @param {} [thumbnail] The Thumbnail object.
     * @return Boolean
     */
    select: function (thumbnail) {
        
    },


    /**
     * Selects all children of the currenly selected thumbnail in the Content pane.
     *
     * @return undefined
     */
    selectAll: function () {
        
    },


    /**
     * Sets the presentation mode of the Content pane, and optionally the path to the current content to display.
     *
     * @param {String} [mode] The new display mode.
     * @param {String} [path] The path string, a Bridge URI.
     * @return undefined
     */
    setPresentationMode: function (mode, path) {
        
    },


    /**
     * Sets the browser configuration to a predefined, user-defined or script-defined workspace.
     *
     * @param {String} [workspaceId] The unique, identifying name string for the new workspace.
     * @return Boolean
     */
    setWorkspace: function (workspaceId) {
        
    },


};

