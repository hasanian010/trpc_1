import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class WithdrawService {
  constructor(private readonly prisma: PrismaService) {}

  async getByAdmin() {
    return await this.prisma.withdraw.findMany();
  }

  async getBySeller(sellerId: string) {
    return await this.prisma.withdraw.findMany({ where: { sellerId } });
  }

  async getIncome(sellerId: string) {
    // منطق محاسبه درآمد
    return await this.prisma.income.findMany({ where: { sellerId } });
  }

  async getStatics() {
    // منطق آمار برداشت‌ها
    return await this.prisma.withdraw.groupBy({
      by: ['status'],
      _count: { id: true },
    });
  }

  async process(id: string, data: any) {
    const withdraw = await this.prisma.withdraw.findUnique({ where: { id } });
    if (!withdraw) {
      throw new NotFoundException('Withdraw not found');
    }
    return await this.prisma.withdraw.update({ where: { id }, data });
  }

  async release(id: string) {
    const withdraw = await this.prisma.withdraw.findUnique({ where: { id } });
    if (!withdraw) {
      throw new NotFoundException('Withdraw not found');
    }
    return await this.prisma.withdraw.update({ where: { id }, data: { status: 'released' } });
  }

  async confirm(id: string) {
    const withdraw = await this.prisma.withdraw.findUnique({ where: { id } });
    if (!withdraw) {
      throw new NotFoundException('Withdraw not found');
    }
    return await this.prisma.withdraw.update({ where: { id }, data: { status: 'confirmed' } });
  }
}
