<samp>

  <p align="center">Hi! I write software for web</p>

</samp>

```typescript
import {
  getCoffee,
  turnOnComputer,
  getConnection,
  getBackToWork,
} from './shared/utils/environment';

interface SoftwareDeveloper {
  readonly age: number;
  readonly languages: readonly string[];
  readonly knowledge: readonly string[];
  readonly hobbies: readonly string[];
  readonly whoami: readonly string[];
}

type WorkingStatus = 'productive' | 'distracted' | 'offline';

const cicero: Readonly<SoftwareDeveloper> = {
  age: 24,
  languages: ['Portuguese', 'English', 'Japanese'] as const, // Still trying to learn Japanese
  knowledge: [
    'Mostly Backend',
    'Mostly SQL Database',
    'Serverless & Cloud Formation',
    'Message Broker',
    'A bit of frontend',
  ] as const,
  hobbies: [
    'Update my knowledge about tech and science',
    'Upgrade my English and Japanese',
    'Watch Anime',
    'Listen to music',
    'Read manga and comics',
  ] as const,
  whoami: ['Geek', 'Computer Science Student', 'Software Engineer', 'Linux User'] as const,
};

export async function getWorkingStatus(programmer: SoftwareDeveloper): Promise<WorkingStatus> {
  try {
    const [coffee, computer, wifi] = await Promise.all([
      getCoffee(),
      turnOnComputer(),
      getConnection(),
    ]);

    return await getBackToWork(programmer, coffee, computer, wifi);
  } catch (error) {
    console.error('Error getting working status:', error);
    return 'offline';
  }
}

// This code works on all machines, not just mine! 😎🚀
```

<img align="right" src="https://pa1.aminoapps.com/7514/9dc211dbf4b9bcc1a1348c975bd642ad45ddaeffr1-480-270_hq.gif" alt="Lofi vibe" />
