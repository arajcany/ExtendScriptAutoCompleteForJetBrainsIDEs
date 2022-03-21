/*
 * The policy for handling mismatched CMYK configurations.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var ColorSettingsPolicy = {


    /**
     * Turns off color management for documents whose profiles do not match the working space. For imported colors, numeric values override color appearance.
     * @type {number}
     * @readonly
     */
    COLOR_POLICY_OFF: 1129344870,


    /**
     * Preserves embedded color profiles in newly opened documents.
     * @type {number}
     * @readonly
     */
    PRESERVE_EMBEDDED_PROFILES: 1129345136,


    /**
     * Converts newly opened documents to the current working space. For imported colors, color appearance overrides numeric values.
     * @type {number}
     * @readonly
     */
    CONVERT_TO_WORKING_SPACE: 1129346931,


    /**
     * Preserves raw color numbers and ignores embedded color profiles.
     * @type {number}
     * @readonly
     */
    COMBINATION_OF_PRESERVE_AND_SAFE_CMYK: 1129345124,




};

