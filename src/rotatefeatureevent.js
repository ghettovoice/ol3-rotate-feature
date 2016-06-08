// @flow
import olEvent from './event';

/**
 * @enum {string}
 */
export const RotateFeatureEventType = {
    /**
     * Triggered upon feature rotate start.
     * @event RotateFeatureEvent#rotatestart
     */
    START: 'rotatestart',
    /**
     * Triggered upon feature rotation.
     * @event RotateFeatureEvent#rotating
     */
    ROTATING: 'rotating',
    /**
     * Triggered upon feature rotation end.
     * @event RotateFeatureEvent#rotateend
     */
    END: 'rotateend'
};

/**
 * Events emitted by RotateFeatureInteraction instances are instances of this type.
 *
 * @class
 * @extends {olEvent}
 * @author Vladimir Vershinin
 */
export class RotateFeatureEvent extends olEvent {
    /**
     * @param {RotateFeatureEventType} type Type.
     * @param {ol.Collection<ol.Feature>} features Rotated features.
     */
    constructor(type, features) {
        super(type);

        /**
         * The features being rotated.
         * @type {ol.Feature}
         */
        this.features = features;
    }
}
