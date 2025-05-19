import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class RefundService {
  constructor(private readonly prisma: PrismaService) {}

  async refundable() {
    return await this.prisma.refundable.findMany();
  }

  async getByUser(userId: string) {
    return await this.prisma.refund.findMany({
      where: { userId },
      include: { refundable: true },
    });
  }

  async getByAdmin() {
    return await this.prisma.refund.findMany({
      include: { refundable: true },
    });
  }

  async add(data: any) {
    return await this.prisma.refund.create({ data });
  }

  async change(id: string, data: any) {
    const refund = await this.prisma.refund.findUnique({ where: { id } });
    if (!refund) {
      throw new NotFoundException('Refund not found');
    }
    return await this.prisma.refund.update({ where: { id }, data });
  }
}
