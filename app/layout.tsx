import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { ClerkProvider } from "@clerk/nextjs";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/react";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " LiveCv - Votre Créateur de Cv en ligne - Editeur de CV",
  description: "LiveCv vous aide à créer un CV professionnel en ligne en quelques minutes. Simple à utiliser, rapide et efficace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
  <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Nav />
      
        {children}
       

        <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full items-center justify-center mt-5 py-3 ">
							<Link
								isExternal
								className="flex flex-col items-center gap-1 text-current"
								href="/"
								title="nextui.org homepage"
							/>
								<div className="mx-auto flex flex-nowrap space-x-2 justify-center items-center content-center">
                <Image src={"/images/logo_blanc.png"} 
                alt="Logo" width={250} height={100} className=" w-[250px] h-[100%] relative z-[5] -m-4" /></div><br/>
								<div className=" mx-auto mb-4 flex flex-nowrap space-x-2 justify-center items-start content-center">
					<Link isExternal href={siteConfig.links.Linkedin} aria-label="Linkedin" 
								>
					<LinkedinIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.Instagram} aria-label="Instagram">
						<InstagramIcon className="text-default-500" />
					</Link>
					</div>
								<Divider />
					        <div className="text-center justify-center items-center">
								<p className="text-default-600 py-2">Derrick Ogouwole,
								<span className="text-primary"> Tous Droits Reservés</span> </p>
                </div>
						</footer>
            </ThemeProvider>

            </body>
            <SpeedInsights/>
    </html>
    </ClerkProvider>
  );
}
