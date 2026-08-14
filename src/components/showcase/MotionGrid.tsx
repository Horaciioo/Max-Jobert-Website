import { Text } from '@/components/elements/typography/Text'
import { MOTION_ATTRIBUTE, MOTION_NAMES, MOTION_VALUE_ATTRIBUTE } from '@/declarations/ui/motion'
import type { MotionName } from '@/declarations/ui/motion'
import { SURFACES, TONE_SOFT } from '@/declarations/ui/tokens'
import { cn } from '@/utils/classnames'

// Counters need a target, every other effect ignores the value
const SAMPLE_COUNT = 128

/**
 * Motion registry, every declared effect playing on its own tile
 * @return {JSX.Element} - Rendered grid
 */

export const MotionGrid = () => (
  <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
    {(Object.keys(MOTION_NAMES) as MotionName[]).map((name) => (
      <div key={name} className={cn(SURFACES.inset, 'flex flex-col gap-3 px-4 py-5')}>
        <Text appearance="label" as="span">
          {name}
        </Text>
        {/* The stage carries the effect, so a counter never overwrites its own label */}
        <span
          className={cn(
            TONE_SOFT.primary,
            'rounded-md px-3 py-2 text-center text-sm font-semibold'
          )}
          {...{ [MOTION_ATTRIBUTE]: name, [MOTION_VALUE_ATTRIBUTE]: SAMPLE_COUNT }}>
          {SAMPLE_COUNT}
        </span>
      </div>
    ))}
  </div>
)
