import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[100%] lg:max-w-[50%] md:max-w-md max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Admission Form
                </Dialog.Title>
                <div className="mt-2">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdGZy-C5cG1KHHUMbSmBfEurvrgYI5RmPre-2O7dRNhEGn1KA/viewform?usp=sf_link"
                    width="100%"
                    height="500px"
                    title="Google Form"
                  ></iframe>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red px-4 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
