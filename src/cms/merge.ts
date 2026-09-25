export function mergeContent<T>(base: T, override: unknown): T {
  if (override == null) return base;
  if (Array.isArray(base) || Array.isArray(override)) return (override as T) ?? base;
  if (typeof base === 'object' && typeof override === 'object') {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(override as Record<string, unknown>)) {
      const next = (override as Record<string, unknown>)[key];
      out[key] = key in (base as Record<string, unknown>)
        ? mergeContent((base as Record<string, unknown>)[key], next)
        : next;
    }
    return out as T;
  }
  return override as T;
}

export function getAt(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((current, key) => {
    if (current == null || typeof current !== 'object') return undefined;
    return (current as Record<string, unknown>)[key];
  }, obj);
}

export function setAt<T>(obj: T, path: string, value: unknown): T {
  const clone = structuredClone(obj);
  const parts = path.split('.');
  let current: Record<string, unknown> = clone as Record<string, unknown>;
  for (let i = 0; i < parts.length - 1; i += 1) {
    current = current[parts[i]] as Record<string, unknown>;
  }
  current[parts[parts.length - 1]] = value;
  return clone;
}

export function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}
