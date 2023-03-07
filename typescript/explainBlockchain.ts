class Block {
  data: string; // some data for the block
  hash: string; // unique value generated for each block
  lastHash: string; // some metadata that links the blocks on the chain

  constructor(data: string, hash: string, lastHash: string) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

class Blockchain {
  private chain: Block[]; //chain of blocks

  constructor() {
    const theFirstBlockOnTheChain: Block = new Block('first-block-data', 'first-block-hash', 'first-block-lasthash');
    this.chain = [theFirstBlockOnTheChain];
  }

  private hashingAlogrithm(data: string): string {
    const theLastBlockHash: string = this.chain[this.chain.length - 1].hash;
    const currentHash: string = data + theLastBlockHash + '$356gsvf^78*3';
    return currentHash;
  }

  public addBlock(data: string): void {
    const hash: string = this.hashingAlogrithm(data);
    const theLastBlockHash: string = this.chain[this.chain.length - 1].hash;

    const newBlock: Block = new Block(data, hash, theLastBlockHash);
    this.chain.push(newBlock);
  }
}

const elliotBlockchain: Blockchain = new Blockchain();
elliotBlockchain.addBlock('seun-ojo');
elliotBlockchain.addBlock('jessy-mild');
elliotBlockchain.addBlock('tomasson-england');

console.log({elliotBlockchain})
