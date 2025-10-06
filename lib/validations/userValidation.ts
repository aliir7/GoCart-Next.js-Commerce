import * as v from "valibot";

// شمای ثبت‌نام (Sign-up) با اعتبارسنجی نام
export const signinSchema = v.object({
  name: v.pipe(
    v.string(), // 1. مطمئن شو که ورودی یک رشته است
    v.trim(), // 2. فاصله‌های ابتدایی و انتهایی را حذف کن
    v.minLength(2, "Name must be at least 2 characters"), // 3. حداقل طول 2 کاراکتر
    v.maxLength(50, "Name must not exceed 50 characters") // 4. حداکثر طول 50 کاراکتر
  ),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.email("Please enter a valid email address")
  ),
  password: v.pipe(
    v.string(),
    v.minLength(8, "Password must be at least 8 characters"),
    v.maxLength(100, "Password is too long")
  ),
});
