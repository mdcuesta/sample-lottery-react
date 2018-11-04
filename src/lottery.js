import web3 from './web3';
import abiJson from './lottery-abi.json';

const address = '0xd2984fb7d6d11b4e0891eccd9c8ec313db6fadca';

const lottery = new web3.eth.Contract(abiJson, address);

export default lottery;
