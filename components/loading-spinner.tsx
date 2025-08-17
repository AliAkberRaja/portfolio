export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-muted border-t-accent animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-r-accent animate-spin animation-delay-150"></div>
      </div>
    </div>
  )
}
