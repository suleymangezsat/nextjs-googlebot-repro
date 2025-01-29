import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu"

export default function Navigation() {
  return (
    <NavigationMenu className="relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <NavigationMenuList className="flex justify-between h-16">
          <NavigationMenuItem>
            <Link href="/" className="text-gray-900 hover:text-gray-700 px-3 py-2">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" className="text-gray-900 hover:text-gray-700 px-3 py-2">
              About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/products" className="text-gray-900 hover:text-gray-700 px-3 py-2">
              Products
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 px-3 py-2">
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  )
}