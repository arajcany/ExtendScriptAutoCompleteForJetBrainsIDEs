/*
 * A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var LayerComp = {


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
     * The name of the layer comp.
     * @type {string}
     */
    name: undefined,


    /**
     * The description of the layer comp.
     * @type {any}
     */
    comment: undefined,


    /**
     * If true, uses layer appearance (layer styles) settings.
     * @type {boolean}
     */
    appearance: undefined,


    /**
     * If true, uses layer position.
     * @type {boolean}
     */
    position: undefined,


    /**
     * If true, the layer comp is visible.
     * @type {boolean}
     */
    visibility: undefined,


    /**
     * If true, the layer comp is currently selected.
     * @type {boolean}
     * @readonly
     */
    selected: undefined,



    /**
     * Adds an element.
     *
     * @return LayerComp
     */
    add: function () {
        
    },


    /**
     * Deletes this object.
     *
     * @return undefined
     */
    remove: function () {
        
    },


    /**
     * Deletes all elements.
     *
     * @return undefined
     */
    removeAll: function () {
        
    },


    /**
     * Applies the layer comp to the document.
     *
     * @return undefined
     */
    apply: function () {
        
    },


    /**
     * Recaptures the current layer state(s) for this layer comp.
     *
     * @return undefined
     */
    recapture: function () {
        
    },


    /**
     * Resets the layer comp state to the document state.
     *
     * @return undefined
     */
    resetFromComp: function () {
        
    },


};

