export class Comment {

   constructor (public name: string) {}

   toForm(): string {
      return `name=${this.name}`;
   }
}
