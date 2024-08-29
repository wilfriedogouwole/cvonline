import { SignIn } from '@clerk/nextjs'

export default function SignInButton() {
  return (
    <div>
  
    <button onClick={() => SignIn({ redirectUrl: '/sign-in' })}>Connexion</button>
    
  
    </div>
  )
}
