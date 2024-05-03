export const sucessResponse = (message: string, data: any) => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (message: string, data: any) => {
  return {
    success: false,
    message,
    data,
  };
};
