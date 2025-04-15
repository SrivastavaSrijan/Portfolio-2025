import { NextResponse } from 'next/server';
import { renderGraphiQL } from '@graphql-yoga/render-graphiql';

export async function GET() {
  const html = renderGraphiQL({
    endpoint: '/api/graphql', // this hits Payload's API route
    title: 'Payload GraphiQL',
  });

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
