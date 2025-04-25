import { makeAutoObservable } from 'mobx'
import { OrdersService } from '@poizon/api'

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
  orders: Order[] = []
  currentOrder: Order | null = null
  loading = false
  error = null
  private ordersService: OrdersService

  constructor() {
    makeAutoObservable(this)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    this.ordersService = new OrdersService({BASE: baseUrl})
  }

  setOrders(orders: Order[]) {
    this.orders = orders
  }

  setCurrentOrder(order: Order | null) {
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
      this.setOrders(response)
    } catch (error) {
      this.setError(error instanceof Error ? error.message : 'Failed to fetch orders')
      throw error
    } finally {
      this.setLoading(false)
    }
  }

  async createOrder(items: OrderItem[], total: number) {
    try {
      this.setLoading(true)
      const response = await this.ordersService.createOrder({
        items: items.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
          size: item.size,
          color: item.color
        })),
        total
      })
      this.orders.push(response)
      this.currentOrder = response
      return response
    } catch (error) {
      this.setError(error instanceof Error ? error.message : 'Failed to create order')
      throw error
    } finally {
      this.setLoading(false)
    }
  }

  async updateOrderStatus(orderId: string, status: Order['status']) {
    try {
      this.setLoading(true)
      const response = await this.ordersService.updateOrderStatus({
        id: orderId,
        status
      })
      const order = this.orders.find(o => o.id === orderId)
      if (order) {
        order.status = response.status
        order.updatedAt = response.updatedAt
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