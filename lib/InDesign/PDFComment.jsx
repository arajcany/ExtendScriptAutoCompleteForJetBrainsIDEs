/*
 * PDF comment object
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var PDFComment = {


    /**
     * The name of the reviewer who made the comment
     * @type {string}
     * @readonly
     */
    commentReviewer: undefined,


    /**
     * The content of the comment
     * @type {string}
     * @readonly
     */
    commentContent: undefined,


    /**
     * The date of the comment
     * @type {Date}
     * @readonly
     */
    commentDate: Date,


    /**
     * The type of the comment
     * @type {CommentTypeEnum}
     * @readonly
     */
    commentType: CommentTypeEnum,


    /**
     * The file path of the comment
     * @type {string}
     * @readonly
     */
    commentFilePath: undefined,


    /**
     * Path geometry of the comment. Can return: Ordered array containing pathPointArray:Array of Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals, pathOpen:Boolean.
     * @type {varies=any}
     * @readonly
     */
    commentPathGeometry: undefined,


    /**
     * The status of the comment
     * @type {CommentStatusEnum}
     * @readonly
     */
    commentStatus: CommentStatusEnum,


    /**
     * Whether the comment is an orphan
     * @type {boolean}
     * @readonly
     */
    commentIsOrphan: undefined,


    /**
     * Whether the comment has been applied
     * @type {boolean}
     * @readonly
     */
    commentIsApplied: undefined,


    /**
     * The unique ID of the PDFComment.
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
     * The parent of the PDFComment (a Document).
     * @type {Document}
     * @readonly
     */
    parent: Document,


    /**
     * The index of the PDFComment within its containing object.
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
     * A collection of reply objects
     * @type {Replies}
     * @readonly
     */
    replies: Replies,


    /**
     * A property that can be set to any string.
     * @type {string}
     */
    label: undefined,


    /**
     * The name of the PDFComment; this is an alias to the PDFComment's label property.
     * @type {string}
     */
    name: undefined,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Deletes the PDFComment.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Change the status of a comment
     *
     * @param {CommentStatusEnum} [commentStatus] The new status of the comment
     * @param {Object} [withProperties] Initial values for properties of the new PDFComment (Optional)
     * @return undefined
     */
    changeStatus: function (commentStatus, withProperties) {
        
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
     * Generates a string which, if executed, will return the PDFComment.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return PDFComment
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

