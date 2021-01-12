export default function Layout({ children }) {
  return (
    <div className="sm:container md:container lg:container xl:container 2xl:container container mx-auto px-4">
      {children}
    </div>
  );
}
