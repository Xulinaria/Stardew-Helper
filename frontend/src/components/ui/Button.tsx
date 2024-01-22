export const Button = ({ name, href }: { name: string, href: string }) => (
    <a href={href} className="mb-1 py-2 px-4 rounded-md hover:bg-neutral-200 text-sm">
        {name}
    </a>
)