import { Skeleton } from '@/components/elements/feedback/Skeleton'
import { SHEET_COLUMNS, SHEET_STYLES } from '@/declarations/ui/variants'
import type { SheetColumnCount } from '@/declarations/ui/variants'
import type { Translate } from '@/services/NavigationService'
import type { Styleable } from '@/types/common'
import type { SheetBlock } from '@/types/content'
import { cn } from '@/utils/classnames'

export interface SkeletonSheetProps extends Styleable {
  blocks: SheetBlock[]
  // Scoped to the screen, resolves blocks.<id> and columns.<key>
  translate: Translate
}

/**
 * Tracking sheet reduced to its nomenclature, every value withheld
 * @param {SkeletonSheetProps} props - Sheet props
 * @return {JSX.Element} - Rendered sheet
 */

export const SkeletonSheet = ({ blocks, translate, className }: SkeletonSheetProps) => (
  <div className={cn(SHEET_STYLES.frame, className)} aria-hidden="true">
    {blocks.map((block) => {
      const columns = SHEET_COLUMNS[block.columnKeys.length as SheetColumnCount]

      return (
        <div key={block.id} className={SHEET_STYLES.block}>
          <p className={SHEET_STYLES.caption}>{translate(`blocks.${block.id}`)}</p>

          <div className={cn(SHEET_STYLES.head, columns)}>
            {block.columnKeys.map((key) => (
              <span key={key} className={SHEET_STYLES.headCell}>
                {translate(`columns.${key}`)}
              </span>
            ))}
          </div>

          <div className={SHEET_STYLES.body}>
            {Array.from({ length: block.rows }, (_, row) => (
              <div key={row} className={cn(SHEET_STYLES.row, columns)}>
                {block.columnKeys.map((key, column) => (
                  <span key={key} className={SHEET_STYLES.cell}>
                    <Skeleton
                      className={cn(
                        SHEET_STYLES.value,
                        block.labelled && column === 0 && SHEET_STYLES.label
                      )}
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    })}
  </div>
)
