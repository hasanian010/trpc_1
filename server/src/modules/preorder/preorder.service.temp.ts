import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class PreorderService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    return await this.prisma.preorder.findMany();
  }

  async add(data: any) {
    return await this.prisma.preorder.create({ data });
  }

  async update(id: string, data: any) {
    const preorder = await this.prisma.preorder.findUnique({ where: { id } });
    if (!preorder) {
      throw new NotFoundException('Preorder not found');
    }
    return await this.prisma.preorder.update({ where: { id }, data });
  }

  async delete(id: string) {
    const preorder = await this.prisma.preorder.findUnique({ where: { id } });
    if (!preorder) {
      throw new NotFoundException('Preorder not found');
    }
    return await this.prisma.preorder.delete({ where: { id } });
  }
}
