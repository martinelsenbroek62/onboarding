"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function FAQComponent({ faqs }) {
  return (
    <>
      <section>
        <div className="w-full h-full flex flex-col justify-center items-center space-y-[72px]">
          <h2 className="text-[48px] italic font-extralight leading-[56px] -tracking-[0.96px]  text-azure-600 font-note text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-full">
            {faqs.map((faq, index) => (
              <Disclosure
                as="div"
                key={index}
                className="pt-6 font-lato border-t-[1px] pb-12 border-azure-300"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-azure-700">
                        <span className="text-2xl font-bold leading-7 text-azure-500">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-4 pr-12">
                      <div
                        className="text-xl leading-7 text-azure-700"
                        dangerouslySetInnerHTML={{
                          __html: faq?.answer || null,
                        }}
                      />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
