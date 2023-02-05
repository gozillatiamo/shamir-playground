const { split, join } = require("./shamir/Scheme");
const { randomBytes } = require("crypto");

function generateShare(secret: string): any {
  const utf8Encoder = new TextEncoder();
  const secretBytes = utf8Encoder.encode(secret);
  let parts: object = split(randomBytes, 3, 2, secretBytes);
  for (const prop in parts) {
    console.log(parts[prop]);
    parts[prop] = Buffer.from(parts[prop]).toString("hex");
  }
  console.log(parts);
  return parts;
}

function recoverSecret(shares: object): string {
  for (const prop in shares) {
    shares[prop] = Uint8Array.from(Buffer.from(shares[prop], "hex"));
  }
  console.log(shares);
  const utf8Decodeder = new TextDecoder();
  const retrieved = join(shares);
  return utf8Decodeder.decode(retrieved);
}

export { generateShare, recoverSecret };
