import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AttributesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAttributes() {
    return await this.prisma.attribute.findMany({
      include: { values: true },
    });
  }

  async getAttribute(id: string) {
    const attribute = await this.prisma.attribute.findUnique({
      where: { id },
      include: { values: true },
    });
    if (!attribute) {
      throw new NotFoundException('Attribute not found');
    }
    return attribute;
  }

  async add(data: any) {
    return await this.prisma.attribute.create({
      data,
    });
  }

  async update(id: string, data: any) {
    const attribute = await this.prisma.attribute.findUnique({ where: { id } });
    if (!attribute) {
      throw new NotFoundException('Attribute not found');
    }
    return await this.prisma.attribute.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    const attribute = await this.prisma.attribute.findUnique({ where: { id } });
    if (!attribute) {
      throw new NotFoundException('Attribute not found');
    }
    return await this.prisma.attribute.delete({ where: { id } });
  }
}
