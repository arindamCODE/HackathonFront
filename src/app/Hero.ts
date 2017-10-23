
export class Hero 
{
    id: number;
    name: string;
    emailID: string;
    score: number;

    constructor(id: number, name: string, emailid: string, score: number){
        this.id = id;
        this.name = name;
        this.emailID = emailid;
        this.score = score;
     }

}