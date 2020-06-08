import { PluginFunction } from 'vue'

export interface VueDisqusOptions {
  shortname?: string
}

export interface VueDisqusInstance {
  shortname: string | null,
  reset: any
}

declare module 'vue/types/vue' {
  interface Vue {
    $disqus: VueDisqusInstance
  }
}

declare class VueDisqus
{
    static install: PluginFunction<VueDisqusOptions>
}

export default VueDisqus