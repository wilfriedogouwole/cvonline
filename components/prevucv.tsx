import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bell,
  Package2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export function Prevucv() {
    const [cvData, setCvData] = useState({
        photo: '',
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        adresse: '',
        codePostal: '',
        ville: '',
        permis: '',
        sexe: '',
        siteWeb: '',
        linkedin: '',
        profil: '',
        dateNaissance: '',
        lieuNaissance: '',
        nationalite: '',
        etatCivil: '',  
      });
    
      const [extraFields, setExtraFields] = useState<string[]>([]);
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCvData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const addField = (fieldType: string) => {
        setExtraFields(prevFields => [...prevFields, fieldType]);
      };
    

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
          <div className="cv-card">
          <div className="cv-header">
            <Image src={cvData.photo} alt="Photo" width="100" height="100" className="cv-photo" />
            <p>{cvData.profil}</p>
          </div>
          <div className="cv-info">
          <p><strong> Nom: </strong> {cvData.prenom} {cvData.nom}</p>
            <p><strong>Email:</strong> {cvData.email}</p>
            <p><strong>Téléphone:</strong> {cvData.telephone}</p>
            <p><strong>Adresse:</strong> {cvData.adresse}</p>
            <p><strong>Ville:</strong>  {cvData.ville}</p>
            <p><strong>Code Postale:</strong>   {cvData.ville}</p>

            <p><strong>Permis:</strong> {cvData.permis}</p>
            <p><strong>Sexe:</strong> {cvData.sexe}</p>
            <p><strong>Site internet:</strong> <a href={cvData.siteWeb}>{cvData.siteWeb}</a></p>
            <p><strong>LinkedIn:</strong> <a href={cvData.linkedin}>{cvData.linkedin}</a></p>

            {extraFields.includes('dateNaissance') && <p><strong>Date de naissance:</strong> {cvData.dateNaissance}</p>}
            {extraFields.includes('lieuNaissance') && <p><strong>Lieu de naissance:</strong> {cvData.lieuNaissance}</p>}
            {extraFields.includes('nationalite') && <p><strong>Nationalité:</strong> {cvData.nationalite}</p>}
            {extraFields.includes('etatCivil') && <p><strong>État civil:</strong> {cvData.etatCivil}</p>}

          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
    
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
    </div>
  )
}
