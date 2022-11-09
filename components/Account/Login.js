import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "@mantine/form";
import { TextInput, Checkbox, PasswordInput, Button } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";

import { useRouter } from "next/router";
import Link from "next/link";

export default function Login(props) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const query = router.query;
  const [rollingButton, setRollingButton] = useState();
  const [success, setSuccess] = useState();

  useEffect(() => {
    //Checks whether we get an error from the login authentication.
    //if we get an error we will show the error message in a "new" popup with the login credentials.
    if (status && query) {
      if (status != "authenticated") {
        if (query?.error == "Password-fejl") {
          props.setLoginbar(true);
          setSuccess({
            status: "error",
            message:
              "Din password er ugyldigt, prøv igen eller kontakt support.",
          });
        }
        if (query?.error == "Emailen-exists") {
          props.setLoginbar(true);
          setSuccess({
            status: "error",
            message:
              "Din email eksistere ikke, opret en ny bruger, eller kontakt support.",
          });
        }
      }
    }
  }, [query, status]);

  const form = useForm({
    initialValues: {
      email: "",
      saveLogin: false,
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Forkert email"),
    },
  });

  async function handleSubmit() {
    setRollingButton(true);

    try {
      signIn("credentials", {
        email: form.values.email,
        password: form.values.password,
      });
      setRollingButton(false);
      setSuccess({ status: result.data.status, message: result.data.message });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Transition.Root show={props.loginbar} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setLoginbar}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <div className="p-5">
                  <h2 className="mb-7 text-center text-2xl font-semibold">
                    Log ind
                  </h2>
                  <form
                    className="space-y-6"
                    onSubmit={form.onSubmit((values) => handleSubmit(values))}
                  >
                    <TextInput
                      label="Email"
                      placeholder="Email"
                      {...form.getInputProps("email")}
                    />

                    <PasswordInput
                      label="Password"
                      placeholder="Password"
                      {...form.getInputProps("password")}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Checkbox
                          label="Forbliv logget ind"
                          {...form.getInputProps("saveLogin", {
                            type: "checkbox",
                          })}
                        />
                      </div>

                      <div className="font-medium text-[#F87171] hover:text-[#F87171]">
                        <Link 
                        className=""
                        href="/account/glemtkode">
                          
                          Glemt dit kodeord?
                        </Link>
                      </div>
                    </div>

                    <div>
                      <Button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F87171] hover:bg-[#F87171] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F87171]"
                        loading={rollingButton}
                      >
                        Log ind
                      </Button>
                    </div>
                    <div>
                      {success?.status == "error" && (
                       s
                      )}

                      {success?.status == "success" && (
                        s
                      )}
                    </div>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Eller log ind med
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-1">
                      <div>
                        <a
                          onClick={() => signIn("facebook")}
                          className="w-full inline-flex justify-center hover:cursor-pointer py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-100"
                        >
                          <span className="sr-only">Log ind med Facebook</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>

                      {/* <div>
                        <a
                          onClick={() => signIn("google")}
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-100"
                        >
                          <span className="sr-only">Log ind med Google</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                          </svg>
                        </a>
                      </div>*/} 
                    </div>
                  </div> 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
