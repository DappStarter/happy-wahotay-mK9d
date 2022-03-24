require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture student radar payment update gesture sister army gaze'; 
let testAccounts = [
"0xc921727feb8a678f8359dd3265c8d01f9e57628629e16e78a4d3f676b896af6d",
"0x9e68b82a73b8075b9e6943c3a5e6efc9f736438e52c78457213c8ea83fc0074d",
"0x44db2f3678a29da5060a248a3c515662b372071e20b24584be1954756a8cc8b1",
"0x866c872e59721382312c762c5b21fa752fd8ccb012f71febeb36e10a942ec0eb",
"0xda008ccfe06f41f9abed1d6d2a655444cc4d93cc4d45be06b15c0ecc93343eea",
"0xfcd9dc4986aa81f11c281d86ab14b4e31a7f12f7dcbb24cee639aa551ed749b5",
"0x85febecd9a95f20c03dbbbb710cd49c26df1c29fb0f7f09cc76bac4d15ea8ff6",
"0x11a50e301982478f0c9c12967a6f72370a578d6b34e248a076217697a380f10a",
"0x4529323f5a759bd89352dde53f64d4ab5d9b5aa5c13b0a527066d636edf0103c",
"0x9c6b6cc661dbb9a247359435cdc43a05e7f929f721981ac490101dfdd139438a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

