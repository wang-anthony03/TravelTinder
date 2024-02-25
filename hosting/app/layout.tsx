import "./global.css";
import gradient from "./gradient.png";

import Chunk from "../(components)/Chunk";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full min-h-screen">
          <img
            loading="lazy"
            srcSet={gradient.src}
            className="object-cover absolute inset-0 size-full -z-10"
          />
          <div>
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <div className="max-md:max-w-full">
                <Chunk />
              </div>
              <div className="justify-center px-7 py-2.5 my-auto text-2xl tracking-wider text-black whitespace-nowrap border-4 border-black border-solid shadow-sm max-md:px-5">
                Login
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
