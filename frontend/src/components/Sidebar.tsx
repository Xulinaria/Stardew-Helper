import { Button } from './ui/Button'

export default function Sidebar() {
  const SidebarNavigation = [
    { name: 'Farmer', href: '/' },
    { name: 'Bundles', href: '/bundles' },
    { name: 'Cooking', href: '/cooking' },
    { name: 'Crafting', href: '/crafting' },
    { name: 'Fishing', href: '/fishing' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Museum & Artifacts', href: '/museum' },
    { name: 'search', href: '/search' },
  ]

  return (
    <div className="fixed flex flex-col min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] w-72 px-6 py-4 border-r border-neutral-200 dark:border-neutral-600">
      {SidebarNavigation.map((i) => (
        <Button name={i.name} href={i.href} key={i.name} />
      ))}
    </div>
  )
}
