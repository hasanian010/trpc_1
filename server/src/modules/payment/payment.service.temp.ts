import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async success(orderId: string, paymentData: any) {
    const payment = await this.prisma.paymentInfo.findUnique({ where: { orderId } });
    if (!payment) {
      return await this.prisma.paymentInfo.create({
        data: {
          ...paymentData,
          orderId,
        },
      });
    }
    return await this.prisma.paymentInfo.update({
      where: { orderId },
      data: {
        ...paymentData,
      },
    });
  }

  async cancel(orderId: string) {
    const payment = await this.prisma.paymentInfo.findUnique({ where: { orderId } });
    if (!payment) {
      throw new NotFoundException('Payment info not found');
    }
    // منطق لغو پرداخت
    return await this.prisma.paymentInfo.update({
      where: { orderId },
      data: { paymentMethod: null, paymentId: null, provider: null },
    });
  }

  async failed(orderId: string) {
    const payment = await this.prisma.paymentInfo.findUnique({ where: { orderId } });
    if (!payment) {
      throw new NotFoundException('Payment info not found');
    }
    // منطق پرداخت ناموفق
    return await this.prisma.paymentInfo.update({
      where: { orderId },
      data: { paymentMethod: null, paymentId: null, provider: null },
    });
  }
}
