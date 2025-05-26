'use client'

import Link from 'next/link'
import { useResumeTracking } from '@/lib/analytics'
import { Button } from '@/components/Button'

type TrackedButtonProps = {
  trackingSource?: 'home' | 'resume_page' | 'header'
  trackingAction?: 'view' | 'download'
  variant?: 'primary' | 'secondary'
} & React.ComponentPropsWithoutRef<typeof Link>

export function TrackedButton({
  trackingSource,
  trackingAction,
  onClick,
  ...props
}: TrackedButtonProps) {
  const { trackDownload } = useResumeTracking()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (trackingSource && trackingAction === 'download') {
      trackDownload(trackingSource)
    }
    onClick?.(e)
  }

  return <Button {...props} onClick={handleClick} />
}