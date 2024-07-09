'use server'

export async function addInfoToNewsLetterList(
  prevState: any,
  formData: FormData,
) {
  /* let response = await fetch('/api/newsletter', {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Failed to sign up for newsletter')
  }

  return { success: true } */

  console.log('prevState', prevState)
  console.log('formData', formData)
}
