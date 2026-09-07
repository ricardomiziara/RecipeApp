const SUPABASE_URL = "https://nmebuezrxohfjvygbfre.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_TMsG8Ae2ppyAdNiakHepww_Zujyu0b-";

export default async () => {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/recipes?select=id&limit=1`,
    {
      method: "GET",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        Accept: "application/json"
      }
    }
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Supabase keep-alive failed: ${response.status} ${body}`
    );
  }

  console.log(`Supabase keep-alive OK: ${new Date().toISOString()}`);
};

export const config = {
  schedule: "0 */8 * * *"
};
