export const heavyTask = async (name: string) => {
  console.log(`--- Starting Heavy Task for ${name} ---`);
  // Increase CPU stress to 5 seconds
  const start = Date.now();
  while (Date.now() - start < 5000) { Math.sqrt(Math.random()); }
  // Increase Latency stress to 10 seconds
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(`--- Finished Heavy Task for ${name} ---`);
};
