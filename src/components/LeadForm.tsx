import { useLeadForm } from '../hooks/useLeadForm';
import { QUALIFYING_STEPS } from '../config/formSteps';
import ProgressBar from './lead/ProgressBar';
import SuccessMessage from './lead/SuccessMessage';
import StepQualifying from './lead/StepQualifying';
import StepContact from './lead/StepContact';
import NavigationButtons from './lead/NavigationButtons';

export default function LeadForm() {
  const {
    step,
    form,
    submitted,
    loading,
    error,
    canNext,
    setField,
    goNext,
    goBack,
    advanceAfterSelect,
    handleSubmit,
  } = useLeadForm();

  if (submitted) {
    return <SuccessMessage />;
  }

  const qualifyingStep = QUALIFYING_STEPS[step - 1];

  return (
    <div>
      <ProgressBar step={step} />

      {qualifyingStep ? (
        <StepQualifying
          step={qualifyingStep}
          form={form}
          onSelect={setField}
          onAdvance={advanceAfterSelect}
        />
      ) : (
        <StepContact
          form={form}
          error={error}
          onFieldChange={setField}
        />
      )}

      <NavigationButtons
        step={step}
        canNext={canNext}
        loading={loading}
        onBack={goBack}
        onNext={goNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
