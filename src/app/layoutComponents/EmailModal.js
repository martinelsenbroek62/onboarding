"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MailingList from "./MailingList";

export default function EmailModal({ open, handleToggleModal }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleToggleModal}>
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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-8 tablet:p-16 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-[32px] bg-white p-8 tablet:p-16 pb-24 tablet:pb-32 text-left shadow-xl transition-all w-full max-w-[1140px]">
                <div className="flex flex-col">
                  <button className="self-end" onClick={handleToggleModal}>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="w-8 h-8 text-azure-700"
                    />
                  </button>
                  <div className="mt-3 text-center flex flex-col items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl tablet:text-5xl font-note font-bold text-azure-700"
                    >
                      Join Waitlist
                    </Dialog.Title>
                    <div className="mt-8 tablet:mt-12">
                      <p className="text-lg tablet:text-3xl font-lato text-azure-700 max-w-[800px]">
                        Join the waitlist now to receive an exclusive promo code
                        for 3 months FREE of Do
                      </p>
                    </div>
                  </div>
                </div>
                <MailingList />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
