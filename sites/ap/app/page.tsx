import Image from "next/image";
import { ArrowRight, CheckCircle2, Play } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-background">
      <header className="border-b border-primary/20">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="text-xl font-bold text-primary">AI Publishings</div>
          <Link href="https://aipublishings.com/schedule-page" className={buttonVariants(
            {
              className: "bg-primary hover:bg-primary/90 text-white",
            }
          )}>Get Started</Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                Build a 5-Figure/Month Amazon Publishing Business
              </h1>
              <p className="mb-8 text-lg text-gray-700 md:text-xl lg:text-2xl">
                Tired of the 9-to-5 grind, working harder but not getting ahead?
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="https://aipublishings.com/schedule-page" className={buttonVariants(
                  {
                    size:"lg",
                    className:"w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-3 text-base md:text-lg font-medium"
                  }
                )}
                >
                  Start Building Your Empire Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@Nelly-phien/videos"
                  className={buttonVariants(
                    {
                      size:"lg",
                      variant:"outline",
                      className:"w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md px-6 py-3 text-base md:text-lg font-medium"
                    }
                  )}
                >
                  Watch Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-md">
                  <Image src="/placeholder.svg" alt="Consultant" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="mb-6 text-2xl font-bold text-primary sm:text-3xl">Proven Framework for Success</h2>
                  <div className="space-y-4">
                    {[
                      "Learn a proven step-by-step framework to quickly scale your Amazon publishing income",
                      "Discover how to use AI to create high-quality books faster and cheaper than ever before",
                      "Master the art of identifying profitable niches with less competition and higher royalties",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-none text-primary" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="border-y border-primary/20 bg-white py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-xl font-bold text-primary sm:text-2xl md:text-3xl">
                One book alone made over $100,000 in royalties and another $50,000
              </h2>
              <div className="aspect-video">
                <div className="relative h-full w-full rounded-2xl bg-gray-200 shadow-md">
                  {/* YouTube video embed would go here */}
                  <div className="flex h-full items-center justify-center">
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Play className="h-6 w-6" />
                      Watch Success Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                Ready to Start Your Publishing Journey?
              </h2>
              <p className="mb-8 text-gray-700">
                Join thousands of successful authors who have built their publishing empires with our proven system.
              </p>
              <Link href="https://aipublishings.com/schedule-page" className={buttonVariants(
                {
                  size:"lg",
                  className:"bg-primary hover:bg-primary/90 text-white"
                }
              )}>
                Start Building Your Publishing Empire Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/20 py-8">
        <div className="container px-4">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-4">Results may vary. Individual success depends on implementation and market conditions</p>
            <p>&copy; {new Date().getFullYear()} AI Publishings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
