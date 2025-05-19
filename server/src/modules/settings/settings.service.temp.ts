import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    const settings = await this.prisma.settings.findFirst();
    if (!settings) {
      throw new NotFoundException('Settings not found');
    }
    return settings;
  }

  async site() {
    const settings = await this.prisma.settings.findFirst();
    if (!settings) {
      throw new NotFoundException('Settings not found');
    }
    // منطق خاص سایت را اینجا اضافه کنید
    return settings;
  }
}
