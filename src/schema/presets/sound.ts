import { z } from 'zod';
import { atLocation } from '../helpers/structures';

/**
 * Zod schema for a sound effect (i.e. an effect applied to a sound).
 */
const soundEffect = z
	.object({
		type: z.string().min(1),
		intensity: z.number().positive(),
	})
	.strict()
	.describe('A sound effect (i.e. an effect applied to a sound).');

/**
 * Zod schema for the options specific to a `sound`-preset animation.
 */
export const soundOptions = z
	.object({
		atLocation: atLocation.optional(),
		radius: z.number().positive().optional(),
		volume: z.number().positive().optional(),
		constrainedByWalls: z.literal(true).optional(),
		muffledEffect: soundEffect.optional(),
		baseEffect: soundEffect.optional(),
	})
	.strict()
	.describe('The options specific to a `sound`-preset animation.');

/**
 * The options specific to a `sound`-preset animation.
 */
export type SoundPresetOptions = z.infer<typeof soundOptions>;
