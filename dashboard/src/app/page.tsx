import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Page metadata */}
      <Head>
        <title>Welcome to My App</title>
        <meta name="description" content="Welcome to my app - a simple Next.js page." />
      </Head>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white p-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">
          Welcome to my app
        </h1>
      </div>
    </>
  );
}

