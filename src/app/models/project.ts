export class Project{
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public year: number,
        public link: string,
        public langs: string,
        public image: string,
    ){}
}