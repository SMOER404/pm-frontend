"use client"

import Image from "next/image"
import { Button } from "@poizon/ui-kit"

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pb-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Логотип и описание */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="w-56 mb-4">
                            <Image src="/static/images/logo-white.svg" alt="logo" width={0} height={0} className="w-full h-auto" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Ваш надежный партнер в мире качественной обуви и аксессуаров. 
                            Мы предлагаем только оригинальные товары от ведущих брендов.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.27h-1.46c-.55 0-.72-.44-1.71-1.42-.86-.86-1.24-.96-1.45-.96-.31 0-.4.1-.4.66v1.28c0 .47-.14.57-.44.57-1.24 0-2.52-.72-3.38-2.07-1.39-2.11-1.8-3.71-1.8-3.9 0-.21.1-.41.52-.41h1.46c.39 0 .53.19.69.66.92 2.06 2.43 3.84 3.06 3.84.15 0 .22-.07.22-.47v-1.7c-.05-.85-.47-1.12-.47-1.5 0-.17.12-.32.32-.32h2.14c.27 0 .37.13.37.43v2.38c0 .24-.12.35-.12.35z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Навигация */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Навигация</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/catalog" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Каталог
                                </a>
                            </li>
                            <li>
                                <a href="/brands" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Бренды
                                </a>
                            </li>
                            <li>
                                <a href="/new" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Новинки
                                </a>
                            </li>
                            <li>
                                <a href="/sale" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Распродажа
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Поддержка */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/delivery" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Доставка
                                </a>
                            </li>
                            <li>
                                <a href="/returns" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Возврат
                                </a>
                            </li>
                            <li>
                                <a href="/size-guide" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Размерная сетка
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <p className="text-gray-300 text-sm">+7 (999) 123-45-67</p>
                                    <p className="text-gray-400 text-xs">Ежедневно с 9:00 до 21:00</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-gray-300 text-sm">support@poizonmarket.ru</p>
                                    <p className="text-gray-400 text-xs">Ответим в течение часа</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2024 POIZON MARKET. Все права защищены.
                        </div>
                        <div className="flex space-x-6">
                            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Политика конфиденциальности
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Условия использования
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}