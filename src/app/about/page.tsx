import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  target,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  target?: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target={target}
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Jocelyn Knight. I live in Las Vegas, where I build the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Portrait of Jocelyn Knight"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Jocelyn Knight. I live in Las Vegas, where I build the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              When I was a child, I was told that there are two types of people
              in the world: those who flip the light switch on to turn on the
              light, and those who flip the light switch on and wonder how the
              light turns on. I was the latter.
            </p>
            <p>
              I&apos;ve always been a vivacious learner, falling asleep with a
              book in my bed was the norm. I was the kid who would take apart
              the fan just to see how it worked, and then put it back together
              again. Out of high school, I persued a Managament Information
              Systems degree. This was the first time I was introduced to
              programming and I was hooked. I spent countless hours in the
              computer lab working on projects.I wasn&apos;t a fan of the
              manditory english and history classes. All I wanted to do was
              code.
            </p>
            <p>
              I ended up leaving to joing the United States Air Force as an
              F-15, A-10 and U-2 Avionics Technician. The systems troubleshoot
              skills that I learned in the Air Force have been invaluable in my
              software development career. I&apos;ve been able to quickly
              identify and fix bugs in code, and I&apos;ve been able to help my
              team members do the same.
            </p>
            <p>
              Post military, I worked in both the mortgage and real estate sales
              industries, but quite soon started working as a freelance software
              developer for a few years before starting to work as a full time
              software engineer at several local companies. This continued as I
              started working remotely for companies in other states, before
              working remote was the cool thing to do.
            </p>
            <p>
              I started off building full stack applications, with the LAMP
              stack (Linux, Apache, MySQL, PHP), but quickly moved to building
              applications with the MEAN (MongoDb, Express, Angular, Node) stack
              . I was early on the Angular train, working with it since the
              early days of AngularJS through it&apos;s current version.
              I&apos;ve also worked on several projects using React as well as
              projects using Python, C#, MSSQL, Jenkins, Docker, AWS, you name
              it.
            </p>
            <p>
              I&apos;ve also worked as a technical lead, where I was responsible
              for leading a team of developers in the development of a large
              scale application. I was responsible for the architecture of the
              application, as well as the development of the front end and back
              end of the application. I was also responsible for the deployment
              of the application, as well as the maintenance of the application.
            </p>
            <p>
              I find myself working on side projects in my free time, and
              I&apos;ve built several applications that are currently out in the
              wild. I also run a pretty beefy homelab, where I have a full sized
              server rack housing a mixture of 9 Dell Poweredge r730, r730xd and
              r630 servers, Tripplite USPs, a 64 port Arista 10Gb/40Gb layer 3
              switch, a custom firewall appliance runing pfSense routing
              software, and a Synology NAS. 6 of the servers are in a Proxmox
              cluster with Ceph shared storage running dozens of LXC containers
              (including the hosting on of the very page you&apos;re reading), 2
              are running TrueNAS Scale and the last is a bare metal Ubuntu
              server.
            </p>
            <p>
              I did this because I wanted to learn more about virtualization,
              containerization, networking, storage, and security. I also wanted
              to learn more about the software that I was using in my day job,
              and I wanted to be able to experiment with different
              configurations without breaking anything in production. I&apos;ve
              learned a lot from this homelab, and I&apos;ve been able to apply
              what I&apos;ve learned to my day job. I&apos;ve also been able to
              help my team members with their projects, and I&apos;ve been able
              to help my friends and family with their technology issues.
            </p>
            <p>
              Today, I’m the founder of B&M Development Services, where we’re
              building the future of software development. I’m passionate about
              building products that make a difference in people’s lives. I’m
              also a mentor, speaker, and being that I am quite often the only
              woman developer in the engineering room, I&apos;m also an advocate
              for diversity and inclusion of women in tech.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://x.com/BlackGirlCoding"
              icon={XIcon}
              target="_blank"
            >
              Follow on X
            </SocialLink>
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink
              href="https://github.com/brynnjocelyn"
              icon={GitHubIcon}
              className="mt-4"
              target="_blank"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jocelyn-k-44b6681b2/"
              icon={LinkedInIcon}
              className="mt-4"
              target="_blank"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jocelyn@bmdevservices.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              target="_blank"
            >
              jocelyn@bmdevservices.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
