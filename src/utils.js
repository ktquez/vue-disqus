export const allowedPageConfigKeys = ['api_key', 'author_s3', 'category_id', 'identifier', 'integration', 'language', 'remote_auth_s3', 'slug', 'title', 'url']
export const allowedSSOKeys = ['name', 'button', 'icon', 'url', 'logout', 'width', 'height']
export const callbacks = ['afterRender', 'onInit', 'onIdentify', 'beforeComment', 'onNewComment', 'onPaginate', 'onReady', 'preData', 'preInit', 'preReset']

export const getEmitName = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().replace('on-', '')
