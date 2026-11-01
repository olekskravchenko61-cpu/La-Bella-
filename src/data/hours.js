// Opening hours have not yet been confirmed by the restaurant owner.
// Once confirmed, set `confirmed: true` and fill in each day below as a
// string (e.g. "11:00 – 22:00") or `null` for closed. The UI will then
// automatically show the weekly schedule instead of the neutral placeholder.

export const openingHours = {
  confirmed: false,
  schedule: {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null,
  },
};
