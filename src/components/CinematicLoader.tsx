import { MultiStepLoader } from './ui/MultiStepLoader';

type CinematicLoaderProps = {
  loadingStates: string[];
  loading: boolean;
  onComplete: () => void;
};

export const CinematicLoader = ({ loadingStates, loading, onComplete }: CinematicLoaderProps) => {
  return (
    <div className="loader-screen">
      <MultiStepLoader loadingStates={loadingStates} loading={loading} onComplete={onComplete} />
    </div>
  );
};
