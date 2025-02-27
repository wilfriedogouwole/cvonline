import { MotivationLetterData } from "./types";

export function getMockResponse(data: MotivationLetterData): string {
  const skillsList = Array.isArray(data.skills)
    ? data.skills.map(skill => `<li>${skill}</li>`).join('')
    : "<li>Aucune compétence spécifiée.</li>";

  return `
    Chère équipe de ${data.company}
   Je suis ravi(e) de postuler au poste de ${data.jobTitle}
    Je maîtrise les compétences suivantes :
    ${skillsList}
    Dans l’attente de votre retour favorable, veuillez agréer mes salutations distinguées.
  `;
}
