import { track } from '@vercel/analytics'

export type ResumeEventData = {
  source: 'home' | 'resume_page' | 'header'
  action: 'view' | 'download'
  timestamp?: string
}

export function trackResumeEvent(data: ResumeEventData) {
  const eventName = `resume_${data.action}`
  
  track(eventName, {
    source: data.source,
    timestamp: data.timestamp || new Date().toISOString(),
  })
}

export function useResumeTracking() {
  const trackView = (source: ResumeEventData['source']) => {
    trackResumeEvent({ source, action: 'view' })
  }

  const trackDownload = (source: ResumeEventData['source']) => {
    trackResumeEvent({ source, action: 'download' })
  }

  return { trackView, trackDownload }
}