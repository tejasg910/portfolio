"use client";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Slack from "../../assets/projects/slack.png"
import RemoteJobZone from "../../assets/projects/remotejobzone.png"
import Ecommerce from "../../assets/projects/ecommerce.png"
import TargetTrailMailer from "../../assets/projects/targettrailmailer.png"
const content = [
  {
    title: "Slack Clone",
    description:
      "A comprehensive Slack clone built with Next.js and Convex DB. Features include real-time chat, workspace creation, user invitations, file attachments, reactions, channel creation, and granular access control.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <img
          src={Slack}
          className="h-full w-full object-cover rounded-t-md"
          alt="Slack clone preview"
        />
        <div className="space-x-2 my-3 px-2 flex flex-wrap justify-center gap-y-2">
          <button className="px-3 py-1 rounded-full relative bg-cyan-600 text-white text-sm hover:shadow-2xl hover:shadow-cyan-400/20 transition duration-200 border border-cyan-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <span className="relative z-20">Next.js</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-emerald-600 text-white text-sm hover:shadow-2xl hover:shadow-emerald-400/20 transition duration-200 border border-emerald-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
            <span className="relative z-20">ConvexDB</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-teal-600 text-white text-sm hover:shadow-2xl hover:shadow-teal-400/20 transition duration-200 border border-teal-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
            <span className="relative z-20">TypeScript</span>
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "E-commerce Platform",
    description:
      "A complete e-commerce solution with separate user and admin panels. Users can browse products, add to cart, complete purchases, and track orders. Admins can manage products, process orders, and view dashboard analytics.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <img
          src={Ecommerce}
          className="h-full w-full object-cover rounded-t-md"
          alt="E-commerce platform preview"
        />
        <div className="space-x-2 my-3 px-2 flex flex-wrap justify-center gap-y-2">
          <button className="px-3 py-1 rounded-full relative bg-pink-600 text-white text-sm hover:shadow-2xl hover:shadow-pink-400/20 transition duration-200 border border-pink-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
            <span className="relative z-20">JavaScript</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-purple-600 text-white text-sm hover:shadow-2xl hover:shadow-purple-400/20 transition duration-200 border border-purple-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
            <span className="relative z-20">Next.js</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-indigo-600 text-white text-sm hover:shadow-2xl hover:shadow-indigo-400/20 transition duration-200 border border-indigo-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
            <span className="relative z-20">Node.js</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-violet-600 text-white text-sm hover:shadow-2xl hover:shadow-violet-400/20 transition duration-200 border border-violet-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <span className="relative z-20">MongoDB</span>
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "Remote Job Zone",
    description:
      "Remote Job Zone is a modern remote job listing platform built to connect professionals with high-quality remote opportunities across the globe. Users can explore curated job listings, view detailed job descriptions, required skills, and access direct apply links.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <img
          src={RemoteJobZone}
          className="h-full w-full object-cover rounded-t-md"
          alt="Remote Job Zone preview"
        />
        <div className="space-x-2 my-3 px-2 flex flex-wrap justify-center gap-y-2">
          <button className="px-3 py-1 rounded-full relative bg-orange-600 text-white text-sm hover:shadow-2xl hover:shadow-orange-400/20 transition duration-200 border border-orange-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
            <span className="relative z-20">JavaScript</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-amber-600 text-white text-sm hover:shadow-2xl hover:shadow-amber-400/20 transition duration-200 border border-amber-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
            <span className="relative z-20">Next.js</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-yellow-600 text-white text-sm hover:shadow-2xl hover:shadow-yellow-400/20 transition duration-200 border border-yellow-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />
            <span className="relative z-20">Node.js</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-lime-600 text-white text-sm hover:shadow-2xl hover:shadow-lime-400/20 transition duration-200 border border-lime-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-lime-300 to-transparent" />
            <span className="relative z-20">MongoDB</span>
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "Target Trail Mailer",
    description:
      "Target Trail Mailer is a bulk email management tool allowing users to configure Nodemailer, add bulk emails, and send them with one click. It includes a dashboard that provides real-time analytics on email dispatch performance.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <img
          src={TargetTrailMailer}
          className="h-full w-full object-cover rounded-t-md"
          alt="Target Trail Mailer preview"
        />
        <div className="space-x-2 my-3 px-2 flex flex-wrap justify-center gap-y-2">
          <button className="px-3 py-1 rounded-full relative bg-cyan-600 text-white text-sm hover:shadow-2xl hover:shadow-cyan-400/20 transition duration-200 border border-cyan-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <span className="relative z-20">Next.js</span>
          </button>
          <button className="px-3 py-1 rounded-full relative bg-emerald-600 text-white text-sm hover:shadow-2xl hover:shadow-emerald-400/20 transition duration-200 border border-emerald-400">
            <div className="absolute inset-x-0 h-px w-2/3 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
            <span className="relative z-20">Supabase</span>
          </button>
        </div>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full ">
      <StickyScroll content={content} />
    </div>
  );
}
