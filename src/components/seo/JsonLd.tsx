type Props = { data: Record<string, unknown> };

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // The schema is generated server-side from typed helpers — safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
