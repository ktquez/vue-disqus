export const getEmitName = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().replace('on-', '')
export const draf = (cb: any) => requestAnimationFrame(() => requestAnimationFrame(cb))
