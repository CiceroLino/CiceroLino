<samp>

  <p align="center">Hi! I write software for web</p>

</samp>

```typescript
import {
  getCoffee,
  turnOnTheComputer,
  getConnetion,
  getBackToWork,
} from './shared/utils/environment';

type SoftwareDeveloper = {
  age: number;
  languages: string[];
  knowledge: string[];
  hobbies: string[];
  whoami: string[];
};

type Working = boolean;

const Cicero: SoftwareDeveloper = {
  age: 24,
  languages: ['Portuguese', 'English', 'Japanese'], // Still trying to learn Japanese
  knowledge: [
    'Mostly Backend',
    'Mostly SQL Database',
    'Serverless & Cloud Formation',
    'Message Broker',
    'A bit of frontend',
  ],
  hobbies: [
    'Update my knowledge about tech and science',
    'Upgrade my english and japanese',
    'Watch Animes',
    'Listen music',
    'Read mangas and comics',
  ],
  whoami: [
    'Geek',
    'Computer Science Student',
    'Software Engineer',
    'Linux User',
  ],
};

export async function getResponse(programmer: typeof Cicero): Promise<Working> {
  let coffee = await getCoffee();
  let computer = await turnOnTheComputer();
  let wifi = await getConnetion();

  return await getBackToWork(programmer, coffee, computer, wifi);
}

// This code works only in my machine 😎😎
```
 
<img align="right" src="https://pa1.aminoapps.com/7514/9dc211dbf4b9bcc1a1348c975bd642ad45ddaeffr1-480-270_hq.gif" alt="Lofi vibe" />
