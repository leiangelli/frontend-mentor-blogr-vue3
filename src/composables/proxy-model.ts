import { computed, getCurrentInstance, ref } from 'vue'
import { toKebabCase } from './utils/helpers'

// types
import type { Ref } from 'vue'

export function simplifiedProxyModel (
  props: any,
  prop: any
) { 
  const VM = getCurrentInstance()

  return computed({ 
    get: () => props[prop], 
    set: (value) => VM?.emit(`update:${prop}`, value) 
  })
}

export function proxyModel<
  Props extends object,
  Prop extends Extract<keyof Props, string>,
  Inner = Props[Prop],
> (
  props: Props,
  prop: Prop,
  defaultValue?: Props[Prop],
  transformIn: (value?: Props[Prop]) => Inner = (v: any) => v,
  transformOut: (value: Inner) => Props[Prop] = (v: any) => v
) { 
  const VM = getCurrentInstance()
  
  const isDefined = computed(() => {
    return !!(
      typeof props[prop] !== undefined &&
      typeof props[prop] !== null &&
      (VM?.props?.hasOwnProperty(prop) || VM?.props?.hasOwnProperty(toKebabCase(prop)))
    )
  })

  const internal = ref(transformIn(props[prop])) as Ref<Inner>

  return computed({ 
    get: () => {
      if (isDefined.value)
        return transformIn(props[prop])
      else 
        return internal.value
    }, 
    set: (value) => {
      const checking = isDefined.value ? transformIn(props[prop]) : internal.value
      if (checking === value) 
        return
      
      internal.value = value
      VM?.emit(`update:${prop}`, transformOut(value)) 
    }
  })
}
