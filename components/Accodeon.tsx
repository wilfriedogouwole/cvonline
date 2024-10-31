import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

export default function Accodeon() {
  const defaultContent =
    "";

  return (
    
    <Accordion defaultExpandedKeys={["1"]}>
      <AccordionItem
        key="1"
        aria-label="Gain de temps"
   
        title="Gain de temps"
      >
        {"Rédiger un CV à partir de zéro peut être chronophage. Les créateurs de CVen ligne vous permettent de créer un document professionnel en quelques minutes grâce à des modèles préconçus."}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Janelle Lenard"
    
        title="Accès à des modèles professionnels">
          
        {"Vous avez accès à une variété de modèles qui respectent les tendances actuelles et sont adaptés à différents secteurs d'activité."

}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Personnalisation avancée
"          
        title="Personnalisation avancée
"
      >
        {"Avec un créateur de CV en ligne, vous pouvez ajuster les couleurs, les polices, et l'agencement du texte selon vos préférences personnelles."}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Facilité d'utilisation
"
      
        title="Facilité d'utilisation
"
      >
        {"Même si vous n'êtes pas un expert en informatique, ces plateformes sont conçues pour être conviviales et intuitives. Un simple glisser-déposer suffit pour personnaliser votre CV."}
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Telechargement en PDF"
       
      
        title="Téléchargement en PDF"
      >
        {"Convertissez directement votre cv en pdf pour l'emploi."}
      </AccordionItem>

    </Accordion>
  );
}
