import Image from 'next/image'
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center py-20 px-8 md:py-[168px] ${karla.className} bg-lightGray`}
    >
      <section className="bg-white w-full pt-7 px-6 pb-8 md:p-10 rounded-t-[5px] md:max-w-2xl">
        <h1 className="text-cyan md:text-2xl text-xl tracking-[-0.25px] font-bold">
          Join our community
        </h1>
        <h2 className="text-brightYellow text-[15px] md:text-lg leading-5 mt-6 font-bold mb-4">
          30-day, hassle-free money back guarantee
        </h2>
        <p className="text-grayishBlue tracking-[-1.175px] leading-[26px]">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>
      <div className="w-full md:grid md:grid-cols-2 md:max-w-2xl">
        <section className="bg-cyan w-full p-6 md:p-10 text-white md:rounded-bl-[5px]">
          <h2 className="font-bold text-lg tracking-[-0.225px]">
            Monthly Subscription
          </h2>
          <p className="tracking-[-0.2px] mt-[18px] mb-1 text-2xl items-center flex">
            $29
            <span className="ml-[11px] opacity-50 text-base">per month</span>
          </p>
          <p className="tracking-[-0.2px]">
            Full access for less than $1 a day
          </p>
          <button className="bg-brightYellow tracking-[-0.2px] w-full rounded-[5px] py-3.5 mt-[26px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)]">
            Sign Up
          </button>
        </section>
        <section className="bg-cyan/80 w-full rounded-b-[5px] p-6 md:p-10 md:rounded-none md:rounded-br-[5px] text-white">
          <h2 className="font-bold text-lg tracking-[-0.225px]">Why Us</h2>
          <p className="text-sm tracking-[-0.175px] opacity-75 mt-[18px]">
            Tutorials by industry experts
            <br /> Peer & expert code review
            <br /> Coding exercises
            <br /> Access to our GitHub repos
            <br /> Community forum
            <br /> Flashcard decks
            <br /> New videos every week
          </p>
        </section>
      </div>
    </main>
  )
}
