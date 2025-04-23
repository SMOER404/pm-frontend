import { makeAutoObservable } from 'mobx'

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

  constructor() {
    makeAutoObservable(this)
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

  async createOrder(items: OrderItem[], total: number) {
    try {
      this.setLoading(true)
      // API call to create order
      const order = {
        id: Date.now().toString(),
        items,
        total,
        status: 'pending' as const,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      this.orders.push(order)
      this.currentOrder = order
      return order
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
      // API call to update order status
      const order = this.orders.find(o => o.id === orderId)
      if (order) {
        order.status = status
        order.updatedAt = new Date().toISOString()
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