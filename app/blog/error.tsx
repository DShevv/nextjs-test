"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return <h1>O0ps!!! {error.message}</h1>;
}
