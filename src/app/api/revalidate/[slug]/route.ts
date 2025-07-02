import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { revalidateComponent } from '@/lib/actions/revalidation';
import { ServerActionComponents } from '@/lib/config/server';

// Security check for revalidation requests
function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const secret = process.env.REVALIDATE_SECRET;

  // In development, allow all requests if no secret is set
  if (process.env.NODE_ENV === 'development' && !secret) {
    return true;
  }

  // In production, require secret
  if (!secret || !authHeader) {
    return false;
  }

  const token = authHeader.replace('Bearer ', '');
  return token === secret;
}

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    // Check authorization
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = params;

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Check if the slug is a valid server action component
    const validTags = Object.values(ServerActionComponents);
    if (!validTags.includes(slug as ServerActionComponents)) {
      return NextResponse.json(
        {
          error: 'Invalid component tag',
          availableTags: validTags,
        },
        { status: 400 }
      );
    }

    // Execute the revalidation
    const result = await revalidateComponent(slug as ServerActionComponents);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to revalidate',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
