"use client";
import "@/styles/style.css";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { CirclePlus, Globe, Mail, MapPin, Phone } from "lucide-react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { useState } from 'react';


// Dynamically import TextEditor with SSR disabled
const TextEditor = dynamic(() => import("@/components/TextEditor"), { ssr: false });

export default function EditVC() {
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
    motivation:''
    
  });

  const [extraFields, setExtraFields] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <>
    <div className="container">
      <div className="form-section md:max-w[30%] md:gap-5">
        <h2>Formulaire CV</h2>
        <Accordion>
          <AccordionItem className="text-sm" key="1" aria-label="Informations personnelles" title="Informations personnelles">
            <div className="personal-info">
              <div className="input-group">
                <label htmlFor="photo">Photo:</label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="prenom">Prénom:</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={cvData.prenom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="nom">Nom:</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={cvData.nom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Adresse e-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={cvData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="telephone">Numéro de téléphone:</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={cvData.telephone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="adresse">Adresse:</label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  value={cvData.adresse}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="codePostal">Code postal:</label>
                <input
                  type="text"
                  id="codePostal"
                  name="codePostal"
                  value={cvData.codePostal}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="ville">Ville:</label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  value={cvData.ville}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="permis">Permis de conduire:</label>
                <input
                  type="text"
                  id="permis"
                  name="permis"
                  value={cvData.permis}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="sexe">Sexe:</label>
                <input
                  type="text"
                  id="sexe"
                  name="sexe"
                  value={cvData.sexe}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="siteWeb">Site internet:</label>
                <input
                  type="url"
                  id="siteWeb"
                  name="siteWeb"
                  value={cvData.siteWeb}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="linkedin">LinkedIn:</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={cvData.linkedin}
                  onChange={handleInputChange}
                />
              </div>

              {extraFields.includes('dateNaissance') && (
                <div className="input-group">
                  <label htmlFor="dateNaissance">Date de naissance:</label>
                  <input
                    type="date"
                    id="dateNaissance"
                    name="dateNaissance"
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {extraFields.includes('lieuNaissance') && (
                <div className="input-group">
                  <label htmlFor="lieuNaissance">Lieu de naissance:</label>
                  <input
                    type="text"
                    id="lieuNaissance"
                    name="lieuNaissance"
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {extraFields.includes('nationalite') && (
                <div className="input-group">
                  <label htmlFor="nationalite">Nationalité:</label>
                  <input
                    type="text"
                    id="nationalite"
                    name="nationalite"
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {extraFields.includes('etatCivil') && (
                <div className="input-group">
                  <label htmlFor="etatCivil">État civil:</label>
                  <input
                    type="text"
                    id="etatCivil"
                    name="etatCivil"
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>

            <div className="cv-actions">
          <Button  variant="flat" onClick={() => addField('dateNaissance')}>     <CirclePlus />
          Ajouter Date de naissance</Button>
          <Button  variant="flat" onClick={() => addField('lieuNaissance')}>     <CirclePlus />
          Ajouter Lieu de naissance</Button>
          <Button  variant="flat" onClick={() => addField('nationalite')}>     <CirclePlus />
          Ajouter Nationalité</Button>
          <Button  variant="flat" onClick={() => addField('etatCivil')}>     <CirclePlus />
          Ajouter État civil</Button>
          <Button  variant="flat" onClick={() => addField('customField')}>     <CirclePlus />
          Ajouter Champ personnalisé</Button>
         
        </div>
          </AccordionItem>


          <AccordionItem className="text-sm" key="2" 
          aria-label="Description" title="Profil">
            <div className="personal-info">
              <div className="input-group">
                <label htmlFor="motivation">Motivation</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={cvData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-2 border rounded"
                />              </div>
           </div>
                </AccordionItem  >    
        </Accordion>

     
      </div>

      <div className="preview-section md:min-w-[68%] md:mx-5">
        <h2>Prévisualisation du CV</h2>
        <div className="min-h-screen bg-pink-100 flex justify-center items-center">
        <div className="bg-pink-100 w-[800px] p-8 shadow-lg rounded-lg">
<div>
<header className="text-center">
          <h1 className="text-3xl font-bold text-pink-700"><p><strong> {cvData.prenom} {cvData.nom}</strong> </p>
          </h1>
          <p className="text-xl text-gray-700 py-4 " >Directrice Artistique</p>
        </header>
</div>

<section className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
PROFIL        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Colonne 1 */}
          <div className="bg-pink-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-SM font-semibold text-pink-700">PHOTO</h3>
            <p className="mt-2 text-gray-700">
            <Image src={cvData.photo} alt="" width="100" height="100" className="" />
            </p>
          </div>

          {/* Colonne 2 */}
          <div className="bg-pink-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-SM font-semibold text-pink-700">COORDONNEES</h3>
            
            <ul className="mt-4 space-y-3">
              {/* Ville */}
              <li className="flex items-center">
                <MapPin className="w-3 h-3 text-pink-600 mr-3" />
                <span  className="text-black">{cvData.ville}</span>
              </li>

              {/* Téléphone */}
              <li className="flex items-center">
                <Phone className="w-3 h-3 text-pink-600 mr-3" />
                <span  className="text-black">{cvData.telephone}</span>
              </li>

              {/* Adresse Email */}
              <li className="flex items-center">
                <Mail className="w-3 h-3 text-pink-600 mr-3" />
                <span  className="text-black">{cvData.email}</span>
              </li>

              {/* Site internet */}
              <li className="flex items-center">
                <Globe className="w-3 h-3 text-pink-600 mr-3" />
                <span className="text-black"><a href={cvData.siteWeb}>{cvData.siteWeb}</a></span>
              </li>

         
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="bg-pink-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-semibold text-pink-700">CENTRE D'INTERET</h3>
            <ul className="mt-0 space-y-0 list-disc">
              {/* Ville */}
              <li className="flex items-center list-disc py-[-50px]">
                <span  className="text-black text-sm list-disc ">centre1</span>
              </li>

              {/* Téléphone */}
              <li className="flex items-center">
                <span  className="text-black text-sm">centre2</span>
              </li>

              {/* Adresse Email */}
              <li className="flex items-center">
                <span  className="text-black list-disc text-sm">centre3</span>
              </li>

              {/* Site internet */}
              <li className="flex items-center">
                <span  className="text-black list-disc text-sm">centre4 </span>
              </li>
              </ul>
              <h3 className="text-sm font-semibold text-pink-700">LANGUE</h3>
              <ul className="mt-0 space-y-0 list-disc">
              {/* Ville */}
              <li className="flex items-center list-disc">
                <span  className="text-black list-disc text-sm">Français: </span>
              </li>

              {/* Téléphone */}
              <li className="flex items-center">
                <span  className="text-black list-disc text-sm">Anglais :</span>
              </li>
              </ul>
           
          </div>
        </div>
      </section>
        
      <section className="flex mt-5 p-6 bg-white p-6 shadow-lg rounded-lg">
      <div className="flex-1 p-4 bg-lightblue">
        <p>Contenu de la première colonne, qui prend toute la section.</p>
      </div>
      <div className="w-80 flex flex-col gap-5 p-4 bg-lightgreen">
        <div className="p-3 bg-white border border-gray-300">
          <p>Contenu de la première ligne de la deuxième colonne.</p>
        </div>
        <div className="p-3 bg-white border border-gray-300">
          <p>Contenu de la deuxième ligne de la deuxième colonne.</p>
        </div>
      </div>
    </section>


          <div className="cv-info bg-orange-400 px-2 ">
          <Image src={cvData.photo} alt="" width="100" height="100" className="cv-photo" />
          {/* <p>{cvData.profil}</p> 
           <Image src={"https://cdn-ilanoin.nitrocdn.com/teqXLpLIVZeOqSQxzwmkSxDOZifIFLwA/assets/images/optimized/rev-2c95817/derrickogouwole.fr/wp-content/uploads/2024/01/derrick-refaire-1-2.webp"} alt="Photo" width="70" height="70" className="cv-photo" />*/}

            <p><strong>Permis:</strong> {cvData.permis}</p>
            <p><strong>Sexe:</strong> {cvData.sexe}</p>
            <p><strong>Site internet:</strong> <a href={cvData.siteWeb}>{cvData.siteWeb}</a></p>
            <p><strong>LinkedIn:</strong> <a href={cvData.linkedin}>{cvData.linkedin}</a></p>

            {extraFields.includes('dateNaissance') && <p><strong>Date de naissance:</strong> {cvData.dateNaissance}</p>}
            {extraFields.includes('lieuNaissance') && <p><strong>Lieu de naissance:</strong> {cvData.lieuNaissance}</p>}
            {extraFields.includes('nationalite') && <p><strong>Nationalité:</strong> {cvData.nationalite}</p>}
            {extraFields.includes('etatCivil') && <p><strong>État civil:</strong> {cvData.etatCivil}</p>}
          </div>

          <main className="flex  bg-white shadow-md flex-col p-2 lg:gap-2 lg:p-2">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-xl "> {cvData.prenom} {cvData.nom}
            </h1>
          </div>
          <div
            className="flex flex-col gap-5  rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col gap-1 text-center">
              <h3 className="text-md font-bold tracking-tight text-start text-slate-700">
                Profil              </h3>
                <p className="text-sm text-justify text-muted-foreground">
                {cvData.motivation}
              </p>      
            </div>
            <div className="flex flex-col gap-1 text-center">
              <h3 className="text-md font-bold tracking-tight text-start text-slate-700" >
Formation              </h3>
              <p className="text-sm text-justify text-muted-foreground">
           
              {`Autonome et enthousiaste, mes premières expériences m'ont permis de renforcer mes acquis et d'appréhender les différents outils et techniques dans la gestion de projet digital. En quête de nouveaux challenges, je souhaite rejoindre une organisation à laquelle je pourrais apporter mon dynamisme et mon goût du challenge.`}

     </p>
     </div>
          </div>
        </main>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
