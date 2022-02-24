export class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
