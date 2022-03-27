/*
 * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Application = {


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
     * The name of the selected color setting's set.
     * @type {any}
     */
    colorSettings: undefined,


    /**
     * The frontmost document.
     * @type {Document}
     */
    activeDocument: Document,


    /**
     * The application name.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * The full path of the location of the Adobe Photoshop application.
     * @type {File}
     * @readonly
     */
    path: File,


    /**
     * The application preference settings (equivalent to selecting Edit > Preferences in the Adobe Photoshop application in Windows or Photoshop > Preferences in Mac OS).
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * The version of the Scripting interface.
     * @type {string}
     * @readonly
     */
    scriptingVersion: undefined,


    /**
     * The amount of unused memory available to Photoshop.
     * @type {number}
     * @readonly
     */
    freeMemory: undefined,


    /**
     * The version of Adobe Photoshop application that you are running.
     * @type {string}
     * @readonly
     */
    version: undefined,


    /**
     * The dialog mode for the document, which indicates whether or not Photoshop displays dialogs when the script runs.
     * @type {DialogModes}
     */
    displayDialogs: DialogModes,


    /**
     * The default foreground color (used to paint, fill, and stroke selections).
     * @type {SolidColor}
     */
    foregroundColor: SolidColor,


    /**
     * The default background color (used to paint, fill, and stroke selections).
     * @type {SolidColor}
     */
    backgroundColor: SolidColor,


    /**
     * The playback options, which indicate the speed at which Photoshop plays actions.
     * @type {ActionDescriptor}
     */
    playbackParameters: ActionDescriptor,


    /**
     * The dialog mode for playback mode, which indicates whether or not Photoshop displays dialogs in playback mode.
     * @type {DialogModes}
     */
    playbackDisplayDialogs: DialogModes,


    /**
     * If true, notifiers are enabled.
     * @type {boolean}
     */
    notifiersEnabled: undefined,


    /**
     * A list of the image file extensions Photoshop can open.
     * @type {string}
     * @readonly
     */
    windowsFileTypes: undefined,


    /**
     * A list of the image file types Photoshop can open.
     * @type {string}
     * @readonly
     */
    macintoshFileTypes: undefined,


    /**
     * The full path to the preferences folder.
     * @type {File}
     * @readonly
     */
    preferencesFolder: File,


    /**
     * The language locale of the application.
     * @type {string}
     * @readonly
     */
    locale: undefined,


    /**
     * The collection of open documents.
     * @type {Documents}
     * @readonly
     */
    documents: Documents,


    /**
     * The fonts installed on this system.
     * @type {TextFonts}
     * @readonly
     */
    fonts: TextFonts,


    /**
     * The notifiers currently configured (in the Scripts Events Manager menu in the application).
     * @type {Notifiers}
     * @readonly
     */
    notifiers: Notifiers,


    /**
     * The build date of the scripting interface.
     * @type {string}
     * @readonly
     */
    scriptingBuildDate: undefined,


    /**
     * Files in the Recent Files list.
     * @type {FileArray}
     * @readonly
     */
    recentFiles: FileArray,


    /**
     * The build number of Adobe Photoshop application.
     * @type {string}
     * @readonly
     */
    build: undefined,


    /**
     * System information of the host application and machine.
     * @type {string}
     * @readonly
     */
    systemInformation: undefined,


    /**
     * The log of measurements taken.
     * @type {MeasurementLog}
     * @readonly
     */
    measurementLog: MeasurementLog,


    /**
     * Name of the current tool.
     * @type {string}
     */
    currentTool: undefined,



    /**
     * Check if the specified tool supports brushes.
     *
     * @param {string} [tool] The name of the tool to check.
     * @return boolean
     */
    toolSupportsBrushes: function (tool) {
        
    },


    /**
     * PRIVATE - save the current tool brush to a file.
     *
     * @param {File} [file] File to save the brush to.
     * @return undefined
     */
    saveToolBrushToFile: function (file) {
        
    },


    /**
     * PRIVATE - set the current tool brush from a file.
     *
     * @param {File} [file] Brush file to apply.
     * @return undefined
     */
    applyToolBrushFromFile: function (file) {
        
    },


    /**
     * PRIVATE - write out a thumbnail file from a style file.
     *
     * @param {File} [file] Style file to read.
     * @param {File} [dest] Thumb file to write.
     * @param {int} [thumbnailSize] Size of thumbnail to save.
     * @param {number} [backgroundValue] Background grayvalue.
     * @return undefined
     */
    thumbnailStyleFile: function (file, dest, thumbnailSize, backgroundValue) {
        
    },


    /**
     * PRIVATE - write out a thumbnail file from text parameters.
     *
     * @param {File} [dest] Thumb file to write.
     * @param {string} [text] Text to render.
     * @param {string} [font] PostScript name of font.
     * @param {int} [size] Size of type.
     * @param {SolidColor} [color] Color of type.
     * @return undefined
     */
    thumbnailText: function (dest, text, font, size, color) {
        
    },


    /**
     * Performs a task with a progress bar. Other progress APIs must be called periodically to update the progress bar and allow cancelling.
     *
     * @param {string} [progressString] String to show in the progress window.
     * @param {string} [javaScriptString] JavaScriptString to execute.
     * @return undefined
     */
    doProgress: function (progressString, javaScriptString) {
        
    },


    /**
     * Performs a task with a progress bar. Forces progress bar to display, ignoring the normal heuristics that keep it from showing unnecessarily (e.g. during very short tasks). Other progress APIs must be called periodically to update the progress bar and allow cancelling.
     *
     * @param {string} [progressString] String to show in the progress window.
     * @param {string} [javaScriptString] JavaScriptString to execute.
     * @return undefined
     */
    doForcedProgress: function (progressString, javaScriptString) {
        
    },


    /**
     * Changes the text that appears in the progress window.
     *
     * @param {string} [progressString] String to show in the progress window.
     * @return undefined
     */
    changeProgressText: function (progressString) {
        
    },


    /**
     * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel.
     *
     * @param {number} [taskLength] Amount of the unused progress bar to section off, between 0.0 and 1.0.
     * @param {string} [javaScriptString] JavaScriptString to execute.
     * @return boolean
     */
    doProgressTask: function (taskLength, javaScriptString) {
        
    },


    /**
     * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. Use when iterating a list of tasks with unequal run times.
     *
     * @param {int} [segmentLength] The length of the current task.
     * @param {int} [done] The total length of all completed tasks.
     * @param {int} [total] The total length of all tasks.
     * @param {string} [javaScriptString] JavaScriptString to execute.
     * @return boolean
     */
    doProgressSegmentTask: function (segmentLength, done, total, javaScriptString) {
        
    },


    /**
     * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. Use when iterating a simple list of tasks with equal run times.
     *
     * @param {int} [index] The 0-based index of the current task.
     * @param {int} [limit] The total number of tasks.
     * @param {string} [javaScriptString] JavaScriptString to execute.
     * @return boolean
     */
    doProgressSubTask: function (index, limit, javaScriptString) {
        
    },


    /**
     * Updates the progress bar started by doProgress. Use for manual non-task based progress updating. Returns false on cancel.
     *
     * @param {int} [done] The number of tasks completed.
     * @param {int} [total] The total number of tasks.
     * @return boolean
     */
    updateProgress: function (done, total) {
        
    },


    /**
     * Toggle palette visibility.
     *
     * @return undefined
     */
    togglePalettes: function () {
        
    },


    /**
     * Plays the specified action from the Actions palette.
     *
     * @param {string} [action] The name of the action to play. (Note that the action name is case-sensitive and must match the name as it appears in the Actions palette.)
     * @param {string} [from] The name of the action set containing the action being played. (Note that the Action Set name is case-sensitive and must match the name as it appears in the Actions palette.)
     * @return undefined
     */
    doAction: function (action, from) {
        
    },


    /**
     * Loads a support document.
     *
     * @param {File} [document] The document to load.
     * @return undefined
     */
    load: function (document) {
        
    },


    /**
     * Opens the specified document file(s).
     *
     * @param {File} [document] The document(s) to opend.
     * @param {any} [as] The document type (The default is to let Photoshop deduce the format).
     * @param {boolean} [asSmartObject] Creates a smart object around the document. (default: false)
     * @return Document
     */
    open: function (document, as, asSmartObject) {
        
    },


    /**
     * Purges one or more caches.
     *
     * @param {PurgeTarget} [target] The caches to purge.
     * @return undefined
     */
    purge: function (target) {
        
    },


    /**
     * DEPRECATED. Creates a web photo gallery.
     *
     * @param {any} [inputFolder] Folder to process or an array of files to process.
     * @param {File} [outputFolder] Location for output files.
     * @param {GalleryOptions} [options] Options for the web photo gallery.
     * @return string
     */
    makePhotoGallery: function (inputFolder, outputFolder, options) {
        
    },


    /**
     * Creates a PDF presentation file.
     *
     * @param {AliasArray} [inputFiles] The input files to include in the presentation.
     * @param {File} [outputFile] The location of the output file.
     * @param {PresentationOptions} [options] Options for the PDF presentation.
     * @return string
     */
    makePDFPresentation: function (inputFiles, outputFile, options) {
        
    },


    /**
     * DEPRECATED. Merges multiple files into one, user interaction required.
     *
     * @param {AliasArray} [inputFiles] List of input files to include.
     * @return string
     */
    makePhotomerge: function (inputFiles) {
        
    },


    /**
     * Creates a contact sheet from multiple files.
     *
     * @param {AliasArray} [inputFiles] The files to include.
     * @param {ContactSheetOptions} [options] Options for creating the contact sheet.
     * @return string
     */
    makeContactSheet: function (inputFiles, options) {
        
    },


    /**
     * Creates a picture package from multiple files.
     *
     * @param {AliasArray} [inputFiles] The files to include.
     * @param {PicturePackageOptions} [options] Options for creating a Picture Package.
     * @return string
     */
    makePicturePackage: function (inputFiles, options) {
        
    },


    /**
     * Runs the batch automation routine; analogous to using the Batch command in Photoshop.
     *
     * @param {AliasArray} [inputFiles] The files to operate on.
     * @param {string} [action] The name of the action to play (note that the Action name is case-sensitive and must match the name in the Actions palette).
     * @param {string} [from] The name of the action set containing the action being played (note that the Action Set name is case-sensitive and must match the name in the Actions palette).
     * @param {BatchOptions} [options] Options for batch automation.
     * @return string
     */
    batch: function (inputFiles, action, from, options) {
        
    },


    /**
     * Makes Photoshop the active application.
     *
     * @return undefined
     */
    bringToFront: function () {
        
    },


    /**
     * Pauses the script until the application refreshes.
     *
     * @return undefined
     */
    refresh: function () {
        
    },


    /**
     * Force the font list to get refreshed.
     *
     * @return undefined
     */
    refreshFonts: function () {
        
    },


    /**
     * Save user objects in the Photoshop registry.
     *
     * @param {string} [key] The unique string ID for the user object.
     * @param {ActionDescriptor} [customObject] The user-defined custom object to save in the registry.
     * @param {boolean} [persistent] If true, the object persists after the script has finished. (default: true)
     * @return undefined
     */
    putCustomOptions: function (key, customObject, persistent) {
        
    },


    /**
     * Retrieves user objects from the Photoshop registry for the ID with value key.
     *
     * @param {string} [key] The unique string ID for the user object.
     * @return ActionDescriptor
     */
    getCustomOptions: function (key) {
        
    },


    /**
     * Removes the specified user objects from the Photoshop registry.
     *
     * @param {string} [key] The unique string ID for user object(s) to remove.
     * @return undefined
     */
    eraseCustomOptions: function (key) {
        
    },


    /**
     * If true, the specified feature is enabled.
     *
     * @param {string} [name] The name of the feature.
     * @return boolean
     */
    featureEnabled: function (name) {
        
    },


    /**
     * Uses the Photoshop open dialog to select files.
     *
     * @return FileArray
     */
    openDialog: function () {
        
    },


    /**
     * Run a menu item.
     *
     * @param {int} [menuID] Id of menu to run.
     * @return undefined
     */
    runMenuItem: function (menuID) {
        
    },


    /**
     * Perform a system call.
     *
     * @param {string} [callString] System call string.
     * @return int
     */
    system: function (callString) {
        
    },


    /**
     * Plays an ActionManager event.
     *
     * @param {int} [eventID] The event to play.
     * @param {ActionDescriptor} [descriptor] The action descriptor to play.
     * @param {DialogModes} [displayDialogs] The display permissions for dialogs and alert messages.
     * @return ActionDescriptor
     */
    executeAction: function (eventID, descriptor, displayDialogs) {
        
    },


    /**
     * Obtains an action descriptor.
     *
     * @param {ActionReference} [reference] The reference specification of the property.
     * @return ActionDescriptor
     */
    executeActionGet: function (reference) {
        
    },


    /**
     * Converts from a string ID to a runtime ID.
     *
     * @param {string} [stringID] The ID to convert.
     * @return int
     */
    stringIDToTypeID: function (stringID) {
        
    },


    /**
     * Converts from a runtime ID to a string ID.
     *
     * @param {int} [typeID] The ID to convert.
     * @return string
     */
    typeIDToStringID: function (typeID) {
        
    },


    /**
     * Converts from a four character code to a runtime ID.
     *
     * @param {string} [charID] The ID to convert.
     * @return int
     */
    charIDToTypeID: function (charID) {
        
    },


    /**
     * Converts from a runtime ID to a character ID.
     *
     * @param {int} [typeID] The ID to convert.
     * @return string
     */
    typeIDToCharID: function (typeID) {
        
    },


    /**
     * Alerts the user.
     *
     * @return undefined
     */
    beep: function () {
        
    },


    /**
     * Returns true if Quicktime is installed.
     *
     * @return boolean
     */
    isQuicktimeAvailable: function () {
        
    },


    /**
     * Display color picker dialog. Returns false if dialog is cancelled, true otherwise.
     *
     * @param {boolean} [pickForeground] If true the foreground color is chosen, if false the background color is chosen. (default: true)
     * @return boolean
     */
    showColorPicker: function (pickForeground) {
        
    },


};


var app = Application;
