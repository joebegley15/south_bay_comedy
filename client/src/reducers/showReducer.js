import uuid from "uuid";
import { GET_SHOWS, ADD_SHOW, DELETE_SHOW } from "../actions/types";

const initialState = {
  shows: [
    {
      id: uuid(),
      title: "Pizza Factory",
      day: "Sunday",
      start: "8:00 PM",
      end: "10:00 PM",
      address: "3039 Meridian Ave #44, San Jose, CA 95124, United States",
      warnings: {
        clean: { val: false, message: "Clean show" },
        runslate: { val: false, message: "Runs late" },
        mixed: {
          val: false,
          message: "Mixed mic. Musicians and poets welcome."
        },
        presignup: { val: true, message: "Online signup available" },
        presignupmand: { val: false, message: "Must sign up in advance" },
        prebooked: { val: false, message: "Booked in advnce" }
      },
      schedule: "Weekly",
      hosts: ["PX Floro", "Calvin Haha"],
      notes: "Produced and hosted by PX Floro, featuring Calvin Haha."
    },
    {
      id: uuid(),
      title: "Poor House Bistro",
      day: "Monday",
      start: "6:00 PM",
      end: "9:00 PM",
      address: "91 S Autumn St, San Jose, CA 95110, USA",
      warnings: {
        clean: { val: true, message: "Clean show" },
        runslate: { val: false, message: "Runs late" },
        mixed: {
          val: false,
          message: "Mixed mic. Musicians and poets welcome."
        },
        presignup: { val: false, message: "Online signup available" },
        presignupmand: { val: false, message: "Must sign up in advance" },
        prebooked: { val: false, message: "Booked in advnce" }
      },
      schedule: "weekly",
      hosts: [
        "Dave Allender",
        "Cap Wilhelm-Safian",
        "Ian Davis",
        "Steph Frazier"
      ],
      notes: "6 pm signup during 30-minute opening music. Good food and drinks."
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
