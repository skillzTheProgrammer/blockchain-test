const Block = require("./block");
const { GENESIS_DATA } = require("../config");
const cryptoHash = require("../crypto-hash/crypto-hash");

describe('Block',()=>{
  const timestamp = 'a-Date';
  const lastHash = "a-lasthasrsh";
  const hash = "a-harsj";
  const data = "some-data";
  const block = new Block({timestamp,lastHash,hash, data});

  it('has a timestamp, hash, lasthash and data property',()=>{
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  })

  describe('genesis()',()=>{
    const genesisBlock = Block.genesis();

    it("genesis block is an instance of the Block class", ()=>{
      expect(genesisBlock instanceof Block).toBe(true);
    })

    it("returns the genesis data", ()=>{
      expect(genesisBlock).toEqual(GENESIS_DATA);
    })
  })

  describe('mineBlock()',()=>{
    const lastBlock = Block.genesis()
    const data = 'mined data'

    const minedBlock = Block.mineBlock({lastBlock, data})

    it('minedblock returns a Block instance',()=>{
      expect(minedBlock instanceof Block).toBe(true)
    })

    it("sets the 'lastHash to be the 'hash' of the new block",()=>{
      expect(minedBlock.lastHash).toEqual(lastBlock.hash)
    })

    it("sets the 'lastHash to be the 'hash' of the new block",()=>{
      expect(minedBlock.timestamp).not.toEqual(undefined)
    })

    it("creates the proper sha256 hash based on the right input",()=>{
      expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data))
    })
  })

})