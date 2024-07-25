/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gS5m38jphsR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto p-4 md:p-8">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <img
            src="/placeholder.svg"
            width={400}
            height={225}
            alt="News Article"
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                Technology
              </div>
              <div className="text-xs text-muted-foreground">April 15, 2024</div>
            </div>
            <h3 className="text-lg font-bold mb-2">The Future of Artificial Intelligence</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              Explore the latest advancements in AI technology and its potential impact on our lives. From machine
              learning to natural language processing, this article delves into the cutting-edge developments shaping
              the future.
            </p>
          </CardContent>
        </Card>
      </main>
      <aside className="w-full md:w-64 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                prefetch={false}
              >
                <FolderIcon className="w-4 h-4" />
                Technology
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                prefetch={false}
              >
                <BriefcaseIcon className="w-4 h-4" />
                Business
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                prefetch={false}
              >
                <BeakerIcon className="w-4 h-4" />
                Science
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                prefetch={false}
              >
                <HeartIcon className="w-4 h-4" />
                Health
              </Link>
            </nav>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Trending News</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  width={64}
                  height={64}
                  alt="Trending News"
                  className="rounded-lg w-16 h-16 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">The Future of Artificial Intelligence</h4>
                  <p className="text-xs text-muted-foreground">April 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  width={64}
                  height={64}
                  alt="Trending News"
                  className="rounded-lg w-16 h-16 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Breakthrough in Renewable Energy Storage</h4>
                  <p className="text-xs text-muted-foreground">April 10, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  width={64}
                  height={64}
                  alt="Trending News"
                  className="rounded-lg w-16 h-16 object-cover"
                />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Advancements in Telemedicine: Improving Healthcare Access</h4>
                  <p className="text-xs text-muted-foreground">April 8, 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  )
}

function BeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function FolderIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}