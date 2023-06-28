/*
 * An assignment.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var Assignment = {


    /**
     * The path to the document that the hyperlink destination points to.
     * @type {File}
     * @readonly
     */
    documentPath: File,


    /**
     * The status of the assignment file.
     * @type {AssignmentStatus}
     * @readonly
     */
    assignmentFileStatus: AssignmentStatus,


    /**
     * If true, the assignment is packaged.
     * @type {boolean}
     * @readonly
     */
    packaged: undefined,


    /**
     * If true, the assignment package is up to date.
     * @type {boolean}
     * @readonly
     */
    packageUpToDate: undefined,


    /**
     * The file path (colon delimited on the Mac OS). Can also accept: File.
     * @type {string}
     * @readonly
     */
    filePath: undefined,


    /**
     * The unique ID of the Assignment.
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
     * The parent of the Assignment (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the Assignment within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


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
     * A collection of assigned stories.
     * @type {AssignedStories}
     * @readonly
     */
    assignedStories: AssignedStories,


    /**
     * The name of the Assignment.
     * @type {string}
     */
    name: undefined,


    /**
     * The user name to assign to tracked changes and notes.
     * @type {string}
     */
    userName: undefined,


    /**
     * The content to export in the assignment.
     * @type {AssignmentExportOptions}
     */
    exportOptions: AssignmentExportOptions,


    /**
     * The color of the assignment's frames. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
     * @type {varies=any}
     */
    frameColor: undefined,


    /**
     * If true, includes linked files when packaging the assignment.
     * @type {boolean}
     */
    includeLinksWhenPackage: undefined,


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
     * Updates the assignment file.
     *
     * @param {string} [versionComments] The comment for this version. (Optional)
     * @param {boolean} [forceSave] If true, forcibly saves a version. (Optional) (default: false)
     * @return undefined
     */
    update: function (versionComments, forceSave) {
        
    },


    /**
     * Deletes the assignment and its file.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Creates an assignment package.
     *
     * @param {File} [filePath] The full path name of the assignment package file.
     * @param {boolean} [submit] If true, submits assigned stories before packaging the assignment. (Optional) (default: true)
     * @param {Object} [withProperties] Initial values for properties of the new Assignment (Optional)
     * @return File
     */
    createPackage: function (filePath, submit, withProperties) {
        
    },


    /**
     * Cancels the package for an assignment.
     *
     * @return undefined
     */
    cancelPackage: function () {
        
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
     * Generates a string which, if executed, will return the Assignment.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return Assignment
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

