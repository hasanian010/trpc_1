import { Injectable, UnauthorizedException, BadRequestException, NotFoundException } from '@nestjs/common';
import { SignupDto, LoginDto, VerifyPhoneDto } from './dto/auth.dto';
import { PrismaService } from '@/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(data: unknown) {
    const parsed = SignupDto.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException('Invalid signup data');
    }
    const signupData = parsed.data;

    const existingUser = await this.prisma.user.findUnique({
      where: { phone: signupData.phone },
    });
    if (existingUser) {
      throw new BadRequestException('User with this phone already exists');
    }

    const hashedPassword = signupData.password ? await bcrypt.hash(signupData.password, 10) : null;

    const user = await this.prisma.user.create({
      data: {
        phone: signupData.phone,
        name: signupData.name,
        email: signupData.email,
        isVerified: false,
        role: 'USER',
      },
    });

    // TODO: Save hashedPassword in a secure way

    return { message: 'User signed up successfully', user };
  }

  async login(data: unknown) {
    const parsed = LoginDto.safeParse(data);
    if (!parsed.success) {
      throw new UnauthorizedException('Invalid login data');
    }
    const loginData = parsed.data;

    const user = await this.prisma.user.findUnique({
      where: { phone: loginData.phone },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // TODO: Retrieve hashedPassword securely
    const hashedPassword = null;
    if (!hashedPassword) {
      throw new UnauthorizedException('Password not set');
    }
    const passwordValid = await bcrypt.compare(loginData.password, hashedPassword);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = jwt.sign(
      { userId: user.id, phone: user.phone, role: user.role },
      process.env.JWT_SECRET || 'default_jwt_secret',
      { expiresIn: 86400 },
    );

    return { message: 'User logged in successfully', token };
  }

  async verifyPhone(data: unknown) {
    const parsed = VerifyPhoneDto.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException('Invalid verification data');
    }
    const verifyData = parsed.data;

    const user = await this.prisma.user.updateMany({
      where: { phone: verifyData.phone },
      data: { isVerified: true },
    });

    if (user.count === 0) {
      throw new NotFoundException('User not found');
    }

    return { message: 'Phone verified successfully', phone: verifyData.phone };
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getAdmins() {
    return this.prisma.user.findMany({ where: { role: 'ADMIN' } });
  }

  async addAdmin(data: unknown) {
    // Validate data (expect phone, name, email, password)
    if (!data || typeof data !== 'object') {
      throw new BadRequestException('Invalid data');
    }
    const { phone, name, email, password } = data as any;
    if (!phone || !password) {
      throw new BadRequestException('Phone and password are required');
    }

    const existingUser = await this.prisma.user.findUnique({ where: { phone } });
    if (existingUser) {
      throw new BadRequestException('User with this phone already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        phone,
        name,
        email,
        isVerified: true,
        role: 'ADMIN',
        // TODO: Save hashedPassword securely
      },
    });

    return { message: 'Admin user created successfully', user };
  }

  async resend(phone: string) {
    // فرض می‌کنیم OTP در یک جدول جداگانه ذخیره می‌شود و این متد OTP جدید ارسال می‌کند
    // اینجا فقط یک پیام نمونه برمی‌گردانیم
    return { message: `OTP resent to phone ${phone}` };
  }

  async phoneLogin(phone: string) {
    // ورود با شماره تلفن و ارسال OTP
    // بررسی وجود کاربر
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    // ارسال OTP (شبیه‌سازی)
    return { message: `OTP sent to phone ${phone}` };
  }

  async verify(phone: string, otp: string) {
    // تایید OTP
    // اینجا فقط شبیه‌سازی می‌کنیم
    if (otp !== '123456') {
      throw new BadRequestException('Invalid OTP');
    }
    await this.prisma.user.updateMany({
      where: { phone },
      data: { isVerified: true },
    });
    return { message: 'Phone verified successfully' };
  }

  async adminLogin(data: unknown) {
    // ورود ادمین مشابه login است با بررسی نقش
    // فرض می‌کنیم data شامل phone و password است
    const { phone, password } = data as any;
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (!user || user.role !== 'ADMIN') {
      throw new UnauthorizedException('Admin not found');
    }
    // TODO: Retrieve hashedPassword securely
    const hashedPassword = null;
    if (!hashedPassword) {
      throw new UnauthorizedException('Password not set');
    }
    const passwordValid = await bcrypt.compare(password, hashedPassword);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    const token = jwt.sign(
      { userId: user.id, phone: user.phone, role: user.role },
      process.env.JWT_SECRET || 'default_jwt_secret',
      { expiresIn: 86400 },
    );
    return { message: 'Admin logged in successfully', token };
  }

  async sellerLogin(data: unknown) {
    // مشابه adminLogin با نقش SELLER
    const { phone, password } = data as any;
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (!user || user.role !== 'SELLER') {
      throw new UnauthorizedException('Seller not found');
    }
    // TODO: Retrieve hashedPassword securely
    const hashedPassword = null;
    if (!hashedPassword) {
      throw new UnauthorizedException('Password not set');
    }
    const passwordValid = await bcrypt.compare(password, hashedPassword);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    const token = jwt.sign(
      { userId: user.id, phone: user.phone, role: user.role },
      process.env.JWT_SECRET || 'default_jwt_secret',
      { expiresIn: 86400 },
    );
    return { message: 'Seller logged in successfully', token };
  }

  async google(data: unknown) {
    // ورود با گوگل (شبیه‌سازی)
    return { message: 'Google login not implemented yet' };
  }

  async facebook(data: unknown) {
    // ورود با فیسبوک (شبیه‌سازی)
    return { message: 'Facebook login not implemented yet' };
  }

  async update(userId: string, data: unknown) {
    // به‌روزرسانی اطلاعات کاربر
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: data as any,
    });
    return updatedUser;
  }

  async changePassword(userId: string, data: { oldPassword: string; newPassword: string }) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    // TODO: Retrieve hashedPassword securely
    const hashedPassword = null;
    if (!hashedPassword) {
      throw new BadRequestException('Password not set');
    }
    const isOldPasswordValid = await bcrypt.compare(data.oldPassword, hashedPassword);
    if (!isOldPasswordValid) {
      throw new BadRequestException('Old password is incorrect');
    }
    const newHashedPassword = await bcrypt.hash(data.newPassword, 10);
    // TODO: Save new hashed password securely
    return { message: 'Password changed successfully' };
  }

  async forgetPassword(phone: string) {
    // ارسال لینک یا کد بازیابی رمز عبور
    return { message: `Password reset link sent to phone ${phone}` };
  }

  async resetPassword(phone: string, newPassword: string) {
    // بازنشانی رمز عبور
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    // TODO: Save new hashed password securely
    return { message: 'Password reset successfully' };
  }

  async available(phone: string) {
    const user = await this.prisma.user.findUnique({ where: { phone } });
    return { available: !user };
  }

  async phoneChange(userId: string, newPhone: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { phone: newPhone },
    });
    return updatedUser;
  }

  async changePhoneVerify(userId: string, otp: string) {
    // تایید تغییر شماره تلفن با OTP
    // شبیه‌سازی
    if (otp !== '123456') {
      throw new BadRequestException('Invalid OTP');
    }
    return { message: 'Phone change verified successfully' };
  }

  async ban(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const bannedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { isBanned: true },
    });
    return bannedUser;
  }

  async remove(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.user.delete({ where: { id: userId } });
    return { message: 'User removed successfully' };
  }

}
