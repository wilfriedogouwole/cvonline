// components/CoverLetterGenerator.tsx
"use client";
import { useState } from 'react';

const CoverLetterGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/generateLetter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.result);
      } else {
        setResult('Erreur: ' + data.error);
      }
    } catch (error) {
      setResult('Erreur de requête.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='pb-5'>Générateur de Lettre de Motivation</h1>
      <form className='pb-5  flex flex-col' onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décrivez le poste et vos expériences..."
          rows={5}
          cols={50}
        />
        <button className='pt-7 ' type="submit" disabled={loading}>
          {loading ? 'Génération en cours...' : 'Générer'}
        </button>
      </form>
      <div>
        <h2 className='pt-7'>Résultat :</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default CoverLetterGenerator;
