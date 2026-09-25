const assets = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg,webp,gif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const bySuffix = new Map<string, string>();
for (const [file, url] of Object.entries(assets)) {
  const marker = '/assets/';
  const index = file.indexOf(marker);
  if (index >= 0) bySuffix.set(file.slice(index + marker.length), url);
}

export function mediaUrl(src?: string | null): string {
  if (!src) return '';
  if (
    src.startsWith('/') ||
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith('blob:')
  ) {
    return src;
  }
  return bySuffix.get(src) || src;
}
