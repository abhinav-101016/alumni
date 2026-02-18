import Hero from "@/components/Hero"
import Stories from "@/components/Stories"
import Stats from "@/components/Stats"
import Career from "@/components/Career"
import UpcomingEvents from "@/components/UpcomingEvents"

export default function Home() {
  return (
    <>
      <Hero />
      <Stories />
      <Stats/>
      <Career/>
      <UpcomingEvents/>
      {/* other content below */}
    </>
  )
}
