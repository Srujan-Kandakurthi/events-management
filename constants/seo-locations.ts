export const TELANGANA_DISTRICTS = [
  "adilabad",
  "bhadradri-kothagudem",
  "hanumakonda",
  "hyderabad",
  "jagtial",
  "jangaon",
  "jayashankar-bhupalpally",
  "jogulamba-gadwal",
  "kamareddy",
  "karimnagar",
  "khammam",
  "komaram-bheem-asifabad",
  "mahabubabad",
  "mahabubnagar",
  "mancherial",
  "medak",
  "medchal-malkajgiri",
  "mulugu",
  "nagarkurnool",
  "nalgonda",
  "narayanpet",
  "nirmal",
  "nizamabad",
  "peddapalli",
  "rajanna-sircilla",
  "rangareddy",
  "sangareddy",
  "siddipet",
  "suryapet",
  "vikarabad",
  "wanaparthy",
  "warangal",
  "yadadri-bhuvanagiri",
];

export function unslugifyLocation(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
