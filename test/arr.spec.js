import { findKthLargest, findKthLargest1 } from "../copy-src/array/findKthLargest.ts"
describe('test array fun', () => {
  it('sum', () => {
    expect(findKthLargest([3,2,1,5,6,4], 2)).toBe(5)
    expect(findKthLargest1([3,2,1,5,6,4], 2)).toBe(2)
   
  })
})