import { TEXTURE_BACKDROP_STYLES } from '@/declarations/ui/variants'

export interface TexturePageBackdropProps {
  // Public path of the background image
  src: string
}

/**
 * Procedural page backdrop
 * @param {TexturePageBackdropProps} props - Backdrop props
 * @return {JSX.Element} - Rendered backdrop
 */

export const TexturePageBackdrop = ({ src }: TexturePageBackdropProps) => (
  <div aria-hidden="true">
    <div className={TEXTURE_BACKDROP_STYLES.frame} />
    <div className={TEXTURE_BACKDROP_STYLES.image} style={{ backgroundImage: `url(${src})` }} />
    <div className={TEXTURE_BACKDROP_STYLES.grain} />
  </div>
)
