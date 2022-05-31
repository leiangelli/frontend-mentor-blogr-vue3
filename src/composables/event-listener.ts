import { onMounted, onUnmounted, onBeforeUnmount, unref } from 'vue'

export function useEventListener (
  target: any,
  event: any,
  handler: (e: Event) => any
) {
  onMounted(() => {
    return target.addEventListener(event, handler)
  })
  onUnmounted(() => target.removeEventListener(event, handler))

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler)
  })
} 