function HeroSkeleton() {
  return (
    <div className="h-[90vh] w-full">
      <div className="flex h-full w-full items-center justify-center px-10">
        <div className="h-96 w-96 animate-pulse rounded-md bg-gray-800"></div>
        <div className="flex w-full flex-col space-y-10 pl-10">
          <div className="h-16 w-full animate-pulse bg-gray-700"></div>
          <div className="space-y-5">
            <div className="h-10 w-full animate-pulse bg-gray-700"></div>
            <div className="h-10 w-full animate-pulse bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSkeleton;
