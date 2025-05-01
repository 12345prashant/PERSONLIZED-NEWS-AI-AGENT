export default function Success() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-green-600">🎉 You're Subscribed!</h1>
        <p className="text-gray-700">You'll start receiving your personalized news digest very soon.</p>
        <a href="/" className="inline-block mt-4 text-green-700 font-semibold hover:underline">
          Back to Home
        </a>
      </div>
    </main>
  );
}
