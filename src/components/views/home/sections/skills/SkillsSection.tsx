import { Section, SectionCaption, SkillGroup, Skills, Skill } from '@/components/ui'
import React from 'react'

import { revealProps } from '../../components/reveal'

interface SkillItem {
  name: string
  icon: string
}

interface SkillGroupConfig {
  title: string
  items: SkillItem[]
}

const SKILL_GROUPS: SkillGroupConfig[] = [
  {
    title: 'Sprachen',
    items: [
      { name: 'JavaScript', icon: '/assets/skills/JavascriptLogo.svg' },
      { name: 'TypeScript', icon: '/assets/skills/TypescriptLogo.svg' },
      { name: 'Node.js', icon: '/assets/skills/NodeJSLogo.svg' },
      { name: 'HTML5', icon: '/assets/skills/HTML5Logo.svg' },
      { name: 'CSS3', icon: '/assets/skills/CSS3Logo.svg' },
      { name: 'Java', icon: '/assets/skills/JavaLogo.svg' },
      { name: 'C#', icon: '/assets/skills/CSharpLogo.svg' },
      { name: 'PostgreSQL', icon: '/assets/skills/PostgreSQLLogo.svg' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React', icon: '/assets/frameworks/ReactLogo.svg' },
      { name: 'Next.js', icon: '/assets/frameworks/NextJSLogo.svg' },
      { name: 'MUI', icon: '/assets/frameworks/MuiLogo.svg' },
      { name: 'Radix UI', icon: '/assets/frameworks/RadixUI.svg' },
      { name: 'shadcn/ui', icon: '/assets/frameworks/ShadcnUILogo.svg' },
      { name: 'Tailwind', icon: '/assets/frameworks/TailwindLogo.svg' },
      { name: 'TanStack Query', icon: '/assets/frameworks/TanStackLogo.svg' },
      { name: 'JSS', icon: '/assets/frameworks/ReactJSSLogo.svg' },
      { name: 'jQuery', icon: '/assets/frameworks/jQueryLogo.svg' },
      { name: 'Webpack', icon: '/assets/frameworks/WebpackLogo.svg' },
      { name: 'Turbopack', icon: '/assets/frameworks/TurbopackLogo.svg' },
      { name: 'Spring Boot', icon: '/assets/frameworks/SpringBootLogo.svg' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Cypress', icon: '/assets/testing/CypressLogo.svg' },
      { name: 'Jest', icon: '/assets/testing/JestLogo.svg' },
      { name: 'Vitest', icon: '/assets/testing/VitestLogo.svg' },
      { name: 'Playwright', icon: '/assets/testing/PlaywrightLogo.svg' },
      { name: 'Selenium', icon: '/assets/testing/SeleniumLogo.svg' },
    ],
  },
]

export const SkillsSection = () => {
  return (
    <Section sectionKey='skills' label='Skills' align='start'>
      <SectionCaption index='02' eyebrow='Stack'>
        Skills
      </SectionCaption>

      {SKILL_GROUPS.map((group, index) => (
        <div key={group.title} {...revealProps(index + 1)}>
          <SkillGroup title={group.title}>
            <Skills>
              {group.items.map((item) => (
                <Skill key={item.name} imageSrc={item.icon} label={item.name} />
              ))}
            </Skills>
          </SkillGroup>
        </div>
      ))}
    </Section>
  )
}
