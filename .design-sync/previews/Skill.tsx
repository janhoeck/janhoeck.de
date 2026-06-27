import { Skill } from 'jan_hoeck'
// Inlined as data URIs so the logos are self-contained in the preview.
import tsLogo from '../../public/assets/skills/TypescriptLogo.svg'
import jsLogo from '../../public/assets/skills/JavascriptLogo.svg'
import reactLogo from '../../public/assets/frameworks/ReactLogo.svg'

export function Default() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Skill imageSrc={tsLogo} tooltip="TypeScript" />
      <Skill imageSrc={jsLogo} tooltip="JavaScript" />
      <Skill imageSrc={reactLogo} tooltip="React" />
    </div>
  )
}
