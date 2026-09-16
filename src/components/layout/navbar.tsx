"use client";

import Link from "next/link";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { label: "Guitars", href: "/shop?category=guitars" },
  { label: "Keyboards & Pianos", href: "/shop?category=keyboards" },
  { label: "Drums & Percussion", href: "/shop?category=drums" },
  { label: "DJ Equipment", href: "/shop?category=dj" },
  { label: "Studio & Recording", href: "/shop?category=studio" },
  { label: "Microphones", href: "/shop?category=microphones" },
  { label: "Accessories", href: "/shop?category=accessories" },
];

const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "Deals", href: "/shop?deal=true" },
];

export function Navbar() {
  return (
    <>
      {/* Announcement bar */}
      <div className="hidden bg-primary text-primary-foreground sm:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-center px-4 text-xs font-medium">
          Free delivery on selected orders • New gear. Better sound.
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:gap-6 lg:px-8">
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[300px] p-0 sm:w-[350px]"
              >
                <SheetHeader className="border-b px-6 py-5">
                  <SheetTitle className="text-left text-xl">
                    Sound<span className="text-primary">Cart</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col px-4 py-5">
                  <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Navigation
                  </p>

                  <Link
                    href="/shop"
                    className="rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    Shop All
                  </Link>

                  <Link
                    href="/shop?deal=true"
                    className="rounded-lg px-3 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    Deals
                  </Link>

                  <div className="my-4 border-t" />

                  <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Categories
                  </p>

                  <div className="flex flex-col">
                    {categories.map((category) => (
                      <Link
                        key={category.label}
                        href={category.href}
                        className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 text-xl font-bold tracking-tight sm:text-2xl"
          >
            Sound<span className="text-primary">Cart</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-5 md:flex">
            <Link
              href="/shop"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Shop
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium outline-none transition-colors hover:text-primary">
                  Categories
                  <ChevronDown className="size-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="w-60"
              >
                {categories.map((category) => (
                  <DropdownMenuItem key={category.label} asChild>
                    <Link href={category.href}>
                      {category.label}
                    </Link>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link
                    href="/shop"
                    className="font-medium text-primary"
                  >
                    View all products
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/shop?deal=true"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Deals
            </Link>
          </nav>

          {/* Search */}
          <div className="ml-auto hidden max-w-xl flex-1 lg:block">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <input
                type="search"
                placeholder="Search guitars, keyboards, DJ gear..."
                className="h-10 w-full rounded-full border bg-muted/40 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hidden sm:inline-flex"
              asChild
            >
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="size-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              asChild
            >
              <Link href="/cart" aria-label="Shopping cart">
                <ShoppingCart className="size-5" />

                {/* Replace 0 with Zustand cart count later */}
                <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                  0
                </span>

                <span className="sr-only">Shopping cart</span>
              </Link>
            </Button>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:inline-flex"
                  aria-label="Account menu"
                >
                  <User className="size-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/orders">My Orders</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link href="/login">Sign In</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile search */}
        <div className="border-t px-4 py-3 lg:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <input
              type="search"
              placeholder="Search instruments & gear..."
              className="h-10 w-full rounded-full border bg-muted/40 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>
      </header>
    </>
  );
}