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
            I was using an Intel-based 16” MacBook Pro prior to{' '}
            <a
              href="https://www.amazon.com/Apple-MacBook-16-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQML3NL/ref=asc_df_B09JQML3NL/?tag=hyprod-20&linkCode=df0&hvadid=692875362841&hvpos=&hvnetw=g&hvrand=6072429511210394546&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030799&hvtargid=pla-2281435187698&psc=1&mcid=51ee7cd92cf530f0b4b200d6a6713233&hvocijid=6072429511210394546-B09JQML3NL-&hvexpln=73&gad_source=1"
              target="_blank"
              className="bold text-blue-600"
            >
              this
            </a>{' '}
            and the difference is night and day. I’ve never heard the fans turn
            on a single time, even under the incredibly heavy loads I put it
            through with numerous virtual machines and Docker containers whilst
            having 100 plus Chrome tabs open.
          </Tool>
          <Tool title="Bose QuietComfort 35">
            A frind of mine gifted me{' '}
            <a
              href="https://www.amazon.com/Bose-QuietComfort-Cancelling-Headphones-Bluetooth/dp/B0CCZ26B5V/ref=asc_df_B0CCZ26B5V/?tag=hyprod-20&linkCode=df0&hvadid=692875362841&hvpos=&hvnetw=g&hvrand=4250498778099927957&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030799&hvtargid=pla-2281435182698&psc=1&mcid=ec675980843b346cabe77b585fb08a66&hvocijid=4250498778099927957-B0CCZ26B5V-&hvexpln=73&gad_source=1"
              target="_blank"
              className="bold text-blue-600"
            >
              these
            </a>{' '}
            headphones a years ago and I’ve been using them ever since. It would
            be a rare site to find me anywhere with my computer and not have
            them on my head. Many nights I even fall asleep with them on!
            They’re super comfortable, lightweight and the noise cancelling is
            amazing. I use them for everything from listening to music to taking
            calls. The ability to isoloate myself from the world around me is
            invaluable to me. I have other headphones, like the Apple Pro Max,
            but I always come back to these.
          </Tool>
          <Tool title="AOC AGON Curved Gaming Monitor 49 inch (AG493UCX)">
            It took me a minute to get used to the size but now I can’t imagine
            going back to a smaller{' '}
            <a
              href="https://www.amazon.com/AOC-AG493UCX-Immersive-Adaptive-Sync-Adjustable/dp/B07ZSGR4CH/ref=asc_df_B07ZSGR4CH/?tag=hyprod-20&linkCode=df0&hvadid=692875362841&hvpos=&hvnetw=g&hvrand=4119224082516687845&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030799&hvtargid=pla-2281435177898&psc=1&mcid=8d96143d66d4366588996d20e9e74348&hvocijid=4119224082516687845-B07ZSGR4CH-&hvexpln=73&gad_source=1"
              target="_blank"
              className="bold text-blue-600"
            >
              monitor
            </a>
            . I can have two full-size windows open side by side and still have
            room for a third window for reference material.
          </Tool>
          <Tool title="Asus VS278 27inch monitor">
            Honestly, there's nothing special about this monitor. It's just a 27
            inch monitor that I use in portrait mode as my secondary monitor.
            The 49 inch monitor is great for having multiple windows open side
            by side but I like to have a secondary monitor in portrait mode for
            reading documentation and reference material.
          </Tool>
          <Tool title="Logi C920 Webcam">
            Working remotely since 2016 has meant that I’ve spent a lot of time
            on video calls. I’ve tried a few different webcams and{' '}
            <a
              href="https://www.logitech.com/en-eu/shop/p/c920-pro-hd-webcam.960-001055"
              target="_blank"
              className="bold text-blue-600"
            >
              this
            </a>{' '}
            is the one that I’ve stuck with. I love the quality of the video and
            the fact that it has a built-in microphone. I’ve used it for
            everything from video calls to recording videos and I’ve always been
            impressed with the quality. I've since bought several of them for my
            family members to use as well.
          </Tool>
          <Tool title="WASD V2 104-Key Custom Mechanical Keyboard">
            For the longest time I used the Apple Magic Keyboard. I just didn’t
            see the point in spending hundreds of dollars on a keyboard when I
            could just use the one that came with my computer. Then I tried a
            <a
              href="https://www.wasdkeyboards.com/"
              target="_blank"
              className="bold text-blue-600"
            >
              mechanical keyboard
            </a>{' '}
            and I’m never going back. Now I have serveral of these for each of
            my workstations. I love the tactile feedback and the sound of the
            keys. I’m using Cherry MX Brown switches and I’m very happy with
            them.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            I started using{' '}
            <a
              href="https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface?afid=p238%7CsEPZlcJNA-dc_mtid_1870765e38482_pcrid_652838197188_pgrid_147153194546_pntwk_g_pchan_local_pexid__ptid_pla-1642178281835_&cid=aos-us-kwgo-pla-btb_lia--slid---product-MMMP3AM/A"
              target="_blank"
              className="bold text-blue-600"
            >
              these
            </a>{' '}
            back when I was using the Apple Magic Keyboard and I just never
            stopped. I use them exclusively now and I haven't used a mouse in
            close to a decade.
          </Tool>
          <Tool title="HAG Capisco Adjustable Standing Desk Chair">
            I’ve had this{' '}
            <a
              href="https://www.amazon.com/gp/product/B093TB81WQ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1"
              target="_blank"
              className="bold text-blue-600"
            >
              chair
            </a>{' '}
            for a few years now and it’s been great. I was a little skeptical
            when I first saw it,but the fact that it raises up super high so
            that I can use it at my standing desk, plus the design allowing you
            to sit in so many differnt positions won me over.I started using it
            when I was having some back pain and it’s been great for that. I can
            sit in it in a bunch of different positions and it’s been great for
            my posture.
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
              fly around a project, making changes at the speed of lightening,
              never taking their hands off the keyboard and I told myself that I
              would learn my tools to be as effecient on day. A few years ago I
              took the plunge into learning Vim motions to use inside VSCode and
              then made the decision to take the time to learn the{' '}
              <a
                href="https://neovim.io/"
                target="_blank"
                className="bold text-blue-600"
              >
                NeoVim
              </a>
              editing enviornment as a whole.
            </p>
            <br />
            <p>
              {' '}
              This was a few years ago and I’m never going back. The speed of
              use, plus the plugin ecosystem allowing for you to set up your
              editor in a way that exactly fits the way that you want to work is
              just a better development experience for me. There isn't a feature
              in my personal workflow that VSCode has that I can't replicate in
              NeoVim. Plus the portability of being able to use my same setup on
              any of my Proxmox servers, Linux containers and Virtual Machines I
              can't see myself ever giving up NeoVim
            </p>
          </Tool>
          <Tool title="iTerm2">
            <a
              href="https://iterm2.com/"
              target="_blank"
              className="bold text-blue-600"
            >
              iTerm2
            </a>{' '}
            has been the defacto terminal emulator for MacOS for years now and
            I’ve been using it for a while. I love the fact that it’s open
            source and that it’s super customizable. I’ve used it for everything
            from basically living in it as my editing environment using NeoVim
            to running scripts and ssh'ing into servers to manage them. I know
            there are others out there but I’ve never had a reason to switch.
          </Tool>
          <Tool title="Tmux">
            I couldn't mention iTerm2 without mentioning{' '}
            <a
              href="https://github.com/tmux/tmux/wiki"
              target="_blank"
              className="bold text-blue-600"
            >
              {' '}
              Tmux
            </a>
            . I started using Tmux a few years ago and I’ve never looked back. I
            love the fact that I can split my terminal into multiple panes and
            that I can detach and reattach to a session. I've customized it to
            my liking and I use plugins like tmux-resurrect and tmux-continuum
            to automatically save my sessions and restore them after a reboot. I
            can't imagine working without it.
          </Tool>
          <Tool title="Proxmox">
            I’ve been using{' '}
            <a
              href="https://www.proxmox.com/en/proxmox-virtual-environment/overview"
              target="_blank"
              className="bold text-blue-600"
            >
              Proxmox
            </a>{' '}
            for a few years now and I love it. I have quite a few servers that I
            run at home and I use Proxmox to manage the virtual machines and
            containers on them. I’ve tried a few other hypervisors and Proxmox
            is the one that I’ve stuck with. I love the web interface and the
            fact that it’s open source and free to use.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Technologies">
          <Tool title="Angular">
            I was very early on the{' '}
            <a
              href="https://angular.dev"
              target="_blank"
              className="bold text-blue-600"
            >
              Angular
            </a>{' '}
            train back in 2012 and I’ve stuck with it. I’ve tried React and Vue
            but I just love the structure and the way that Angular forces you to
            write your code. I’ve been using Angular since the AngularJS days
            and whist the framework has changed a lot since then and the
            learning curve has been steep at times (the need to learn
            Typescript, Observables via RxJs/NgRx etc), I’ve always found that
            I’ve been able to build complex applications with it.
          </Tool>
          <Tool title="Node/Express">
            This is my go-to for building APIs. I’ve tried a few other
            frameworks but I always come back to{' '}
            <a
              href="https://nodejs.org/en"
              target="_blank"
              className="bold text-blue-600"
            >
              Node
            </a>{' '}
            and{' '}
            <a
              href="https://expressjs.com/"
              target="_blank"
              className="bold text-blue-600"
            >
              Express
            </a>
            . I love the simplicity of it and the fact that Express just a thin
            layer on top of Node. I’ve built a bunch of APIs with it and I’ve
            never run into a situation where I couldn’t do what I needed to do.
          </Tool>
          <Tool title="MongoDb">
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              className="bold text-blue-600"
            >
              MongoDb
            </a>{' '}
            used to be my go-to database for all of my projects. I love the
            flexibility of it and the fact that I can just throw data into it to
            spin up a prototype super quickly, yet it can also scale and is
            powerful enough to handle complex queries and large datasets. I’ve
            been using it for years now and it's a go-to tool for me depending
            on the project. Although lately I've been using PocketBase for my
            personal projects.
          </Tool>
          <Tool title="PocketBase">
            I got on the{' '}
            <a
              href="https://pocketbase.io/"
              target="_blank"
              className="bold text-blue-600"
            >
              PocketBase
            </a>{' '}
            train about a year ago and I’ve really enjoyed the experience. I’ve
            been using it for all of my personal projects and I find that it
            makes spinning up a self-hosted database super easy. It's written in
            Go and it's super fast and lightweight. There's also a javascript
            sdk that you can use to interact with the database from your
            frontend applications, so I've used it to make "backendless"
            applications where the frontend talks directly to the database.
          </Tool>
          <Tool title="Golang">
            I started using{' '}
            <a
              href="https://go.dev/"
              target="_blank"
              className="bold text-blue-600"
            >
              Go
            </a>{' '}
            a few years ago and I’ve really enjoyed the experience. I’ve used it
            to build a few small projects and I’ve always found that it’s super
            fast and easy to work with. The concurrency model is amazing and I
            love the fact that it’s a compiled language. I’ve used it to build a
            few APIs and I’ve always been impressed with the performance.
          </Tool>
          <Tool title="Python">
            I started using{' '}
            <a
              href="https://www.python.org/"
              target="_blank"
              className="bold text-blue-600"
            >
              Python
            </a>{' '}
            back around 2016ish and I’ve used it for a bunch of personal
            projects. When it comes to scripting or building small utilities,
            Python is my go-to. I love the simplicity of the language and the
            fact that it’s so easy to read and write. I’ve used it for
            everything from web scraping to building APIs and I’ve always been
            impressed with how easy it is to work with.
          </Tool>
          <Tool title="PHP">
            <a
              href="https://www.php.net/"
              target="_blank"
              className="bold text-blue-600"
            >
              PHP
            </a>{' '}
            was the first language that I learned. I used it for a few years
            before I moved on to other languages and I haven't used it in a
            while. I still have a soft spot for it. I keep hearing that it's
            constantly improving and projects like Laravel are doing some really
            cool stuff with it. I can't see myself going back to it for any
            serious projects but I still have a lot of respect for it.
          </Tool>
          <Tool title="Nginx">
            I’ve been using{' '}
            <a
              href="https://nginx.org/en/"
              target="_blank"
              className="bold text-blue-600"
            >
              Nginx{' '}
            </a>{' '}
            for many years now and I love it. I’ve used it to serve static
            sites, it's my current main reverse proxy server to the multitude of
            services that I run in my sizeable homelab, and I use it as a load
            balancer between servers. I loved the relative simplicity of the
            configuration and the fact that it’s super fast. I’ve never run into
            a situation where I couldn’t do what I needed to do with it.
          </Tool>
          <Tool title="Caddy">
            I recently got turned on to{' '}
            <a
              href="https://caddyserver.com/"
              target="_blank"
              className="bold text-blue-600"
            >
              {' '}
              Caddy{' '}
            </a>{' '}
            and I started using it for all of my personal projects. Nginx was
            already easier to use than Apache but Caddy is even easier. I love
            the fact that it’s written in Go and that it’s super fast. I’ve used
            it to serve static sites and reverse proxy to other services and
            I’ve always been impressed with the performance.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using{' '}
            <a
              href="https://figma.com"
              target="_blank"
              className="bold text-blue-600"
            >
              {' '}
              Figma{' '}
            </a>{' '}
            as just a design tool but now it’s become our virtual whiteboard for
            the entire company. Never would have expected the collaboration
            features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            I used to use Alfred but I switched to Raycast a few months ago and
            I love it. I love the fact that it’s open source and that it’s super
            fast. I’ve used it to launch apps, run scripts, inseart emojis and
            search my computer and I been vey happy with it.
          </Tool>
          <Tool title="Obsidian">
            I read a book about a year ago called "
            <a
              href="https://www.buildingasecondbrain.com/book"
              target="_blank"
              className="bold text-blue-600"
            >
              {' '}
              Building a Second Brain: A Proven Method to Organise Your Digital
              Life and Unlock Your Creative Potential
            </a>
            " by Tiago Forte and it really resonated with me. I learned about
            his PARA method for organizing notes as well as the Zettelkasten
            method and landed on a hybrid system between the two that works for
            me really well.
            <br />I had never had a really solid note taking program until I
            started using Obsidian. I love the fact that it’s just a bunch of
            markdown files and that I can use my own file system to organize
            them. Everything is local to my filesystem so the privacy aspect was
            a major factor for me. I use{' '}
            <a href="#syncthing" className="bold text-blue-600">
              Syncthing
            </a>{' '}
            to keep my notes in sync between my workstation and my mobile
            devices so that I can also take notes on the go have them
            automatically placed into my system.
            <br />
            With everything being local and only markdown files, that meant that
            I could also use my go-to NeoVim editor to be able to take notes
            right in the same terminal that I'm working in as thoughts or little
            code snippets that I'd like to save happen throughout the day. I
            organize all of my projects in it and it houses all of my knowledge
            bases in one susinc place. The ability to link note together via
            taggin and also visualize those connections leading to creative
            ideas sparking into reality has been a true game changer for me.
            <br />
            I’ve been using it for a few months now and have pulled in all of
            the various notes from the multitude of systems that I've used over
            the years to record my thoughts and the insights just for that
            activety has blown me away. I couldn't be more happy with it.
          </Tool>
          <div id="syncthing" />
          <Tool title="Syncthing">
            Syncthing is an open-source, peer-to-peer file synchronization tool
            that allows users to securely and efficiently synchronize files
            across multiple devices. I use it to keep my Obsidian notes in sync
            between my workstation and my mobile devices.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
