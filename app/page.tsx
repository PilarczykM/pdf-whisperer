import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  GlobeIcon,
  ZapIcon,
  BrainCogIcon,
  EyeIcon,
  ServerCogIcon,
  MonitorSmartphoneIcon,
} from "lucide-react";

const features = [
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Experience instant answers to your questions with advanced AI processing optimized for speed.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description:
      "Your AI remembers the conversation context, so you can continue discussions without repeating yourself.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Browse, highlight, and reference PDF content seamlessly while chatting with your document.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Automatically back up your PDFs and chat history to the cloud for peace of mind and easy recovery.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description:
      "Enjoy a smooth experience on desktop, tablet, and mobile with a fully responsive interface.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col w-full justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="capitalize text-base font-semibold leading-7 text-indigo-600">
              Your interactive document companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDf.</span>
              <br />
              <br />
              Upload your document and our chatbot will answer questions,
              summarize content and answer all your Qs. Ideal for everyone,{" "}
              <span className="text-indigo-600"> Chat with PDF</span>{" "}
              <span className="font-bold"> dynamic conversations</span>,
              enhancing productivity 10x fold effortlessly.
            </p>
          </div>
          <Button>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="pt-16">
          <div className="mx-auto relative overflow-hidden max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src="https://placehold.co/2432x1442/png"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative max-w-7xl">
              <div className="absolute w-full bottom-0 left-0 inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => {
              return (
                <div key={feature.name} className="flex">
                  <dt>
                    <feature.icon
                      aria-hidden="true"
                      className="h-5 w-5 mr-2 text-indigo-600"
                    />
                  </dt>
                  <div>
                    <h4 className="font-bold">{feature.name}</h4>
                    <dd>{feature.description}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </main>
  );
}
