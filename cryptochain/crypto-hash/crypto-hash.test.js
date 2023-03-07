const cryptoHash = require('./crypto-hash')

describe("cryptohash()",()=>{
  const elliotHash = 'b0e2cce4d295165a5bca1c123c2ab9f3c96df5a590b9002321a560d85a8c77ef'
  it("makes sure cryptohash isnt null",()=>{
    expect(cryptoHash).not.toEqual(undefined);
  })

  it("makes sure you get the right value",()=>{
    expect(cryptoHash('skillz')).toEqual(elliotHash)
  })

  it("produces the same hash in any order",()=>{
    expect(cryptoHash(2,1)).toEqual(cryptoHash(1,2))
  })
})