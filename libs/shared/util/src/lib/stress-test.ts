// tools/stress-util.ts
export const heavyTask = async (name: string) => {
  console.log(`--- Starting Heavy Task for ${name} ---`);

  // 1. Simulate CPU Load (Calculating Primes)
  const start = Date.now();
  while (Date.now() - start < 2000) {
    Math.sqrt(Math.random() * 1000000);
  }

  // 2. Simulate Network/Database Latency
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log(`--- Finished Heavy Task for ${name} ---`);
};
