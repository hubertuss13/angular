export class Comment {
    public imie: string;
    public komentarz: string;
    public hide: boolean;
  
    constructor(imie: string, komentarz: string) {
      this.imie =imie;
      this.komentarz = komentarz;
      this.hide = true;
    }
  
    toggle() {
      this.hide = !this.hide;
    }
  }