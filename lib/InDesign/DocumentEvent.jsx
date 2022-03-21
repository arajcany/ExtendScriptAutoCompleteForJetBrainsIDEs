/*
 * A document event.
 *
 *
 * OMV Name: 17.0
 * OMV Time: 3-21-2022 16:34:19
 * OMV Title: Adobe InDesign 2022 (17.0) Object Model
 */
var DocumentEvent = {


    /**
     * Dispatched before a Document is created. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_NEW: beforeNew,


    /**
     * Dispatched after a Document is created. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_NEW: afterNew,


    /**
     * Dispatched before a Document is opened. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_OPEN: beforeOpen,


    /**
     * Dispatched after a Document is opened. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_OPEN: afterOpen,


    /**
     * Dispatched before a Document is saved. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_SAVE: beforeSave,


    /**
     * Dispatched after a Document is saved. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SAVE: afterSave,


    /**
     * Dispatched before a Document is saved under a new name. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_SAVE_AS: beforeSaveAs,


    /**
     * Dispatched after a Document is saved under a new name. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SAVE_AS: afterSaveAs,


    /**
     * Dispatched before a copy of a Document is saved. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_SAVE_A_COPY: beforeSaveACopy,


    /**
     * Dispatched after a copy of a Document is saved. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_SAVE_A_COPY: afterSaveACopy,


    /**
     * Dispatched before a Document is reverted. This event bubbles. This event is cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_REVERT: beforeRevert,


    /**
     * Dispatched after a Document is reverted. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_REVERT: afterRevert,


    /**
     * Dispatched before a Document is closed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    BEFORE_CLOSE: beforeClose,


    /**
     * Dispatched after a Document is closed. This event bubbles. This event is not cancelable.
     * @type {string}
     * @readonly
     */
    AFTER_CLOSE: afterClose,


    /**
     * The full path to the DocumentEvent, including the name of the DocumentEvent.
     * @type {File}
     * @readonly
     */
    fullName: File,


    /**
     * The name of the event.
     * @type {string}
     * @readonly
     */
    eventType: undefined,


    /**
     * The target of the event.
     * @type {Object}
     * @readonly
     */
    target: Object,


    /**
     * The current propagation target of the event.
     * @type {Object}
     * @readonly
     */
    currentTarget: Object,


    /**
     * The current propagation phase of the event.
     * @type {EventPhases}
     * @readonly
     */
    eventPhase: EventPhases,


    /**
     * If true, the event supports the bubbling phase of propagation.
     * @type {boolean}
     * @readonly
     */
    bubbles: undefined,


    /**
     * If true, the default behavior of the event on its target can be canceled.
     * @type {boolean}
     * @readonly
     */
    cancelable: undefined,


    /**
     * The time the event was initialized.
     * @type {Date}
     * @readonly
     */
    timeStamp: Date,


    /**
     * If true, propagation of the event beyond the current target has been stopped.
     * @type {boolean}
     * @readonly
     */
    propagationStopped: undefined,


    /**
     * If true, the default behavior of the event on its target has been canceled.
     * @type {boolean}
     * @readonly
     */
    defaultPrevented: undefined,


    /**
     * The unique ID of the DocumentEvent.
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
     * The parent of the DocumentEvent (a Application or Document).
     * @type {varies=any}
     * @readonly
     */
    parent: undefined,


    /**
     * The index of the DocumentEvent within its containing object.
     * @type {number}
     * @readonly
     */
    index: undefined,


    /**
     * Controls the display of dialogs and alerts during script processing.
     * @type {UserInteractionLevels}
     */
    userInteractionLevel: UserInteractionLevels,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Stops propagation of the event beyond the current target.
     *
     * @return undefined
     */
    stopPropagation: function () {
        
    },


    /**
     * Cancels the default behavior of the event on its target.
     *
     * @return undefined
     */
    preventDefault: function () {
        
    },


    /**
     * Generates a string which, if executed, will return the DocumentEvent.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DocumentEvent
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


};

