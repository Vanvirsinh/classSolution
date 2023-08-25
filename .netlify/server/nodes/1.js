

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bddafe88.js","_app/immutable/chunks/index.534476f4.js","_app/immutable/chunks/singletons.695dd013.js"];
export const stylesheets = [];
export const fonts = [];
