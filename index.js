const Wallet = require("ethereumjs-wallet");
const bip39 = require("bip39");
const hdkey = require("ethereumjs-wallet");

const mnemonic = bip39.generateMnemonic(); // Generating mnemonics
console.log("Mnemonics generated", mnemonic);
// const mnemonic = "legend exotic caught glory author auto water trend squirrel amount square tray"

// const privateKey = randomBytes(32);
// console.log("Private key generated using random bytes", privateKey.toString("hex"));

(async () => {
    const seed = await bip39.mnemonicToSeed(mnemonic); // Generating seed
    console.log("Generating seed out of mnemonics", seed.toString('hex'));

    const wallet = hdkey.hdkey.fromMasterSeed(seed);
    console.log(wallet.privateExtendedKey().toString('hex'));
    const hdwallet = wallet.derivePath("m/44'/0'/0'");
    console.log("Extended public key", hdwallet.publicExtendedKey());
    console.log("Extended private key", hdwallet.privateExtendedKey());

    const extendedPrivateKey = hdwallet.privateExtendedKey();
    const child = hdwallet.deriveChild(0);
    console.log(child.getWallet().getAddress().toString('hex'));

    const getPrivateKey = hdwallet.getWallet().getPrivateKey();
    const address = hdwallet.getWallet().getAddress();

    console.log("Pri Key",getPrivateKey.toString('hex'));
    // console.log("Address",address.toString('hex'));
    // console.log(mnemonic);
})()

 