import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const configuredCode = process.env.PRIVATE_SALE_ACCESS_CODE;

  if (!configuredCode) {
    return NextResponse.json(
      { error: 'Access code is not configured.' },
      { status: 503 },
    );
  }

  let submittedCode = '';

  try {
    const body = await request.json();
    submittedCode = typeof body?.code === 'string' ? body.code.trim() : '';
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (submittedCode !== configuredCode) {
    return NextResponse.json({ error: 'Invalid access code.' }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true });
}
