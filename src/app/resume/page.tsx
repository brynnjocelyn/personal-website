'use client'

import { useEffect } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useResumeTracking } from '@/lib/analytics'

export default function ResumePage() {
  const { trackView, trackDownload } = useResumeTracking()

  useEffect(() => {
    trackView('resume_page')
  }, [trackView])
  return (
    <SimpleLayout
      title="Resume"
      intro="View my professional experience and qualifications."
    >
      <div className="relative">
        <div className="mb-6 flex justify-end">
          <Button
            href="/jocelyn-knight-resume.pdf"
            variant="primary"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            onClick={() => trackDownload('resume_page')}
          >
            Download PDF
            <ArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
          </Button>
        </div>
        
        <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 dark:border-zinc-700/40 dark:bg-zinc-900/50">
          <iframe
            src="/jocelyn-knight-resume.pdf"
            className="h-[800px] w-full"
            title="Jocelyn Knight Resume"
          />
        </div>
        
        <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Having trouble viewing? You can{' '}
            <a
              href="/jocelyn-knight-resume.pdf"
              download
              className="font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
              onClick={() => trackDownload('resume_page')}
            >
              download the PDF
            </a>{' '}
            instead.
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}