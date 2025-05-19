import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class FlashService {
  constructor(private readonly prisma: PrismaService) {}

  async gets() {
    return await this.prisma.flash.findMany();
  }

  async getRunning() {
    const now = new Date();
    return await this.prisma.flash.findMany({
      where: {
        start: { lte: now },
        expires: { gte: now },
      },
    });
  }

  async get(id: string) {
    const flash = await this.prisma.flash.findUnique({ where: { id } });
    if (!flash) {
      throw new NotFoundException('Flash not found');
    }
    return flash;
  }

  async add(data: any) {
    return await this.prisma.flash.create({ data });
  }

  async update(id: string, data: any) {
    const flash = await this.prisma.flash.findUnique({ where: { id } });
    if (!flash) {
      throw new NotFoundException('Flash not found');
    }
    return await this.prisma.flash.update({ where: { id }, data });
  }

  async delete(id: string) {
    const flash = await this.prisma.flash.findUnique({ where: { id } });
    if (!flash) {
      throw new NotFoundException('Flash not found');
    }
    return await this.prisma.flash.delete({ where: { id } });
  }
}
