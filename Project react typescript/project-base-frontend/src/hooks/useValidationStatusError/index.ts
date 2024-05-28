import { useModalsStore } from "@/store";

export const useValidationStatusError = () => {
	const { handleOpenModalSessionFinish, handleOpenModalExpiredToken } =
		useModalsStore();


  const validationStatusError = (status: number) => {
    if (status === 403) {
      handleOpenModalSessionFinish(true);
    } else if (status === 419) {
      handleOpenModalExpiredToken(true);
    }
  }

  return {
    validationStatusError
  }
};