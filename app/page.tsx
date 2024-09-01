import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { subtitle, title } from "@/components/primitives";
import PrixPage from "@/components/Prixpage";
import Section2 from "@/components/Section2";
import { siteConfig } from "@/config/site";
import { auth } from "@clerk/nextjs/server";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { BookText, Pencil } from "lucide-react";
import { redirect } from "next/navigation";


export default function Home() {
  
const { userId } = auth();
if(userId){
  redirect("/dashboard")
}

  return (
    <>
    <section className="flex flex-col items-center justify-center gap-4 py-0 md:py-0">

<section>
				<div className="flexStart">
					<div className="mx-auto">
						<HeroParallaxDemo />
					</div>
				</div>
			</section>
     
      <div className="inline-block max-w-lg py-5 text-center justify-center">
        <h1 className={title()}> Pourquoi nous  </h1> 
        <h2 className={title({ color: "violet" })}>Choisir&nbsp;</h2>
        <h2 className={subtitle({ class: "mt-4" })}>
        Créez facilement votre CV et votre lettre de motivation avec un outil professionnel de qualité        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.connexion}
        >
                    <BookText size={20} />

          Nos Modèles
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.connexion}
        >
          <Pencil size={20} />
          Créer votre CV
        </Link>
      </div>

    </section>
    <section className="flex w-full">
       {/*} <LampDemo/>*/}
						<Section2 />
					
			</section>

      <section>
						<PrixPage />
			</section>

      <section className="margin max-width sm:flex-1 text-center justify-center">
