/*
 * A borderless row for containing controls in a dialog.
 *
 *
 * OMV Name: 18.0
 * OMV Time: 6-28-2023 17:55:10
 * OMV Title: Adobe InDesign 2023 (18.0) Object Model
 */
var DialogRow = {


    /**
     * The unique ID of the DialogRow.
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
     * The parent of the DialogRow (a DialogColumn).
     * @type {DialogColumn}
     * @readonly
     */
    parent: DialogColumn,


    /**
     * The index of the DialogRow within its containing object.
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
     * A collection of dialog columns.
     * @type {DialogColumns}
     * @readonly
     */
    dialogColumns: DialogColumns,


    /**
     * A collection of widgets.
     * @type {Widgets}
     * @readonly
     */
    widgets: Widgets,


    /**
     * A collection of text editboxes.
     * @type {TextEditboxes}
     * @readonly
     */
    textEditboxes: TextEditboxes,


    /**
     * A collection of integer editboxes.
     * @type {IntegerEditboxes}
     * @readonly
     */
    integerEditboxes: IntegerEditboxes,


    /**
     * A collection of measurement editboxes.
     * @type {MeasurementEditboxes}
     * @readonly
     */
    measurementEditboxes: MeasurementEditboxes,


    /**
     * A collection of real number editboxes.
     * @type {RealEditboxes}
     * @readonly
     */
    realEditboxes: RealEditboxes,


    /**
     * A collection of angle editboxes.
     * @type {AngleEditboxes}
     * @readonly
     */
    angleEditboxes: AngleEditboxes,


    /**
     * A collection of percent editboxes.
     * @type {PercentEditboxes}
     * @readonly
     */
    percentEditboxes: PercentEditboxes,


    /**
     * A collection of integer comboboxes.
     * @type {IntegerComboboxes}
     * @readonly
     */
    integerComboboxes: IntegerComboboxes,


    /**
     * A collection of measurement comboboxes.
     * @type {MeasurementComboboxes}
     * @readonly
     */
    measurementComboboxes: MeasurementComboboxes,


    /**
     * A collection of real number comboboxes.
     * @type {RealComboboxes}
     * @readonly
     */
    realComboboxes: RealComboboxes,


    /**
     * A collection of angle comboboxes.
     * @type {AngleComboboxes}
     * @readonly
     */
    angleComboboxes: AngleComboboxes,


    /**
     * A collection of percent comboboxes.
     * @type {PercentComboboxes}
     * @readonly
     */
    percentComboboxes: PercentComboboxes,


    /**
     * A collection of checkbox controls.
     * @type {CheckboxControls}
     * @readonly
     */
    checkboxControls: CheckboxControls,


    /**
     * A collection of static text objects.
     * @type {StaticTexts}
     * @readonly
     */
    staticTexts: StaticTexts,


    /**
     * A collection of dropdowns.
     * @type {Dropdowns}
     * @readonly
     */
    dropdowns: Dropdowns,


    /**
     * A collection of border panels.
     * @type {BorderPanels}
     * @readonly
     */
    borderPanels: BorderPanels,


    /**
     * A collection of enabling groups.
     * @type {EnablingGroups}
     * @readonly
     */
    enablingGroups: EnablingGroups,


    /**
     * A collection of radiobutton groups.
     * @type {RadiobuttonGroups}
     * @readonly
     */
    radiobuttonGroups: RadiobuttonGroups,


    /**
     * A property that allows setting of several properties at the same time.
     * @type {Object}
     */
    properties: Object,



    /**
     * Generates a string which, if executed, will return the DialogRow.
     *
     * @return string
     */
    toSource: function () {
        
    },


    /**
     * Resolves the object specifier, creating an array of object references.
     *
     * @return DialogRow
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

