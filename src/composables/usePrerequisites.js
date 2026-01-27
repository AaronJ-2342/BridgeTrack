export const usePrerequisites = () => {
  const checkEligibility = () => {
    // TODO: add when course data is available.
    return { eligible: [], blocked: [] }
  }

  return {
    checkEligibility,
  }
}
