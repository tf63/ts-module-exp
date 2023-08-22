import { helloChild } from 'module-child'

export const helloParent = (text: string) => {
    console.log(`[parent] hello ${text}`)
}

export const helloChildFromParent = (text: string) => {
    helloChild(text)
}
