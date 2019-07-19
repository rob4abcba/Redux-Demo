//ACTION (human description of what I want to do) INCREMENT
export const increment = (nri) => {
  return {
    type: "INCREMENT",
    payload: nri
  };
};
export const decrement = (nrd) => {
  return {
    type: "DECREMENT",
    payload: nrd
  };
};
