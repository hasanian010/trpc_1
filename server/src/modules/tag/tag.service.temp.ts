    import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  async getTags() {
    return await this.prisma.tag.findMany();
  }

  async getTag(id: string) {
    const tag = await this.prisma.tag.findUnique({ where: { id } });
    if (!tag) {
      throw new NotFoundException('Tag not found');
    }
    return tag;
  }

  async addTag(data: any) {
    return await this.prisma.tag.create({ data });
  }

  async update(id: string, data: any) {
    const tag = await this.prisma.tag.findUnique({ where: { id } });
    if (!tag) {
      throw new NotFoundException('Tag not found');
    }
    return await this.prisma.tag.update({ where: { id }, data });
  }

  async delete(id: string) {
    const tag = await this.prisma.tag.findUnique({ where: { id } });
    if (!tag) {
      throw new NotFoundException('Tag not found');
    }
    return await this.prisma.tag.delete({ where: { id } });
  }
}
