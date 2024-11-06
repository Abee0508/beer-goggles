import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadGSAP = async () => {
        const gsapModule = await import("gsap");
        const { default: gsap } = gsapModule; 

        const loadScript = (src) => {
          return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        };

        try {
          await Promise.all([
            loadScript("/js/ScrollTrigger.min.js"),
            loadScript("/js/ScrollToPlugin.min.js"),
            loadScript("/js/ScrollSmoother.min.js"),
          ]);

          gsap.registerPlugin(
            window.ScrollTrigger,
            window.ScrollToPlugin,
            window.ScrollSmoother
          );

          window.ScrollSmoother.create({
            wrapper: ".scroll-wrapper",
            content: ".scroll-content",
            smooth: 1,
            effects: true,
          });
        } catch (error) {
          console.error("Failed to load GSAP plugins", error);
        }
      };

      loadGSAP();
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
