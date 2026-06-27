import { ReferenceCard } from 'jan_hoeck'

export function LivePreview() {
  return (
    <ReferenceCard
      title="CastCrafter Server"
      description="Offizielle Community-Plattform des CastCrafter Minecraft-Servers – mit Login, Live-Statistiken und Event-Übersicht."
      imageSrc="/assets/references/castcrafter.png"
      livePreviewUrl="https://server.castcrafter.de"
    />
  )
}

export function WithGithub() {
  return (
    <ReferenceCard
      title="Hookah Awards"
      description="Interaktive Voting-Plattform für einen Twitch-Streamer, auf der die Community über die besten Clips abstimmt."
      imageSrc="/assets/references/hookahawards.png"
      githubUrl="https://github.com/janhoeck/jan_hoeck"
      livePreviewUrl="https://hookahawards.de"
    />
  )
}
