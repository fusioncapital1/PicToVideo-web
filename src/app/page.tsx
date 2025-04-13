export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">
        PicToVideo
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Transform your photos into beautiful videos
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Easy to Use</h2>
          <p>Transform your photos with just a few clicks.</p>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">AI-Powered</h2>
          <p>Smart transitions and effects powered by AI.</p>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Share Anywhere</h2>
          <p>Export and share your videos on any platform.</p>
        </div>
      </div>
    </main>
  );
}
