import { makeAutoObservable } from 'mobx'
import { OrdersApi, Configuration, OrderDto } from '@poizon/api'

interface OrderItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  size: string
  color: string
}

interface Order {
  id: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export class OrderStore {
  orders: OrderDto[] = []
  currentOrder: OrderDto | null = null
  loading = false
  error: string | null = null
  private ordersService: OrdersApi

  constructor() {
    makeAutoObservable(this)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const config = new Configuration({basePath: baseUrl})
    this.ordersService = new OrdersApi(config)
  }

  setOrders(orders: OrderDto[]) {
    this.orders = orders
  }

  setCurrentOrder(order: OrderDto | null) {
    this.currentOrder = order
  }

  setLoading(loading: boolean) {
    this.loading = loading
  }

  setError(error: string | null) {
    this.error = error
  }

  async fetchOrders() {
    try {
      this.setLoading(true)
      const response = await this.ordersService.getUserOrders()
      this.setOrders(response.data)
    } catch (error) {
      this.setError(error instanceof Error ? error.message : 'Failed to fetch orders')
      throw error
    } finally {
      this.setLoading(false)
    }
  }

  async createOrder(deliveryAddress: string, phone: string) {
    try {
      this.setLoading(true)
      const response = await this.ordersService.createOrder({
        deliveryAddress,
        phone
      })
      this.orders.push(response.data)
      this.currentOrder = response.data
      return response.data
    } catch (error) {
      this.setError(error instanceof Error ? error.message : 'Failed to create order')
      throw error
    } finally {
      this.setLoading(false)
    }
  }

  async updateOrderStatus(orderId: string) {
    try {
      this.setLoading(true)
      const response = await this.ordersService.updateOrderStatus(orderId)
      const order = this.orders.find(o => o.id === orderId)
      if (order) {
        Object.assign(order, response.data)
      }
    } catch (error) {
      this.setError(error instanceof Error ? error.message : 'Failed to update order status')
      throw error
    } finally {
      this.setLoading(false)
    }
  }
}

export const orderStore = new OrderStore() 