class Block {
  constructor(data, hash, lastHash){
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

class BlockChain {
  constructor(){
    const genesis = new Block('gen', 'gen-hash', 'gen-lastHash')
    this.chain = [genesis]
  }

  addBlock(data){
    const lastHash = this.chain[this.chain.length - 1].hash
    const hash = data + lastHash
    const newBlock = new Block(data, hash, lastHash)
    this.chain.push(newBlock)
  }
}

const fooBlock = new BlockChain()

fooBlock.addBlock('one')
fooBlock.addBlock('two')
fooBlock.addBlock('three')

console.log(fooBlock)