/*
 * A named style that remembers character attributes.
 *
 *
 * OMV Name: C:\Program Files (x86)\Common Files\Adobe\Scripting Dictionaries CC\Illustrator 2022\omv.xml
 * OMV Time: Fri Jul 30 16:57:16 UTC+5 2021
 * OMV Title: Adobe Illustrator 26 Type Library
 */
var CharacterStyle = {


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
     * The character style's name.
     * @type {string}
     */
    name: undefined,


    /**
     * The character properties for the text range.
     * @type {CharacterAttributes}
     * @readonly
     */
    characterAttributes: CharacterAttributes,



    /**
     * Adds an element.
     *
     * @return CharacterStyle
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
     * Apply the character style to text object(s)
     *
     * @param {any} [textItem] The text object(s) to apply the style to.
     * @param {boolean} [clearingOverrides] Whether to clear any text attributes before apply the style. (default: false)
     * @return undefined
     */
    applyTo: function (textItem, clearingOverrides) {
        
    },


    /**
     * Remove all the attributes from this character style.
     *
     * @return undefined
     */
    clear: function () {
        
    },


};

