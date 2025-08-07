"use client"

import CustomList, { ListItem } from "./custom-list"
import CustomBadge from "./custom-badge"
import CustomButton from "./custom-button"
import {
  User,
  Mail,
  Phone,
  Settings,
  Bell,
  Star,
  Heart,
  Download,
  Edit,
  Trash2,
  ChevronRight,
  Home,
  Search,
  Bookmark,
} from "lucide-react"

export default function ListDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#292D30] mb-4">Списки со скосами</h1>
          <p className="text-gray-600">Структурированное отображение данных</p>
        </div>

        {/* Основные варианты */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Основные варианты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Outlined</h3>
              <CustomList variant="outlined">
                <ListItem>Первый элемент</ListItem>
                <ListItem>Второй элемент</ListItem>
                <ListItem>Третий элемент</ListItem>
              </CustomList>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Filled</h3>
              <CustomList variant="filled">
                <ListItem>Первый элемент</ListItem>
                <ListItem>Второй элемент</ListItem>
                <ListItem>Третий элемент</ListItem>
              </CustomList>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Ghost</h3>
              <CustomList variant="ghost">
                <ListItem>Первый элемент</ListItem>
                <ListItem>Второй элемент</ListItem>
                <ListItem>Третий элемент</ListItem>
              </CustomList>
            </div>
          </div>
        </section>

        {/* С иконками */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">С иконками</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomList>
              <ListItem leftIcon={<User className="w-5 h-5" />}>Профиль пользователя</ListItem>
              <ListItem leftIcon={<Mail className="w-5 h-5" />}>Электронная почта</ListItem>
              <ListItem leftIcon={<Phone className="w-5 h-5" />}>Номер телефона</ListItem>
              <ListItem leftIcon={<Settings className="w-5 h-5" />}>Настройки</ListItem>
            </CustomList>

            <CustomList>
              <ListItem leftIcon={<Bell className="w-5 h-5" />} rightIcon={<ChevronRight className="w-4 h-4" />}>
                Уведомления
              </ListItem>
              <ListItem
                leftIcon={<Star className="w-5 h-5" />}
                rightIcon={
                  <CustomBadge badgeContent={5} size="sm">
                    <span></span>
                  </CustomBadge>
                }
              >
                Избранное
              </ListItem>
              <ListItem
                leftIcon={<Heart className="w-5 h-5" />}
                rightIcon={
                  <CustomBadge variant="dot" color="error">
                    <span></span>
                  </CustomBadge>
                }
              >
                Понравившиеся
              </ListItem>
              <ListItem leftIcon={<Download className="w-5 h-5" />} rightIcon={<ChevronRight className="w-4 h-4" />}>
                Загрузки
              </ListItem>
            </CustomList>
          </div>
        </section>

        {/* Со вторичным текстом */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Со вторичным текстом</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomList>
              <ListItem
                leftIcon={<User className="w-5 h-5" />}
                secondaryText="Управление профилем и персональными данными"
              >
                Профиль
              </ListItem>
              <ListItem leftIcon={<Bell className="w-5 h-5" />} secondaryText="Настройка уведомлений и оповещений">
                Уведомления
              </ListItem>
              <ListItem leftIcon={<Settings className="w-5 h-5" />} secondaryText="Общие настройки приложения">
                Настройки
              </ListItem>
            </CustomList>

            <CustomList>
              <ListItem
                leftIcon={<Mail className="w-5 h-5" />}
                secondaryText="john@example.com"
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                Джон Доу
              </ListItem>
              <ListItem
                leftIcon={<Mail className="w-5 h-5" />}
                secondaryText="jane@example.com"
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                Джейн Смит
              </ListItem>
              <ListItem
                leftIcon={<Mail className="w-5 h-5" />}
                secondaryText="bob@example.com"
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                Боб Джонсон
              </ListItem>
            </CustomList>
          </div>
        </section>

        {/* Интерактивные списки */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Интерактивные списки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">С выбором</h3>
              <CustomList>
                <ListItem leftIcon={<Home className="w-5 h-5" />} selected onClick={() => console.log("Home clicked")}>
                  Главная
                </ListItem>
                <ListItem leftIcon={<Search className="w-5 h-5" />} onClick={() => console.log("Search clicked")}>
                  Поиск
                </ListItem>
                <ListItem leftIcon={<Bookmark className="w-5 h-5" />} onClick={() => console.log("Bookmarks clicked")}>
                  Закладки
                </ListItem>
                <ListItem
                  leftIcon={<Settings className="w-5 h-5" />}
                  disabled
                  onClick={() => console.log("Settings clicked")}
                >
                  Настройки (отключено)
                </ListItem>
              </CustomList>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">С действиями</h3>
              <CustomList>
                <ListItem
                  leftIcon={<User className="w-5 h-5" />}
                  rightIcon={
                    <div className="flex gap-1">
                      <CustomButton
                        variant="ghost"
                        size="sm"
                        icon={<Edit className="w-4 h-4" />}
                        iconOnly
                        onClick={() => console.log("Edit")}
                      >
                        Редактировать
                      </CustomButton>
                      <CustomButton
                        variant="ghost"
                        size="sm"
                        icon={<Trash2 className="w-4 h-4" />}
                        iconOnly
                        onClick={() => console.log("Delete")}
                      >
                        Удалить
                      </CustomButton>
                    </div>
                  }
                  secondaryText="Администратор"
                >
                  Иван Петров
                </ListItem>
                <ListItem
                  leftIcon={<User className="w-5 h-5" />}
                  rightIcon={
                    <div className="flex gap-1">
                      <CustomButton
                        variant="ghost"
                        size="sm"
                        icon={<Edit className="w-4 h-4" />}
                        iconOnly
                        onClick={() => console.log("Edit")}
                      >
                        Редактировать
                      </CustomButton>
                      <CustomButton
                        variant="ghost"
                        size="sm"
                        icon={<Trash2 className="w-4 h-4" />}
                        iconOnly
                        onClick={() => console.log("Delete")}
                      >
                        Удалить
                      </CustomButton>
                    </div>
                  }
                  secondaryText="Пользователь"
                >
                  Анна Сидорова
                </ListItem>
              </CustomList>
            </div>
          </div>
        </section>

        {/* Размеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Размеры</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Small</h3>
              <CustomList size="sm">
                <ListItem leftIcon={<Star className="w-4 h-4" />}>Маленький список</ListItem>
                <ListItem leftIcon={<Heart className="w-4 h-4" />}>Компактный элемент</ListItem>
              </CustomList>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Medium</h3>
              <CustomList size="md">
                <ListItem leftIcon={<Star className="w-5 h-5" />}>Средний список</ListItem>
                <ListItem leftIcon={<Heart className="w-5 h-5" />}>Стандартный элемент</ListItem>
              </CustomList>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Large</h3>
              <CustomList size="lg">
                <ListItem leftIcon={<Star className="w-6 h-6" />}>Большой список</ListItem>
                <ListItem leftIcon={<Heart className="w-6 h-6" />}>Просторный элемент</ListItem>
              </CustomList>
            </div>
          </div>
        </section>

        {/* Плотный список */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Плотный список</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Обычный</h3>
              <CustomList>
                <ListItem>Элемент 1</ListItem>
                <ListItem>Элемент 2</ListItem>
                <ListItem>Элемент 3</ListItem>
                <ListItem>Элемент 4</ListItem>
                <ListItem>Элемент 5</ListItem>
              </CustomList>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#292D30]">Плотный</h3>
              <CustomList dense>
                <ListItem>Элемент 1</ListItem>
                <ListItem>Элемент 2</ListItem>
                <ListItem>Элемент 3</ListItem>
                <ListItem>Элемент 4</ListItem>
                <ListItem>Элемент 5</ListItem>
              </CustomList>
            </div>
          </div>
        </section>

        {/* С разделителями */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">С разделителями</h2>
          <CustomList>
            <ListItem leftIcon={<User className="w-5 h-5" />}>Профиль</ListItem>
            <ListItem leftIcon={<Settings className="w-5 h-5" />}>Настройки</ListItem>
            <ListItem divider />
            <ListItem leftIcon={<Bell className="w-5 h-5" />}>Уведомления</ListItem>
            <ListItem leftIcon={<Star className="w-5 h-5" />}>Избранное</ListItem>
            <ListItem divider />
            <ListItem leftIcon={<Download className="w-5 h-5" />}>Загрузки</ListItem>
          </CustomList>
        </section>

        {/* Адаптивные примеры */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Адаптивные списки</h2>

          {/* Мобильный список */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Мобильный список</h3>
            <div className="max-w-sm mx-auto">
              <CustomList size="sm" dense>
                <ListItem
                  leftIcon={<User className="w-4 h-4" />}
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                  onClick={() => console.log("Profile")}
                >
                  Профиль
                </ListItem>
                <ListItem
                  leftIcon={<Bell className="w-4 h-4" />}
                  rightIcon={
                    <CustomBadge badgeContent={3} size="sm">
                      <span></span>
                    </CustomBadge>
                  }
                  onClick={() => console.log("Notifications")}
                >
                  Уведомления
                </ListItem>
                <ListItem
                  leftIcon={<Star className="w-4 h-4" />}
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                  onClick={() => console.log("Favorites")}
                >
                  Избранное
                </ListItem>
                <ListItem
                  leftIcon={<Settings className="w-4 h-4" />}
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                  onClick={() => console.log("Settings")}
                >
                  Настройки
                </ListItem>
              </CustomList>
            </div>
          </div>

          {/* Планшетный список */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Планшетный список</h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <CustomList>
                  <ListItem leftIcon={<User className="w-5 h-5" />} secondaryText="Личные данные">
                    Профиль
                  </ListItem>
                  <ListItem leftIcon={<Bell className="w-5 h-5" />} secondaryText="Уведомления и оповещения">
                    Уведомления
                  </ListItem>
                  <ListItem leftIcon={<Star className="w-5 h-5" />} secondaryText="Сохраненные элементы">
                    Избранное
                  </ListItem>
                </CustomList>

                <CustomList>
                  <ListItem leftIcon={<Settings className="w-5 h-5" />} secondaryText="Общие настройки">
                    Настройки
                  </ListItem>
                  <ListItem leftIcon={<Download className="w-5 h-5" />} secondaryText="Загруженные файлы">
                    Загрузки
                  </ListItem>
                  <ListItem leftIcon={<Heart className="w-5 h-5" />} secondaryText="Понравившиеся записи">
                    Лайки
                  </ListItem>
                </CustomList>
              </div>
            </div>
          </div>

          {/* Десктопный список */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#292D30]">Десктопный список</h3>
            <CustomList size="lg">
              <ListItem
                leftIcon={<User className="w-6 h-6" />}
                rightIcon={
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">Последний вход: сегодня</span>
                    <CustomButton variant="outlined" size="sm">
                      Редактировать
                    </CustomButton>
                  </div>
                }
                secondaryText="Управление профилем, персональными данными и настройками приватности"
              >
                Профиль пользователя
              </ListItem>
              <ListItem
                leftIcon={<Bell className="w-6 h-6" />}
                rightIcon={
                  <div className="flex items-center gap-4">
                    <CustomBadge badgeContent={12} color="error">
                      <span></span>
                    </CustomBadge>
                    <CustomButton variant="outlined" size="sm">
                      Настроить
                    </CustomButton>
                  </div>
                }
                secondaryText="Настройка уведомлений, оповещений и способов доставки сообщений"
              >
                Уведомления и оповещения
              </ListItem>
              <ListItem
                leftIcon={<Star className="w-6 h-6" />}
                rightIcon={
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">47 элементов</span>
                    <CustomButton variant="outlined" size="sm">
                      Просмотреть
                    </CustomButton>
                  </div>
                }
                secondaryText="Сохраненные элементы, закладки и избранные материалы"
              >
                Избранное и закладки
              </ListItem>
            </CustomList>
          </div>
        </section>

        {/* Кастомные цвета */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Кастомные цвета</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CustomList borderColor="#AFEB0F" backgroundColor="#AFEB0F" className="bg-opacity-10">
              <ListItem leftIcon={<Star className="w-5 h-5" />}>Брендовый список</ListItem>
              <ListItem leftIcon={<Heart className="w-5 h-5" />}>Элемент списка</ListItem>
            </CustomList>

            <CustomList borderColor="#ef4444" backgroundColor="#fef2f2">
              <ListItem leftIcon={<Bell className="w-5 h-5" />}>Список ошибок</ListItem>
              <ListItem leftIcon={<Settings className="w-5 h-5" />}>Критические настройки</ListItem>
            </CustomList>

            <CustomList borderColor="#10b981" backgroundColor="#f0fdf4">
              <ListItem leftIcon={<Download className="w-5 h-5" />}>Успешные операции</ListItem>
              <ListItem leftIcon={<User className="w-5 h-5" />}>Подтвержденные пользователи</ListItem>
            </CustomList>
          </div>
        </section>

        {/* Документация API */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#292D30]">Документация API</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">CustomList Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">variant</code>
                  <span className="ml-2 text-gray-600">"outlined" | "filled" | "ghost"</span>
                  <p className="text-gray-500 mt-1">Стиль списка. По умолчанию "outlined"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">size</code>
                  <span className="ml-2 text-gray-600">"sm" | "md" | "lg"</span>
                  <p className="text-gray-500 mt-1">Размер скосов. По умолчанию "md"</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">dense</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Плотное расположение элементов</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">borderColor</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Кастомный цвет рамки (1px)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4 text-[#292D30]">ListItem Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">onClick</code>
                  <span className="ml-2 text-gray-600">() =&gt; void</span>
                  <p className="text-gray-500 mt-1">Обработчик клика</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">selected</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Выбранное состояние</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">leftIcon</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Иконка слева</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">rightIcon</code>
                  <span className="ml-2 text-gray-600">React.ReactNode</span>
                  <p className="text-gray-500 mt-1">Иконка справа</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">secondaryText</code>
                  <span className="ml-2 text-gray-600">string</span>
                  <p className="text-gray-500 mt-1">Дополнительный текст</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-[#292D30]">divider</code>
                  <span className="ml-2 text-gray-600">boolean</span>
                  <p className="text-gray-500 mt-1">Разделитель</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
