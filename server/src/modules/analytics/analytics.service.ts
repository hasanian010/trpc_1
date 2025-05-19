import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async user(userId: string) {
    // اصلاح نام فیلد totalPrice به total که در مدل Order وجود دارد
    const ordersCount = await this.prisma.order.count({
      where: { userId },
    });
    const totalSpent = await this.prisma.order.aggregate({
      where: { userId },
      _sum: { total: true },
    });
    return {
      ordersCount,
      totalSpent: totalSpent._sum?.total || 0,
    };
  }
}
