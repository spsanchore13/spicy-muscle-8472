export const setToast = (
  toast,
  title,
  status,
  duration = 3000,
  description
) => {
  toast({
    title,
    description,
    status,
    duration,
    isClosable: true,
    position: "top",
  });
};
