"use client"

import ButtonDemo from "../demos/button-demo"
import InputDemo from "../demos/input-demo"
import CardDemo from "../demos/card-demo"
import SkeletonDemo from "../demos/skeleton-demo"
import MenuDemo from "../demos/menu-demo"
import ListDemo from "../demos/list-demo"
import BadgeDemo from "../demos/badge-demo"
import TypographyDemo from "../demos/typography-demo"
import PaperDemo from "../demos/paper-demo"
import DrawerDemo from "../demos/drawer-demo"
import LayoutDemo from "../demos/layout-demo"
import ResponsiveTest from "../demos/responsive-test"
import { useState } from "react"

export default function UiKitPage() {
  const [activeTab, setActiveTab] = useState<
    | "buttons"
    | "inputs"
    | "cards"
    | "skeleton"
    | "menu"
    | "list"
    | "badge"
    | "typography"
    | "paper"
    | "drawer"
    | "layout"
    | "responsive"
  >("buttons")

  const tabs = [
    { key: "buttons", label: "Кнопки" },
    { key: "inputs", label: "Инпуты" },
    { key: "cards", label: "Карточки" },
    { key: "skeleton", label: "Скелетон" },
    { key: "menu", label: "Меню" },
    { key: "list", label: "Списки" },
    { key: "badge", label: "Бейджи" },
    { key: "typography", label: "Типографика" },
    { key: "paper", label: "Бумага" },
    { key: "drawer", label: "Drawer" },
    { key: "layout", label: "Позиционирование" },
    { key: "responsive", label: "Адаптивность" },
  ] as const

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигация - ИСПРАВЛЕН Z-INDEX */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? "border-[#AFEB0F] text-[#AFEB0F]"
                    : "border-transparent text-[#292D30] hover:text-[#AFEB0F] hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Контент */}
      {activeTab === "buttons" && <ButtonDemo />}
      {activeTab === "inputs" && <InputDemo />}
      {activeTab === "cards" && <CardDemo />}
      {activeTab === "skeleton" && <SkeletonDemo />}
      {activeTab === "menu" && <MenuDemo />}
      {activeTab === "list" && <ListDemo />}
      {activeTab === "badge" && <BadgeDemo />}
      {activeTab === "typography" && <TypographyDemo />}
      {activeTab === "paper" && <PaperDemo />}
      {activeTab === "drawer" && <DrawerDemo />}
      {activeTab === "layout" && <LayoutDemo />}
      {activeTab === "responsive" && <ResponsiveTest />}
    </div>
  )
}
