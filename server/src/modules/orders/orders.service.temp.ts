import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrders() {
    return await this.prisma.order.findMany({
      include: { sellers: true, payment: true, shippingAddress: true, billingAddress: true },
    });
  }

  async getOrder(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { sellers: true, payment: true, shippingAddress: true, billingAddress: true },
    });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  async getOrderByUser(userId: string) {
    return await this.prisma.order.findMany({
      where: { userId },
      include: { sellers: true, payment: true, shippingAddress: true, billingAddress: true },
    });
  }

  async getSingleByUser(id: string, userId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id, userId },
      include: { sellers: true, payment: true, shippingAddress: true, billingAddress: true },
    });
    if (!order) {
      throw new NotFoundException('Order not found for user');
    }
    return order;
  }

  async getOrderBySeller(sellerId: string) {
    return await this.prisma.orderSeller.findMany({
      where: { sellerId },
      include: { order: true, products: true },
    });
  }

  async getSingleBySeller(id: string, sellerId: string) {
    const orderSeller = await this.prisma.orderSeller.findFirst({
      where: { id, sellerId },
      include: { order: true, products: true },
    });
    if (!orderSeller) {
      throw new NotFoundException('Order not found for seller');
    }
    return orderSeller;
  }

  async track(orderId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      select: { id: true, paymentStatus: true, sellers: { select: { status: true } } },
    });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  async add(data: any) {
    // TODO: باید داده‌ها را اعتبارسنجی و منطق افزودن سفارش را پیاده‌سازی کرد
    return await this.prisma.order.create({ data });
  }

  async pay(orderId: string, paymentData: any) {
    const order = await this.prisma.order.findUnique({ where: { id: orderId } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    // TODO: منطق پرداخت و به‌روزرسانی وضعیت سفارش
    return await this.prisma.paymentInfo.create({
      data: {
        ...paymentData,
        orderId,
      },
    });
  }

  async adminStatus(orderSellerId: string, status: string) {
    const orderSeller = await this.prisma.orderSeller.findUnique({ where: { id: orderSellerId } });
    if (!orderSeller) {
      throw new NotFoundException('Order seller not found');
    }
    return await this.prisma.orderSeller.update({
      where: { id: orderSellerId },
      data: { status },
    });
  }

  async cancelByAdmin(orderId: string) {
    const order = await this.prisma.order.findUnique({ where: { id: orderId } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    // TODO: منطق لغو سفارش توسط ادمین
    return await this.prisma.order.update({
      where: { id: orderId },
      data: { paymentStatus: false },
    });
  }

  async cancelByUser(orderId: string, userId: string) {
    const order = await this.prisma.order.findFirst({ where: { id: orderId, userId } });
    if (!order) {
      throw new NotFoundException('Order not found for user');
    }
    // TODO: منطق لغو سفارش توسط کاربر
    return await this.prisma.order.update({
      where: { id: orderId },
      data: { paymentStatus: false },
    });
  }

  async note(orderId: string, note: string) {
    const order = await this.prisma.order.findUnique({ where: { id: orderId } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return await this.prisma.order.update({
      where: { id: orderId },
      data: { note },
    });
  }
}
