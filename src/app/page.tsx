import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, HeartPulse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    id: 1,
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Instant delivery of your digital assets, to your email in seconds so that you can use them immediately.",
  },
  {
    id: 2,
    name: "Gauranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified, and adhered to highest quality standards. We also offer a 100% money back guarantee.",
  },
  {
    id: 3,
    name: "Extra Causes",
    Icon: HeartPulse,
    description:
      "4% of every transaction is donated to both multiple sclerosis research, and brain cancer research.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
            Your marketplace high-quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to e-Hippo. Every asset on our platform is verified, and
            adhered to high quality standards
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: List Products  */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
            {perks.map((perks) => (
              <div
                key={perks.id}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perks.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6  ">
                  <h3 className="text-base font-medium text-gray-900">
                    {" "}
                    {perks.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perks.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
