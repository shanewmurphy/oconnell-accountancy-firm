import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const FAQ_Data = [
  {
    id: "01",
    question: "What are your fees for your services?",
    answer:
      "Our fees vary depending on the specific services that you require. We offer transparent pricing and will provide you with a clear estimate before beginning any work.",
  },
  {
    id: "02",
    question:
      "How can I schedule a consultation with one of your accountants or tax consultants?",
    answer:
      "You can schedule a Zoom consultation with us form on our website, calling our office, or sending us an email.",
  },
  {
    id: "03",
    question: "What documents should I prepare before the consultation?",
    answer:
      "We recommend that you prepare any relevant financial statements, tax returns, and other documentation related to your business or personal finances. This will help us provide you with more accurate and tailored advice.",
  },
  {
    id: "04",
    question: "Can you help me with my personal taxes or only business taxes?",
    answer:
      "We can assist you with both personal and business taxes, depending on your needs.",
  },
  {
    id: "05",
    question: "How long does a typical consultation last?",
    answer:
      "Consultations typically last between 30 minutes to an hour, depending on the complexity of your financial situation.",
  },
  {
    id: "06",
    question:
      "How do you ensure the security and confidentiality of my financial information?",
    answer:
      "We take the security and confidentiality of our clients' financial information very seriously. We use secure software and encryption methods to protect your data, and we follow strict privacy policies and regulations.",
  },
  {
    id: "07",
    question:
      "What experience and qualifications do your accountants and tax consultants have?",
    answer:
      "Our accountants and tax consultants have extensive experience and qualifications in the accounting and finance industry. We regularly attend professional development courses to stay up-to-date with the latest laws and regulations.",
  },
  {
    id: "08",
    question: "Can you help me with tax planning and optimization?",
    answer:
      "Yes, we can help you with tax planning and optimization to help you minimize your tax liability and maximize your financial outcomes.",
  },
  {
    id: "09",
    question: "What is your policy for refunds or cancellations?",
    answer:
      "Our policy for refunds or cancellations varies depending on the specific service you have requested. We will work with you to ensure that you are satisfied with our services and address any issues or concerns you may have.",
  },
];
export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto lg:mb-60 md:mb-40 sm:mb-36">
      <div>
        <h1 className="text-center xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl text-beige font-bold mb-4">
          Frequent questions and answers
        </h1>
      </div>
      <div className="mx-auto max-w-4xl rounded-2xl p-2">
        <ul>
          {FAQ_Data.map((FAQ) => {
            return (
              <Disclosure key={FAQ.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg mb-6 bg-beige px-6 py-6 text-left lg:text-lg md:text-lg sm:text-sm font-semibold text-green hover:bg-darkbeige focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                      <span className="lg:w-full md:w-full sm:w-11/12">
                        {FAQ.question}
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-6 w-6 text-green`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-2 pt-0 pb-6 text-base text-white">
                      {FAQ.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </ul>
      </div>
    </div>
  );
}