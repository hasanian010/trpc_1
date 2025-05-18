import { z } from 'zod';

// DTO برای ثبت‌نام
export const SignupDto = z.object({
  phone: z.string().min(10, 'شماره تلفن باید حداقل 10 رقم باشد'),
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
});

// DTO برای ورود
export const LoginDto = z.object({
  phone: z.string().min(10, 'شماره تلفن باید حداقل 10 رقم باشد'),
  password: z.string().min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
});

// DTO برای تایید شماره تلفن (مثلاً با OTP)
export const VerifyPhoneDto = z.object({
  phone: z.string().min(10, 'شماره تلفن باید حداقل 10 رقم باشد'),
  otp: z.string().length(6, 'کد تایید باید 6 رقم باشد'),
});

// DTO برای به‌روزرسانی کاربر
export const UpdateUserDto = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
});

// DTO برای تغییر پسورد
export const ChangePasswordDto = z.object({
  oldPassword: z.string().min(6, 'رمز عبور قدیمی باید حداقل 6 کاراکتر باشد'),
  newPassword: z.string().min(6, 'رمز عبور جدید باید حداقل 6 کاراکتر باشد'),
});
