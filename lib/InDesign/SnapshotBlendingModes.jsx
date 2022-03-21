/*
 * Modes that control which nearby snapshots, by size and shape, are blended into the new layout.
 *
 *
 * OMV Name: 16.1
 * OMV Time: 3-31-2021 11:1:40
 * OMV Title: Adobe InDesign 2021 (16.1) Object Model
 */
var SnapshotBlendingModes = {


    /**
     * Turns off the influence of layout snapshots completely.
     * @type {number}
     * @readonly
     */
    IGNORE_LAYOUT_SNAPSHOTS: 1399736679,


    /**
     * Use the layout snapshot nearest in size and shape to the new layout.
     * @type {number}
     * @readonly
     */
    USE_NEAREST_SNAPSHOT: 1399737957,


    /**
     * Use only layout snapshots within the same class as the new layout.
     * @type {number}
     * @readonly
     */
    LIMITED_SNAPSHOT_BLENDING: 1399737449,


    /**
     * Use up to three nearest snapshots even if a snapshot is in a different class that the new layout.
     * @type {number}
     * @readonly
     */
    FULL_SNAPSHOT_BLENDING: 1399735925,




};

