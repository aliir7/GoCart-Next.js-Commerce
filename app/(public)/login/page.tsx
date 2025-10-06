import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full rounded-2xl sm:max-w-md pt-16 pb-10 dark:border dark:border-white/[0.16]">
      <div className="flex flex-col w-full px-10 text-center sm:max-w-md">
        <div className="my-auto pb-10 w-full dark:text-gray-100">
          {/* login form */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
