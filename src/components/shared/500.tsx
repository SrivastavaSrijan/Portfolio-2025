export const ServerError = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-3xl">Internal Server Error</h1>
        <p className="mb-6 text-lg">Something went wrong on our end. Please try again later.</p>
        <a href="/" className="text-primary hover:underline">
          Refresh
        </a>
      </div>
    </div>
  );
};
