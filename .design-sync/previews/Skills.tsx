import { Skill, Skills } from 'jan_hoeck'
import tsLogo from '../../public/assets/skills/TypescriptLogo.svg'
import jsLogo from '../../public/assets/skills/JavascriptLogo.svg'
import reactLogo from '../../public/assets/frameworks/ReactLogo.svg'
import nextLogo from '../../public/assets/frameworks/NextJSLogo.svg'
import htmlLogo from '../../public/assets/skills/HTML5Logo.svg'
import cssLogo from '../../public/assets/skills/CSS3Logo.svg'
import nodeLogo from '../../public/assets/skills/NodeJSLogo.svg'
import tailwindLogo from '../../public/assets/frameworks/TailwindLogo.svg'

export function Default() {
  return (
    <Skills>
      <Skill imageSrc={tsLogo} tooltip="TypeScript" />
      <Skill imageSrc={jsLogo} tooltip="JavaScript" />
      <Skill imageSrc={reactLogo} tooltip="React" />
      <Skill imageSrc={nextLogo} tooltip="Next.js" />
      <Skill imageSrc={htmlLogo} tooltip="HTML5" />
      <Skill imageSrc={cssLogo} tooltip="CSS3" />
      <Skill imageSrc={nodeLogo} tooltip="Node.js" />
      <Skill imageSrc={tailwindLogo} tooltip="Tailwind CSS" />
    </Skills>
  )
}
