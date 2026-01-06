import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.DEVTO_USERNAME;

  if (!username) {
    return NextResponse.json(
      { error: "Missing DEVTO_USERNAME" },
      { status: 500 }
    );
  }

  const response = await fetch(
    `https://dev.to/api/articles?username=${encodeURIComponent(username)}`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
