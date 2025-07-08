import { NextResponse } from 'next/server';
import p from 'payload';

import dotenv from 'dotenv';
dotenv.config({ quiet: true });

import config from '../../../../payload.config';
import { generateBlurDataURLFromBuffer } from '@/lib/payload/utils';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();
    const payload = await p.init({ config });
    // Get media item
    const media = await payload.findByID({
      collection: 'media',
      id,
    });

    if (!media || !media.url) {
      return NextResponse.json({ error: 'Media not found' }, { status: 404 });
    }

    // Fetch the image
    const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${media.url}`;
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    // Generate the blur data URL
    const base64 = await generateBlurDataURLFromBuffer(buffer, media.width, media.height);
    // Update the media item
    await payload.update({
      collection: 'media',
      id,
      data: {
        blurDataURL: base64,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Image processing failed:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
