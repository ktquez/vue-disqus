import { CALLBACKS, PAGE_CONFIG_KEYS, SSO_KEYS } from './constants';

type SSOKeys = typeof SSO_KEYS
type PageConfigKeys = typeof PAGE_CONFIG_KEYS
interface DisqusConfigCallbacks {
 [key: string]: any;
  preData?: (...args: any[]) => any;
  preInit?: (...args: any[]) => any;
  onInit?: (...args: any[]) => any;
  onReady?: (...args: any[]) => any;
  afterRender?: (...args: any[]) => any;
  preReset?: (...args: any[]) => any;
  onIdentify?: (...args: any[]) => any;
  beforeComment?: (...args: any[]) => any;
  onNewComment?: (...args: any[]) => any;
  onPaginate?: (...args: any[]) => any;
};
export interface VueDisqusOptions {
  shortname?: string;
};

export interface VueDisqusInstance extends VueDisqusOptions {
  reset: any;
};

export interface DisqusConfig {
  url?: string;
  identifier?: string;
  title?: string;
  categoryID?: string;
  language?: string;
  sso?: SSOKeys;
  page?: PageConfigKeys;
  callbacks: DisqusConfigCallbacks;
};

declare global {
    interface Window {
        DISQUS: any;
        location: Location
    }
}
