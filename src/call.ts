import { Greeter } from 'module-sample1'
import { Shouter } from 'module-sample2'
import { calculateSum } from 'module-func'
import { STATUS_NO_CONTENT } from 'module-const'
import { helloParent, helloChildFromParent } from 'module-parent'
import { helloChild } from 'module-child'
import defaulter, { printer } from 'module-default'

const greeter = new Greeter()
greeter.greet('inu')

const shouter = new Shouter()
shouter.shout('aaaa')

const nums = [1, 2, 3]
const sum = calculateSum(nums)
console.log(`sum: ${sum}`)

nums[1] = 100
const updatedSum = calculateSum(nums)
console.log(`updated sum: ${updatedSum}`)

console.log(`status: ${STATUS_NO_CONTENT}`)

helloChild('from child')
helloChildFromParent('from parent')
helloParent('from parent')

defaulter()
printer('printer!!!')
