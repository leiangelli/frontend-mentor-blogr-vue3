import { ref } from 'vue'
import { useEventListener } from './event-listener'

export function useMedia(query: any) {
  const canHover = matchMedia('(hover: none)').matches

  const mediaQuery = matchMedia(`${query}`)
  const matches = ref<boolean | string>(mediaQuery.matches)

  useEventListener(mediaQuery, 'change', (event: Event) => {
    if (event !== null && event.target !== null) {
      const target = (event.target as Element).matches
      matches.value = !!target
    }
  })

  return matches
}
