/*
 * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\photoshop\omv.xml
 * OMV Time: Mon May 9 10:38:15 PDT 2016
 * OMV Title: Adobe Photoshop CC 2015.5 Object Library
 */
var Channel = {


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
     * A histogram of the color of the channel.
     * @type {int}
     * @readonly
     */
    histogram: int,


    /**
     * The channel name.
     * @type {string}
     */
    name: undefined,


    /**
     * The type of channel.
     * @type {ChannelType}
     */
    kind: ChannelType,


    /**
     * The opacity of alpha channels (called solidity for spot channels). Range: 0 to 100. Valid only when 'type' = masked area or selected area.
     * @type {number}
     */
    opacity: undefined,


    /**
     * If true, the channel is visible.
     * @type {boolean}
     */
    visible: undefined,


    /**
     * The color of the channel. Not valid for component channels.
     * @type {SolidColor}
     */
    color: SolidColor,



    /**
     * Adds an element.
     *
     * @return Channel
     */
    add: function () {
        
    },


    /**
     * Duplicate this object.
     *
     * @param {Object} [relativeObject] 
     * @param {ElementPlacement} [insertionLocation]
     * @return Channel
     */
    duplicate: function (relativeObject, insertionLocation) {
        
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
     * Merges a spot channel into the component channels.
     *
     * @return undefined
     */
    merge: function () {
        
    },


    /**
     * Duplicates the channel.
     *
     * @param {Document} [targetDocument] The document to duplicate the channel to.
     * @return Channel
     */
    duplicate: function (targetDocument) {
        
    },


};

