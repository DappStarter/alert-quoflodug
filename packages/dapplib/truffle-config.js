require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strike rival rural snow hunt casual flush gather'; 
let testAccounts = [
"0xe347091434216c8871bc3fa08ca4edba765b65d6fd9f753c712f36bd2969d3c9",
"0xdf6e135f3a18d67f928188da66189d93f58f588f8b2e173ece6c0b309be019eb",
"0x62cd1f22f42ebabf2b37f6b13b2fc96c1f8241ef25e777e2e19dbbf061871622",
"0x2aabd3f1d7d1cb88d1860eb3d9f0bf4b56db567ef6f0475503fcd4b1d06c4f9d",
"0xe050173e5d7008b2df08e81477bcd2afc2c28ec2a57a32f590de8c3a6b0f8c1c",
"0x80070abbc8fe87499ca439803605db235a30b9875ad2ab3155a42e8a1d334e31",
"0x266db46627f07b1cb90f102995e39421b6ce14bb31e2fad82420f23983e15afc",
"0x325b37b3d9ad0e8ccf891f64e0ec7e665962dcb162e34234677f51e5295fa573",
"0x6a2477dd19a8af3a19a5a5ce20b41e942faf1475e7c3ecfcbdfca62aad5d035d",
"0xe18b421a01e45dd5879178e065126e30dced08ee747cf5e7ff133d4266db406b"
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
            version: '^0.5.11'
        }
    }
};
