export class Post {

   constructor (public index: number, public name: string) {}

   toForm(): string {
      return `index=${this.index}&name=${this.name}`;
   }
}
