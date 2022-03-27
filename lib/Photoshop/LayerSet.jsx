/*
 * A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var LayerSet = {


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
     * The channels that are enabled for the layer set. Must be a list of component channels.
     * @type {Channel}
     */
    enabledChannels: Channel,


    /**
     * The layers in this layer set.
     * @type {Layers}
     * @readonly
     */
    layers: Layers,


    /**
     * The layer sets contained within the layer set.
     * @type {LayerSets}
     * @readonly
     */
    layerSets: LayerSets,


    /**
     * The art layers contained in this layer set.
     * @type {ArtLayers}
     * @readonly
     */
    artLayers: ArtLayers,



    /**
     * Adds an element.
     *
     * @return LayerSet
     */
    add: function () {
        
    },


    /**
     * Merges the layer set.
     *
     * @return ArtLayer
     */
    merge: function () {
        
    },


};