<h2 className =" flex flex-col items-center justify-center text-2xl font-bold pb-6">Qu’est-ce qu’un Curriculum Vitae ?</h2>
<p>Le CV est issu du latin <strong>Curriculum Vitae</strong> (signifiant « le déroulement de la vie »). C’est le support que tous les <strong>chercheurs d’emploi, de stage ou les étudiants</strong>, utilisent afin de se mettre en valeur devant un recruteur. Il décrit tout le <strong>parcours professionnel et de formation</strong> d’une personne. Il donne aussi quelques informations plus personnelles sur l’individu, comme l’âge, l’adresse ou bien les centres d’intérêts. Ce précieux document renseigne pertinemment les employeurs qui doivent sélectionner un futur salarié, un stagiaire ou un apprenti.</p>
<h2 className =" flex flex-col items-center justify-center text-2xl font-bold pb-6" >Les étapes pour rédiger son CV à partir d&rsquo;un de nos modèles</h2>
<p>Nos <strong>exemples de CV vierges</strong> vous permettront d’indiquer tout ce qui est nécessaire pour réaliser le vôtre. Comme expliqué dans les fonctionnalités de notre éditeur, vous pourrez structurer votre CV en 5 parties. Voici en détail comment bien rédiger votre Curriculum Vitae après avoir choisi votre exemple.</p>
<h3 className="number-listing pb-3 pt-3"><span className="number-listing pb-3">1-   </span> Votre profil</h3>
<p>Dans cette rubrique du CV, vous devrez indiquer votre nom, prénom, métier recherché, coordonnées, date de naissance. Il est aussi possible d’indiquer si vous êtes titulaire d’un permis de conduire. Nous vous invitons aussi à ajouter une photo de vous, mais ce n’est pas obligatoire.</p>
<p>Découvrez nos <a href="#">conseils et exemples de rédaction de la section « profil » du CV</a>.</p>
<h3  className="number-listing pb-3 pt-3"><span className="number-listing pb-6">2- </span> À propos de vous</h3>
<p>Certains de <strong>nos modèles CV présentent une section « À propos de vous »</strong>. Vous devrez donc indiquer en quelques lignes votre profil ainsi que vos objectifs et vos motivations. Ce résumé sera lu en premier par l’employeur. Soignez-le. Soyez convaincant et <strong>donnez envie au recruteur de lire la suite de votre CV</strong>.</p>
<h3 className="number-listing pb-3 pt-3"><span className="number-listing">3- </span> Vos expériences professionnelles</h3>
<p>Cette section permettra au recruteur de connaître <strong>votre parcours professionnelles ainsi que vos compétences</strong>. Attention à bien choisir les expériences professionnelles les plus pertinentes pour votre recherche d&#8217;emploi. Au maximum, nous venons recommandons de ne pas ajouter plus de 4 expériences différentes pour ne pas surcharger votre CV. Voici les <strong>informations à rédiger</strong> dans cette partie du Curriculum Vitae :</p>
<ol>
<li>les dates de début et de fin,</li>
<li>l’intitulé du poste,</li>
<li>le nom de l’entreprise,</li>
<li>les tâches effectuées,</li>
<li>les compétences acquises dans l&rsquo;entreprise.</li>
</ol>
<p>Pour plus d&rsquo;informations, nous avons créé un <a href="https://modele-cv.com/conseils-cv/experiences-professionnelles-cv/">guide complet pour vous aider dans la rédaction de vos expériences professionnelles sur votre CV</a>.</p>
<h3 className="number-listing pb-3 pt-3"><span className="number-listing">4- </span> Vos formations et diplômes</h3>
<p>Les formations sont très importantes dans le CV. Certaines entreprises demandent un diplôme ou un niveau d’étude minimum pour pouvoir postuler. C’est donc dans cette rubrique que vous mettrez en avant vos diplômes obtenus. Nous vous conseillons de <strong>rédiger vos formations de manière chronologique</strong> (du plus récent au plus ancien). Cela permettra au recruteur de voir les informations les plus pertinentes en premier. Ensuite indiquez :</p>
<ol>
<li>la date d&rsquo;obtention du diplôme,</li>
<li>le nom de l’établissement,</li>
<li>le nom du diplôme ou de la formation,</li>
<li>les mentions si vous en avez (facultatif),</li>
<li>vous pouvez également indiquer les compétences obtenues lors de cette formation.</li>
</ol>
<p>Découvrez plus en détail <a href="https://modele-cv.com/conseils-cv/formations-cv/">toutes les astuces pour intégrer vos formations dans votre Curriculum Vitae</a>.</p>
<h3 className="number-listing pb-3 pt-3"><span className="number-listing">5- </span> Vos compétences acquises</h3>
<p>Cette partie du CV est décisive. Vous allez devoir <strong>détailler les compétences que vous avez acquises durant vos expériences professionnelles et vos formations</strong>. Veillez à rester pertinent dans vos choix. Accordez-vous avec les compétences recherchées dans le poste convoité.</p>
<p>Découvrez la <a href="https://modele-cv.com/conseils-cv/competences-cv/">liste des compétences à intégrer dans votre CV</a>.</p>
<h3  className="number-listing pb-3 pt-3"><span className="number-listing">6- </span> Vos loisirs ou centres d’intérêts</h3>
<p>Montrez que vous vous intéressez à différentes choses pour prouver votre ouverture d’esprit. Vos centres d’intérêts peuvent en dire long sur vous. <strong>Privilégier les loisirs qui ont un lien avec le métier recherché</strong> pour vous mettre en avant. Voici les avantages de bien rédiger cette partie :</p>
<ul>
<li>mettre en avant votre passion pour un métier,</li>
<li>créer un sujet de discussion lors de votre entretien d’embauche.</li>
</ul>
<p>N’oubliez de structurer ces différentes parties de manière chronologique (du plus récent au plus ancien) afin de mettre en avant vos dernières expériences. Pour plus de détail pour rédiger cette rubrique, lisez notre <a href="https://modele-cv.com/conseils-cv/rediger-centres-dinterets/">guide complet ici</a>.</p>
<h2 id="notre-liste-de-modele-de-cv-gratuit-a-telecharger">Notre liste de modèle de CV gratuit à télécharger</h2>
<p>Pour ceux qui ne souhaitent pas utiliser notre éditeur en ligne, vous pouvez <strong>télécharger ici un exemple de CV gratuitement</strong>. Voici les étapes à suivre pour <a href="/creer-cv/">créer votre CV gratuitement</a> sans aucun frais.</p>

</section>



{/*}

   <section className="flex flex-col items-center justify-center h-screen">
  
<h1 className=" text-8xl uppercase font-black">LOGIN</h1>

<Link href="/sign-in">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-5 rounded"> Connexion</button>
</Link>
<Link href="/sign-in">

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"> Inscription </button>
</Link>
   
   </section>
*/}
   </>
  );
}