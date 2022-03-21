/*
 * A link to a placed file.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var Link = {


    /**
     * Dispatched after a Link is created. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_NEW: afterNew,


    /**
     * Dispatched before a Link is deleted. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_DELETE: beforeDelete,


    /**
     * Dispatched after a Link is deleted. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_DELETE: afterDelete,


    /**
     * Dispatched before a Link is updated. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_UPDATE: beforeUpdate,


    /**
     * Dispatched after a Link is updated. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_UPDATE: afterUpdate,


    /**
     * Dispatched before a Link is embedded. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_EMBED: beforeEmbed,


    /**
     * Dispatched after a Link is embedded. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_EMBED: afterEmbed,


    /**
     * Dispatched before a Link is unembedded. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_UNEMBED: beforeUnembed,


    /**
     * Dispatched after a Link is unembedded. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_UNEMBED: afterUnembed,


    /**
     * Dispatched before a Link is relocated from one object to another. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_MOVE: beforeMove,


    /**
     * Dispatched after a Link is relocated from one object to another. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_MOVE: afterMove,


    /**
     * Dispatched when the value of a property changes on this Link. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_ATTRIBUTE_CHANGED: afterAttributeChanged,


    /**
     * The Version Cue version state of the file.
     * @type {VersionState}
     * @readonly
     */
    versionState: VersionState,


    /**
     * The Version Cue editing state of the file.
     * @type {EditingState}
     * @readonly
     */
    editingState: EditingState,


    /**
     * XMP data for the link source file.
     * @type {LinkMetadata}
     * @readonly
     */
    linkXmp: LinkMetadata,


    /**
     * The index of the link in the links collection.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * The linked object. Can return: Story, Graphic, Movie or Sound.
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The asset URL of the linked object.
     * @type {string}
     * @readonly
     */
    assetURL: undefined,


    /**
     * The asset ID of the linked object.
     * @type {string}
     * @readonly
     */
    assetID: undefined,


    /**
     * If true, indicates the linked object has been edited in the current document but the source file has not been updated.
     * @type {boolean}
     * @readonly
     */
    edited: undefined,


    /**
     * The name of the Link.
     * @type {string}
     * @readonly
     */
    name: undefined,


    /**
     * If true, indicates a link to a full-resolution version of the source file is needed. If false, indicates the object is embedded.
     * @type {boolean}
     * @readonly
     */
    needed: undefined,


    /**
     * The status of the link.
     * @type {LinkStatus}
     * @readonly
     */
    status: LinkStatus,


    /**
     * The file type of the linked object.
     * @type {string}
     * @readonly
     */
    linkType: undefined,


    /**
     * The date and time the Link was created.
     * @type {Date}
     * @readonly
     */
    date: Date,


    /**
     * The size of the Link file.
     * @type {number}
     * @readonly
     */
    size: undefined,


    /**
     * The rendition data of the link resource.
     * @type {LinkResourceRenditionType}
     * @readonly
     */
    renditionData: LinkResourceRenditionType,


    /**
     * The URI of the linked resource.
     * @type {string}
     * @readonly
     */
    linkResourceURI: undefined,


    /**
     * The file path (colon delimited on the Mac OS). Can also accept: File.
     * @type {string}
     * @readonly
     */
    filePath: undefined,


    /**
     * The unique ID of the Link.
     * @type {number}
     * @readonly
     */
    id: undefined,


    /**
     * Returns true if the object specifier resolves to valid objects.
     * @type {boolean}
     * @readonly
     */
    isValid: undefined,


    /**
     * A collection of events.
     * @type {Events}
     * @readonly
     */
    events: Events,


    /**
     * A collection of event listeners.
     * @type {EventListeners}
     * @readonly
     */
    eventListeners: EventListeners,


    /**
     * A collection of preferences objects.
     * @type {Preferences}
     * @readonly
     */
    preferences: Preferences,


    /**
     * A collection of links.
     * @type {Links}
     * @readonly
     */
    links: Links,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Check in to Version Cue.
     *
     * @param {string} [versionComments] The comment for this version (Optional)
     * @param {boolean} [forceSave] Forcibly save a version (Optional) (default: false)
     * @return undefined
     */
    checkIn: function (versionComments, forceSave) {
        
    },


    /**
     * Points the link to a new source file.
     *
     * @param {varies=any} [to] The full path name of the new source file. Can accept: File or String.
     * @return undefined
     */
    relink: function (to) {
        
    },


    /**
     * Embeds the source file in the document.
     *
     * @return undefined
     */
    unlink: function () {
        
    },


    /**
     * Updates the link if the source file has been changed.
     *
     * @return Link
     */
    update: function () {
        
    },


    /**
     * Unembeds the source file. If no folder is specified, creates a link to the original source file; if a folder is specified, copies the file to the folder and creates a link to the copied file.
     *
     * @param {File} [to] The folder to which to copy the unembedded file. (Optional)
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    unembed: function (to, versionComments, forceSave) {
        
    },


    /**
     * Experimental: Download the original asset and replace FPO with it.
     *
     * @return undefined
     */
    replaceWithOriginal: function () {
        
    },


    /**
     * Experimental: Relink the text fragment link to a new uri
     *
     * @param {string} [linkResourceURI] Resource URI to relink to.
     * @param {string} [name] The tag name for the key. (Optional)
     * @return undefined
     */
    relinkTextFragmentLink: function (linkResourceURI, name) {
        
    },


    /**
     * Experimental: Reinitialize the link to a new uri
     *
     * @param {string} [linkResourceURI] Resource URI to relink.
     * @return undefined
     */
    reinitLink: function (linkResourceURI) {
        
    },


    /**
     * Opens the source file of the link in the default editor for the source file type.
     *
     * @return undefined
     */
    editOriginal: function () {
        
    },


    /**
     * Selects the link.
     *
     * @return undefined
     */
    show: function () {
        
    },


    /**
     * Opens the file system to the folder that contains the source file of the link, and selects the file.
     *
     * @return undefined
     */
    revealInSystem: function () {
        
    },


    /**
     * Opens Adobe Bridge and selects the source file of the link.
     *
     * @return undefined
     */
    revealInBridge: function () {
        
    },


    /**
     * Copies the link file to the specified location.
     *
     * @param {File} [to] The file or folder to which to copy the file.
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    copyLink: function (to, versionComments, forceSave) {
        
    },


    /**
     * Opens the source file of the link in InDesign for SharedContent links.
     *
     * @return undefined
     */
    goToSource: function () {
        
    },


    /**
     * Sets the label to the value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @param {string} [value] The value.
     * @return undefined
     */
    insertLabel: function (key, value) {
        
    },


    /**
     * Gets the label value associated with the specified key.
     *
     * @param {string} [key] The key.
     * @return string
     */
    extractLabel: function (key) {
        
    },


    /**
     * Generates a string which, if executed, will return the Link.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Link
     */
    getElements: function () {
        
    },


    /**
     * Retrieves the object specifier.
     *
     * @return string
     */
    toSpecifier: function () {
        
    },


    /**
     * Adds an event listener.
     *
     * @param {string} [eventType] The event type.
     * @param {varies=any} [handler] The event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return EventListener
     */
    addEventListener: function (eventType, handler, captures) {
        
    },


    /**
     * Removes the event listener.
     *
     * @param {string} [eventType] The registered event type.
     * @param {varies=any} [handler] The registered event handler. Can accept: File or JavaScript Function.
     * @param {boolean} [captures] This parameter is obsolete. (Optional) (default: false)
     * @return boolean
     */
    removeEventListener: function (eventType, handler, captures) {
        
    },


};

