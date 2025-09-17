"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@poizon/ui-kit"
import { Menu, X, Search, ChevronRight } from "lucide-react"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { 
            href: "/", 
            label: "Обувь",
            subItems: [
                { href: "/", label: "Кроссовки" },
                { href: "/", label: "Кеды" },
                { href: "/", label: "Ботинки" },
                { href: "/", label: "Сандалии" }
            ]
        },
        { 
            href: "/", 
            label: "Одежда",
            subItems: [
                { href: "/", label: "Футболки" },
                { href: "/", label: "Джинсы" },
                { href: "/", label: "Куртки" },
                { href: "/", label: "Шорты" }
            ]
        },
        { 
            href: "/", 
            label: "Аксессуары",
            subItems: [
                { href: "/", label: "Сумки" },
                { href: "/", label: "Рюкзаки" },
                { href: "/", label: "Часы" },
                { href: "/", label: "Украшения" }
            ]
        },
        { href: "/", label: "Коллекции" },
        { href: "/", label: "Sale" },
        { href: "/", label: "Бренды" },
        { href: "/", label: "Информация" },
    ]

    const iconItems = [
        { href: "/", src: "/static/images/like-icon.svg", alt: "like" },
        { href: "/", src: "/static/images/cart.svg", alt: "cart" },
        { href: "/", src: "/static/images/user-icon.svg", alt: "user" },
    ]

    return (
        <header className="bg-white shadow-sm relative">
            <div className="container mx-auto px-4">
                {/* Desktop Header */}
                <div className="hidden md:flex justify-between items-center py-4">
                    <div className="w-56">
                        <Image src="/static/images/logo-black.svg" alt="logo" width={0} height={0} className="w-full h-auto" />
                    </div>
                    <nav className="flex gap-6 uppercase text-sm font-medium">
                        {menuItems.map((item) => (
                            <Link key={item.label} href={item.href} className="hover:text-[#AFEB0F] transition-colors">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex gap-4 items-center">
                        {iconItems.map((item) => (
                            <Link key={item.alt} href={item.href}>
                                <Image src={item.src} alt={item.alt} width={20} height={20} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden flex justify-between items-center py-4">
                    <div className="w-40">
                        <Image src="/static/images/logo-black.svg" alt="logo" width={0} height={0} className="w-full h-auto" />
                    </div>
                    
                    <div className="flex items-center gap-3">
                        {/* Search Button */}
                        <Button variant="outlined" size="icon-sm" className="p-2">
                            <Search size={20} />
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button 
                            variant="outlined" 
                            size="icon-sm" 
                            className="p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
                        {/* Header with close button */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <div className="w-40">
                                <Image src="/static/images/logo-black.svg" alt="logo" width={0} height={0} className="w-full h-auto" />
                            </div>
                            <div className="flex items-center gap-3">
                                {/* Search Button */}
                                <Button variant="outlined" size="icon-sm" className="p-2">
                                    <Search size={20} />
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    size="icon-sm" 
                                    className="p-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X size={20} />
                                </Button>
                            </div>
                        </div>
                        
                        <nav className="flex-1 overflow-y-auto p-4">
                            {menuItems.map((item) => (
                                <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                                    {item.subItems ? (
                                        <div className="py-3">
                                            <div className="flex items-center justify-between text-lg font-medium">
                                                <Link 
                                                    href={item.href} 
                                                    className="hover:text-[#AFEB0F] transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                                <ChevronRight size={16} className="text-gray-400" />
                                            </div>
                                            <div className="mt-2 ml-4 space-y-2">
                                                {item.subItems.map((subItem) => (
                                                    <Link 
                                                        key={subItem.label} 
                                                        href={subItem.href} 
                                                        className="block text-sm text-gray-600 hover:text-[#AFEB0F] transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link 
                                            href={item.href} 
                                            className="block py-3 text-lg font-medium hover:text-[#AFEB0F] transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}