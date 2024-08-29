import PricingSection from '@/components/ui/PricingSection'


const tiers  = [
    {
      name: 'Plan gratuit',
      id: 'tier-starter',
      href: '/sign-in',
      description: 'Le plan gratuit inclut :',
      price:  '0',
      features: ['Créez un CV et une lettre de motivation', 'Téléchargez au format TXT' , 'Accédez à tous les modèles de CV ' , 'Importez votre CV en un clic '],
      mostPopular: false,
    },
    {
      name: 'Plan premium',
      id: 'tier-scale',
      href: '"/sign-in"',
      description: 'Le plan gratuit plus :',
      price: '14',
      features: [
        'CV et lettres de motivation illimités',
        'Téléchargement en PDF et TXT',
        'Importation de CV instantanée',
        'Accès additionnel à notre assistant IA',
        'Remboursement garanti de 14 jours ',
        'Remboursement automatique',
      ],
      mostPopular: true,
    },
 

]


const PrixPage = () => {

    return (
        <div>
            <main>
                <div className='py-24 sm:py-32'>
                    <div className='mx-auto max-w-7xl px-6 lg:*:px-8'>
                        <div className='mx-auto max-w-4xl text-center'>
                            <p className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
                            Découvrez nos forfaits flexibles pour répondre à vous besoins.                            </p>
                        </div>

                        <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8'>
                        Choisissez parmi nos forfaits abordables et commencez dès aujourd'hui.                        </p>

                        <PricingSection tiers={tiers} />

                    </div>
                </div>
            </main>
        </div>
    )
}

export default PrixPage