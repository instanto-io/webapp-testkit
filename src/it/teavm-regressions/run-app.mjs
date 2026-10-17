const {main} = await import(process.argv[2]);
await new Promise((resolve, reject) => main([], result => result instanceof Error ? reject(result) : resolve()));
console.log("Timer application passed");
