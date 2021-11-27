export const stencils = [
  "assets/scarpa_vapour_v.svg",
  "assets/george.svg",
  "assets/telecaster.svg",
  "assets/bassenthwaite_lake.svg",
  // "assets/bassenthwaite_paddleboarding.svg",
  "assets/bassenthwaite_sailing.svg",
  "assets/chasewater_sailing.svg",
  "assets/chasewater_sunset.svg",
];

export const calculateYearsSince = date => {
  const ageDifMs = Date.now() - date;
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}