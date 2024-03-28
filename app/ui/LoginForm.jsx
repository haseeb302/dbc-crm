import { Input } from "@/app/ui/components/ui/input";
import { Label } from "@/app/ui/components/ui/label";
import Link from "next/link";

// import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/auth";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form action={authenticate} className="space-y-4 md:space-y-6">
        <div>
          <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        {/* <div className="flex items-center justify-between"> */}
        {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div> */}
        {/* <div className="ml-3 text-sm">
                    <Label
                      for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </Label>
                  </div> */}
        {/* </div> */}
        {/* Forgot password? */}
        {/* </div> */}
        <SubmitButton value={"Login"} />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 underline">
          <Link href={"/register"}>Don’t have an account yet? Sign up</Link>
        </p>

        {/* <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div> */}
      </form>
    </>
  );
}
