export function ProductTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 text-xs border rounded-md bg-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
