"use client";
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator";
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
    photo:'',
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


  const handlFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvData(prevData => ({
        ...prevData,
        photo: file ? URL.createObjectURL(file) : ''
      }));
    }
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
                  accept="image/*"
                  id="photo"
                  name="photo"
                   onChange={handlFileChange}
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
                <label htmlFor="siteWeb">Site internet:</label>
                <input
                  type="url"
                  id="siteWeb"
                  name="siteWeb"
                  value={cvData.siteWeb}
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

                <p className="items-center text-black justify-center mx-auto ">{cvData.motivation}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Colonne 1 */}
          <div className="bg-pink-100 p-4 rounded-lg shadow-md text-center  justify-center">
            <h3 className="text-SM font-semibold text-pink-700">PHOTO DE TEST</h3>
            <p className="mt-2 text-gray-700 flex justify-center items-center">
              {cvData.photo && (
                <img src={cvData.photo} alt="upload" width="150" height="150" className="flex justify-center items-center rounded-full" />
              )}
           {/*<Image src="/images/Photo_profil.jpg" alt="" width="150" height="150" className="flex justify-center items-center rounded-full" />*/} 
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
            <h3 className="text-sm font-semibold text-pink-700">CENTRE D&apos; INTERET</h3>
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
      <h3 className="text-sm font-semibold text-pink-700"> EXPERIENCES</h3>
<div className="pb-3">
      <h5 className="text-sm font-semibold text-black pt-2"> Poste 1</h5>
      <div className="flex justify-between gap-2">
      <p className="text-sm font-semibold text-black">Contenu de la première 
      </p>
      <span className="text-sm items-end font-semibold text-black">2024-2025</span>
      </div>  
         <p className="text-sm font-semibold text-black pt-2" >Description du poste </p>
         <h6 className="text-sm font-semibold text-pink-700">compétences</h6>
              <ul className="mt-0 space-y-0 list-disc">
              {/* Ville */}
              <li className="flex items-center list-disc">
                <span  className="text-black list-disc text-sm">1: </span>
              </li>

              {/* Téléphone */}
              <li className="flex items-center">
                <span  className="text-black list-disc text-sm">2 :</span>
              </li>
              </ul>
  </div>

  < Separator />



  <div className="pb-3">
      <h5 className="text-sm font-semibold text-black pt-5"> Poste 2</h5>
      <div className="flex justify-between gap-2">
      <p className="text-sm font-semibold text-black">Contenu de la première 
      </p>
      <span className="text-sm items-end font-semibold text-black">2024-2025</span>
      </div>  
         <p className="text-sm font-semibold text-black pt-2" >Description du poste </p>
         <h6 className="text-sm font-semibold text-pink-700">compétences</h6>
              <ul className="mt-0 space-y-0 list-disc">
              {/* Ville */}
              <li className="flex items-center list-disc">
                <span  className="text-black list-disc text-sm">1: </span>
              </li>

              {/* Téléphone */}
              <li className="flex items-center">
                <span  className="text-black list-disc text-sm">2 :</span>
              </li>
              </ul>
  </div>
  < Separator />


  <div>
      <h5 className="text-sm font-semibold text-black pt-5"> Poste 3</h5>
      <div className="flex justify-between gap-2">
      <p className="text-sm font-semibold text-black">Contenu de la première 
      </p>
      <span className="text-sm items-end font-semibold text-black">2024-2025</span>
      </div>  
         <p className="text-sm font-semibold text-black pt-2" >Description du poste </p>
         <h6 className="text-sm font-semibold text-pink-700">compétences</h6>
              <ul className="mt-0 space-y-0 list-disc">
              {/* Ville */}
              <li className="flex items-center list-disc">
                <span  className="text-black list-disc text-sm">1: </span>
              </li>

              {/* Téléphone */}
              <li className="flex items-center">
                <span  className="text-black list-disc text-sm">2 :</span>
              </li>
              </ul>
  </div>

      </div>
      <div className="w-80 flex flex-col gap-5 p-4 bg-lightgreen">
      <h3 className="text-sm font-semibold text-pink-700"> FORMATIONS</h3>

        <div className="p-3 bg-[#f9eee0] border border-pink-300  mt-[-17px] flex flex-col justify-between gap-2">
        <div>
      <div className="flex justify-between gap-2">
      <p className="text-sm font-semibold text-black">Formation 1
      </p>
      <span className="text-sm items-end font-semibold text-black">2024-2025</span>
      </div>  
    
  </div>

  <div className="pt-5">
      <div className="flex justify-between gap-2">
      <p className="text-sm font-semibold text-black">Formation 2 
      </p>
      <span className="text-sm items-end font-semibold text-black">2024-2025</span>
      </div>  
 
  </div>


  <div className="pt-5">
      <div className="flex justify-between gap-2">
      <p className="text-sm font-semibold text-black">Formation 3
      </p>
      <span className="text-sm items-end font-semibold text-black">2024-2025</span>
      </div>  
 
  </div>




  </div>

        <h3 className="text-sm font-semibold text-pink-700"> COMPETENCES</h3>

        <div className="p-3 bg-[#f9eee0] border border-pink-300 mt-[-17px] ">

        <p className="text-sm font-semibold text-black pb-2">Comptétence 1</p>
<p><Slider defaultValue={[0]} max={100} step={1} /></p> 
<p className="text-sm font-semibold text-black pt-3">Comptétence 2 </p>

<p className="pt-3"> <Slider defaultValue={[0]} max={100} step={1} /></p> 

<p className="text-sm font-semibold text-black pt-3">Comptétence 3</p>
<p><Slider defaultValue={[0]} max={100} step={1} /></p> 
<p className="text-sm font-semibold text-black pt-3">Comptétence 4 </p>
<p><Slider defaultValue={[0]} max={100} step={1} /></p> 

<p className="text-sm font-semibold text-black pt-3">Comptétence 5</p>
<p><Slider defaultValue={[0]} max={100} step={1} /></p> 
<p className="text-sm font-semibold text-black pt-3">Comptétence 6 </p>

<p className="pt-3"> <Slider defaultValue={[0]} max={100} step={1} /></p>        </div>
      </div>
    </section>

        </div>
      </div>
    </div>
    </div>
    </>
  );
}
