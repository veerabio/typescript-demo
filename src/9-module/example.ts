

export interface Dog {
    bark: () => void
}

export default (d: Dog) => d.bark()