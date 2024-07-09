import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with numerous virtual machines and Docker containers whilst having
            100 plus Chrome tabs open.
          </Tool>
          <Tool title="AOC AGON Curved Gaming Monitor 49 inch (AG493UCX)">
            It took me a minute to get used to the size but now I can’t imagine
            going back to a smaller monitor. I can have two full-size windows
            open side by side and still have room for a third window for
            reference material.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="NeoVim">
            <p>
              I started off programming using Jetbrains IDEs PHPStorm, then
              WebStorm, then Intellij and eventually jumped onto the VSCode
              train with the rest of the web programming world. The only time I
              would use Vim was when I would be popped into the editor to write
              a quick Git commit message so for years I only knew the basic
              commands to switch between INSERT mode and NORMAL mode and `:wq`
              to write and quit out of the program but that was the extent of
              it.
            </p>
            <br />
            <p>
              {' '}
              I would watch the programming YouTuber&apos;s like{' '}
              <em>
                <a
                  href="https://www.youtube.com/c/theprimeagen"
                  target="_blank"
                  className="bold text-blue-600"
                >
                  The Primagen
                </a>{' '}
              </em>
              fly around a project, making changes at the speed of lightening
              and I told myself that I would learn my tools to be as effecient
              on day. A few years ago I took the plunge into learning Vim
              motions to use inside VSCode and then made the decision to take
              the time to learn the NeoVim editing enviornment as a whole.
            </p>
            <br />
            <p>
              {' '}
              This was a few years ago and I’m never going back. The speed of
              use, plus the plugin ecosystem is just so much more active and the
              defaults are just so much better. I’m using the built-in LSP
              support and it’s been a game changer for me.
            </p>
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
