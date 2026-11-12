import Navbar from "../_components/Navbar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div
      className={`h-full w-full flex relative`}
    >

      <Navbar />
      {children}


    </div>
  );
}
