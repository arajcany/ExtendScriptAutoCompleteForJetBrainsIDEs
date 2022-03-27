/*
 * Allows access to the Adobe Bridge application preferences.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Adobe Bridge 2022\omv.xml
 * OMV Time: 
 * OMV Title: Adobe Bridge 2022 Object Model
 */
var Preferences = {


    /**
     * A set of metadata properties to be displayed beneath a thumbnail icon.
     * @type {Array}
     */
    extraMetadata: Array,


    /**
     * Whether to show thumbnail name beneath thumbnail icons.
     * @type {Boolean}
     */
    showName: Boolean,


    /**
     * In the General page of the Preferences dialog, the preference associated with the AccentColor menu.
     * @type {String}
     */
    AccentColor: String,


    /**
     * In the Cache page of the Preferences dialog, the preference associated with Cache choices.
     * @type {Boolean}
     */
    AutoExportCaches: Boolean,


    /**
     * In the Cache page of the Preferences dialog, the preference associated with the Cache Location.
     * @type {String}
     */
    CacheDirectory: String,


    /**
     * In the General page of the Preferences dialog, the preference associated with Favorite Items choices.
     * @type {Array}
     */
    Favorites: Array,


    /**
     * A collection of localized display names for the nodes displayed in the Favorites palette.
     * @type {Array}
     */
    FavoritesDisplayNames: Array,


    /**
     * In the Thumbnails page of the Preferences dialog, the preference associated with "Do not process files larger than: nnn MB".
     * @type {Number}
     */
    FileSize: Number,


    /**
     * In the Metadata page of the Preferences dialog, the preference associated with the "Hide Empty Fields" checkbox.
     * @type {Boolean}
     */
    HideEmptyFields: Boolean,


    /**
     * In the File Type Associations page of the Preferences dialog, the preference associated with the "Hide Undefined File Associations" checkbox.
     * @type {Boolean}
     */
    HideUnknownOpeners: Boolean,


    /**
     * In the General page of the Preferences dialog, the preference associated with the "Image Backdrop" slide bar.
     * @type {Number}
     */
    ImageBackdrop: Number,


    /**
     * In the Advanced page of the Preferences dialog, the preference associated with Keyboard.
     * @type {String}
     */
    Keyboard: String,


    /**
     * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
     * @type {String}
     */
    Label1: String,


    /**
     * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
     * @type {String}
     */
    Label2: String,


    /**
     * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
     * @type {String}
     */
    Label3: String,


    /**
     * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
     * @type {String}
     */
    Label4: String,


    /**
     * In the Labels page of the Preferences dialog, the preferences associated with the label colors and their keyboard shortcuts.
     * @type {String}
     */
    Label5: String,


    /**
     * In the Labels page of the Preferences dialog, the preference associated with the "Require the Control Key to Apply Labels and Ratings" checkbox.
     * @type {Boolean}
     */
    LabelCtrlKey: Boolean,


    /**
     * In the Advanced page of the Preferences dialog, the preference associated with Language.
     * @type {String}
     */
    Language: String,


    /**
     * In the General page of the Preferences dialog, the preference associated with "Number of Recent Items to Display".
     * @type {Number}
     */
    MRUCount: Number,


    /**
     * The set of absolute path strings for recently-visited folders, displayed when the MRUCount is greater than 0.
     * @type {Array}
     */
    MRUFolders: Array,


    /**
     * In the Startup Scripts the Preferences dialog, the script names associated with selected script checkboxes.
     * @type {Array}
     */
    PermittedStartupScripts: Array,


    /**
     * In the General page of the Preferences dialog, the preference associated with the "Double-Click Edits Camera Raw Settings in Bridge" checkbox.
     * @type {Boolean}
     */
    ShowCameraRawInterface: Boolean,


    /**
     * In the Metadata page of the Preferences dialog, the preference associated with the "Show Metadata Placard" checkbox.
     * @type {Boolean}
     */
    ShowPlacard: Boolean,


    /**
     * In the Thumbnails page of the Preferences dialog, the preference associated with "Show Tooltips".
     * @type {Boolean}
     */
    ShowTooltips: Boolean,


    /**
     * In the Playback page of the Preferences dialog, the preference associated with "Stack Playback Frame Rate".
     * @type {Number}
     */
    StackFrameRate: Number,


    /**
     * In the Startup Scripts the Preferences dialog, setting to true is the equivalent of clicking Enable All, setting to false is the equivalent of clicking Disable All.
     * @type {Boolean}
     */
    StartupScriptsShouldLoad: Boolean,


    /**
     * The quality of thumbnail image to generate.
     * @type {String}
     */
    ThumbnailQuality: String,


    /**
     * In the General page of the Preferences dialog, the preference associated with the "User Interface Brightness" slide bar.
     * @type {Number}
     */
    UIBrightness: Number,


    /**
     * In the Advanced page of the Preferences dialog, the preference associated with the "Use Software Rendering" checkbox.
     * @type {Boolean}
     */
    UseSoftwareRendering: Boolean,



    /**
     * Removes script-created keys and values from the Adobe Bridge preferences, or resets preferences.
     *
     * @param {} [name] One or more names of preferences to remove.
     * @return undefined
     */
    clear: function (name) {
        
    },


    /**
     * Resets "Do not show again" settings to false for all warning dialogs.
     *
     * @return undefined
     */
    resetWarningDialogs: function () {
        
    },


    /**
     * Resets file type associations to their default values.
     *
     * @return undefined
     */
    resetFileAssociations: function () {
        
    },


};

