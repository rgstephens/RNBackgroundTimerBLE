import { createStore } from "redux";

// state is an array of timestamps/dates
export const timestamps = (state = [], action) => {
  switch (action.type) {
    case "TIMESTAMP":
      let ms = "";
      if (state && state[0]) {
        const diff = new Date() - state[0].time;
        ms = new Date(diff).toISOString().slice(14, 21);
      }
      return [{ time: new Date(), diff: ms }, ...state];
    case "DEVICE":
      //console.log("DEVICE action, action:", action);
      if (state && state[0]) {
        const diff = new Date() - state[0].time;
        ms = new Date(diff).toISOString().slice(14, 21);
      }
      return [
        {
          time: new Date(),
          diff: ms,
          name: action.device.name,
          localName: action.device.localName,
          id: action.device.id
        },
        ...state
      ];
    case "RESET":
      return [];
    default:
      console.log("Unknown action, action:", action);
      return state;
  }
};

let store = createStore(timestamps);

export default store;
