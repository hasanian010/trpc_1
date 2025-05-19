import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ShippingService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    return await this.prisma.shipping.findMany();
  }

  async getSingle(id: string) {
    const shipping = await this.prisma.shipping.findUnique({ where: { id } });
    if (!shipping) {
      throw new NotFoundException('Shipping not found');
    }
    return shipping;
  }

  async getActive() {
    return await this.prisma.shipping.findMany({ where: { active: true } });
  }

  async add(data: any) {
    return await this.prisma.shipping.create({ data });
  }

  async update(id: string, data: any) {
    const shipping = await this.prisma.shipping.findUnique({ where: { id } });
    if (!shipping) {
      throw new NotFoundException('Shipping not found');
    }
    return await this.prisma.shipping.update({ where: { id }, data });
  }

  async status(id: string, active: boolean) {
    const shipping = await this.prisma.shipping.findUnique({ where: { id } });
    if (!shipping) {
      throw new NotFoundException('Shipping not found');
    }
    return await this.prisma.shipping.update({ where: { id }, data: { active } });
  }

  async delete(id: string) {
    const shipping = await this.prisma.shipping.findUnique({ where: { id } });
    if (!shipping) {
      throw new NotFoundException('Shipping not found');
    }
    return await this.prisma.shipping.delete({ where: { id } });
  }
}
