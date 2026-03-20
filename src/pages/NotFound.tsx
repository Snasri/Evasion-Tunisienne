import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col min-h-[80vh] items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="mb-6 text-6xl md:text-8xl font-serif text-primary">404</h1>
          <p className="mb-12 text-xl italic font-serif text-muted-foreground">
            La page que vous recherchez semble s'être égarée.
          </p>
          <Link
            to="/"
            className="inline-block border border-primary text-primary px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
