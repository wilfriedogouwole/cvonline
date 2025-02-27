import DashboardNav from "@/components/DashboardNav";

export default async function DashboardLayout({children}: Readonly<{children: React.ReactNode}>)
{  
   return (

<section>

<DashboardNav/>
<main>

<div>
    
{children}

</div>
</main>
      </section>
   )
    }