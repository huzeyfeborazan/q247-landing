export const getPixelAvatarUrl = (
    seed: string,
    style: 'pixel-art' | 'pixel-art-neutral' = 'pixel-art',
    options: { size?: number; radius?: number } = {}
  ): string => {
    const base = `https://avatars.dicebear.com/api/${style}/${encodeURIComponent(seed)}.svg`;
    const params = new URLSearchParams();
  
    if (options.size) params.set('size', options.size.toString());
    if (options.radius) params.set('radius', options.radius.toString());
  
    return `${base}?${params.toString()}`;
  };
  