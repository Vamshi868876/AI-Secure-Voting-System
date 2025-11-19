export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white p-10 text-center">
      <h1 className="text-5xl font-bold mb-4">AI-Secure Voting System</h1>
      <p className="text-xl mb-8">Built by Tammudu with ❤️</p>
      <a href="/login" className="bg-white text-blue-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-200">
        Login with Your Face
      </a>
    </div>
  );
}
