/**
 * Generate blur data URL from a buffer using plaiceholder
 */
export async function generateBlurDataURLFromBuffer(
  buffer: Buffer,
  width: number | null | undefined,
  height: number | null | undefined
): Promise<string | null> {
  try {
    // Add buffer validation
    console.debug('Buffer received, size:', buffer.length);
    console.debug('Buffer first few bytes:', buffer.slice(0, 20).toString('hex'));

    // Use plaiceholder with the processed buffer
    const { getPlaiceholder } = await import('plaiceholder');

    // Generate a correctly proportioned placeholder
    const { base64: originalBase64 } = await getPlaiceholder(buffer, {
      size: 10,
      saturation: 0.8,
      autoOrient: true,
    });
    if (!width || !height) {
      console.warn('Width or height is not defined, cannot generate blur placeholder');
      return null;
    }

    // Create a custom SVG with proper aspect ratio and stronger blur
    const aspectRatio = width / height;
    const svgWidth = 100;
    const svgHeight = Math.round(svgWidth / aspectRatio);

    const svgWithBlur = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${svgWidth} ${svgHeight}'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='8'/>
      </filter>
      <image width='100%' height='100%' x='0' y='0' preserveAspectRatio='xMidYMid slice' 
        style='filter: url(#b);' href='${originalBase64}'/>
    </svg>`;

    return `data:image/svg+xml;base64,${Buffer.from(svgWithBlur).toString('base64')}`;
  } catch (error) {
    console.warn(
      'Error generating blur placeholder:',
      error instanceof Error ? error.message : String(error)
    );
    return '';
  }
}
