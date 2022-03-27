/*
 * The Adobe Illustrator application.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
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
     * The application's name.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * Path specification for the application.
     * @type {File}
     * @readonly
     */
    path: File,


    /**
     * The active document.
     * @type {Document}
     */
    activeDocument: Document,


    /**
     * The current users adobe id.
     * @type {string}
     * @readonly
     */
    userAdobeID: undefined,


    /**
     * The current user's GUID.
     * @type {string}
     * @readonly
     */
    userGUID: undefined,


    /**
     * The version of the Adobe Illustrator application.
     * @type {string}
     * @readonly
     */
    version: undefined,


    /**
     * The build number of the Adobe Illustrator application.
     * @type {string}
     * @readonly
     */
    buildNumber: undefined,


    /**
     * The Locale of the Adobe Illustrator application.
     * @type {string}
     * @readonly
     */
    locale: undefined,


    /**
     * The version of the Scripting plugin.
     * @type {string}
     * @readonly
     */
    scriptingVersion: undefined,


    /**
     * The amount of unused memory within the Adobe Illustrator partition.
     * @type {Int32}
     * @readonly
     */
    freeMemory: Int32,


    /**
     * Is a web browser available?
     * @type {boolean}
     * @readonly
     */
    browserAvailable: undefined,


    /**
     * The selection visible to the user.
     * @type {any}
     */
    selection: undefined,


    /**
     * Is the application visible.
     * @type {boolean}
     * @readonly
     */
    visible: undefined,


    /**
     * What level of interaction with the user should be allowed when handling script commands.
     * @type {UserInteractionLevel}
     */
    userInteractionLevel: UserInteractionLevel,


    /**
     * Coordinate System used by script.
     * @type {CoordinateSystem}
     */
    coordinateSystem: CoordinateSystem,


    /**
     * Preferences for Illustrator.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * The list of installed printers.
     * @type {Printer}
     * @readonly
     */
    printerList: Printer,


    /**
     * The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file.
     * @type {PPDFile}
     * @readonly
     */
    PPDFileList: PPDFile,


    /**
     * The list of print preset names currently available for use.
     * @type {string}
     * @readonly
     */
    printPresetsList: undefined,


    /**
     * The list of presets available for creating a new document.
     * @type {string}
     * @readonly
     */
    startupPresetsList: undefined,


    /**
     * The list of PDF preset names currently available for use.
     * @type {string}
     * @readonly
     */
    PDFPresetsList: undefined,


    /**
     * The list of flattener style names currently available for use.
     * @type {string}
     * @readonly
     */
    flattenerPresetsList: undefined,


    /**
     * The list of tracing preset names currently available for use.
     * @type {string}
     * @readonly
     */
    tracingPresetsList: undefined,


    /**
     * The list of color settings files currently available for use.
     * @type {File}
     * @readonly
     */
    colorSettingsList: File,


    /**
     * The default color settings file for the current application locale.
     * @type {File}
     * @readonly
     */
    defaultColorSettings: File,


    /**
     * Does paste operation remember layers structure?
     * @type {boolean}
     */
    pasteRemembersLayers: undefined,


    /**
     * The open documents.
     * @type {Documents}
     * @readonly
     */
    documents: Documents,


    /**
     * True if home Screen is Visible.
     * @type {boolean}
     * @readonly
     */
    homeScreenVisible: undefined,


    /**
     * Installed fonts.
     * @type {TextFonts}
     * @readonly
     */
    textFonts: TextFonts,



    /**
     * Returns the JSON Data required by Hello.
     *
     * @return string
     */
    getHelloJSONData: function () {
        
    },


    /**
     * Returns the JSON Data required by CCX Welcome.
     *
     * @param {string} [mode] Mode for which the data is to be provided. (default: )
     * @return string
     */
    getCCXUserJSONData: function (mode) {
        
    },


    /**
     * Returns if the specified filePath is open.
     *
     * @param {string} [filePath] The filePath to be checked.
     * @return boolean
     */
    getIsFileOpen: function (filePath) {
        
    },


    /**
     * Launch cep Extension given its ID.
     *
     * @param {string} [extensionID] Arguments for Launching Extension - ID of extension in manifest.xml of corresponding extension.
     * @return Int32
     */
    launchExtension: function (extensionID) {
        
    },


    /**
     * Runs API Tests from the TestAPI Plug-in.
     *
     * @param {string} [testName] Arguments for Running Tests - eg. Name of Test/Suite.
     * @return undefined
     */
    runAPITest: function (testName) {
        
    },


    /**
     * Loads the aat model to the editor.
     *
     * @return string
     */
    aATLoadModel: function () {
        
    },


    /**
     * Loads a UI description as an extension to the editor.
     *
     * @return string
     */
    aATLoadUIExtension: function () {
        
    },


    /**
     * Loads a session file as an extension to the editor.
     *
     * @return string
     */
    aATLoadLibExtension: function () {
        
    },


    /**
     * Executes the active session in the sequencer.
     *
     * @return undefined
     */
    aATExecuteSession: function () {
        
    },


    /**
     * Executes the active session in the sequencer.
     *
     * @param {File} [file] Execute a session file.
     * @return undefined
     */
    aATExecuteSessionFromFile: function (file) {
        
    },


    /**
     * Retrieves a file path to the AAT editor swf.
     *
     * @return File
     */
    aATGetEditorDialogFile: function () {
        
    },


    /**
     * Retrieves a string representing the AAT version.
     *
     * @return string
     */
    getVersionString: function () {
        
    },


    /**
     * Retrieves a file path to the AAT error dialog swf.
     *
     * @return File
     */
    aATGetErrorDialogFile: function () {
        
    },


    /**
     * Retrieves a boolean indicating the presence of errors in the last script to execute.
     *
     * @return boolean
     */
    aATErrorsExist: function () {
        
    },


    /**
     * Retrieves a string containing the results of the last script to execute.
     *
     * @return string
     */
    getExecutionOutput: function () {
        
    },


    /**
     * Clear the sequencer.
     *
     * @return string
     */
    aATClear: function () {
        
    },


    /**
     * Get the active session for the sequncer.
     *
     * @return string
     */
    aATGetSession: function () {
        
    },


    /**
     * Saves the active session in the sequencer to a file.
     *
     * @return string
     */
    aATSaveSession: function () {
        
    },


    /**
     * Saves the active session in the sequencer to a new file.
     *
     * @return string
     */
    aATSaveAsSession: function () {
        
    },


    /**
     * Loads a session into the sequencer.
     *
     * @return string
     */
    aATLoadSessionFile: function () {
        
    },


    /**
     * Add the specified to the sequencer.
     *
     * @param {Int32} [sessionIndex] The index in the session of the top-most sequence for the item to add.
     * @param {Int32} [destinationSequenceID] The UID for the owning sequence.
     * @param {Int32} [destinationIndex] The item UID where to insert.
     * @param {string} [srcItemIDData] The item ID of the item to construct.
     * @param {string} [type] The source of the item to construct.
     * @return string
     */
    aATAddItem: function (sessionIndex, destinationSequenceID, destinationIndex, srcItemIDData, type) {
        
    },


    /**
     * Moves the specified in the sequencer.
     *
     * @param {Int32} [sessionIndex] The index in the session of the top-most sequence for the item to move.
     * @param {string} [moveThisID] The UID of the item to replace.
     * @param {Int32} [newSessionIndex] The index in the session of the destination top-most sequence.
     * @param {string} [destinationSequenceID] The UID for the owning sequence.
     * @param {Int32} [destinationIndex] The index where to insert.
     * @return string
     */
    aATMoveItem: function (sessionIndex, moveThisID, newSessionIndex, destinationSequenceID, destinationIndex) {
        
    },


    /**
     * Replaces the specified to the sequencer.
     *
     * @param {Int32} [sessionIndex] The index in the session of the top-most sequence for the item to add.
     * @param {Int32} [replaceThisID] The UID of the item to replace.
     * @param {string} [srcItemIDData] The item ID of the item to construct.
     * @param {string} [type] The source of the item to construct.
     * @return string
     */
    aATReplaceItem: function (sessionIndex, replaceThisID, srcItemIDData, type) {
        
    },


    /**
     * Removes the specified item from the sequencer.
     *
     * @param {Int32} [sessionIndex] The index in the session of the top-most sequence for the item to add.
     * @param {string} [item] The item UID.
     * @return string
     */
    aATRemoveItem: function (sessionIndex, item) {
        
    },


    /**
     * Duplicates the specified item(s) from the sequencer.
     *
     * @param {Int32} [sessionIndex] The index in the session of the top-most sequence for the item to add.
     * @param {string} [item] The item UID(s)
     * @return string
     */
    aATDuplicateItem: function (sessionIndex, item) {
        
    },


    /**
     * Opens the specified item from the sequencer in the item editor.
     *
     * @param {Int32} [sessionIndex] The index in the session of the top-most sequence for the item to add.
     * @param {string} [item] The item UID.
     * @return string
     */
    aATEditItem: function (sessionIndex, item) {
        
    },


    /**
     * Applies the data used in the item editor to the item.
     *
     * @param {Int32} [sessionIndex] The index in the session of the top-most sequence for the item to edit.
     * @param {string} [item] The item UID.
     * @param {string} [data] The data to apply in XML format.
     * @return string
     */
    applyDataToItem: function (sessionIndex, item, data) {
        
    },


    /**
     * Applies data to the specified item from the sequencer in the item editor.
     *
     * @param {Int32} [sessionIndex] The index in the session of the top-most sequence for the item to add.
     * @param {string} [item] The item UID.
     * @param {string} [dataID] The data to apply in XML format.
     * @param {string} [data] The data to apply in XML format.
     * @return boolean
     */
    applySingleDataPointToItem: function (sessionIndex, item, dataID, data) {
        
    },


    /**
     * Returns a string translated from the key and source data passed in.
     *
     * @param {string} [key] The string to translate.
     * @param {string} [source] The plugin name from the source of the key.
     * @return string
     */
    translateString: function (key, source) {
        
    },


    /**
     * Prompts the user to save a file or choose a file or directory and returns a relative path string to the file.
     *
     * @param {string} [path] The path relative to the folder specified by Relative.
     * @param {string} [relative] The current relative path token.
     * @param {string} [type] The type of dialog to show in string format.
     * @return string
     */
    aATFileSaveDialog: function (path, relative, type) {
        
    },


    /**
     * Switches a files relative token and path.
     *
     * @param {string} [path] The path relative to the folder specified by Relative.
     * @param {string} [relative] The current relative path token.
     * @param {string} [newRelative] The new relative path token.
     * @return string
     */
    aATFileRelativeChanged: function (path, relative, newRelative) {
        
    },


    /**
     * Gets an XML string listing the relative paths and the UI strings to display them.
     *
     * @return string
     */
    aATGetListOfRelativePaths: function () {
        
    },


    /**
     * Starts the automation tests for the Sync Settings feature.
     *
     * @return boolean
     */
    beginSyncSettingsAutomationTest: function () {
        
    },


    /**
     * Starts the automation tests for the Typekit Font feature.
     *
     * @return boolean
     */
    beginTypekitFontAutomationTest: function () {
        
    },


    /**
     * Cut current selection to the clipboard.
     *
     * @return undefined
     */
    cut: function () {
        
    },


    /**
     * Copy current selection to the clipboard.
     *
     * @return undefined
     */
    copy: function () {
        
    },


    /**
     * Paste clipboard into the current document.
     *
     * @return undefined
     */
    paste: function () {
        
    },


    /**
     * Checks if fill is active or not.
     *
     * @return boolean
     */
    isFillActive: function () {
        
    },


    /**
     * Checks if stroke is active or not.
     *
     * @return boolean
     */
    isStrokeActive: function () {
        
    },


    /**
     * Invokes application's color picker.
     *
     * @param {Color} [color] The color to load in the color picker initially.
     * @return Color
     */
    showColorPicker: function (color) {
        
    },


    /**
     * For Internal Use.
     *
     * @param {File} [assetURL] For Internal use.
     * @param {File} [thumbnailURL] For Internal use.
     * @param {string} [assetType] For internal use.
     * @param {any} [options] For internal use.
     * @return Document
     */
    openCloudLibraryAssetForEditing: function (assetURL, thumbnailURL, assetType, options) {
        
    },


    /**
     * For Internal Use.
     *
     * @param {any} [options] Options for the PNG24 export.
     * @return undefined
     */
    setThumbnailOptionsForCloudLibrary: function (options) {
        
    },


    /**
     * Undo the last transaction.
     *
     * @return undefined
     */
    undo: function () {
        
    },


    /**
     * Redo the last transaction.
     *
     * @return undefined
     */
    redo: function () {
        
    },


    /**
     * Play an action from the Actions Palette.
     *
     * @param {string} [action] The name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)
     * @param {string} [from] The name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)
     * @param {boolean} [dialogs] Are dialog boxes associated with the action to be presented? (default: true)
     * @return undefined
     */
    doScript: function (action, from, dialogs) {
        
    },


    /**
     * Executes a menu command using the menu shortcut string.
     *
     * @param {string} [menuCommandString] Menu command shortcut.
     * @return undefined
     */
    executeMenuCommand: function (menuCommandString) {
        
    },


    /**
     * Given a preset type, returns the full path to the application's default document profile for the type.
     *
     * @param {DocumentPresetType} [presetType] The preset type.
     * @return File
     */
    getPresetFileOfType: function (presetType) {
        
    },


    /**
     * Load an action into action palette.
     *
     * @param {File} [actionFilePath] The path on the system of the action file to be loaded.
     * @return undefined
     */
    loadAction: function (actionFilePath) {
        
    },


    /**
     * Unloads an action into action palette.
     *
     * @param {string} [setName] Name of the set to be unloaded.
     * @param {string} [actionName] Name of the action to be unloaded.
     * @return undefined
     */
    unloadAction: function (setName, actionName) {
        
    },


    /**
     * Sends the script message to the required plugin.
     *
     * @param {string} [pluginName] Plugin to which message needs to be sent.
     * @param {string} [messageSelector] Functionality that is to be executed.
     * @param {string} [inputString] Pass any data encoded in a string.
     * @return string
     */
    sendScriptMessage: function (pluginName, messageSelector, inputString) {
        
    },


    /**
     * Given a preset name, tries and retrieves the settings from the preset template.
     *
     * @param {string} [preset] The name of the preset.
     * @return DocumentPreset
     */
    getPresetSettings: function (preset) {
        
    },


    /**
     * Force Illustrator to redraw its window(s)
     *
     * @return undefined
     */
    redraw: function () {
        
    },


    /**
     * Invert a matrix.
     *
     * @param {Matrix} [matrix] The matrix to invert.
     * @return Matrix
     */
    invertMatrix: function (matrix) {
        
    },


    /**
     * Tests if a matrix is singular (cannot be inverted)
     *
     * @param {Matrix} [matrix] The matrix to check.
     * @return boolean
     */
    isSingularMatrix: function (matrix) {
        
    },


    /**
     * Concatenate a translation to a transformation matrix.
     *
     * @param {Matrix} [matrix] The matrix that is to be added to.
     * @param {number} [deltaX] Horizontal transformation. (default: 0.0)
     * @param {number} [deltaY] Vertical transformation. (default: 0.0)
     * @return Matrix
     */
    concatenateTranslationMatrix: function (matrix, deltaX, deltaY) {
        
    },


    /**
     * Concatenate a scale matrix to a transformation matrix.
     *
     * @param {Matrix} [matrix] The matrix that is to be added to.
     * @param {number} [scaleX] Horizontal scaling factor expressed as a percentage (100 = 100%) (default: 100.0)
     * @param {number} [scaleY] Vertical scaling factor expressed as a percentage (100 = 100%) (default: 100.0)
     * @return Matrix
     */
    concatenateScaleMatrix: function (matrix, scaleX, scaleY) {
        
    },


    /**
     * Concatenate a rotation matrix to a transformation matrix.
     *
     * @param {Matrix} [matrix] The matrix that is to be added to.
     * @param {number} [angle] Angle of rotation (in degrees)
     * @return Matrix
     */
    concatenateRotationMatrix: function (matrix, angle) {
        
    },


    /**
     * Concatenate two transformation matrices.
     *
     * @param {Matrix} [matrix] The matrix that is to be added to.
     * @param {Matrix} [secondMatrix] Second transformation matrix.
     * @return Matrix
     */
    concatenateMatrix: function (matrix, secondMatrix) {
        
    },


    /**
     * Compares two matrices for equality.
     *
     * @param {Matrix} [matrix] First transformation matrix to compare.
     * @param {Matrix} [secondMatrix] Second transformation matrix.
     * @return boolean
     */
    isEqualMatrix: function (matrix, secondMatrix) {
        
    },


    /**
     * Returns an identity matrix.
     *
     * @return Matrix
     */
    getIdentityMatrix: function () {
        
    },


    /**
     * Returns a rotation transformation matrix.
     *
     * @param {number} [angle] Angle of rotation (in degrees) (default: 0.0)
     * @return Matrix
     */
    getRotationMatrix: function (angle) {
        
    },


    /**
     * Returns a scale transformation matrix.
     *
     * @param {number} [scaleX] Horizontal scaling factor expressed as a percentage (100 = 100%) (default: 100.0)
     * @param {number} [scaleY] Vertical scaling factor expressed as a percentage (100 = 100%) (default: 100.0)
     * @return Matrix
     */
    getScaleMatrix: function (scaleX, scaleY) {
        
    },


    /**
     * Returns a translation matrix.
     *
     * @param {number} [deltaX] Horizontal transformation. (default: 0.0)
     * @param {number} [deltaY] Vertical transformation. (default: 0.0)
     * @return Matrix
     */
    getTranslationMatrix: function (deltaX, deltaY) {
        
    },


    /**
     * Open the specified document file.
     *
     * @param {File} [file] The file to be opened.
     * @param {DocumentColorSpace} [documentColorSpace] Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
     * @param {any} [options] Options for opening a particular type of file.
     * @return Document
     */
    open: function (file, documentColorSpace, options) {
        
    },


    /**
     * Open the specified cloud document.
     *
     * @param {string} [cloudPath] Path of the document to be opened from cloud.
     * @return Document
     */
    openCloudDocument: function (cloudPath) {
        
    },


    /**
     * Dump the PGF portion of ai file to txt file.
     *
     * @param {File} [file] The AI file to be opened.
     * @param {DocumentColorSpace} [documentColorSpace] Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
     * @param {File} [pGFFile] Folder to save the output PGF file.
     * @return boolean
     */
    dumpPGFFile: function (file, documentColorSpace, pGFFile) {
        
    },


    /**
     * Quit the application.
     *
     * @return undefined
     */
    quit: function () {
        
    },


    /**
     * 
     *
     * @return undefined
     */
    beep: function () {
        
    },


    /**
     * Translate the placeholder text to regular text. A method to enter unicode points in hex values.
     *
     * @param {string} [text] The placeholder text to be translated.
     * @return string
     */
    translatePlaceholderText: function (text) {
        
    },


    /**
     * Get presets from the file.
     *
     * @param {File} [fileSpec] File spec to import from.
     * @return string
     */
    showPresets: function (fileSpec) {
        
    },


    /**
     * Load the color settings from the file. If the file is an empty file spec, the color management will be turned off.
     *
     * @param {File} [fileSpec] File spec for the color settings.
     * @return undefined
     */
    loadColorSettings: function (fileSpec) {
        
    },


    /**
     * Get detailed info from the specified PPD file.
     *
     * @param {string} [name] The model name of the PPD file.
     * @return PPDFileInfo
     */
    getPPDFileInfo: function (name) {
        
    },


    /**
     * Get the scriptable help group object that represents the search widget in the app bar.
     *
     * @return any
     */
    getScriptableHelpGroup: function () {
        
    },


    /**
     * Converts a sample-component color from one color space to another.
     *
     * @param {ImageColorSpace} [sourceColorSpace] The source color space.
     * @param {number} [sourceColor] The color to convert, an array of color components. First location of the array should contain alpha if source-has-alpha is true.
     * @param {ImageColorSpace} [destColorSpace] The destination color space.
     * @param {ColorConvertPurpose} [colorConvertPurpose] The parameter which passes the purpose of conversion.
     * @param {boolean} [sourceHasAlpha] True if alpha channel is present in source color. (default: false)
     * @param {boolean} [destHasAlpha] True if alpha channel is present in destination color. (default: false)
     * @return number
     */
    convertSampleColor: function (sourceColorSpace, sourceColor, destColorSpace, colorConvertPurpose, sourceHasAlpha, destHasAlpha) {
        
    },


    /**
     * Generate Creative Suite ActionScript Wrappers in specified directory.
     *
     * @param {File} [outputFolder] Location for the output files.
     * @return undefined
     */
    reflectCSAW: function (outputFolder) {
        
    },


    /**
     * Switches between workspaces.
     *
     * @param {string} [workspaceName] Workspace Name.
     * @return boolean
     */
    switchWorkspace: function (workspaceName) {
        
    },


    /**
     * Deletes an existing workspace.
     *
     * @param {string} [workspaceName] Workspace Name.
     * @return boolean
     */
    deleteWorkspace: function (workspaceName) {
        
    },


    /**
     * Saves a new workspace.
     *
     * @param {string} [workspaceName] Workspace Name.
     * @return boolean
     */
    saveWorkspace: function (workspaceName) {
        
    },


    /**
     * Resets the current workspace.
     *
     * @return boolean
     */
    resetWorkspace: function () {
        
    },


    /**
     * Is In Touch Workspace.
     *
     * @return boolean
     */
    isTouchWorkspace: function () {
        
    },


    /**
     * Is user sharing the application usage data.
     *
     * @return boolean
     */
    isUserSharingAppUsageData: function () {
        
    },


    /**
     * Select tool using toolname.
     *
     * @param {string} [toolName] Tool Name.
     * @return boolean
     */
    selectTool: function (toolName) {
        
    },


    /**
     * Display learn panel with specific content.
     *
     * @param {string} [manifest] Path of the manifest.
     * @param {string} [hTMLPage] Url of the html file to be displayed on learn panel.
     * @return boolean
     */
    showLearnPanelWithContent: function (manifest, hTMLPage) {
        
    },


};


var app = Application;
